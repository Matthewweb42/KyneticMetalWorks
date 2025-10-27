var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bendex;
(function (Bendex) {
    var Keys = MicroSea.Utils.Models.Keys;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var ConvertionHelper = MicroSea.Utils.ConvertionHelper;
    var HtmlElementInterop = MicroSea.Utils.HtmlElementInterop;
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var EditorOverlayInterop = (function (_super) {
        __extends(EditorOverlayInterop, _super);
        function EditorOverlayInterop(targetElement, interopCallback) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.Wrapped_OnKeyDown = _this.OnKeyDown.bind(_this);
            _this.TargetElement.addEventListener("keydown", _this.Wrapped_OnKeyDown, { passive: false });
            return _this;
        }
        EditorOverlayInterop.CreateInstance = function (targetElement, interopCallback) {
            return new EditorOverlayInterop(targetElement, interopCallback);
        };
        EditorOverlayInterop.prototype.Dispose = function () {
            if (this.TargetElement !== null) {
                this.TargetElement.removeEventListener("keydown", this.Wrapped_OnKeyDown);
            }
            _super.prototype.Dispose.call(this);
        };
        EditorOverlayInterop.prototype.OnKeyDown = function (event) {
            var keyData = ConvertionHelper.GetKeyData(event);
            if (keyData === Keys.Tab || keyData === (Keys.Tab | Keys.Shift)) {
                var currentInputElement = TypeCheckUtils.AsClass(document.activeElement, HTMLInputElement);
                if (currentInputElement === null || ElementHelper.IsTextInputElement(currentInputElement) === false) {
                    return !event.defaultPrevented;
                }
                event.preventDefault();
                event.stopPropagation();
                var nextInputElement = void 0;
                var reverse = event.shiftKey;
                if (reverse === true) {
                    nextInputElement = ElementHelper.FindPreviousElement(this.TargetElement, currentInputElement, "input");
                }
                else {
                    nextInputElement = ElementHelper.FindNextElement(this.TargetElement, currentInputElement, "input");
                }
                if (nextInputElement !== null) {
                    HtmlElementInterop.FocusElement(nextInputElement);
                }
                else {
                    HtmlElementInterop.BlurActiveElement();
                    this.TapToNextOverlay(reverse);
                }
            }
            return !event.defaultPrevented;
        };
        EditorOverlayInterop.prototype.TapToNextOverlay = function (reverse) {
            this.InvokeCallbackMethodAsync("TapToNextOverlay", reverse);
        };
        return EditorOverlayInterop;
    }(ComponentInteropBase));
    Bendex.EditorOverlayInterop = EditorOverlayInterop;
})(Bendex || (Bendex = {}));
//# sourceMappingURL=bendex-ui-razor-editor.js.map
