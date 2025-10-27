/**
 * CanvasManager - Manages canvas creation, rendering, and transforms
 * Based on patterns from microsea-drawing-canvas.js
 */
import { Point } from '../core/Point.js';

export class CanvasManager {
    constructor(container) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.dpr = window.devicePixelRatio || 1;

        // Transform state
        this.offset = new Point(0, 0); // Pan offset
        this.scale = 1.0;               // Zoom scale
        this.minScale = 0.1;
        this.maxScale = 10.0;

        // Grid settings
        this.gridEnabled = true;
        this.gridSpacing = 10;          // mm
        this.gridSubdivisions = 5;

        // Snap settings
        this.snapEnabled = true;
        this.snapTolerance = 5;         // pixels

        this.createCanvas();
        this.setupEventListeners();
    }

    /**
     * Create canvas with proper DPI scaling
     * Based on ViewCanvasInterop.CalculateCanvasBounds
     */
    createCanvas() {
        // Remove existing canvas if any
        if (this.canvas) {
            this.canvas.remove();
        }

        // Create new canvas
        this.canvas = document.createElement('canvas');
        this.canvas.style.display = 'block';
        this.container.appendChild(this.canvas);

        // Get 2D context
        this.ctx = this.canvas.getContext('2d');

        // Initial resize
        this.resize();
    }

    /**
     * Resize canvas to fit container with DPI scaling
     * Inspired by ViewCanvasInterop.CalculateCanvasBounds
     */
    resize() {
        const rect = this.container.getBoundingClientRect();

        // CSS size
        const cssWidth = rect.width;
        const cssHeight = rect.height;

        // Actual canvas size (with DPI scaling)
        this.canvas.width = Math.floor(cssWidth * this.dpr);
        this.canvas.height = Math.floor(cssHeight * this.dpr);

        // Set CSS size
        this.canvas.style.width = `${cssWidth}px`;
        this.canvas.style.height = `${cssHeight}px`;

        // Scale context to match DPI
        this.ctx.scale(this.dpr, this.dpr);

        // Center the view if this is first resize
        if (this.scale === 1.0 && this.offset.x === 0 && this.offset.y === 0) {
            this.offset = new Point(cssWidth / 2, cssHeight / 2);
        }
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => this.resize());

        // Prevent context menu
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    /**
     * Convert screen coordinates to world coordinates
     */
    screenToWorld(screenPoint) {
        return new Point(
            (screenPoint.x - this.offset.x) / this.scale,
            (screenPoint.y - this.offset.y) / this.scale
        );
    }

    /**
     * Convert world coordinates to screen coordinates
     */
    worldToScreen(worldPoint) {
        return new Point(
            worldPoint.x * this.scale + this.offset.x,
            worldPoint.y * this.scale + this.offset.y
        );
    }

    /**
     * Pan the view
     */
    pan(dx, dy) {
        this.offset.x += dx;
        this.offset.y += dy;
    }

    /**
     * Zoom at a specific point
     */
    zoom(delta, centerScreen) {
        const oldScale = this.scale;
        const zoomFactor = delta > 0 ? 1.1 : 0.9;

        this.scale *= zoomFactor;
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.scale));

        if (centerScreen) {
            // Adjust offset to zoom toward mouse position
            const scaleChange = this.scale / oldScale;
            this.offset.x = centerScreen.x - (centerScreen.x - this.offset.x) * scaleChange;
            this.offset.y = centerScreen.y - (centerScreen.y - this.offset.y) * scaleChange;
        }
    }

    /**
     * Fit view to bounds
     */
    fitToBounds(bounds, padding = 50) {
        const width = bounds.maxX - bounds.minX;
        const height = bounds.maxY - bounds.minY;

        if (width === 0 || height === 0) {
            return;
        }

        const canvasWidth = this.canvas.width / this.dpr;
        const canvasHeight = this.canvas.height / this.dpr;

        // Calculate scale to fit
        const scaleX = (canvasWidth - padding * 2) / width;
        const scaleY = (canvasHeight - padding * 2) / height;
        this.scale = Math.min(scaleX, scaleY);

        // Center the view
        const centerX = (bounds.minX + bounds.maxX) / 2;
        const centerY = (bounds.minY + bounds.maxY) / 2;

        this.offset.x = canvasWidth / 2 - centerX * this.scale;
        this.offset.y = canvasHeight / 2 - centerY * this.scale;
    }

    /**
     * Snap point to grid
     */
    snapToGrid(point) {
        if (!this.snapEnabled) {
            return point;
        }

        const snapped = new Point(
            Math.round(point.x / this.gridSpacing) * this.gridSpacing,
            Math.round(point.y / this.gridSpacing) * this.gridSpacing
        );

        return snapped;
    }

    /**
     * Clear the canvas
     */
    clear() {
        const width = this.canvas.width / this.dpr;
        const height = this.canvas.height / this.dpr;

        this.ctx.clearRect(0, 0, width, height);

        // Fill with background
        this.ctx.fillStyle = '#fafafa';
        this.ctx.fillRect(0, 0, width, height);
    }

    /**
     * Draw grid
     * Based on Canvas2DContextInterop.DrawGrid
     */
    drawGrid() {
        if (!this.gridEnabled) return;

        const ctx = this.ctx;
        const width = this.canvas.width / this.dpr;
        const height = this.canvas.height / this.dpr;

        // Calculate grid bounds in world space
        const topLeft = this.screenToWorld(new Point(0, 0));
        const bottomRight = this.screenToWorld(new Point(width, height));

        // Major grid lines (every gridSpacing units)
        const startX = Math.floor(topLeft.x / this.gridSpacing) * this.gridSpacing;
        const endX = Math.ceil(bottomRight.x / this.gridSpacing) * this.gridSpacing;
        const startY = Math.floor(topLeft.y / this.gridSpacing) * this.gridSpacing;
        const endY = Math.ceil(bottomRight.y / this.gridSpacing) * this.gridSpacing;

        ctx.save();

        // Minor grid lines
        if (this.scale > 0.5 && this.gridSubdivisions > 1) {
            const minorSpacing = this.gridSpacing / this.gridSubdivisions;
            ctx.strokeStyle = '#e8e8e8';
            ctx.lineWidth = 0.5;
            ctx.beginPath();

            // Vertical minor lines
            for (let x = startX; x <= endX; x += minorSpacing) {
                if (x % this.gridSpacing === 0) continue; // Skip major lines
                const screenX = this.worldToScreen(new Point(x, 0)).x;
                ctx.moveTo(screenX, 0);
                ctx.lineTo(screenX, height);
            }

            // Horizontal minor lines
            for (let y = startY; y <= endY; y += minorSpacing) {
                if (y % this.gridSpacing === 0) continue; // Skip major lines
                const screenY = this.worldToScreen(new Point(0, y)).y;
                ctx.moveTo(0, screenY);
                ctx.lineTo(width, screenY);
            }

            ctx.stroke();
        }

        // Major grid lines
        ctx.strokeStyle = '#d0d0d0';
        ctx.lineWidth = 1;
        ctx.beginPath();

        // Vertical major lines
        for (let x = startX; x <= endX; x += this.gridSpacing) {
            const screenX = this.worldToScreen(new Point(x, 0)).x;
            ctx.moveTo(screenX, 0);
            ctx.lineTo(screenX, height);
        }

        // Horizontal major lines
        for (let y = startY; y <= endY; y += this.gridSpacing) {
            const screenY = this.worldToScreen(new Point(0, y)).y;
            ctx.moveTo(0, screenY);
            ctx.lineTo(width, screenY);
        }

        ctx.stroke();

        // Origin axes
        if (startX <= 0 && endX >= 0 && startY <= 0 && endY >= 0) {
            const originScreen = this.worldToScreen(new Point(0, 0));

            // X-axis
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, originScreen.y);
            ctx.lineTo(width, originScreen.y);
            ctx.stroke();

            // Y-axis
            ctx.strokeStyle = '#00ff00';
            ctx.beginPath();
            ctx.moveTo(originScreen.x, 0);
            ctx.lineTo(originScreen.x, height);
            ctx.stroke();
        }

        ctx.restore();
    }

    /**
     * Get current transform for drawing
     */
    getTransform() {
        return {
            offset: this.offset,
            scale: this.scale,
            worldToScreen: this.worldToScreen.bind(this),
            screenToWorld: this.screenToWorld.bind(this)
        };
    }

    /**
     * Get zoom percentage
     */
    getZoomPercentage() {
        return Math.round(this.scale * 100);
    }

    /**
     * Clean up
     */
    dispose() {
        if (this.canvas) {
            this.canvas.remove();
            this.canvas = null;
            this.ctx = null;
        }
    }
}
