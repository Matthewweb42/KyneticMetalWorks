/**
 * SelectTool - Tool for selecting and manipulating segments, with hem buttons at endpoints
 */
import { Tool } from './Tool.js';
import { Hem } from '../core/Hem.js';

export class SelectTool extends Tool {
    constructor(editor) {
        super('select', editor);
        this.selectedSegment = null;
        this.hemButtons = [];
        this.hoveredButton = null;
    }

    onActivate() {
        this.updateHemButtons();
        this.editor.statusBar?.setText('Select tool: Click endpoints to add/remove hems');
    }

    onDeactivate() {
        this.selectedSegment = null;
        this.hemButtons = [];
        this.hoveredButton = null;
    }

    /**
     * Find all open endpoints and create hem buttons for them
     */
    updateHemButtons() {
        const segments = this.editor.profile.segments;
        if (segments.length === 0) {
            this.hemButtons = [];
            return;
        }

        const endpoints = [];
        const pointMap = new Map();

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
        for (const segment of segments) {
            const start = segment.getStart();
            const end = segment.getEnd();

            const startKey = `${start.x.toFixed(3)},${start.y.toFixed(3)}`;
            const endKey = `${end.x.toFixed(3)},${end.y.toFixed(3)}`;

            if (pointMap.get(startKey) === 1) {
                const angle = start.angleTo(end);
                endpoints.push({
                    point: start,
                    angle: angle,
                    segment: segment,
                    isStart: true,
                    hasHem: this.hasHemAtPoint(start)
                });
            }

            if (pointMap.get(endKey) === 1) {
                const angle = end.angleTo(start);
                endpoints.push({
                    point: end,
                    angle: angle,
                    segment: segment,
                    isStart: false,
                    hasHem: this.hasHemAtPoint(end)
                });
            }
        }

        this.hemButtons = endpoints;
    }

    /**
     * Check if a hem exists at a point
     */
    hasHemAtPoint(point) {
        return this.editor.profile.hems.some(hem =>
            hem.point.distanceTo(point) < 0.1
        );
    }

    onClick(point, event) {
        const worldPoint = this.editor.canvasManager.screenToWorld(point);

        // Check if clicking on a hem button
        const buttonRadius = 12; // pixels
        for (const button of this.hemButtons) {
            const screenPoint = this.editor.canvasManager.getTransform().worldToScreen(button.point);
            const dist = Math.sqrt(
                Math.pow(point.x - screenPoint.x, 2) +
                Math.pow(point.y - screenPoint.y, 2)
            );

            if (dist <= buttonRadius) {
                this.toggleHemAtEndpoint(button);
                this.updateHemButtons();
                this.editor.addToHistory();
                this.editor.render();
                return;
            }
        }

        // Otherwise try to select a segment
        this.editor.profile.clearSelection();
        this.selectedSegment = this.editor.profile.selectSegmentAt(worldPoint);
        this.editor.render();
    }

    onMouseMove(point, event) {
        // Check if hovering over a hem button
        const buttonRadius = 12;
        this.hoveredButton = null;

        for (const button of this.hemButtons) {
            const screenPoint = this.editor.canvasManager.getTransform().worldToScreen(button.point);
            const dist = Math.sqrt(
                Math.pow(point.x - screenPoint.x, 2) +
                Math.pow(point.y - screenPoint.y, 2)
            );

            if (dist <= buttonRadius) {
                this.hoveredButton = button;
                break;
            }
        }

        this.editor.render();
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
            this.editor.statusBar?.setText('Hem removed');
        } else {
            // No hem - add one
            const hemLength = parseFloat(document.getElementById('hem-length')?.value || 5);
            const hem = new Hem(endpoint.point, endpoint.angle, hemLength);
            profile.hems.push(hem);
            this.editor.statusBar?.setText('Hem added');
        }
    }

    draw(ctx, transform) {
        // Update hem buttons whenever we draw (in case profile changed)
        this.updateHemButtons();

        // Draw hem buttons at all open endpoints
        for (const button of this.hemButtons) {
            const screenPoint = transform.worldToScreen(button.point);
            const isHovered = this.hoveredButton === button;

            ctx.save();

            // Button circle
            const buttonRadius = 12;
            ctx.fillStyle = button.hasHem ? '#27486D' : '#ffffff';
            ctx.strokeStyle = isHovered ? '#0066cc' : '#27486D';
            ctx.lineWidth = isHovered ? 3 : 2;

            ctx.beginPath();
            ctx.arc(screenPoint.x, screenPoint.y, buttonRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Draw + or - symbol
            ctx.strokeStyle = button.hasHem ? '#ffffff' : '#27486D';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            if (button.hasHem) {
                // Draw minus (remove hem)
                ctx.beginPath();
                ctx.moveTo(screenPoint.x - 6, screenPoint.y);
                ctx.lineTo(screenPoint.x + 6, screenPoint.y);
                ctx.stroke();
            } else {
                // Draw plus (add hem)
                ctx.beginPath();
                ctx.moveTo(screenPoint.x - 6, screenPoint.y);
                ctx.lineTo(screenPoint.x + 6, screenPoint.y);
                ctx.moveTo(screenPoint.x, screenPoint.y - 6);
                ctx.lineTo(screenPoint.x, screenPoint.y + 6);
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    getCursor() {
        return this.hoveredButton ? 'pointer' : 'default';
    }
}
