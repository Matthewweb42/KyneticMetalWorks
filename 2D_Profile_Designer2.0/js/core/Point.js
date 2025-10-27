/**
 * Point - Represents a 2D point
 */
export class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculate distance to another point
     */
    distanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Calculate angle to another point (in radians)
     */
    angleTo(other) {
        return Math.atan2(other.y - this.y, other.x - this.x);
    }

    /**
     * Add another point
     */
    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }

    /**
     * Subtract another point
     */
    subtract(other) {
        return new Point(this.x - other.x, this.y - other.y);
    }

    /**
     * Scale by a factor
     */
    scale(factor) {
        return new Point(this.x * factor, this.y * factor);
    }

    /**
     * Clone this point
     */
    clone() {
        return new Point(this.x, this.y);
    }

    /**
     * Check if equal to another point (within tolerance)
     */
    equals(other, tolerance = 0.001) {
        return this.distanceTo(other) < tolerance;
    }

    /**
     * Convert to JSON
     */
    toJSON() {
        return { x: this.x, y: this.y };
    }

    /**
     * Create from JSON
     */
    static fromJSON(json) {
        return new Point(json.x, json.y);
    }

    /**
     * Create from array [x, y]
     */
    static fromArray(arr) {
        return new Point(arr[0], arr[1]);
    }

    /**
     * Convert to string
     */
    toString() {
        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
}
