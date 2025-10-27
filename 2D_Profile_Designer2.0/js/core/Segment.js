/**
 * Segment - Base class for all profile segments (lines, arcs, etc.)
 */
import { Point } from './Point.js';

export class Segment {
    constructor(type) {
        this.type = type;
        this.id = Segment.generateId();
        this.selected = false;
    }

    static generateId() {
        return `seg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Get start point
     */
    getStart() {
        throw new Error('getStart() must be implemented by subclass');
    }

    /**
     * Get end point
     */
    getEnd() {
        throw new Error('getEnd() must be implemented by subclass');
    }

    /**
     * Get bounding box
     */
    getBounds() {
        throw new Error('getBounds() must be implemented by subclass');
    }

    /**
     * Check if point is on segment
     */
    containsPoint(point, tolerance = 5) {
        throw new Error('containsPoint() must be implemented by subclass');
    }

    /**
     * Draw the segment
     */
    draw(ctx, transform) {
        throw new Error('draw() must be implemented by subclass');
    }

    /**
     * Convert to JSON
     */
    toJSON() {
        return {
            type: this.type,
            id: this.id
        };
    }
}

/**
 * LineSegment - Straight line between two points
 */
export class LineSegment extends Segment {
    constructor(start, end) {
        super('line');
        this.start = start instanceof Point ? start : Point.fromJSON(start);
        this.end = end instanceof Point ? end : Point.fromJSON(end);
    }

    getStart() {
        return this.start;
    }

    getEnd() {
        return this.end;
    }

    getBounds() {
        return {
            minX: Math.min(this.start.x, this.end.x),
            minY: Math.min(this.start.y, this.end.y),
            maxX: Math.max(this.start.x, this.end.x),
            maxY: Math.max(this.start.y, this.end.y)
        };
    }

    /**
     * Get length of line
     */
    getLength() {
        return this.start.distanceTo(this.end);
    }

    /**
     * Check if point is on line
     */
    containsPoint(point, tolerance = 5) {
        const d1 = point.distanceTo(this.start);
        const d2 = point.distanceTo(this.end);
        const lineLength = this.getLength();

        // Point is on line if sum of distances equals line length (within tolerance)
        return Math.abs((d1 + d2) - lineLength) < tolerance / 100;
    }

    /**
     * Get point at parameter t (0 = start, 1 = end)
     */
    getPointAt(t) {
        return new Point(
            this.start.x + (this.end.x - this.start.x) * t,
            this.start.y + (this.end.y - this.start.y) * t
        );
    }

    /**
     * Draw the line
     */
    draw(ctx, transform) {
        const start = transform.worldToScreen(this.start);
        const end = transform.worldToScreen(this.end);

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);

        if (this.selected) {
            ctx.strokeStyle = '#0066cc';
            ctx.lineWidth = 3;
        } else {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
        }

        ctx.stroke();

        // Draw endpoints
        if (this.selected) {
            this.drawPoint(ctx, start, 4, '#0066cc');
            this.drawPoint(ctx, end, 4, '#0066cc');
        }
    }

    drawPoint(ctx, point, radius, color) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    toJSON() {
        return {
            ...super.toJSON(),
            start: this.start.toJSON(),
            end: this.end.toJSON()
        };
    }

    static fromJSON(json) {
        return new LineSegment(
            Point.fromJSON(json.start),
            Point.fromJSON(json.end)
        );
    }
}

/**
 * ArcSegment - Circular arc
 */
export class ArcSegment extends Segment {
    constructor(center, radius, startAngle, endAngle, counterclockwise = false) {
        super('arc');
        this.center = center instanceof Point ? center : Point.fromJSON(center);
        this.radius = radius;
        this.startAngle = startAngle; // in radians
        this.endAngle = endAngle;     // in radians
        this.counterclockwise = counterclockwise;
    }

    getStart() {
        return new Point(
            this.center.x + this.radius * Math.cos(this.startAngle),
            this.center.y + this.radius * Math.sin(this.startAngle)
        );
    }

    getEnd() {
        return new Point(
            this.center.x + this.radius * Math.cos(this.endAngle),
            this.center.y + this.radius * Math.sin(this.endAngle)
        );
    }

    getBounds() {
        // Simplified bounding box - could be improved
        const start = this.getStart();
        const end = this.getEnd();

        return {
            minX: Math.min(start.x, end.x, this.center.x - this.radius),
            minY: Math.min(start.y, end.y, this.center.y - this.radius),
            maxX: Math.max(start.x, end.x, this.center.x + this.radius),
            maxY: Math.max(start.y, end.y, this.center.y + this.radius)
        };
    }

    /**
     * Get arc length
     */
    getLength() {
        let angle = this.endAngle - this.startAngle;
        if (this.counterclockwise) {
            angle = 2 * Math.PI - angle;
        }
        return Math.abs(angle * this.radius);
    }

    /**
     * Check if point is on arc
     */
    containsPoint(point, tolerance = 5) {
        const distance = point.distanceTo(this.center);
        const onCircle = Math.abs(distance - this.radius) < tolerance / 100;

        if (!onCircle) return false;

        // Check if point angle is within arc range
        const angle = Math.atan2(point.y - this.center.y, point.x - this.center.x);
        // TODO: Implement proper angle range check
        return true;
    }

    /**
     * Draw the arc
     */
    draw(ctx, transform) {
        const center = transform.worldToScreen(this.center);
        const radius = this.radius * transform.scale;

        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, this.startAngle, this.endAngle, this.counterclockwise);

        if (this.selected) {
            ctx.strokeStyle = '#0066cc';
            ctx.lineWidth = 3;
        } else {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
        }

        ctx.stroke();

        // Draw center point when selected
        if (this.selected) {
            this.drawPoint(ctx, center, 3, '#ff6600');

            // Draw endpoints
            const start = transform.worldToScreen(this.getStart());
            const end = transform.worldToScreen(this.getEnd());
            this.drawPoint(ctx, start, 4, '#0066cc');
            this.drawPoint(ctx, end, 4, '#0066cc');
        }
    }

    drawPoint(ctx, point, radius, color) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    toJSON() {
        return {
            ...super.toJSON(),
            center: this.center.toJSON(),
            radius: this.radius,
            startAngle: this.startAngle,
            endAngle: this.endAngle,
            counterclockwise: this.counterclockwise
        };
    }

    static fromJSON(json) {
        return new ArcSegment(
            Point.fromJSON(json.center),
            json.radius,
            json.startAngle,
            json.endAngle,
            json.counterclockwise
        );
    }
}
