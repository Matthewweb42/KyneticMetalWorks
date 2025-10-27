/**
 * Tool - Base class for all drawing tools
 */
export class Tool {
    constructor(name, editor) {
        this.name = name;
        this.editor = editor;
        this.active = false;
    }

    /**
     * Activate the tool
     */
    activate() {
        this.active = true;
        this.onActivate();
    }

    /**
     * Deactivate the tool
     */
    deactivate() {
        this.active = false;
        this.onDeactivate();
    }

    /**
     * Override in subclass
     */
    onActivate() {}
    onDeactivate() {}

    /**
     * Mouse/Touch event handlers
     */
    onMouseDown(point, event) {}
    onMouseMove(point, event) {}
    onMouseUp(point, event) {}
    onClick(point, event) {}

    /**
     * Keyboard event handlers
     */
    onKeyDown(event) {}
    onKeyUp(event) {}

    /**
     * Draw tool-specific overlays
     */
    draw(ctx, transform) {}

    /**
     * Get cursor style for this tool
     */
    getCursor() {
        return 'crosshair';
    }
}
