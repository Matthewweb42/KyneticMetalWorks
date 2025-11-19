/**
 * Editor - Main application class that ties everything together
 */
import { Profile } from './core/Profile.js';
import { CanvasManager } from './canvas/CanvasManager.js';
import { LineTool } from './tools/LineTool.js';
import { HemTool } from './tools/HemTool.js';
import { SelectTool } from './tools/SelectTool.js';
import { Point } from './core/Point.js';

export class Editor {
    constructor(canvasContainer) {
        // Core components
        this.profile = new Profile();
        this.canvasManager = new CanvasManager(canvasContainer);

        // Tools
        this.tools = {};
        this.currentTool = null;

        // History for undo/redo
        this.history = [];
        this.historyIndex = -1;
        this.maxHistorySize = 50;

        // UI state
        this.isPanning = false;
        this.lastMousePos = null;

        // Status bar (will be set by main.js)
        this.statusBar = null;

        // Initialize
        this.initializeTools();
        this.setupEventListeners();
        this.render();
    }

    /**
     * Initialize all tools
     */
    initializeTools() {
        this.tools.select = new SelectTool(this);
        this.tools.line = new LineTool(this);
        this.tools.hem = new HemTool(this);
        // More tools will be added here

        // Set default tool to select
        this.setTool('select');
    }

    /**
     * Set active tool
     */
    setTool(toolName) {
        if (this.currentTool) {
            this.currentTool.deactivate();
        }

        this.currentTool = this.tools[toolName];
        if (this.currentTool) {
            this.currentTool.activate();

            // Update cursor
            this.canvasManager.canvas.style.cursor = this.currentTool.getCursor();

            // Update status
            if (this.statusBar) {
                this.statusBar.setTool(toolName);
                this.statusBar.setText(`${toolName} tool active`);
            }
        }

        this.render();
    }

    /**
     * Setup canvas event listeners
     * Based on ViewCanvasItem event handling patterns
     */
    setupEventListeners() {
        const canvas = this.canvasManager.canvas;

        // Mouse events
        canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        canvas.addEventListener('click', this.onClick.bind(this));

        // Wheel event for zooming
        canvas.addEventListener('wheel', this.onWheel.bind(this), { passive: false });

        // Keyboard events
        canvas.addEventListener('keydown', this.onKeyDown.bind(this));
        canvas.addEventListener('keyup', this.onKeyUp.bind(this));

        // Make canvas focusable
        canvas.tabIndex = 0;
        canvas.focus();
    }

    /**
     * Get mouse position relative to canvas
     */
    getMousePos(event) {
        const rect = this.canvasManager.canvas.getBoundingClientRect();
        return new Point(
            event.clientX - rect.left,
            event.clientY - rect.top
        );
    }

    /**
     * Mouse down handler
     */
    onMouseDown(event) {
        event.preventDefault();
        const point = this.getMousePos(event);

        // Middle mouse or Ctrl+Left mouse for panning
        if (event.button === 1 || (event.button === 0 && event.ctrlKey)) {
            this.isPanning = true;
            this.lastMousePos = point;
            this.canvasManager.canvas.style.cursor = 'move';
            return;
        }

        // Pass to current tool
        if (this.currentTool) {
            this.currentTool.onMouseDown(point, event);
        }
    }

    /**
     * Mouse move handler
     */
    onMouseMove(event) {
        const point = this.getMousePos(event);

        // Update status bar coordinates
        const worldPoint = this.canvasManager.screenToWorld(point);
        if (this.statusBar) {
            this.statusBar.setCoords(worldPoint.x, worldPoint.y);
        }

        // Handle panning
        if (this.isPanning && this.lastMousePos) {
            const dx = point.x - this.lastMousePos.x;
            const dy = point.y - this.lastMousePos.y;
            this.canvasManager.pan(dx, dy);
            this.lastMousePos = point;
            this.render();
            return;
        }

        // Pass to current tool
        if (this.currentTool) {
            this.currentTool.onMouseMove(point, event);
        }
    }

    /**
     * Mouse up handler
     */
    onMouseUp(event) {
        const point = this.getMousePos(event);

        // Stop panning
        if (this.isPanning) {
            this.isPanning = false;
            this.lastMousePos = null;
            if (this.currentTool) {
                this.canvasManager.canvas.style.cursor = this.currentTool.getCursor();
            }
            return;
        }

        // Pass to current tool
        if (this.currentTool) {
            this.currentTool.onMouseUp(point, event);
        }
    }

    /**
     * Click handler
     */
    onClick(event) {
        if (event.button !== 0) return; // Only left click

        const point = this.getMousePos(event);

        // Pass to current tool
        if (this.currentTool) {
            this.currentTool.onClick(point, event);
        }
    }

    /**
     * Wheel handler for zooming
     */
    onWheel(event) {
        event.preventDefault();

        const point = this.getMousePos(event);
        this.canvasManager.zoom(event.deltaY < 0 ? 1 : -1, point);

        // Update status bar
        if (this.statusBar) {
            this.statusBar.setZoom(this.canvasManager.getZoomPercentage());
        }

        this.render();
    }

