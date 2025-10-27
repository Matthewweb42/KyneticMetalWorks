/**
 * LineTool - Tool for drawing straight lines
 */
import { Tool } from './Tool.js';
import { Point } from '../core/Point.js';
import { LineSegment } from '../core/Segment.js';

export class LineTool extends Tool {
    constructor(editor) {
        super('line', editor);
        this.startPoint = null;
        this.currentPoint = null;
        this.previewLine = null;
    }

    onActivate() {
        this.startPoint = null;
        this.currentPoint = null;
        this.previewLine = null;
    }

    onDeactivate() {
        this.startPoint = null;
        this.currentPoint = null;
        this.previewLine = null;
    }

    onClick(point, event) {
        const worldPoint = this.editor.canvasManager.screenToWorld(point);
        const snappedPoint = this.editor.canvasManager.snapToGrid(worldPoint);

        if (this.startPoint === null) {
            // First click - set start point
            this.startPoint = snappedPoint;
            this.currentPoint = snappedPoint;
            this.editor.statusBar.setText(`Line tool: Click to add next point (ESC to finish)`);
        } else {
            // Create line from last point to new point
            if (!this.startPoint.equals(snappedPoint)) {
                const line = new LineSegment(this.startPoint, snappedPoint);
                this.editor.profile.addSegment(line);
                this.editor.addToHistory();

                // CHAIN MODE: Start point becomes the end point for next line
                this.startPoint = snappedPoint;
                this.currentPoint = snappedPoint;
                this.editor.statusBar.setText(`Line tool: Click to add next point (ESC to finish)`);
            }
        }

        this.editor.render();
    }

    onMouseMove(point, event) {
        if (this.startPoint !== null) {
            const worldPoint = this.editor.canvasManager.screenToWorld(point);
            this.currentPoint = this.editor.canvasManager.snapToGrid(worldPoint);

            // Update status bar with distance
            const distance = this.startPoint.distanceTo(this.currentPoint);
            const angle = (this.startPoint.angleTo(this.currentPoint) * 180 / Math.PI).toFixed(1);
            this.editor.statusBar.setText(
                `Line tool: Length: ${distance.toFixed(2)} mm, Angle: ${angle}°`
            );

            this.editor.render();
        }
    }

    onKeyDown(event) {
        if (event.key === 'Escape') {
            // Cancel current line
            this.startPoint = null;
            this.currentPoint = null;
            this.previewLine = null;
            this.editor.statusBar.setText(`Line tool: Click to set start point`);
            this.editor.render();
        }
    }

    draw(ctx, transform) {
        if (this.startPoint && this.currentPoint) {
            // Draw preview line
            const start = transform.worldToScreen(this.startPoint);
            const end = transform.worldToScreen(this.currentPoint);

            ctx.save();

            // Draw dashed preview line
            ctx.strokeStyle = '#0066cc';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();

            // Draw start point
            ctx.fillStyle = '#0066cc';
            ctx.beginPath();
            ctx.arc(start.x, start.y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Draw current point
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(end.x, end.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#0066cc';
            ctx.fill();
            ctx.stroke();

            // Draw dimension label
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2;
            const distance = this.startPoint.distanceTo(this.currentPoint);

            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`${distance.toFixed(2)} mm`, midX, midY - 5);

            ctx.restore();
        }
    }

    getCursor() {
        return 'crosshair';
    }
}
