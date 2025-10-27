/**
 * Hem - Represents a 180° fold back at profile endpoints
 */
import { Point } from './Point.js';

export class Hem {
    /**
     * Create a hem at a profile endpoint
     * @param {Point} point - The endpoint where the hem starts
     * @param {number} angle - The angle of the profile edge at this point (radians)
     * @param {number} length - The hem length (default 5mm)
     */
    constructor(point, angle, length = 5) {
        this.point = point; // The endpoint of the profile
        this.angle = angle; // Angle of the edge at this point
        this.length = length; // Hem length (5mm fixed for now)
        this.id = `hem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Get the endpoint of the hem (where the fold ends)
     */
    getHemEndpoint() {
        // Hem goes in the opposite direction of the profile edge
        // 180° fold back means we reverse the angle
        const hemAngle = this.angle + Math.PI;
        const dx = Math.cos(hemAngle) * this.length;
        const dy = Math.sin(hemAngle) * this.length;
        return new Point(this.point.x + dx, this.point.y + dy);
    }

    /**
     * Draw the hem
     */
    draw(ctx, transform, isSelected = false) {
        const screenStart = transform.worldToScreen(this.point);
        const hemEnd = this.getHemEndpoint();
        const screenEnd = transform.worldToScreen(hemEnd);

        ctx.save();

        // Draw hem line (continuation of profile)
        ctx.strokeStyle = isSelected ? '#ff6600' : '#27486D';
        ctx.lineWidth = isSelected ? 3 : 2;
        ctx.beginPath();
        ctx.moveTo(screenStart.x, screenStart.y);
        ctx.lineTo(screenEnd.x, screenEnd.y);
        ctx.stroke();

        // Draw circle at hem endpoint to indicate fold
        ctx.fillStyle = isSelected ? '#ff6600' : '#27486D';
        ctx.beginPath();
        ctx.arc(screenEnd.x, screenEnd.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw white outline on circle for visibility
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
    }

    /**
     * Check if a point is near the hem (for selection)
     */
    containsPoint(point, tolerance = 5) {
        // Check if point is near the hem line
        const hemEnd = this.getHemEndpoint();
        const distToLine = this.distanceToSegment(point, this.point, hemEnd);
        return distToLine <= tolerance;
    }

    /**
     * Distance from a point to a line segment
     */
    distanceToSegment(point, segStart, segEnd) {
        const dx = segEnd.x - segStart.x;
        const dy = segEnd.y - segStart.y;
        const lengthSquared = dx * dx + dy * dy;

        if (lengthSquared === 0) {
            return point.distanceTo(segStart);
        }

        let t = ((point.x - segStart.x) * dx + (point.y - segStart.y) * dy) / lengthSquared;
        t = Math.max(0, Math.min(1, t));

        const projX = segStart.x + t * dx;
        const projY = segStart.y + t * dy;
        const projPoint = new Point(projX, projY);

        return point.distanceTo(projPoint);
    }

    /**
     * Get bounding box
     */
    getBounds() {
        const hemEnd = this.getHemEndpoint();
        return {
            minX: Math.min(this.point.x, hemEnd.x),
            maxX: Math.max(this.point.x, hemEnd.x),
            minY: Math.min(this.point.y, hemEnd.y),
            maxY: Math.max(this.point.y, hemEnd.y)
        };
    }

    /**
     * Serialize to JSON
     */
    toJSON() {
        return {
            type: 'hem',
            id: this.id,
            point: { x: this.point.x, y: this.point.y },
            angle: this.angle,
            length: this.length
        };
    }

    /**
     * Deserialize from JSON
     */
    static fromJSON(json) {
        const point = new Point(json.point.x, json.point.y);
        const hem = new Hem(point, json.angle, json.length);
        hem.id = json.id;
        return hem;
    }
}
