/**
 * Profile - Main data structure for a 2D sheet metal profile
 */
import { Point } from './Point.js';
import { LineSegment, ArcSegment } from './Segment.js';
import { Hem } from './Hem.js';

export class Profile {
    constructor() {
        this.segments = [];
        this.dimensions = [];
        this.bendLines = [];
        this.hems = [];  // Array of hems at open endpoints
        this.material = {
            thickness: 1.5,     // mm
            kFactor: 0.44,      // K-factor for bend allowance
            bendRadius: 3       // mm
        };
        this.metadata = {
            name: 'Untitled Profile',
            createdDate: new Date(),
            modifiedDate: new Date(),
            units: 'mm'
        };
    }

    /**
     * Add a segment to the profile
     */
    addSegment(segment) {
        this.segments.push(segment);
        this.metadata.modifiedDate = new Date();
        return segment;
    }

    /**
     * Remove a segment
     */
    removeSegment(segment) {
        const index = this.segments.indexOf(segment);
        if (index > -1) {
            this.segments.splice(index, 1);
            this.metadata.modifiedDate = new Date();
            return true;
        }
        return false;
    }

    /**
     * Get all selected segments
     */
    getSelectedSegments() {
        return this.segments.filter(seg => seg.selected);
    }

    /**
     * Clear all selections
     */
    clearSelection() {
        this.segments.forEach(seg => seg.selected = false);
    }

    /**
     * Select segment at point
     */
    selectSegmentAt(point, tolerance = 5) {
        for (let i = this.segments.length - 1; i >= 0; i--) {
            const segment = this.segments[i];
            if (segment.containsPoint(point, tolerance)) {
                segment.selected = true;
                return segment;
            }
        }
        return null;
    }

    /**
     * Get bounding box of all segments and hems
     */
    getBounds() {
        if (this.segments.length === 0 && this.hems.length === 0) {
            return { minX: 0, minY: 0, maxX: 0, maxY: 0 };
        }

        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        this.segments.forEach(segment => {
            const bounds = segment.getBounds();
            minX = Math.min(minX, bounds.minX);
            minY = Math.min(minY, bounds.minY);
            maxX = Math.max(maxX, bounds.maxX);
            maxY = Math.max(maxY, bounds.maxY);
        });

        this.hems.forEach(hem => {
            const bounds = hem.getBounds();
            minX = Math.min(minX, bounds.minX);
            minY = Math.min(minY, bounds.minY);
            maxX = Math.max(maxX, bounds.maxX);
            maxY = Math.max(maxY, bounds.maxY);
        });

        return { minX, minY, maxX, maxY };
    }

    /**
     * Get center point of profile
     */
    getCenter() {
        const bounds = this.getBounds();
        return new Point(
            (bounds.minX + bounds.maxX) / 2,
            (bounds.minY + bounds.maxY) / 2
        );
    }

    /**
     * Calculate total profile length
     */
    getTotalLength() {
        return this.segments.reduce((sum, segment) => {
            return sum + segment.getLength();
        }, 0);
    }

    /**
     * Calculate bend allowance
     * BA = (π/180) × Bend Angle × (Bend Radius + K-factor × Material Thickness)
     */
    calculateBendAllowance(bendAngle) {
        const { bendRadius, kFactor, thickness } = this.material;
        return (Math.PI / 180) * bendAngle * (bendRadius + kFactor * thickness);
    }

    /**
     * Calculate bend deduction
     * BD = 2 × (Bend Radius + Material Thickness) × tan(Bend Angle / 2) - Bend Allowance
     */
    calculateBendDeduction(bendAngle) {
        const { bendRadius, thickness } = this.material;
        const ba = this.calculateBendAllowance(bendAngle);
        return 2 * (bendRadius + thickness) * Math.tan((bendAngle * Math.PI / 180) / 2) - ba;
    }

    /**
     * Draw the entire profile
     */
    draw(ctx, transform) {
        this.segments.forEach(segment => {
            segment.draw(ctx, transform);
        });

        // Draw dimensions
        this.dimensions.forEach(dimension => {
            dimension.draw(ctx, transform);
        });

        // Draw bend lines
        this.bendLines.forEach(bendLine => {
            bendLine.draw(ctx, transform);
        });

        // Draw hems
        this.hems.forEach(hem => {
            hem.draw(ctx, transform);
        });
    }

    /**
     * Convert to JSON
     */
    toJSON() {
        return {
            segments: this.segments.map(seg => seg.toJSON()),
            dimensions: this.dimensions.map(dim => dim.toJSON()),
            bendLines: this.bendLines.map(bend => bend.toJSON()),
            hems: this.hems.map(hem => hem.toJSON()),
            material: { ...this.material },
            metadata: {
                ...this.metadata,
                createdDate: this.metadata.createdDate.toISOString(),
                modifiedDate: this.metadata.modifiedDate.toISOString()
            }
        };
    }

    /**
     * Load from JSON
     */
    static fromJSON(json) {
        const profile = new Profile();

        // Load segments
        profile.segments = json.segments.map(segData => {
            switch (segData.type) {
                case 'line':
                    return LineSegment.fromJSON(segData);
                case 'arc':
                    return ArcSegment.fromJSON(segData);
                default:
                    console.warn(`Unknown segment type: ${segData.type}`);
                    return null;
            }
        }).filter(seg => seg !== null);

        // Load hems
        if (json.hems) {
            profile.hems = json.hems.map(hemData => Hem.fromJSON(hemData));
        }

        // Load material
        if (json.material) {
            profile.material = { ...json.material };
        }

        // Load metadata
        if (json.metadata) {
            profile.metadata = {
                ...json.metadata,
                createdDate: new Date(json.metadata.createdDate),
                modifiedDate: new Date(json.metadata.modifiedDate)
            };
        }

        // TODO: Load dimensions and bend lines when implemented

        return profile;
    }

    /**
     * Clear the profile
     */
    clear() {
        this.segments = [];
        this.dimensions = [];
        this.bendLines = [];
        this.hems = [];
        this.metadata.modifiedDate = new Date();
    }

    /**
     * Clone the profile
     */
    clone() {
        return Profile.fromJSON(this.toJSON());
    }
}
