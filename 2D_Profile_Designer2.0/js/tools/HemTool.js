/**
 * HemTool - Tool for adding/toggling hems at profile endpoints
 */
import { Tool } from './Tool.js';
import { Hem } from '../core/Hem.js';

export class HemTool extends Tool {
    constructor(editor) {
        super('hem', editor);
        this.hoveredEndpoint = null;
    }

    onActivate() {
        this.hoveredEndpoint = null;
        this.editor.statusBar.setText('Hem tool: Click on an open endpoint to add/toggle hem');
    }

    onDeactivate() {
        this.hoveredEndpoint = null;
    }

    onClick(point, event) {
        const worldPoint = this.editor.canvasManager.screenToWorld(point);
        const snappedPoint = this.editor.canvasManager.snapToGrid(worldPoint);

        // Find open endpoints in the profile
        const endpoints = this.findOpenEndpoints();

        // Check if click is near any endpoint
        const tolerance = 10; // pixels in screen space
        for (const endpoint of endpoints) {
            const screenEndpoint = this.editor.canvasManager.getTransform().worldToScreen(endpoint.point);
            const dist = Math.sqrt(
                Math.pow(point.x - screenEndpoint.x, 2) +
                Math.pow(point.y - screenEndpoint.y, 2)
            );

            if (dist <= tolerance) {
                this.toggleHemAtEndpoint(endpoint);
                this.editor.addToHistory();
                this.editor.render();
                return;
            }
        }

        this.editor.statusBar.setText('Click on an open endpoint to add/toggle hem');
    }

    onMouseMove(point, event) {
        const worldPoint = this.editor.canvasManager.screenToWorld(point);

        // Find open endpoints
        const endpoints = this.findOpenEndpoints();

        // Check if mouse is near any endpoint
        const tolerance = 10; // pixels
        this.hoveredEndpoint = null;

        for (const endpoint of endpoints) {
            const screenEndpoint = this.editor.canvasManager.getTransform().worldToScreen(endpoint.point);
            const dist = Math.sqrt(
                Math.pow(point.x - screenEndpoint.x, 2) +
                Math.pow(point.y - screenEndpoint.y, 2)
            );

            if (dist <= tolerance) {
                this.hoveredEndpoint = endpoint;
                break;
            }
        }

        this.editor.render();
    }

    /**
     * Find all open endpoints in the profile
     */
    findOpenEndpoints() {
        const segments = this.editor.profile.segments;
        if (segments.length === 0) return [];

        const endpoints = [];
        const pointMap = new Map(); // Map point key to count

        // Count how many times each point appears
        for (const segment of segments) {
            const start = segment.getStart();
            const end = segment.getEnd();

            const startKey = `${start.x.toFixed(3)},${start.y.toFixed(3)}`;
            const endKey = `${end.x.toFixed(3)},${end.y.toFixed(3)}`;

            pointMap.set(startKey, (pointMap.get(startKey) || 0) + 1);
            pointMap.set(endKey, (pointMap.get(endKey) || 0) + 1);
        }

        // Find points that appear only once (open endpoints)
        // and calculate the angle at that endpoint
        for (const segment of segments) {
            const start = segment.getStart();
            const end = segment.getEnd();

            const startKey = `${start.x.toFixed(3)},${start.y.toFixed(3)}`;
            const endKey = `${end.x.toFixed(3)},${end.y.toFixed(3)}`;

            if (pointMap.get(startKey) === 1) {
                // Start is an open endpoint
                // Angle points FROM the endpoint ALONG the segment
                const angle = start.angleTo(end);
                endpoints.push({ point: start, angle: angle, segment: segment, isStart: true });
            }

            if (pointMap.get(endKey) === 1) {
                // End is an open endpoint
                // Angle points FROM the endpoint back along the segment
                const angle = end.angleTo(start);
                endpoints.push({ point: end, angle: angle, segment: segment, isStart: false });
            }
        }

        return endpoints;
    }

    /**
     * Toggle hem at an endpoint
     */
    toggleHemAtEndpoint(endpoint) {
        const profile = this.editor.profile;

        // Check if a hem already exists at this endpoint
        const existingHemIndex = profile.hems.findIndex(hem =>
            hem.point.distanceTo(endpoint.point) < 0.1
        );

        if (existingHemIndex >= 0) {
            // Hem exists - remove it
            profile.hems.splice(existingHemIndex, 1);
            this.editor.statusBar.setText('Hem removed');
        } else {
            // No hem - add one
            const hemLength = parseFloat(document.getElementById('hem-length')?.value || 5);
            const hem = new Hem(endpoint.point, endpoint.angle, hemLength);
            profile.hems.push(hem);
            this.editor.statusBar.setText('Hem added');
        }
    }

    draw(ctx, transform) {
        if (this.hoveredEndpoint) {
            // Highlight the hovered endpoint
            const screenPoint = transform.worldToScreen(this.hoveredEndpoint.point);

            ctx.save();

            // Draw pulsing circle around endpoint
            ctx.strokeStyle = '#0066cc';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.arc(screenPoint.x, screenPoint.y, 8, 0, Math.PI * 2);
            ctx.stroke();

            // Draw small filled circle at endpoint
            ctx.fillStyle = '#0066cc';
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.arc(screenPoint.x, screenPoint.y, 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    }

    getCursor() {
        return this.hoveredEndpoint ? 'pointer' : 'crosshair';
    }
}
