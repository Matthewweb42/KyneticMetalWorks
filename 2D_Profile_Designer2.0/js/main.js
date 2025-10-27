/**
 * Main entry point for the 2D Profile Designer
 */
import { Editor } from './Editor.js';

// Status Bar Controller
class StatusBar {
    constructor() {
        this.coordsEl = document.getElementById('status-coords');
        this.zoomEl = document.getElementById('status-zoom');
        this.toolEl = document.getElementById('status-tool');
        this.snapEl = document.getElementById('status-snap');
    }

    setCoords(x, y) {
        this.coordsEl.textContent = `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`;
    }

    setZoom(percent) {
        this.zoomEl.textContent = `Zoom: ${percent}%`;
    }

    setTool(tool) {
        this.toolEl.textContent = `Tool: ${tool.charAt(0).toUpperCase() + tool.slice(1)}`;
    }

    setSnap(enabled) {
        this.snapEl.textContent = `Snap: ${enabled ? 'ON' : 'OFF'}`;
    }

    setText(text) {
        // Could show in a separate status area
        console.log('Status:', text);
    }
}

// Main Application
class App {
    constructor() {
        this.editor = null;
        this.statusBar = null;
        this.init();
    }

    init() {
        // Get canvas container
        const canvasContainer = document.getElementById('canvas-wrapper');
        if (!canvasContainer) {
            console.error('Canvas container not found');
            return;
        }

        // Create editor
        this.editor = new Editor(canvasContainer);

        // Create status bar
        this.statusBar = new StatusBar();
        this.editor.statusBar = this.statusBar;

        // Setup UI event listeners
        this.setupUI();

        // Initial render
        this.editor.render();

        console.log('2D Profile Designer initialized');
    }

    setupUI() {
        // Header buttons
        document.getElementById('btn-new')?.addEventListener('click', () => {
            this.editor.newProfile();
        });

        document.getElementById('btn-save')?.addEventListener('click', () => {
            this.editor.saveProfile();
        });

        document.getElementById('btn-open')?.addEventListener('click', () => {
            this.openFile();
        });

        document.getElementById('btn-export-dxf')?.addEventListener('click', () => {
            this.exportDXF();
        });

        document.getElementById('btn-export-svg')?.addEventListener('click', () => {
            this.exportSVG();
        });

        // Tool palette
        document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tool = btn.dataset.tool;
                this.selectTool(tool);
            });
        });

        // View buttons
        document.getElementById('view-zoom-in')?.addEventListener('click', () => {
            this.editor.canvasManager.zoom(1, null);
            this.statusBar.setZoom(this.editor.canvasManager.getZoomPercentage());
            this.editor.render();
        });

        document.getElementById('view-zoom-out')?.addEventListener('click', () => {
            this.editor.canvasManager.zoom(-1, null);
            this.statusBar.setZoom(this.editor.canvasManager.getZoomPercentage());
            this.editor.render();
        });

        document.getElementById('view-fit')?.addEventListener('click', () => {
            this.editor.fitToView();
        });

        document.getElementById('view-grid')?.addEventListener('click', () => {
            this.editor.toggleGrid();
            this.updateToggleButton('view-grid', this.editor.canvasManager.gridEnabled);
        });

        document.getElementById('view-snap')?.addEventListener('click', () => {
            this.editor.toggleSnap();
            this.updateToggleButton('view-snap', this.editor.canvasManager.snapEnabled);
        });

        // Edit buttons
        document.getElementById('edit-undo')?.addEventListener('click', () => {
            this.editor.undo();
        });

        document.getElementById('edit-redo')?.addEventListener('click', () => {
            this.editor.redo();
        });

        document.getElementById('edit-delete')?.addEventListener('click', () => {
            this.editor.deleteSelected();
        });

        // Properties panel inputs
        document.getElementById('grid-spacing')?.addEventListener('change', (e) => {
            this.editor.canvasManager.gridSpacing = parseFloat(e.target.value);
            this.editor.render();
        });

        document.getElementById('grid-subdivisions')?.addEventListener('change', (e) => {
            this.editor.canvasManager.gridSubdivisions = parseInt(e.target.value);
            this.editor.render();
        });

        document.getElementById('material-thickness')?.addEventListener('change', (e) => {
            this.editor.profile.material.thickness = parseFloat(e.target.value);
        });

        document.getElementById('material-kfactor')?.addEventListener('change', (e) => {
            this.editor.profile.material.kFactor = parseFloat(e.target.value);
        });

        document.getElementById('bend-radius')?.addEventListener('change', (e) => {
            this.editor.profile.material.bendRadius = parseFloat(e.target.value);
        });
    }

    selectTool(toolName) {
        // Update UI
        document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tool === toolName);
        });

        // Set tool in editor
        this.editor.setTool(toolName);
    }

    updateToggleButton(buttonId, isActive) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.classList.toggle('active', isActive);
        }
    }

    openFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.editor.loadProfile(event.target.result);
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }

    exportDXF() {
        alert('DXF export will be implemented next!\n\nFor now, you can save as JSON.');
        // TODO: Implement DXF export
    }

    exportSVG() {
        alert('SVG export will be implemented next!\n\nFor now, you can save as JSON.');
        // TODO: Implement SVG export
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new App();
    });
} else {
    window.app = new App();
}