    /**
     * Key down handler
     */
    onKeyDown(event) {
        // Global shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch (event.key.toLowerCase()) {
                case 'z':
                    event.preventDefault();
                    this.undo();
                    break;
                case 'y':
                    event.preventDefault();
                    this.redo();
                    break;
                case 's':
                    event.preventDefault();
                    this.saveProfile();
                    break;
            }
            return;
        }

        // Tool-specific shortcuts
        switch (event.key.toLowerCase()) {
            case 'v':
                this.setTool('select');
                break;
            case 'l':
                this.setTool('line');
                break;
            case 'h':
                this.setTool('hem');
                break;
            case 'g':
                if (event.shiftKey) {
                    this.toggleSnap();
                } else {
                    this.toggleGrid();
                }
                break;
            case 'f':
                this.fitToView();
                break;
            case '+':
            case '=':
                this.canvasManager.zoom(1, null);
                this.render();
                break;
            case '-':
            case '_':
                this.canvasManager.zoom(-1, null);
                this.render();
                break;
            case 'delete':
                this.deleteSelected();
                break;
        }

        // Pass to current tool
        if (this.currentTool) {
            this.currentTool.onKeyDown(event);
        }
    }

    /**
     * Key up handler
     */
    onKeyUp(event) {
        if (this.currentTool) {
            this.currentTool.onKeyUp(event);
        }
    }

    /**
     * Render everything
     */
    render() {
        // Clear canvas
        this.canvasManager.clear();

        // Draw grid
        this.canvasManager.drawGrid();

        // Draw profile
        const transform = this.canvasManager.getTransform();
        this.profile.draw(this.canvasManager.ctx, transform);

        // Draw tool overlay
        if (this.currentTool) {
            this.currentTool.draw(this.canvasManager.ctx, transform);
        }
    }

    /**
     * Toggle grid visibility
     */
    toggleGrid() {
        this.canvasManager.gridEnabled = !this.canvasManager.gridEnabled;
        if (this.statusBar) {
            this.statusBar.setText(`Grid: ${this.canvasManager.gridEnabled ? 'ON' : 'OFF'}`);
        }
        this.render();
    }

    /**
     * Toggle snap to grid
     */
    toggleSnap() {
        this.canvasManager.snapEnabled = !this.canvasManager.snapEnabled;
        if (this.statusBar) {
            this.statusBar.setSnap(this.canvasManager.snapEnabled);
            this.statusBar.setText(`Snap: ${this.canvasManager.snapEnabled ? 'ON' : 'OFF'}`);
        }
        this.render();
    }

    /**
     * Fit view to profile
     */
    fitToView() {
        const bounds = this.profile.getBounds();
        if (bounds.maxX > bounds.minX && bounds.maxY > bounds.minY) {
            this.canvasManager.fitToBounds(bounds);
        }
        this.render();
    }

    /**
     * Delete selected segments
     */
    deleteSelected() {
        const selected = this.profile.getSelectedSegments();
        if (selected.length > 0) {
            selected.forEach(seg => this.profile.removeSegment(seg));
            this.addToHistory();
            this.render();
        }
    }

    /**
     * Add current state to history
     */
    addToHistory() {
        // Remove any redo history
        this.history = this.history.slice(0, this.historyIndex + 1);

        // Add current state
        const state = this.profile.toJSON();
        this.history.push(JSON.stringify(state));

        // Limit history size
        if (this.history.length > this.maxHistorySize) {
            this.history.shift();
        } else {
            this.historyIndex++;
        }
    }

    /**
     * Undo last action
     */
    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const state = JSON.parse(this.history[this.historyIndex]);
            this.profile = Profile.fromJSON(state);
            this.render();
            if (this.statusBar) {
                this.statusBar.setText('Undo');
            }
        }
    }

    /**
     * Redo last undone action
     */
    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            const state = JSON.parse(this.history[this.historyIndex]);
            this.profile = Profile.fromJSON(state);
            this.render();
            if (this.statusBar) {
                this.statusBar.setText('Redo');
            }
        }
    }

    /**
     * New profile
     */
    newProfile() {
        if (confirm('Create new profile? Any unsaved changes will be lost.')) {
            this.profile = new Profile();
            this.history = [];
            this.historyIndex = -1;
            this.render();
        }
    }

    /**
     * Save profile to JSON file
     */
    saveProfile() {
        const json = JSON.stringify(this.profile.toJSON(), null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.profile.metadata.name}.json`;
        a.click();

        URL.revokeObjectURL(url);

        if (this.statusBar) {
            this.statusBar.setText('Profile saved');
        }
    }

    /**
     * Load profile from JSON file
     */
    loadProfile(json) {
        try {
            const data = typeof json === 'string' ? JSON.parse(json) : json;
            this.profile = Profile.fromJSON(data);
            this.history = [];
            this.historyIndex = -1;
            this.addToHistory();
            this.fitToView();
            this.render();

            if (this.statusBar) {
                this.statusBar.setText('Profile loaded');
            }
        } catch (error) {
            console.error('Error loading profile:', error);
            alert('Error loading profile: ' + error.message);
        }
    }

    /**
     * Clean up
     */
    dispose() {
        this.canvasManager.dispose();
    }
}
