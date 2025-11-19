// https://shop.datus.tech/_content/Bendex.UI.Razor/scripts/bendex-ui-razor.h3q735enm2.js

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Bendex;
(function (Bendex) {
    var Point = MicroSea.Utils.Models.Point;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TouchToMouseHelper = MicroSea.Utils.TouchToMouseHelper;
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var PopoverInterop = (function (_super) {
        __extends(PopoverInterop, _super);
        function PopoverInterop(targetElement, interopCallback) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.OnPointerOverWrapper = _this.OnPointerOver.bind(_this);
            _this.OnPointerOutWrapper = _this.OnPointerOut.bind(_this);
            _this.OnMouseDownWrapper = _this.OnMouseDown.bind(_this);
            _this.OnMouseMoveWrapper = _this.OnMouseMove.bind(_this);
            _this.OnMouseUpWrapper = _this.OnMouseUp.bind(_this);
            _this.OnResizeWrapped = _this.OnResize.bind(_this);
            _this.buttonElement = null;
            _this.touchHelper = new TouchToMouseHelper(_this.TargetElement);
            _this.clientBounds = null;
            _this.direction = PopoverInterop.PopoverDirection.Bottom;
            _this.trigger = PopoverInterop.PopoverTrigger.Click;
            _this.isPinned = false;
            _this.dragClientBounds = null;
            _this.dragPoint = null;
            _this.touchHelper.MouseDown.Add(_this.OnMouseDownWrapper);
            _this.touchHelper.MouseMove.Add(_this.OnMouseMoveWrapper);
            _this.touchHelper.MouseUp.Add(_this.OnMouseUpWrapper);
            window.addEventListener("resize", _this.OnResizeWrapped, { capture: true, passive: true });
            _this.RegisterTrigger(_this.trigger);
            return _this;
        }
        PopoverInterop.CreateInstance = function (targetElement, interopCallback) {
            return new PopoverInterop(targetElement, interopCallback);
        };
        Object.defineProperty(PopoverInterop.prototype, "popoverElementVisible", {
            get: function () {
                var popoverElement = this.TargetElement;
                return popoverElement !== null && ElementHelper.IsElementVisible(popoverElement);
            },
            enumerable: false,
            configurable: true
        });
        PopoverInterop.prototype.Dispose = function () {
            window.removeEventListener("resize", this.OnResizeWrapped, { capture: true });
            this.UnregisterTrigger(this.trigger);
            if (this.touchHelper !== null) {
                this.touchHelper.MouseDown.Remove(this.OnMouseDownWrapper);
                this.touchHelper.MouseMove.Remove(this.OnMouseMoveWrapper);
                this.touchHelper.MouseUp.Remove(this.OnMouseUpWrapper);
                this.touchHelper = null;
            }
            this.buttonElement = null;
            _super.prototype.Dispose.call(this);
        };
        PopoverInterop.prototype.ShowUnpinned = function (buttonId) {
            if (typeof buttonId !== "string") {
                throw new Error("Invalid argument type.");
            }
            var buttonElement = document.getElementById(buttonId);
            if ((buttonElement instanceof HTMLElement) === false) {
                throw new Error("Invalid buttonId.");
            }
            this.buttonElement = buttonElement;
            this.UpdateClientPositionUnpinned();
        };
        PopoverInterop.prototype.UpdateDirection = function (direction) {
            if ((direction in PopoverInterop.PopoverDirection) === false) {
                throw new Error("Invalid argument type.");
            }
            this.direction = direction;
        };
        PopoverInterop.prototype.UpdateTrigger = function (trigger) {
            if ((trigger in PopoverInterop.PopoverTrigger) === false) {
                throw new Error("Invalid argument type.");
            }
            if (trigger === this.trigger) {
                return;
            }
            var oldTrigger = this.trigger;
            this.trigger = trigger;
            this.UnregisterTrigger(oldTrigger);
            this.RegisterTrigger(this.trigger);
        };
        PopoverInterop.prototype.UpdateIsPinned = function (isPinned) {
            if (typeof isPinned !== "boolean") {
                throw new Error("Invalid argument type.");
            }
            this.isPinned = isPinned;
        };
        PopoverInterop.prototype.OnPointerOver = function (event) {
            this.UpdateIsHovered(true);
        };
        PopoverInterop.prototype.OnPointerOut = function (event) {
            this.UpdateIsHovered(false);
        };
        PopoverInterop.prototype.OnMouseDown = function (event) {
            if (this.popoverElementVisible === false || this.isPinned === false) {
                return;
            }
            var popoverHeaderElement = this.GetPopoverHeaderElement();
            if (popoverHeaderElement === null || ElementHelper.IsInside(popoverHeaderElement, event.clientX, event.clientY) === false) {
                return;
            }
            var popoverClosePopoverButton = this.GetClosePopoverButton();
            if (popoverClosePopoverButton !== null && ElementHelper.IsInside(popoverClosePopoverButton, event.clientX, event.clientY)) {
                return;
            }
            try {
                this.dragClientBounds = ElementHelper.GetElementBounds(this.TargetElement);
                this.dragPoint = new Point(event.clientX, event.clientY);
            }
            finally {
                event.preventDefault();
            }
        };
        PopoverInterop.prototype.OnMouseMove = function (event) {
            var dragPoint = this.dragPoint;
            if (dragPoint === null) {
                return;
            }
            var dragBounds = this.GetDragBounds(dragPoint, event.clientX, event.clientY);
            this.SetDragPosition(dragBounds);
        };
        PopoverInterop.prototype.OnMouseUp = function (event) {
            var dragPoint = this.dragPoint;
            if (dragPoint === null) {
                return;
            }
            try {
                var clientBounds = ElementHelper.GetElementBounds(this.TargetElement);
                this.UpdateClientPosition(clientBounds);
            }
            finally {
                this.dragClientBounds = null;
                this.dragPoint = null;
            }
        };
        PopoverInterop.prototype.OnResize = function (event) {
            if (this.popoverElementVisible === false || this.dragPoint) {
                return;
            }
            if (this.isPinned === true) {
                var clientBounds = this.clientBounds;
                var popoverElementStyle = this.TargetElement.style;
                var isAlignedRight = popoverElementStyle.right ? true : false;
                var isAlignedBottom = popoverElementStyle.bottom ? true : false;
                var alignRight = this.IsAlignRightNeeded(clientBounds);
                if (alignRight !== isAlignedRight) {
                    this.UpdateAlignRight(alignRight);
                }
                var alignBottom = this.IsAlignBottomNeeded(clientBounds);
                if (alignBottom !== isAlignedBottom) {
                    this.UpdateAlignBottom(alignBottom);
                }
            }
            else {
                this.UpdateClientPositionUnpinned();
            }
        };
        PopoverInterop.prototype.GetPopoverHeaderElement = function () {
            var popoverElement = this.TargetElement;
            if ((popoverElement instanceof HTMLElement) === false) {
                return null;
            }
            return popoverElement.querySelector(".bdx-popover-header");
        };
        PopoverInterop.prototype.GetClosePopoverButton = function () {
            var popoverElement = this.TargetElement;
            if ((popoverElement instanceof HTMLElement) === false) {
                return null;
            }
            return popoverElement.querySelector(".bdx-popover-close-button");
        };
        PopoverInterop.prototype.RegisterTrigger = function (trigger) {
            switch (trigger) {
                case PopoverInterop.PopoverTrigger.Click: {
                    if (this.touchHelper === null) {
                        return;
                    }
                    this.touchHelper.RegisterEventWrapper("mousedown", { global: false });
                    this.touchHelper.RegisterEventWrapper("mousemove", { global: true });
                    this.touchHelper.RegisterEventWrapper("mouseup", { global: true });
                    break;
                }
                case PopoverInterop.PopoverTrigger.Hover: {
                    var popoverElement = this.TargetElement;
                    if (popoverElement === null) {
                        return;
                    }
                    popoverElement.addEventListener("pointerover", this.OnPointerOverWrapper, { capture: true, passive: true });
                    popoverElement.addEventListener("pointerout", this.OnPointerOutWrapper, { capture: true, passive: true });
                    break;
                }
                default:
                    throw new Error("Invalid argument type.");
            }
        };
        PopoverInterop.prototype.UnregisterTrigger = function (trigger) {
            switch (trigger) {
                case PopoverInterop.PopoverTrigger.Click: {
                    if (this.touchHelper === null) {
                        return;
                    }
                    this.touchHelper.UnregisterEventWrapper("mousedown", { global: false });
                    this.touchHelper.UnregisterEventWrapper("mousemove", { global: true });
                    this.touchHelper.UnregisterEventWrapper("mouseup", { global: true });
                    break;
                }
                case PopoverInterop.PopoverTrigger.Hover: {
                    var popoverElement = this.TargetElement;
                    if (popoverElement === null) {
                        return;
                    }
                    popoverElement.removeEventListener("pointerover", this.OnPointerOverWrapper, { capture: true });
                    popoverElement.removeEventListener("pointerout", this.OnPointerOutWrapper, { capture: true });
                    break;
                }
                default:
                    throw new Error("Invalid argument type.");
            }
        };
        PopoverInterop.prototype.GetDragBounds = function (dragPoint, clientX, clientY) {
            var dragClientBounds = this.dragClientBounds;
            return new DOMRect(Math.round(dragClientBounds.x + (clientX - dragPoint.x)), Math.round(dragClientBounds.y + (clientY - dragPoint.y)), dragClientBounds.width, dragClientBounds.height);
        };
        PopoverInterop.prototype.IsAlignRightNeeded = function (clientBounds) {
            return clientBounds.x + clientBounds.width >= window.innerWidth;
        };
        PopoverInterop.prototype.IsAlignBottomNeeded = function (clientBounds) {
            return clientBounds.y + clientBounds.height >= window.innerHeight;
        };
        PopoverInterop.prototype.SetDragPosition = function (dragBounds) {
            var popoverElementStyle = this.TargetElement.style;
            var alignRight = this.IsAlignRightNeeded(dragBounds);
            if (alignRight) {
                popoverElementStyle.removeProperty("left");
                popoverElementStyle.setProperty("right", "0");
            }
            else {
                popoverElementStyle.removeProperty("right");
                popoverElementStyle.setProperty("left", Math.max(dragBounds.x, 0).toString(10) + "px");
            }
            var alignBottom = this.IsAlignBottomNeeded(dragBounds);
            if (alignBottom) {
                popoverElementStyle.removeProperty("top");
                popoverElementStyle.setProperty("bottom", "0");
            }
            else {
                popoverElementStyle.removeProperty("bottom");
                popoverElementStyle.setProperty("top", Math.max(dragBounds.y, 0).toString(10) + "px");
            }
        };
        PopoverInterop.prototype.UpdateClientPositionUnpinned = function () {
            if (ElementHelper.IsElementVisible(this.buttonElement) === false) {
                return;
            }
            var buttonBounds = ElementHelper.GetElementBounds(this.buttonElement);
            var popoverBounds = ElementHelper.GetElementBounds(this.TargetElement);
            var clientBounds = null;
            switch (this.direction) {
                case PopoverInterop.PopoverDirection.Left: {
                    clientBounds = new DOMRect(Math.round(buttonBounds.x - popoverBounds.width), Math.round(buttonBounds.y + (buttonBounds.height - popoverBounds.height) / 2), popoverBounds.width, popoverBounds.height);
                    break;
                }
                case PopoverInterop.PopoverDirection.Top: {
                    clientBounds = new DOMRect(Math.round(buttonBounds.x + (buttonBounds.width - popoverBounds.width) / 2), Math.round(buttonBounds.y - popoverBounds.height), popoverBounds.width, popoverBounds.height);
                    break;
                }
                case PopoverInterop.PopoverDirection.Right: {
                    clientBounds = new DOMRect(buttonBounds.right, Math.round(buttonBounds.y + (buttonBounds.height - popoverBounds.height) / 2), popoverBounds.width, popoverBounds.height);
                    break;
                }
                default: {
                    clientBounds = new DOMRect(Math.round((buttonBounds.x + buttonBounds.width / 2) - popoverBounds.width / 2), Math.round(buttonBounds.y + buttonBounds.height), popoverBounds.width, popoverBounds.height);
                    break;
                }
            }
            this.UpdateClientPosition(clientBounds);
        };
        PopoverInterop.prototype.UpdateClientPosition = function (clientBounds) {
            this.clientBounds = new DOMRect(Math.max(clientBounds.x, 0), Math.max(clientBounds.y, 0), clientBounds.width, clientBounds.height);
            var alignRight = this.IsAlignRightNeeded(clientBounds);
            var alignBottom = this.IsAlignBottomNeeded(clientBounds);
            var clientPosition = new Point(Math.max(clientBounds.x, 0), Math.max(clientBounds.y, 0));
            this.InvokeCallbackMethodAsync("UpdateClientPosition", clientPosition, alignRight, alignBottom);
        };
        PopoverInterop.prototype.UpdateAlignBottom = function (alignBottom) {
            this.InvokeCallbackMethodAsync("UpdateAlignBottom", alignBottom);
        };
        PopoverInterop.prototype.UpdateAlignRight = function (alignRight) {
            this.InvokeCallbackMethodAsync("UpdateAlignRight", alignRight);
        };
        PopoverInterop.prototype.UpdateIsHovered = function (isHovered) {
            this.InvokeCallbackMethodAsync("UpdateIsHovered", isHovered);
        };
        return PopoverInterop;
    }(ComponentInteropBase));
    Bendex.PopoverInterop = PopoverInterop;
    (function (PopoverInterop) {
        var PopoverDirection;
        (function (PopoverDirection) {
            PopoverDirection[PopoverDirection["Bottom"] = 0] = "Bottom";
            PopoverDirection[PopoverDirection["Left"] = 1] = "Left";
            PopoverDirection[PopoverDirection["Top"] = 2] = "Top";
            PopoverDirection[PopoverDirection["Right"] = 3] = "Right";
        })(PopoverDirection = PopoverInterop.PopoverDirection || (PopoverInterop.PopoverDirection = {}));
        var PopoverTrigger;
        (function (PopoverTrigger) {
            PopoverTrigger[PopoverTrigger["Click"] = 0] = "Click";
            PopoverTrigger[PopoverTrigger["Hover"] = 1] = "Hover";
        })(PopoverTrigger = PopoverInterop.PopoverTrigger || (PopoverInterop.PopoverTrigger = {}));
    })(PopoverInterop = Bendex.PopoverInterop || (Bendex.PopoverInterop = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Keys = MicroSea.Utils.Models.Keys;
    var Point = MicroSea.Utils.Models.Point;
    var Margin = MicroSea.Utils.Models.Margin;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var ConvertionHelper = MicroSea.Utils.ConvertionHelper;
    var LinkedElement = MicroSea.Utils.LinkedElement;
    var HtmlElementInterop = MicroSea.Utils.HtmlElementInterop;
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var TemplateDropdownBaseInterop = (function (_super) {
        __extends(TemplateDropdownBaseInterop, _super);
        function TemplateDropdownBaseInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.Wrapped_GetLinkedParentElement = _this.GetLinkedParentElement.bind(_this);
            _this.Wrapped_OnToggleButtonClick = _this.OnToggleButtonClick.bind(_this);
            _this.Wrapped_OnKeyDownContent = _this.OnKeyDownContent.bind(_this);
            _this.Wrapped_OnKeyDown = _this.OnKeyDown.bind(_this);
            _this.Wrapped_OnKeyUp = _this.OnKeyUp.bind(_this);
            _this.OnResizeWrapped = _this.OnResize.bind(_this);
            _this.OnScrollWrapped = _this.OnScroll.bind(_this);
            if ((dropdownContentElement instanceof HTMLElement) === false) {
                throw new Error("Invalid argument type.");
            }
            if (typeof dropdownContentRef !== "string") {
                throw new Error("Invalid argument type.");
            }
            if (TypeCheckUtils.IsNotNullObject(bodyMarginInPercent) === false) {
                throw new Error("Invalid argument type.");
            }
            var dropdownContentLinkedElement = dropdownContentElement;
            dropdownContentLinkedElement.getLinkedParentElement = _this.Wrapped_GetLinkedParentElement;
            _this.dropdownContentElement = dropdownContentLinkedElement;
            _this.dropdownContentRef = dropdownContentRef;
            _this.bodyMarginInPercent = new Margin(bodyMarginInPercent.left, bodyMarginInPercent.top, bodyMarginInPercent.right, bodyMarginInPercent.bottom);
            _this.direction = TemplateDropdownBaseInterop.DropdownDirection.Down;
            _this.alignment = TemplateDropdownBaseInterop.DropdownAlignment.Left;
            _this.TargetElement.addEventListener("click", _this.Wrapped_OnToggleButtonClick, { passive: true });
            _this.TargetElement.addEventListener("keydown", _this.Wrapped_OnKeyDown, { passive: false });
            _this.TargetElement.addEventListener("keyup", _this.Wrapped_OnKeyUp, { passive: false });
            _this.dropdownContentElement.addEventListener("keydown", _this.Wrapped_OnKeyDownContent, { passive: false });
            window.addEventListener("resize", _this.OnResizeWrapped, { capture: true, passive: true });
            window.addEventListener("scroll", _this.OnScrollWrapped, { capture: true, passive: true });
            return _this;
        }
        TemplateDropdownBaseInterop.CreateInstance = function (targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            return new TemplateDropdownBaseInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent);
        };
        Object.defineProperty(TemplateDropdownBaseInterop.prototype, "DropdownContentMinZIndex", {
            get: function () {
                return 1000;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TemplateDropdownBaseInterop.prototype, "dropdownContentElementVisible", {
            get: function () {
                var dropdownContentElement = this.dropdownContentElement;
                return dropdownContentElement !== null && ElementHelper.IsElementVisible(dropdownContentElement);
            },
            enumerable: false,
            configurable: true
        });
        TemplateDropdownBaseInterop.prototype.CalculateInvertableDropdownPosition = function (direction, alignment) {
            if ((direction in TemplateDropdownBaseInterop.DropdownDirection) === false) {
                throw new Error("Invalid argument type.");
            }
            if ((alignment in TemplateDropdownBaseInterop.DropdownAlignment) === false) {
                throw new Error("Invalid argument type.");
            }
            var isDirectionInverted = this.IsInvertDirectionNeeded(direction);
            if (isDirectionInverted === true) {
                direction = direction === TemplateDropdownBaseInterop.DropdownDirection.Up
                    ? TemplateDropdownBaseInterop.DropdownDirection.Down
                    : TemplateDropdownBaseInterop.DropdownDirection.Up;
            }
            this.direction = direction;
            this.alignment = alignment;
            var dropdownPosition = this.CalculateDropdownPosition();
            return new Bendex.Models.InvertableDropdownPosition(dropdownPosition, isDirectionInverted);
        };
        TemplateDropdownBaseInterop.prototype.ScrollSelectedItemIntoView = function (forceScrollToTop) {
            if (forceScrollToTop === void 0) { forceScrollToTop = false; }
            if (typeof forceScrollToTop !== "boolean") {
                throw new Error("Invalid argument type.");
            }
            var contentItemAreaElement = this.GetContentItemAreaElement();
            var selectedItemElement = this.GetSelectedItemElement(contentItemAreaElement);
            if (forceScrollToTop === true) {
                HtmlElementInterop.ScrollElementIntoView(selectedItemElement);
            }
            else {
                HtmlElementInterop.ScrollToElementWhenNeeded(contentItemAreaElement, selectedItemElement);
            }
        };
        TemplateDropdownBaseInterop.prototype.Dispose = function () {
            window.removeEventListener("resize", this.OnResizeWrapped, { capture: true });
            window.removeEventListener("scroll", this.OnScrollWrapped, { capture: true });
            if (this.TargetElement !== null) {
                this.TargetElement.removeEventListener("click", this.Wrapped_OnToggleButtonClick);
                this.TargetElement.removeEventListener("keydown", this.Wrapped_OnKeyDown);
                this.TargetElement.removeEventListener("keyup", this.Wrapped_OnKeyUp);
            }
            if (this.dropdownContentElement !== null) {
                this.dropdownContentElement.removeEventListener("keydown", this.Wrapped_OnKeyDownContent);
                var dropdownContentLinkedElement = LinkedElement.AsLinkedHTMLElement(this.dropdownContentElement);
                if (dropdownContentLinkedElement !== null) {
                    delete dropdownContentLinkedElement.getLinkedParentElement;
                }
                this.dropdownContentElement = null;
            }
            this.dropdownContentRef = null;
            _super.prototype.Dispose.call(this);
        };
        TemplateDropdownBaseInterop.prototype.GetLinkedParentElement = function () {
            return this.TargetElement;
        };
        TemplateDropdownBaseInterop.prototype.OnToggleButtonClick = function (event) {
            var targetElement = TypeCheckUtils.AsClass(event.target, Element);
            if (this.IsFocusOnButton(targetElement) === false || this.IsFocusInNotBeamedContent(targetElement) === true) {
                return;
            }
            this.ToggleButtonClick();
        };
        TemplateDropdownBaseInterop.prototype.OnKeyDownContent = function (event) {
            var targetElement = TypeCheckUtils.AsClass(event.target, HTMLElement);
            var dropdownContentElement = this.dropdownContentElement;
            var keyData = ConvertionHelper.GetKeyData(event);
            switch (keyData) {
                case Keys.Tab:
                    this.HandleTabKey(dropdownContentElement, targetElement, false);
                    break;
                case Keys.Tab | Keys.Shift:
                    this.HandleTabKey(dropdownContentElement, targetElement, true);
                    break;
            }
            return !event.defaultPrevented;
        };
        TemplateDropdownBaseInterop.prototype.OnKeyDown = function (event) {
            var targetElement = TypeCheckUtils.AsClass(event.target, Element);
            if (this.AllowNavigationOnKeyDown(targetElement) === false) {
                return !event.defaultPrevented;
            }
            var keyData = ConvertionHelper.GetKeyData(event);
            if (keyData === Keys.Up || keyData === Keys.Down ||
                keyData === Keys.Enter || keyData === Keys.Escape) {
                event.preventDefault();
                event.stopPropagation();
            }
            else if (keyData === Keys.Tab || keyData === (Keys.Tab | Keys.Shift)) {
                this.TabPressed();
            }
            return !event.defaultPrevented;
        };
        TemplateDropdownBaseInterop.prototype.OnKeyUp = function (event) {
            var targetElement = TypeCheckUtils.AsClass(event.target, Element);
            if (this.AllowNavigationOnKeyUp(targetElement) === false) {
                return !event.defaultPrevented;
            }
            var keyData = ConvertionHelper.GetKeyData(event);
            var keyHandled = false;
            if (keyData === Keys.Up) {
                keyHandled = this.UpKeyPressed();
            }
            else if (keyData === Keys.Down) {
                keyHandled = this.DownKeyPressed();
            }
            else if (keyData === Keys.Enter) {
                keyHandled = this.EnterPressed();
            }
            else if (keyData === Keys.Escape) {
                keyHandled = this.EscapePressed();
            }
            if (keyHandled === true) {
                event.preventDefault();
                event.stopPropagation();
            }
            return !event.defaultPrevented;
        };
        TemplateDropdownBaseInterop.prototype.OnResize = function (event) {
            if (this.dropdownContentElementVisible === false) {
                return;
            }
            var dropdownPosition = this.CalculateDropdownPosition();
            this.UpdateDropdownPosition(dropdownPosition);
        };
        TemplateDropdownBaseInterop.prototype.OnScroll = function (event) {
            var targetElement = TypeCheckUtils.AsClass(event.target, Element);
            if (this.dropdownContentElementVisible === false || this.IsButtonInTarget(targetElement) === false) {
                return;
            }
            var dropdownPosition = this.CalculateDropdownPosition();
            this.UpdateDropdownPosition(dropdownPosition);
        };
        TemplateDropdownBaseInterop.prototype.GetContentItemAreaElement = function () {
            var dropdownContentElement = this.dropdownContentElement;
            if ((dropdownContentElement instanceof HTMLElement) === false) {
                return null;
            }
            var element = dropdownContentElement.querySelector(".template-dropdown-content-item-area[data-contentref=\"".concat(this.dropdownContentRef, "\"]"));
            return TypeCheckUtils.AsClass(element, HTMLElement);
        };
        TemplateDropdownBaseInterop.prototype.GetSelectedItemElement = function (contentItemAreaElement) {
            if ((contentItemAreaElement instanceof HTMLElement) === false) {
                return null;
            }
            var element = contentItemAreaElement.querySelector(":scope > .template-dropdown-item-list > .template-dropdown-item.selected");
            return TypeCheckUtils.AsClass(element, HTMLElement);
        };
        TemplateDropdownBaseInterop.prototype.AllowNavigationOnKeyDown = function (targetElement) {
            return this.IsFocusOnButton(targetElement) === true || this.IsFocusInNotBeamedContent(targetElement) === true;
        };
        TemplateDropdownBaseInterop.prototype.AllowNavigationOnKeyUp = function (targetElement) {
            return this.IsFocusOnButton(targetElement) === true || this.IsFocusInNotBeamedContent(targetElement) === true;
        };
        TemplateDropdownBaseInterop.prototype.IsButtonInTarget = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            var dropdownElement = this.TargetElement;
            return dropdownElement !== null && ElementHelper.IsChildOf(targetElement, dropdownElement);
        };
        TemplateDropdownBaseInterop.prototype.IsFocusOnButton = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            return this.IsTargetOnOrInButton(targetElement) === true && this.IsTargetInContent(targetElement) === false;
        };
        TemplateDropdownBaseInterop.prototype.IsFocusInNotBeamedContent = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            return this.IsTargetOnOrInButton(targetElement) === true && this.IsTargetInContent(targetElement) === true;
        };
        TemplateDropdownBaseInterop.prototype.IsTargetOnOrInButton = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            var dropdownElement = this.TargetElement;
            return dropdownElement !== null && (targetElement === dropdownElement || ElementHelper.IsChildOf(dropdownElement, targetElement));
        };
        TemplateDropdownBaseInterop.prototype.IsTargetInContent = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            var dropdownContentElement = this.dropdownContentElement;
            return dropdownContentElement !== null && ElementHelper.IsChildOf(dropdownContentElement, targetElement);
        };
        TemplateDropdownBaseInterop.prototype.IsTargetInContentItemArea = function (targetElement) {
            if (targetElement === null) {
                return false;
            }
            var contentItemAreaElement = this.GetContentItemAreaElement();
            return contentItemAreaElement !== null && ElementHelper.IsChildOf(contentItemAreaElement, targetElement);
        };
        TemplateDropdownBaseInterop.prototype.HandleTabKey = function (dropdownContentElement, targetElement, reverse) {
            var nextFocusableElement;
            var circleElements = false;
            if (reverse === true) {
                nextFocusableElement = ElementHelper.FindPreviousFocusableElement(dropdownContentElement, targetElement, circleElements);
            }
            else {
                nextFocusableElement = ElementHelper.FindNextFocusableElement(dropdownContentElement, targetElement, circleElements);
            }
            if (nextFocusableElement === null) {
                HtmlElementInterop.FocusFocusableChildElement(this.TargetElement);
                this.TabPressed();
            }
        };
        TemplateDropdownBaseInterop.prototype.IsInvertDirectionNeeded = function (direction) {
            var dropdownElement = this.TargetElement;
            var dropdownContentElement = this.dropdownContentElement;
            if (dropdownElement !== null && dropdownContentElement !== null) {
                var relativeAndOverflowParent = ElementHelper.GetRelativeAndOverflowParent(dropdownContentElement);
                var overflowParentBounds = ElementHelper.GetElementBounds(relativeAndOverflowParent.overflow);
                var dropdownBounds = ElementHelper.GetElementBounds(dropdownElement);
                var contentBounds = ElementHelper.GetUnplacedElementBounds(dropdownContentElement);
                if (relativeAndOverflowParent.overflow instanceof HTMLBodyElement) {
                    var reducedHeightTop = overflowParentBounds.height * this.bodyMarginInPercent.top / 100;
                    var reducedHeightBottom = overflowParentBounds.height * (this.bodyMarginInPercent.top + this.bodyMarginInPercent.bottom) / 100;
                    overflowParentBounds = new DOMRect(overflowParentBounds.x, overflowParentBounds.y + reducedHeightTop, overflowParentBounds.width, overflowParentBounds.height - reducedHeightBottom);
                }
                switch (direction) {
                    case TemplateDropdownBaseInterop.DropdownDirection.Up: {
                        var enoughSpace = Math.ceil(dropdownBounds.top - contentBounds.height) >= Math.floor(overflowParentBounds.top);
                        return enoughSpace === false && (dropdownBounds.top - contentBounds.height) - overflowParentBounds.top < overflowParentBounds.bottom - (dropdownBounds.bottom + contentBounds.height);
                    }
                    default: {
                        var enoughSpace = Math.ceil(dropdownBounds.bottom + contentBounds.height) <= Math.floor(overflowParentBounds.bottom);
                        return enoughSpace === false && (dropdownBounds.top - contentBounds.height) - overflowParentBounds.top > overflowParentBounds.bottom - (dropdownBounds.bottom + contentBounds.height);
                    }
                }
            }
            return false;
        };
        TemplateDropdownBaseInterop.prototype.CalculateDropdownPosition = function () {
            var relativeAndOverflowParent = ElementHelper.GetRelativeAndOverflowParent(this.dropdownContentElement);
            var relativeParentBounds = ElementHelper.GetElementBounds(relativeAndOverflowParent.relative);
            var dropdownBounds = ElementHelper.GetElementBounds(this.TargetElement);
            var contentBounds = ElementHelper.GetUnplacedElementBounds(this.dropdownContentElement);
            var contentTranslate = ElementHelper.GetTranslateOfElement(this.dropdownContentElement);
            var dropdownContentBounds = new Bendex.Models.DropdownContentBounds();
            var dropdownViewPosition = new Point();
            switch (this.alignment) {
                case TemplateDropdownBaseInterop.DropdownAlignment.Right: {
                    dropdownContentBounds.x = Math.round(relativeParentBounds.right - dropdownBounds.right);
                    dropdownViewPosition.x = Math.round(dropdownBounds.right + contentTranslate.x);
                    break;
                }
                case TemplateDropdownBaseInterop.DropdownAlignment.Center: {
                    var centerOffset = dropdownBounds.width / 2 - contentBounds.width / 2;
                    var centeredPosition = dropdownBounds.left + centerOffset;
                    dropdownContentBounds.x = Math.round(centeredPosition - relativeParentBounds.left);
                    dropdownViewPosition.x = Math.round(centeredPosition + contentTranslate.x);
                    break;
                }
                default: {
                    dropdownContentBounds.x = Math.round(dropdownBounds.left - relativeParentBounds.left);
                    dropdownViewPosition.x = Math.round(dropdownBounds.left + contentTranslate.x);
                    break;
                }
            }
            switch (this.direction) {
                case TemplateDropdownBaseInterop.DropdownDirection.Up: {
                    dropdownContentBounds.y = Math.round(relativeParentBounds.bottom - dropdownBounds.top);
                    dropdownViewPosition.y = Math.round(dropdownBounds.top + contentTranslate.y);
                    break;
                }
                default: {
                    dropdownContentBounds.y = Math.round(dropdownBounds.bottom - relativeParentBounds.top);
                    dropdownViewPosition.y = Math.round(dropdownBounds.bottom + contentTranslate.y);
                    break;
                }
            }
            dropdownContentBounds.width = Math.ceil(Math.max(dropdownBounds.width, contentBounds.width));
            if (ElementHelper.IsChildOf(this.TargetElement, this.dropdownContentElement) === false) {
                var dropdownZIndex = ElementHelper.GetEffectiveZIndex(this.TargetElement, this.dropdownContentElement);
                dropdownContentBounds.zIndex = dropdownZIndex !== null ? Math.max(Math.trunc(dropdownZIndex) + 1, this.DropdownContentMinZIndex) : this.DropdownContentMinZIndex;
            }
            return new Bendex.Models.DropdownPosition(dropdownContentBounds, dropdownViewPosition);
        };
        TemplateDropdownBaseInterop.prototype.ToggleButtonClick = function () {
            this.InvokeCallbackMethodAsync("ToggleButtonClick");
        };
        TemplateDropdownBaseInterop.prototype.UpdateDropdownPosition = function (dropdownPosition) {
            this.InvokeCallbackMethodAsync("UpdateDropdownPosition", dropdownPosition);
        };
        TemplateDropdownBaseInterop.prototype.UpKeyPressed = function () {
            this.InvokeCallbackMethodAsync("UpKeyPressed");
            return true;
        };
        TemplateDropdownBaseInterop.prototype.DownKeyPressed = function () {
            this.InvokeCallbackMethodAsync("DownKeyPressed");
            return true;
        };
        TemplateDropdownBaseInterop.prototype.EnterPressed = function () {
            this.InvokeCallbackMethodAsync("EnterPressed");
            return true;
        };
        TemplateDropdownBaseInterop.prototype.EscapePressed = function () {
            this.InvokeCallbackMethodAsync("EscapePressed");
            return true;
        };
        TemplateDropdownBaseInterop.prototype.TabPressed = function () {
            this.InvokeCallbackMethodAsync("TabPressed");
            return true;
        };
        return TemplateDropdownBaseInterop;
    }(ComponentInteropBase));
    Bendex.TemplateDropdownBaseInterop = TemplateDropdownBaseInterop;
    (function (TemplateDropdownBaseInterop) {
        var DropdownDirection;
        (function (DropdownDirection) {
            DropdownDirection[DropdownDirection["Down"] = 0] = "Down";
            DropdownDirection[DropdownDirection["Up"] = 1] = "Up";
        })(DropdownDirection = TemplateDropdownBaseInterop.DropdownDirection || (TemplateDropdownBaseInterop.DropdownDirection = {}));
        var DropdownAlignment;
        (function (DropdownAlignment) {
            DropdownAlignment[DropdownAlignment["Left"] = 0] = "Left";
            DropdownAlignment[DropdownAlignment["Center"] = 1] = "Center";
            DropdownAlignment[DropdownAlignment["Right"] = 2] = "Right";
        })(DropdownAlignment = TemplateDropdownBaseInterop.DropdownAlignment || (TemplateDropdownBaseInterop.DropdownAlignment = {}));
    })(TemplateDropdownBaseInterop = Bendex.TemplateDropdownBaseInterop || (Bendex.TemplateDropdownBaseInterop = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var HtmlElementInterop = MicroSea.Utils.HtmlElementInterop;
    var TemplateDropdownInterop = (function (_super) {
        __extends(TemplateDropdownInterop, _super);
        function TemplateDropdownInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            return _super.call(this, targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) || this;
        }
        TemplateDropdownInterop.CreateInstance = function (targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            return new TemplateDropdownInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent);
        };
        TemplateDropdownInterop.prototype.ScrollItemIntoView = function (itemIndex, forceScrollToTop) {
            if (forceScrollToTop === void 0) { forceScrollToTop = false; }
            if (typeof itemIndex !== "number") {
                throw new Error("Invalid argument type.");
            }
            if (typeof forceScrollToTop !== "boolean") {
                throw new Error("Invalid argument type.");
            }
            var contentItemAreaElement = this.GetContentItemAreaElement();
            var itemElement = this.GetFirstItemElement(contentItemAreaElement);
            if (itemElement === null) {
                return;
            }
            if (forceScrollToTop === true) {
                var itemElementRect = ElementHelper.GetBoundingRectWithMargin(itemElement);
                HtmlElementInterop.ScrollElement(contentItemAreaElement, itemIndex * itemElementRect.height, 0, false);
            }
            else {
                var contentItemAreaElementRect = ElementHelper.GetBoundingClientRectWithoutPadding(contentItemAreaElement);
                var itemElementRect = ElementHelper.GetBoundingRectWithMargin(itemElement);
                var scrollToItemBounds = new DOMRect(itemElementRect.left, contentItemAreaElementRect.top + (itemIndex * itemElementRect.height) - contentItemAreaElement.scrollTop, itemElementRect.width, itemElementRect.height);
                HtmlElementInterop.ScrollToElementBoundsWhenNeeded(contentItemAreaElement, scrollToItemBounds);
            }
        };
        TemplateDropdownInterop.prototype.GetFirstItemElement = function (contentItemAreaElement) {
            if ((contentItemAreaElement instanceof HTMLElement) === false) {
                return null;
            }
            var element = contentItemAreaElement.querySelector(":scope > .template-dropdown-item-list > .template-dropdown-item");
            return TypeCheckUtils.AsClass(element, HTMLElement);
        };
        return TemplateDropdownInterop;
    }(Bendex.TemplateDropdownBaseInterop));
    Bendex.TemplateDropdownInterop = TemplateDropdownInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Margin = MicroSea.Utils.Models.Margin;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var SearchableTemplateDropdownInterop = (function (_super) {
        __extends(SearchableTemplateDropdownInterop, _super);
        function SearchableTemplateDropdownInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            var _this = _super.call(this, targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) || this;
            _this.contentElement = dropdownContentElement;
            _this.searchElement = _this.GetSearchField(_this.contentElement);
            if (_this.searchElement !== null) {
                _this.searchElement.addEventListener("keyup", _this.Wrapped_OnKeyUp, { passive: false });
            }
            return _this;
        }
        SearchableTemplateDropdownInterop.CreateInstance = function (targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent) {
            return new SearchableTemplateDropdownInterop(targetElement, interopCallback, dropdownContentElement, dropdownContentRef, bodyMarginInPercent);
        };
        SearchableTemplateDropdownInterop.prototype.Dispose = function () {
            if (this.searchElement !== null) {
                this.searchElement.removeEventListener("keyup", this.Wrapped_OnKeyUp);
                this.searchElement = null;
            }
            this.contentElement = null;
            _super.prototype.Dispose.call(this);
        };
        SearchableTemplateDropdownInterop.prototype.AllowNavigationOnKeyUp = function (targetElement) {
            return this.IsSearchInContent(this.contentElement) === true || _super.prototype.AllowNavigationOnKeyUp.call(this, targetElement);
        };
        SearchableTemplateDropdownInterop.prototype.GetSearchField = function (dropdownContentElement) {
            var searchElement = dropdownContentElement.querySelector(".searchable-template-dropdown-search-area input");
            return TypeCheckUtils.AsClass(searchElement, HTMLInputElement);
        };
        SearchableTemplateDropdownInterop.prototype.IsSearchInContent = function (dropdownContentElement) {
            if (dropdownContentElement === null) {
                return false;
            }
            return dropdownContentElement !== null && ElementHelper.IsChildOf(dropdownContentElement, this.searchElement);
        };
        return SearchableTemplateDropdownInterop;
    }(Bendex.TemplateDropdownInterop));
    Bendex.SearchableTemplateDropdownInterop = SearchableTemplateDropdownInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Point = MicroSea.Utils.Models.Point;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var ToolTipInterop = (function (_super) {
        __extends(ToolTipInterop, _super);
        function ToolTipInterop(targetElement, interopCallback, toolTipTargetElement) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.Wrapped_OnPointerOver = _this.OnPointerOver.bind(_this);
            _this.Wrapped_OnPointerOut = _this.OnPointerOut.bind(_this);
            _this.Wrapped_MouseClick = _this.MouseClick.bind(_this);
            _this.Wrapped_PointerMove = _this.PointerMove.bind(_this);
            _this.Wrapped_FocusIn = _this.FocusIn.bind(_this);
            _this.Wrapped_FocusOut = _this.FocusOut.bind(_this);
            _this.OnResizeWrapped = _this.OnResize.bind(_this);
            _this.OnScrollWrapped = _this.OnScroll.bind(_this);
            if ((toolTipTargetElement instanceof HTMLElement) === false) {
                throw new Error("Invalid argument type.");
            }
            _this.toolTipTargetElement = toolTipTargetElement;
            _this.enabled = false;
            _this.side = ToolTipInterop.ToolTipSide.Top;
            _this.showDelay = null;
            _this.hideDelay = null;
            _this.closedByClick = false;
            _this.toolTipSetToVisible = false;
            _this.mouseHoveredOnToolTip = false;
            _this.sideFrameHandle = null;
            _this.mouseHoverFrameHandle = null;
            _this.hideFocusDelayTimerHandle = null;
            _this.visibilityDelayTimerHandle = null;
            _this.toolTipTargetElement.addEventListener("pointerover", _this.Wrapped_OnPointerOver, { capture: true, passive: true });
            _this.toolTipTargetElement.addEventListener("pointerout", _this.Wrapped_OnPointerOut, { capture: true, passive: true });
            _this.toolTipTargetElement.addEventListener("focusin", _this.Wrapped_FocusIn, { capture: true, passive: true });
            _this.toolTipTargetElement.addEventListener("focusout", _this.Wrapped_FocusOut, { capture: true, passive: true });
            _this.toolTipTargetElement.addEventListener("click", _this.Wrapped_MouseClick, { capture: true, passive: true });
            window.addEventListener("resize", _this.OnResizeWrapped, { capture: true, passive: true });
            window.addEventListener("scroll", _this.OnScrollWrapped, { capture: true, passive: true });
            return _this;
        }
        ToolTipInterop.CreateInstance = function (targetElement, interopCallback, toolTipTargetElement) {
            return new ToolTipInterop(targetElement, interopCallback, toolTipTargetElement);
        };
        Object.defineProperty(ToolTipInterop.prototype, "toolTipElementVisible", {
            get: function () {
                var toolTipElement = this.TargetElement;
                return toolTipElement !== null && ElementHelper.IsElementVisible(toolTipElement);
            },
            enumerable: false,
            configurable: true
        });
        ToolTipInterop.prototype.SetEnabled = function (enabled) {
            if (typeof enabled !== "boolean") {
                throw new Error("Invalid argument type.");
            }
            this.enabled = enabled;
            if (this.enabled === false) {
                this.HandleHideToolTip(true);
            }
        };
        ToolTipInterop.prototype.SetSide = function (side) {
            if ((side in ToolTipInterop.ToolTipSide) === false) {
                throw new Error("Invalid argument type.");
            }
            this.side = side;
            if (this.enabled && this.toolTipElementVisible) {
                this.UpdateToolTipPosition();
            }
        };
        ToolTipInterop.prototype.SetShowDelay = function (showDelay) {
            if (showDelay !== null && typeof showDelay !== "number") {
                throw new Error("Invalid argument type.");
            }
            this.showDelay = showDelay;
        };
        ToolTipInterop.prototype.SetHideDelay = function (hideDelay) {
            if (hideDelay !== null && typeof hideDelay !== "number") {
                throw new Error("Invalid argument type.");
            }
            this.hideDelay = hideDelay;
        };
        ToolTipInterop.prototype.Dispose = function () {
            window.removeEventListener("resize", this.OnResizeWrapped, { capture: true });
            window.removeEventListener("scroll", this.OnScrollWrapped, { capture: true });
            if (this.toolTipTargetElement !== null) {
                this.toolTipTargetElement.removeEventListener("pointerover", this.Wrapped_OnPointerOver, { capture: true });
                this.toolTipTargetElement.removeEventListener("pointerout", this.Wrapped_OnPointerOut, { capture: true });
                this.toolTipTargetElement.removeEventListener("focusin", this.Wrapped_FocusIn, { capture: true });
                this.toolTipTargetElement.removeEventListener("focusout", this.Wrapped_FocusOut, { capture: true });
                this.toolTipTargetElement.removeEventListener("click", this.Wrapped_MouseClick, { capture: true });
            }
            this.CancelUpdateToolTipPosition();
            this.CancelUpdateMouseHoverState();
            this.CancelDelay();
            this.CancelHideFocusDelay();
            this.toolTipTargetElement = null;
            _super.prototype.Dispose.call(this);
        };
        ToolTipInterop.prototype.OnPointerOver = function (event) {
            if (event.pointerType !== "mouse") {
                return !event.defaultPrevented;
            }
            this.UpdateMouseHoverState(this.HandlePointerOver);
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.OnPointerOut = function (event) {
            if (event.pointerType !== "mouse") {
                return !event.defaultPrevented;
            }
            this.UpdateMouseHoverState(this.HandlePointerOut);
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.MouseClick = function (event) {
            this.closedByClick = true;
            this.HandleHideToolTip();
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.PointerMove = function (event) {
            if (event.pointerType !== "mouse") {
                return !event.defaultPrevented;
            }
            this.CancelHideFocusDelay();
            if (this.mouseHoveredOnToolTip === false) {
                this.HandleHideToolTip();
            }
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.FocusIn = function (event) {
            this.UpdateMouseHoverState(this.HandleFocusIn);
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.FocusOut = function (event) {
            this.CancelHideFocusDelay();
            this.HandleHideToolTip();
            return !event.defaultPrevented;
        };
        ToolTipInterop.prototype.OnResize = function (event) {
            if (this.enabled === false || this.toolTipElementVisible === false) {
                return;
            }
            this.UpdateToolTipPosition();
        };
        ToolTipInterop.prototype.OnScroll = function (event) {
            if (this.enabled === false || this.toolTipElementVisible === false) {
                return;
            }
            var targetElement = TypeCheckUtils.AsClass(event.target, Element);
            if (targetElement === null) {
                return;
            }
            var toolTipTargetElement = this.toolTipTargetElement;
            if (toolTipTargetElement === null || ElementHelper.IsChildOf(targetElement, toolTipTargetElement) === false) {
                return;
            }
            this.UpdateToolTipPosition();
        };
        ToolTipInterop.prototype.HandleFocusIn = function () {
            var _this = this;
            this.HandleShowToolTip(function () {
                _this.HandleHideFocusDelay(_this.HandleHideToolTip);
            });
        };
        ToolTipInterop.prototype.HandlePointerOver = function () {
            if (this.mouseHoveredOnToolTip === true || this.closedByClick === true) {
                return;
            }
            this.mouseHoveredOnToolTip = true;
            this.HandleShowToolTip();
        };
        ToolTipInterop.prototype.HandlePointerOut = function () {
            this.mouseHoveredOnToolTip = false;
            this.closedByClick = false;
            this.HandleHideToolTip();
        };
        ToolTipInterop.prototype.HandleShowToolTip = function (callback) {
            if (callback === void 0) { callback = null; }
            if (this.enabled === false) {
                return;
            }
            var wasToolTipSetToVisible = this.toolTipSetToVisible;
            this.toolTipSetToVisible = true;
            if (wasToolTipSetToVisible === false) {
                this.SetToolTipPosition(callback);
            }
        };
        ToolTipInterop.prototype.HandleHideToolTip = function (force) {
            if (force === void 0) { force = false; }
            var wasToolTipSetToVisible = this.toolTipSetToVisible;
            this.toolTipSetToVisible = false;
            if ((force === true && this.toolTipElementVisible === true) || wasToolTipSetToVisible === true) {
                this.HandleDelay(this.HideToolTip, force ? null : this.hideDelay);
            }
        };
        ToolTipInterop.prototype.SetToolTipPosition = function (callback) {
            var _this = this;
            var delayCallback = function () {
                _this.CalculateToolTipPosition(function (clientBounds, side) {
                    _this.ShowToolTip(clientBounds, side);
                    if (typeof callback === "function") {
                        callback.call(_this);
                    }
                });
            };
            this.HandleDelay(delayCallback, this.showDelay);
        };
        ToolTipInterop.prototype.UpdateToolTipPosition = function () {
            var _this = this;
            this.CancelUpdateToolTipPosition();
            this.sideFrameHandle = requestAnimationFrame(function () {
                _this.CalculateToolTipPosition(_this.UpdateToolTip);
                _this.sideFrameHandle = null;
            });
        };
        ToolTipInterop.prototype.CancelUpdateToolTipPosition = function () {
            if (this.sideFrameHandle === null) {
                return;
            }
            cancelAnimationFrame(this.sideFrameHandle);
            this.sideFrameHandle = null;
        };
        ToolTipInterop.prototype.UpdateMouseHoverState = function (callback) {
            var _this = this;
            this.CancelUpdateMouseHoverState();
            this.mouseHoverFrameHandle = requestAnimationFrame(function () {
                if (typeof callback === "function") {
                    callback.call(_this);
                }
                _this.mouseHoverFrameHandle = null;
            });
        };
        ToolTipInterop.prototype.CancelUpdateMouseHoverState = function () {
            if (this.mouseHoverFrameHandle === null) {
                return;
            }
            cancelAnimationFrame(this.mouseHoverFrameHandle);
            this.mouseHoverFrameHandle = null;
        };
        ToolTipInterop.prototype.HandleDelay = function (callback, delay) {
            var _this = this;
            this.CancelDelay();
            var callbackHandler = function () {
                try {
                    if (typeof callback === "function") {
                        callback.call(_this);
                    }
                }
                finally {
                    _this.CancelDelay();
                }
            };
            if (delay !== null && delay > 0) {
                this.visibilityDelayTimerHandle = setTimeout(callbackHandler, delay);
            }
            else {
                callbackHandler();
            }
        };
        ToolTipInterop.prototype.CancelDelay = function () {
            if (this.visibilityDelayTimerHandle === null) {
                return;
            }
            clearTimeout(this.visibilityDelayTimerHandle);
            this.visibilityDelayTimerHandle = null;
        };
        ToolTipInterop.prototype.HandleHideFocusDelay = function (callback) {
            var _this = this;
            this.CancelHideFocusDelay();
            var callbackHandler = function () {
                try {
                    if (typeof callback === "function") {
                        callback.call(_this);
                    }
                }
                finally {
                    _this.CancelHideFocusDelay();
                }
            };
            this.hideFocusDelayTimerHandle = setTimeout(callbackHandler, 5000);
            document.addEventListener("pointermove", this.Wrapped_PointerMove, { capture: true, passive: true });
        };
        ToolTipInterop.prototype.CancelHideFocusDelay = function () {
            if (this.hideFocusDelayTimerHandle === null) {
                return;
            }
            clearTimeout(this.hideFocusDelayTimerHandle);
            this.hideFocusDelayTimerHandle = null;
            document.removeEventListener("pointermove", this.Wrapped_PointerMove, { capture: true });
        };
        ToolTipInterop.prototype.CalculateToolTipPosition = function (callback) {
            if (typeof callback !== "function" || this.enabled === false) {
                return;
            }
            var toolTipTargetElementBounds = ElementHelper.GetElementBounds(this.toolTipTargetElement);
            var toolTipElementBoundsContainer = this.GetToolTipElementBoundsContainer();
            var toolTipBounds = toolTipElementBoundsContainer.toolTipBounds;
            var relativeAndOverflowParent = ElementHelper.GetRelativeAndOverflowParent(this.TargetElement);
            var relativeParentBounds = ElementHelper.GetElementBounds(relativeAndOverflowParent.relative);
            var overflowParentBounds = ElementHelper.GetElementBounds(relativeAndOverflowParent.overflow);
            var side = ToolTipInterop.ToolTipSide.Top;
            var clientPos = null;
            switch (this.side) {
                case ToolTipInterop.ToolTipSide.Right: {
                    if (toolTipTargetElementBounds.right + toolTipBounds.width > overflowParentBounds.right) {
                        clientPos = this.CalculateLeftClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Left;
                    }
                    else {
                        clientPos = this.CalculateRightClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Right;
                    }
                    break;
                }
                case ToolTipInterop.ToolTipSide.Bottom: {
                    if (toolTipTargetElementBounds.bottom + toolTipBounds.height > overflowParentBounds.bottom) {
                        clientPos = this.CalculateTopClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Top;
                    }
                    else {
                        clientPos = this.CalculateBottomClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Bottom;
                    }
                    break;
                }
                case ToolTipInterop.ToolTipSide.Left: {
                    if (toolTipTargetElementBounds.left - toolTipBounds.width < overflowParentBounds.left) {
                        clientPos = this.CalculateRightClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Right;
                    }
                    else {
                        clientPos = this.CalculateLeftClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Left;
                    }
                    break;
                }
                default: {
                    if (toolTipTargetElementBounds.top - toolTipBounds.height < overflowParentBounds.top) {
                        clientPos = this.CalculateBottomClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Bottom;
                    }
                    else {
                        clientPos = this.CalculateTopClientPos(toolTipTargetElementBounds, toolTipBounds, relativeParentBounds);
                        side = ToolTipInterop.ToolTipSide.Top;
                    }
                    break;
                }
            }
            var clientBounds = new DOMRect(clientPos.x, clientPos.y, toolTipBounds.width, toolTipBounds.height);
            callback.call(this, clientBounds, side);
        };
        ToolTipInterop.prototype.GetToolTipElementBoundsContainer = function () {
            var toolTipElement = this.TargetElement;
            if (toolTipElement === null)
                return { toolTipBounds: new DOMRect() };
            var toolTipStyle = toolTipElement.style;
            var oldLeft = toolTipStyle.left, oldRight = toolTipStyle.right, oldWidth = toolTipStyle.width;
            var oldTop = toolTipStyle.top, oldBottom = toolTipStyle.bottom, oldHeight = toolTipStyle.height;
            try {
                toolTipStyle.removeProperty("width");
                toolTipStyle.removeProperty("right");
                toolTipStyle.setProperty("left", "-1000px");
                toolTipStyle.removeProperty("height");
                toolTipStyle.removeProperty("bottom");
                toolTipStyle.setProperty("top", "-1000px");
                return {
                    toolTipBounds: ElementHelper.GetElementBounds(toolTipElement),
                };
            }
            finally {
                toolTipStyle.setProperty("left", oldLeft);
                toolTipStyle.setProperty("right", oldRight);
                toolTipStyle.setProperty("width", oldWidth);
                toolTipStyle.setProperty("top", oldTop);
                toolTipStyle.setProperty("bottom", oldBottom);
                toolTipStyle.setProperty("height", oldHeight);
            }
        };
        ToolTipInterop.prototype.CalculateTopClientPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            return new Point(this.CalculateHorizontalXPos(targetBounds, toolTipBounds, relativeParentBounds), targetBounds.top - toolTipBounds.height - relativeParentBounds.top);
        };
        ToolTipInterop.prototype.CalculateLeftClientPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            return new Point(targetBounds.left - toolTipBounds.width - relativeParentBounds.left, this.CalculateVerticalYPos(targetBounds, toolTipBounds, relativeParentBounds));
        };
        ToolTipInterop.prototype.CalculateRightClientPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            return new Point(targetBounds.right - relativeParentBounds.left, this.CalculateVerticalYPos(targetBounds, toolTipBounds, relativeParentBounds));
        };
        ToolTipInterop.prototype.CalculateBottomClientPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            return new Point(this.CalculateHorizontalXPos(targetBounds, toolTipBounds, relativeParentBounds), targetBounds.bottom - relativeParentBounds.top);
        };
        ToolTipInterop.prototype.CalculateHorizontalXPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            var targetCenterX = targetBounds.left + targetBounds.width / 2;
            var toolTipCenterX = targetCenterX - toolTipBounds.width / 2;
            var minToolTipPosX = Math.max(toolTipCenterX, relativeParentBounds.left);
            var maxToolTipPosX = relativeParentBounds.right - toolTipBounds.width;
            return Math.min(maxToolTipPosX, minToolTipPosX) - relativeParentBounds.left;
        };
        ToolTipInterop.prototype.CalculateVerticalYPos = function (targetBounds, toolTipBounds, relativeParentBounds) {
            var targetCenterY = targetBounds.top + targetBounds.height / 2;
            var toolTipCenterY = targetCenterY - toolTipBounds.height / 2;
            var minToolTipPosY = Math.max(toolTipCenterY, relativeParentBounds.top);
            var maxToolTipPosY = relativeParentBounds.bottom - toolTipBounds.height;
            return Math.min(maxToolTipPosY, minToolTipPosY) - relativeParentBounds.top;
        };
        ToolTipInterop.prototype.ShowToolTip = function (clientBounds, side) {
            this.InvokeCallbackMethodAsync("ShowToolTip", clientBounds, side);
        };
        ToolTipInterop.prototype.UpdateToolTip = function (clientBounds, side) {
            this.InvokeCallbackMethodAsync("UpdateToolTip", clientBounds, side);
        };
        ToolTipInterop.prototype.HideToolTip = function () {
            this.InvokeCallbackMethodAsync("HideToolTip");
        };
        return ToolTipInterop;
    }(ComponentInteropBase));
    Bendex.ToolTipInterop = ToolTipInterop;
    (function (ToolTipInterop) {
        var ToolTipSide;
        (function (ToolTipSide) {
            ToolTipSide[ToolTipSide["Top"] = 0] = "Top";
            ToolTipSide[ToolTipSide["Right"] = 1] = "Right";
            ToolTipSide[ToolTipSide["Bottom"] = 2] = "Bottom";
            ToolTipSide[ToolTipSide["Left"] = 3] = "Left";
        })(ToolTipSide = ToolTipInterop.ToolTipSide || (ToolTipInterop.ToolTipSide = {}));
    })(ToolTipInterop = Bendex.ToolTipInterop || (Bendex.ToolTipInterop = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var ZoomableImageInterop = (function (_super) {
        __extends(ZoomableImageInterop, _super);
        function ZoomableImageInterop(imageElement, interopCallback, zoomLevel) {
            var _this = _super.call(this, imageElement, interopCallback) || this;
            _this.PointerOverWrapper = _this.PointerOver.bind(_this);
            _this.PointerMoveWrapper = _this.PointerMove.bind(_this);
            _this.PointerOutWrapper = _this.PointerOut.bind(_this);
            if ((imageElement instanceof HTMLImageElement) === false) {
                throw new Error("Invalid argument type.");
            }
            if (typeof zoomLevel !== "number") {
                throw new Error("Invalid argument type.");
            }
            _this.imageElement = imageElement;
            _this.zoomLevel = zoomLevel;
            _this.imageElement.addEventListener("pointerover", _this.PointerOverWrapper, { passive: true });
            _this.imageElement.addEventListener("pointermove", _this.PointerMoveWrapper, { passive: true });
            _this.imageElement.addEventListener("pointerout", _this.PointerOutWrapper, { passive: true });
            return _this;
        }
        ZoomableImageInterop.CreateInstance = function (imageElement, interopCallback, zoomLevel) {
            return new ZoomableImageInterop(imageElement, interopCallback, zoomLevel);
        };
        ZoomableImageInterop.prototype.Dispose = function () {
            if (this.imageElement !== null) {
                this.imageElement.removeEventListener("pointerover", this.PointerOverWrapper);
                this.imageElement.removeEventListener("pointermove", this.PointerMoveWrapper);
                this.imageElement.removeEventListener("pointerout", this.PointerOutWrapper);
            }
            this.imageElement = null;
            this.zoomLevel = 0;
            _super.prototype.Dispose.call(this);
        };
        ZoomableImageInterop.prototype.PointerOver = function (event) {
            this.UpdateImageZoom(event.offsetX, event.offsetY);
        };
        ZoomableImageInterop.prototype.PointerMove = function (event) {
            this.UpdateImageZoom(event.offsetX, event.offsetY);
        };
        ZoomableImageInterop.prototype.PointerOut = function (event) {
            this.ResetImageZoom();
        };
        ZoomableImageInterop.prototype.UpdateImageZoom = function (offsetX, offsetY) {
            var parentContainer = this.imageElement.parentElement;
            if (parentContainer.clientWidth > this.imageElement.naturalWidth && parentContainer.clientHeight > this.imageElement.naturalHeight) {
                return;
            }
            var x = Math.round(100 * offsetX / this.imageElement.offsetWidth);
            var y = Math.round(100 * offsetY / this.imageElement.offsetHeight);
            var imageStyle = this.imageElement.style;
            imageStyle.setProperty("--x", "".concat(x, "%"));
            imageStyle.setProperty("--y", "".concat(y, "%"));
            imageStyle.setProperty("--zoom", "".concat(this.zoomLevel));
            imageStyle.setProperty("cursor", 'zoom-in');
        };
        ZoomableImageInterop.prototype.ResetImageZoom = function () {
            var imageStyle = this.imageElement.style;
            imageStyle.setProperty("--x", null);
            imageStyle.setProperty("--y", null);
            imageStyle.setProperty("--zoom", null);
            imageStyle.setProperty("cursor", null);
        };
        return ZoomableImageInterop;
    }(ComponentInteropBase));
    Bendex.ZoomableImageInterop = ZoomableImageInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Models;
    (function (Models) {
        var Point = MicroSea.Utils.Models.Point;
        var DropdownContentBounds = (function (_super) {
            __extends(DropdownContentBounds, _super);
            function DropdownContentBounds(x, y, width, zIndex) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (zIndex === void 0) { zIndex = null; }
                var _this = _super.call(this, x, y) || this;
                _this.width = width;
                _this.zIndex = zIndex;
                return _this;
            }
            return DropdownContentBounds;
        }(Point));
        Models.DropdownContentBounds = DropdownContentBounds;
    })(Models = Bendex.Models || (Bendex.Models = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Models;
    (function (Models) {
        var DropdownPosition = (function () {
            function DropdownPosition(contentBounds, viewPosition) {
                if (contentBounds === void 0) { contentBounds = null; }
                if (viewPosition === void 0) { viewPosition = null; }
                this.contentBounds = contentBounds;
                this.viewPosition = viewPosition;
            }
            return DropdownPosition;
        }());
        Models.DropdownPosition = DropdownPosition;
    })(Models = Bendex.Models || (Bendex.Models = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var Models;
    (function (Models) {
        var InvertableDropdownPosition = (function (_super) {
            __extends(InvertableDropdownPosition, _super);
            function InvertableDropdownPosition(dropdownPosition, isDirectionInverted) {
                if (dropdownPosition === void 0) { dropdownPosition = null; }
                if (isDirectionInverted === void 0) { isDirectionInverted = false; }
                var _this = _super.call(this, dropdownPosition === null || dropdownPosition === void 0 ? void 0 : dropdownPosition.contentBounds, dropdownPosition === null || dropdownPosition === void 0 ? void 0 : dropdownPosition.viewPosition) || this;
                _this.isDirectionInverted = isDirectionInverted;
                return _this;
            }
            return InvertableDropdownPosition;
        }(Models.DropdownPosition));
        Models.InvertableDropdownPosition = InvertableDropdownPosition;
    })(Models = Bendex.Models || (Bendex.Models = {}));
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var ThreeJsInterop = (function (_super) {
        __extends(ThreeJsInterop, _super);
        function ThreeJsInterop(container, interopCallback, sceneName, sceneColor) {
            var _this = _super.call(this, container, interopCallback) || this;
            if ((container instanceof HTMLElement) === false) {
                throw "Container element not provided!";
            }
            if (typeof sceneName !== "string") {
                sceneName = "UnnamedScene";
            }
            if (!TypeCheckUtils.IsNullOrString(sceneColor)) {
                sceneColor = null;
            }
            _this.threeJsHelper = new Bendex.ThreeJsHelper(container, sceneName, sceneColor);
            return _this;
        }
        ThreeJsInterop.CreateInstance = function (targetElement, interopCallback, sceneName, sceneColor) {
            return new ThreeJsInterop(targetElement, interopCallback, sceneName, sceneColor);
        };
        ThreeJsInterop.prototype.Resize = function () {
            if (this.threeJsHelper === null) {
                return;
            }
            this.threeJsHelper.Resize();
        };
        ThreeJsInterop.prototype.AddMesh = function (mesh, optionsString) {
            if (this.threeJsHelper === null) {
                return;
            }
            var meshData = this.ConvertMesh(mesh);
            var options = this.ConvertOptions(optionsString);
            this.threeJsHelper.AddMeshAndRender(meshData, options);
        };
        ThreeJsInterop.prototype.Dispose = function () {
            if (this.threeJsHelper !== null) {
                this.threeJsHelper.Dispose();
                this.threeJsHelper = null;
            }
            _super.prototype.Dispose.call(this);
        };
        ThreeJsInterop.prototype.ConvertMesh = function (mesh) {
            try {
                return JSON.parse(mesh);
            }
            catch (e) {
                console.log("Can't parse json: ", mesh);
                throw e;
            }
        };
        ThreeJsInterop.prototype.ConvertOptions = function (optionsString) {
            try {
                var options = JSON.parse(optionsString);
                if (TypeCheckUtils.IsNotNullObject(options) === false) {
                    options = {
                        cameraDefaultView: Bendex.CameraDefaultView.Profile2D,
                        zoomFit: true,
                        frontPowderCoated: true,
                        backPowderCoated: false,
                        frontSide: true,
                        addEdgeGeometries: false
                    };
                }
                return options;
            }
            catch (e) {
                console.log("Can't parse json: ", optionsString);
                throw e;
            }
        };
        return ThreeJsInterop;
    }(ComponentInteropBase));
    Bendex.ThreeJsInterop = ThreeJsInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var EventUtils = MicroSea.Utils.EventUtils;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var CameraDefaultView;
    (function (CameraDefaultView) {
        CameraDefaultView[CameraDefaultView["Profile2D"] = 0] = "Profile2D";
        CameraDefaultView[CameraDefaultView["Profile3D"] = 1] = "Profile3D";
    })(CameraDefaultView = Bendex.CameraDefaultView || (Bendex.CameraDefaultView = {}));
    var ThreeJsHelper = (function () {
        function ThreeJsHelper(container, sceneName, rendererBackgroundColor) {
            this._cameraFov = 27;
            this._cameraFar = 100000;
            this._dpr = 1;
            this._resetCameraReasons = ["popup-profile:load-archive", "popup-profile:load-catalog", "mesh:loaded"];
            this._zoomFactorSmall = 20.0;
            this._zoomFactorMedium = 80.0;
            this._zoomFactorLarge = 100.0;
            this._minTargetToCameraDistanceAllowed = 500;
            this.OnWindowResizeWrapped = this.OnWindowResize.bind(this);
            this.OnWindowPointerUpWrapped = this.OnWindowPointerUp.bind(this);
            this.DebouncedHandelCameraChange = EventUtils.Debounce(this.OnCameraChange.bind(this), 250);
            this.OnDoubleClickWrapped = this.OnDoubleClick.bind(this);
            this.OnMouseWheelWrapped = this.OnMouseWheel.bind(this);
            this.OnOrbitalControlChangeWrapped = this.OnOrbitalControlChange.bind(this);
            this.OnOrbitalControlStartWrapped = this.OnOrbitalControlStart.bind(this);
            this._savingLocalStorage = false;
            if ((container instanceof HTMLElement) === false) {
                throw new Error("Invalid argument passed.");
            }
            this._canvas = null;
            this._sceneName = sceneName;
            this._rendererBackgroundColor = rendererBackgroundColor;
            this._container = container;
            this.Initialize();
        }
        ThreeJsHelper.prototype.Dispose = function () {
            this.Uninitialize();
            this._container = null;
            this._rendererBackgroundColor = null;
            this._sceneName = null;
            this._canvas = null;
        };
        ThreeJsHelper.prototype.Initialize = function () {
            this.InitScene(this._sceneName);
            this.InitCamera();
            this.InitLight();
            this.InitRenderer();
            this.InitOrbitControls(this._camera, this._renderer);
            this.CreateEnvironmentMap(this._renderer);
            this.SetDefaultView(CameraDefaultView.Profile2D);
            window.addEventListener('resize', this.OnWindowResizeWrapped, { passive: true });
            window.addEventListener('pointerup', this.OnWindowPointerUpWrapped, { passive: true });
            this.Resize();
        };
        ThreeJsHelper.prototype.InitScene = function (sceneName) {
            this._scene = new THREE.Scene();
            this._scene.name = sceneName;
        };
        ThreeJsHelper.prototype.InitCamera = function () {
            this._camera = new THREE.PerspectiveCamera(this._cameraFov, this._container.clientWidth / this._container.clientHeight, 0.1, this._cameraFar);
            this._camera.up = new THREE.Vector3(0, 0, 1);
            this._scene.add(this._camera);
        };
        ThreeJsHelper.prototype.InitLight = function () {
            var ambientLight = new THREE.AmbientLight(0x101010, 0.2);
            this._scene.add(ambientLight);
            var light1 = new THREE.DirectionalLight(0xbfbfbf, 0.4);
            light1.position.set(0.2, 0.1, 1.5);
            this._scene.add(light1);
            var light2 = new THREE.DirectionalLight(0x494949, 0.2);
            light2.position.set(1, 0.7, -0.2);
            this._scene.add(light2);
            var light3 = new THREE.DirectionalLight(0xffffff, 0.2);
            light3.position.set(1, -1.5, 1);
            this._scene.add(light3);
        };
        ThreeJsHelper.prototype.InitRenderer = function () {
            this._renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, logarithmicDepthBuffer: true });
            this._canvas = this._renderer.domElement;
            this._container.appendChild(this._canvas);
            if (this._rendererBackgroundColor) {
                this._renderer.setClearColor(this._rendererBackgroundColor);
            }
            this._canvas.addEventListener('dblclick', this.OnDoubleClickWrapped, { passive: true });
            this._canvas.addEventListener('wheel', this.OnMouseWheelWrapped, { passive: true });
        };
        ThreeJsHelper.prototype.InitOrbitControls = function (camera, renderer) {
            this._controls = new THREE.OrbitControls(camera, renderer.domElement);
            this._controls.addEventListener('change', this.OnOrbitalControlChangeWrapped);
            this._controls.enableKeys = false;
            this._controls.mouseButtons = {
                ORBIT: THREE.MOUSE.LEFT,
                ZOOM: THREE.MOUSE.RIGHT,
                PAN: THREE.MOUSE.MIDDLE
            };
            this._controls.update();
            this._controls.screenSpacePanning = true;
            this._controls.addEventListener("start", this.OnOrbitalControlStartWrapped);
        };
        ThreeJsHelper.prototype.CreateEnvironmentMap = function (renderer) {
            var textureLoader = new THREE.TextureLoader();
            var _this = this;
            var texture = textureLoader.load("_content/Bendex.UI.Razor/images/textures/Silvermap.jpg", function (texture) {
                texture.format = THREE.RGBAFormat;
                var equirectangularToCubeGenerator = new THREE_LOADER.EquirectangularToCubeGenerator(texture, { resolution: 512 });
                _this._envMapTexture = equirectangularToCubeGenerator.update(renderer);
            }, null, function (e) {
                console.log(e.error);
                texture.dispose();
            });
        };
        ThreeJsHelper.prototype.Render = function () {
            this._renderer.render(this._scene, this._camera);
        };
        ThreeJsHelper.prototype.Uninitialize = function () {
            window.removeEventListener('resize', this.OnWindowResizeWrapped);
            window.removeEventListener('pointerup', this.OnWindowPointerUpWrapped);
            this.DisposeEnvironmentMap();
            this.UninitOrbitControls();
            this.UninitRenderer();
            this.UninitCamera();
            this.UninitScene();
        };
        ThreeJsHelper.prototype.DisposeEnvironmentMap = function () {
            if (TypeCheckUtils.IsNotNullObject(this._envMapTexture)) {
                this._envMapTexture.dispose();
                this._envMapTexture = null;
            }
        };
        ThreeJsHelper.prototype.UninitOrbitControls = function () {
            if (TypeCheckUtils.IsNotNullObject(this._controls)) {
                this._controls.removeEventListener('change', this.DebouncedHandelCameraChange);
                this._controls.removeEventListener('change', this.OnOrbitalControlChangeWrapped);
                this._controls.removeEventListener("start", this.OnOrbitalControlStartWrapped);
                this._controls.reset();
                this._controls = null;
            }
        };
        ThreeJsHelper.prototype.UninitRenderer = function () {
            if (TypeCheckUtils.IsNotNullObject(this._canvas)) {
                this._canvas.removeEventListener('dblclick', this.OnDoubleClickWrapped);
                this._canvas.removeEventListener('wheel', this.OnMouseWheelWrapped);
            }
            if (TypeCheckUtils.IsNotNullObject(this._renderer)) {
                this._renderer.dispose();
                this._renderer = null;
            }
            if (TypeCheckUtils.IsNotNullObject(this._canvas)) {
                this._canvas.width = 0;
                this._canvas.height = 0;
                this._canvas.remove();
                delete this._canvas;
                this._canvas = null;
            }
        };
        ThreeJsHelper.prototype.UninitCamera = function () {
            if (TypeCheckUtils.IsNotNullObject(this._camera)) {
                this._camera.clear();
                this._camera = null;
            }
        };
        ThreeJsHelper.prototype.UninitScene = function () {
            if (TypeCheckUtils.IsNotNullObject(this._scene)) {
                this._scene.clear();
                this._scene = null;
            }
        };
        ThreeJsHelper.prototype.Resize = function () {
            var width = this._container.clientWidth;
            var height = this._container.clientHeight;
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();
            this._dpr = window.devicePixelRatio || this._dpr || 1;
            this._renderer.setPixelRatio(this._dpr);
            var callReason = "window:resize";
            this.SetRendererSize(width, height, callReason);
            this.Render();
        };
        ThreeJsHelper.prototype.SetRendererSize = function (width, height, reason) {
            var _this_1 = this;
            if (TypeCheckUtils.IsNotNullObject(this._renderer) && width > 0 && height > 0) {
                this._renderer.setSize(width, height, false);
            }
            if (reason === "toggle:3d-size-reset") {
                setTimeout(function () { _this_1.FixZoomLevel(reason); }, 125);
            }
        };
        ThreeJsHelper.prototype.SetDefaultView = function (cameraDefaultView) {
            this.SetRotationCenter();
            switch (cameraDefaultView) {
                case CameraDefaultView.Profile3D:
                    this.SetView(135, 30, 1.125);
                    break;
                default:
                    this.SetView(45, 30, 1.125);
                    break;
            }
        };
        ThreeJsHelper.prototype.SetRotationCenter = function () {
            var boundingBox = new THREE.Box3().setFromObject(this._scene);
            var centroid = boundingBox.getCenter(new THREE.Vector3());
            this._controls.target = new THREE.Vector3(centroid.x, centroid.y, centroid.z);
            this._controls.update();
        };
        ThreeJsHelper.prototype.SetView = function (alpha, beta, zoom) {
            var boundingBox = new THREE.Box3().setFromObject(this._scene);
            if (boundingBox.isEmpty())
                boundingBox.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), new THREE.Vector3(100, 100, 100));
            var centroid = boundingBox.getCenter(new THREE.Vector3());
            this._controls.target = new THREE.Vector3(centroid.x, centroid.y, centroid.z);
            var size = boundingBox.getSize(new THREE.Vector3());
            var objectSize = Math.max(size.y, size.z);
            var distance = zoom * 0.5 * objectSize / Math.tan(Math.PI * this._cameraFov / 360);
            var alphaInRadians = alpha * Math.PI / 180;
            var betaInRadians = beta * Math.PI / 180;
            this._camera.position.x = boundingBox.min.x - distance * Math.cos(alphaInRadians);
            this._camera.position.y = boundingBox.min.y - distance * Math.sin(alphaInRadians);
            this._camera.position.z = boundingBox.max.z + distance * Math.sin(betaInRadians);
            this._camera.lookAt(this._controls.target);
            this.ZoomFit(boundingBox);
        };
        ThreeJsHelper.prototype.ZoomFit = function (boundingBox) {
            if (boundingBox === undefined)
                boundingBox = new THREE.Box3().setFromObject(this._scene);
            if (boundingBox.isEmpty())
                return;
            var iteration = 0;
            var centerMoved = this.CenterView(boundingBox);
            do {
                var b = this.ProjectBoundingBox(boundingBox);
                var offset = new THREE.Vector3();
                var tries = 0;
                centerMoved = false;
                while (tries++ < 50 &&
                    (Math.abs(b.box.min.x) > 1 || Math.abs(b.box.min.y) > 1 ||
                        Math.abs(b.box.max.x) > 1 || Math.abs(b.box.max.y) > 1)) {
                    offset.copy(this._camera.position).sub(this._controls.target);
                    if (offset.length() < 5)
                        offset.setLength(5);
                    else
                        offset.multiplyScalar(1.125);
                    this._camera.position.copy(offset.add(this._controls.target));
                    centerMoved = this.CenterView(boundingBox) || centerMoved;
                    b = this.ProjectBoundingBox(boundingBox);
                }
                tries = 0;
                while (tries++ < 50 &&
                    Math.abs(b.box.min.x) < 1 && Math.abs(b.box.min.y) < 1 &&
                    Math.abs(b.box.max.x) < 1 && Math.abs(b.box.max.y) < 1) {
                    offset.copy(this._camera.position).sub(this._controls.target);
                    if (offset.length() < 5)
                        offset.setLength(5);
                    else
                        offset.divideScalar(1.125);
                    this._camera.position.copy(offset.add(this._controls.target));
                    b = this.ProjectBoundingBox(boundingBox);
                }
                offset.copy(this._camera.position).sub(this._controls.target);
                offset.multiplyScalar(1.125);
                this._camera.position.copy(offset.add(this._controls.target));
                centerMoved = this.CenterView(boundingBox) || centerMoved;
            } while (iteration++ < 50 && centerMoved);
            this._controls.update();
        };
        ThreeJsHelper.prototype.AddMeshAndRender = function (meshData, options) {
            this._controls.removeEventListener('change', this.DebouncedHandelCameraChange);
            this.AddMeshDataToScene(this._scene, meshData, options);
            if (options.zoomFit === true)
                this.SetDefaultView(options.cameraDefaultView);
            this._controls.addEventListener('change', this.DebouncedHandelCameraChange);
            this.Render();
        };
        ThreeJsHelper.prototype.AddMeshDataToScene = function (scene, meshData, options) {
            try {
                if (this._oldEdgeObject) {
                    for (var i = 0, l = this._oldEdgeObject.length; i < l; i++) {
                        scene.remove(this._oldEdgeObject[i]);
                    }
                    this._oldEdgeObject = null;
                }
                if (this._oldMeshObject) {
                    scene.remove(this._oldMeshObject);
                    this._oldMeshObject = null;
                }
                if (!meshData)
                    return;
                var loader = new THREE.ObjectLoader();
                var meshObject = loader.parse(meshData);
                if (meshObject) {
                    this.UpdateMaterial(meshObject, options);
                    this._oldMeshObject = meshObject;
                    scene.add(meshObject);
                    if (options.addEdgeGeometries) {
                        this.AddEdgeGeometries(scene, meshData);
                    }
                }
            }
            catch (ex) {
                console.log(ex.message);
            }
        };
        ThreeJsHelper.prototype.OnWindowResize = function (event) {
            this.Resize();
        };
        ThreeJsHelper.prototype.OnWindowPointerUp = function (event) {
            this.TriggerEvent("section#editor", "canvas:touchend");
        };
        ThreeJsHelper.prototype.OnCameraChange = function () {
            if (TypeCheckUtils.IsNotNullObject(this._camera) === false) {
                return;
            }
            try {
                this.Save3dViewingInfo();
            }
            catch (e) {
                console.log(e);
            }
        };
        ThreeJsHelper.prototype.OnDoubleClick = function (event) {
            this.SetRotationCenter();
            this.ZoomFit();
        };
        ThreeJsHelper.prototype.OnMouseWheel = function (event) {
            this.HandleZoom(event, true);
        };
        ThreeJsHelper.prototype.OnOrbitalControlChange = function (event) {
            this.Render();
        };
        ThreeJsHelper.prototype.OnOrbitalControlStart = function (event) {
            this.TriggerEvent("section#editor", "canvas:touchstart");
        };
        ThreeJsHelper.prototype.TriggerEvent = function (targetSelector, eventName) {
            var event = new Event(eventName);
            var element = document.querySelector(targetSelector);
            if (element && event)
                element.dispatchEvent(event);
        };
        ThreeJsHelper.prototype.Save3dViewingInfo = function () {
            if (this._savingLocalStorage === false) {
                this._savingLocalStorage = true;
                if (TypeCheckUtils.IsNotNullObject(this._currentMesh) === false) {
                    this.SetSceneMesh();
                }
                if (TypeCheckUtils.IsNotNullObject(this._currentMesh)) {
                    this._camera.updateProjectionMatrix();
                    this._controls.update();
                }
                this._savingLocalStorage = false;
            }
        };
        ThreeJsHelper.prototype.SetSceneMesh = function () {
            var sceneObjects = this.GetSceneMesh();
            if (TypeCheckUtils.IsNotNullObject(sceneObjects)) {
                this._currentMesh = sceneObjects.mesh;
            }
        };
        ThreeJsHelper.prototype.GetSceneMesh = function () {
            try {
                var mesh = void 0;
                var meshEdges = void 0;
                for (var _i = 0, _a = this._scene.children; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var itemType = item.type;
                    if (typeof itemType === "string") {
                        if (itemType === "Mesh" || itemType === "Geometry") {
                            mesh = item;
                        }
                        else if (itemType === "LineSegments") {
                            meshEdges = item;
                        }
                    }
                }
                return { mesh: mesh, edges: meshEdges };
            }
            catch (e) {
                console.log(e);
            }
            return null;
        };
        ThreeJsHelper.prototype.ResetCamera = function () {
            try {
                this._camera.position.set(-205.0, -275.0, 160.0);
                this._camera.rotation.x = 1.0;
                this._camera.rotation.y = -0.5;
                this._camera.rotation.z = -0.333;
                this._camera.updateProjectionMatrix();
            }
            catch (e) {
                console.log(e);
            }
        };
        ThreeJsHelper.prototype.UpdateCamera = function () {
            var cameraViewProjectionMatrix = new THREE.Matrix4();
            this._camera.updateMatrixWorld();
            this._camera.matrixWorldInverse.getInverse(this._camera.matrixWorld);
            cameraViewProjectionMatrix.multiplyMatrices(this._camera.projectionMatrix, this._camera.matrixWorldInverse);
            return cameraViewProjectionMatrix;
        };
        ThreeJsHelper.prototype.MeshInFrustum = function (vectors) {
            var result = true;
            if (typeof this._currentMesh !== "undefined") {
                var frustum = new THREE.Frustum();
                frustum.setFromProjectionMatrix(this.UpdateCamera());
                for (var i = 0; i < vectors.length; i++) {
                    var curVector = vectors[i];
                    if (frustum.containsPoint(curVector)) {
                    }
                    else {
                        result = false;
                    }
                }
            }
            else {
                console.log("current mesh undefined");
            }
            return result;
        };
        ThreeJsHelper.prototype.FixZoomLevel = function (callReason) {
            var bb = this.GetMeshBoundingBox();
            if (TypeCheckUtils.IsNotNullObject(bb)) {
                if (this.IsFinitePoint(bb.max) && this.IsFinitePoint(bb.min)) {
                    if (callReason !== "orientation:change") {
                        this.CenterView(bb);
                    }
                    var maxScrollCount = 4096;
                    var forcedZoomFactor = this._zoomFactorSmall;
                    var bbCenter = new THREE.Vector3();
                    bb.getCenter(bbCenter);
                    var vectors = this.GetMeshBoundingBoxVectors(bb);
                    this._controls.removeEventListener('change', this.DebouncedHandelCameraChange);
                    if (this._resetCameraReasons.includes(callReason)) {
                        this.ResetCamera();
                    }
                    if (callReason === "mesh:loaded") {
                        if (typeof this._lastBoundingBoxCenter !== undefined) {
                            this._camera.lookAt(this._lastBoundingBoxCenter);
                        }
                    }
                    var zoomDirection = this.MeshInFrustum(vectors) ? "in" : "out";
                    for (var i = 0; i < maxScrollCount; i++) {
                        if (!this.MeshInFrustum(vectors)) {
                            zoomDirection = "out";
                            this.SimulateZoom(zoomDirection, forcedZoomFactor * 2);
                            break;
                        }
                        this.SimulateZoom(zoomDirection, forcedZoomFactor);
                    }
                    forcedZoomFactor = this._zoomFactorSmall;
                    zoomDirection = "out";
                    for (var i = 0; i < maxScrollCount; i++) {
                        if (this.MeshInFrustum(vectors)) {
                            break;
                        }
                        this.SimulateZoom(zoomDirection, forcedZoomFactor);
                    }
                    if (!this.MeshInFrustum(vectors)) {
                        zoomDirection = "out";
                        this.SimulateZoom(zoomDirection, forcedZoomFactor);
                    }
                    var operationResult = this.MeshInFrustum(vectors);
                    this._controls.addEventListener('change', this.DebouncedHandelCameraChange);
                    if (operationResult) {
                        this._camera.lookAt(bbCenter);
                        this.UpdateCamera();
                    }
                    if (operationResult) {
                        if (typeof this._lastBoundingBoxCenter === undefined) {
                            this._lastBoundingBoxCenter = bbCenter;
                        }
                        this.Save3dViewingInfo();
                    }
                }
            }
        };
        ThreeJsHelper.prototype.GetMeshBoundingBox = function () {
            if (TypeCheckUtils.IsNotNullObject(this._currentMesh)) {
                return new THREE.Box3().setFromObject(this._currentMesh);
            }
            else {
                this.SetSceneMesh();
            }
            return null;
        };
        ThreeJsHelper.prototype.GetMeshBoundingBoxVectors = function (boundingBox) {
            return new Array(new THREE.Vector3(boundingBox.max.x, boundingBox.max.y, boundingBox.max.z), new THREE.Vector3(boundingBox.max.x, boundingBox.max.y, boundingBox.min.z), new THREE.Vector3(boundingBox.max.x, boundingBox.min.y, boundingBox.max.z), new THREE.Vector3(boundingBox.max.x, boundingBox.min.y, boundingBox.min.z), new THREE.Vector3(boundingBox.min.x, boundingBox.max.y, boundingBox.max.z), new THREE.Vector3(boundingBox.min.x, boundingBox.max.y, boundingBox.min.z), new THREE.Vector3(boundingBox.min.x, boundingBox.min.y, boundingBox.max.z), new THREE.Vector3(boundingBox.min.x, boundingBox.min.y, boundingBox.min.z));
        };
        ThreeJsHelper.prototype.CenterView = function (boundingBox) {
            if (boundingBox === undefined)
                boundingBox = new THREE.Box3().setFromObject(this._scene);
            if (boundingBox.isEmpty())
                return false;
            var iteration = 0;
            var b = this.ProjectBoundingBox(boundingBox);
            var offset = new THREE.Vector3();
            var centerMoved = false;
            while (Math.abs(b.box.min.x) > 1 || Math.abs(b.box.min.y) > 1 ||
                Math.abs(b.box.max.x) > 1 || Math.abs(b.box.max.y) > 1) {
                offset.copy(this._camera.position).sub(this._controls.target);
                offset.multiplyScalar(1.25);
                this._camera.position.copy(offset.add(this._controls.target));
                b = this.ProjectBoundingBox(boundingBox);
            }
            do {
                offset.copy(this._camera.position).sub(this._controls.target);
                var targetDistance = offset.length();
                targetDistance *= Math.tan(this._camera.fov / 2 * Math.PI / 180.0);
                var distanceLeft = 0.5 * b.center.x * targetDistance;
                var distanceUp = 0.5 * b.center.y * targetDistance;
                if (Math.abs(distanceLeft) > 1 || Math.abs(distanceUp) > 1) {
                    var panOffset = new THREE.Vector3();
                    var v = new THREE.Vector3();
                    v.setFromMatrixColumn(this._camera.matrix, 0);
                    v.multiplyScalar(distanceLeft);
                    panOffset.add(v);
                    v.setFromMatrixColumn(this._camera.matrix, 1);
                    v.multiplyScalar(distanceUp);
                    panOffset.add(v);
                    this._camera.position.add(panOffset);
                    this._controls.target.add(panOffset);
                    b = this.ProjectBoundingBox(boundingBox);
                    centerMoved = true;
                }
                else
                    break;
            } while (iteration++ < 15);
            return centerMoved;
        };
        ThreeJsHelper.prototype.ProjectBoundingBox = function (boundingBox) {
            this._camera.updateMatrixWorld();
            this._camera.matrixWorld.copy(this._camera.matrixWorldInverse).invert();
            var projScreenMatrix = new THREE.Matrix4;
            projScreenMatrix.multiplyMatrices(this._camera.projectionMatrix, this._camera.matrixWorldInverse);
            var points = new Array(new THREE.Vector4(boundingBox.min.x, boundingBox.min.y, boundingBox.min.z, 1), new THREE.Vector4(boundingBox.min.x, boundingBox.min.y, boundingBox.max.z, 1), new THREE.Vector4(boundingBox.min.x, boundingBox.max.y, boundingBox.min.z, 1), new THREE.Vector4(boundingBox.min.x, boundingBox.max.y, boundingBox.max.z, 1), new THREE.Vector4(boundingBox.max.x, boundingBox.min.y, boundingBox.min.z, 1), new THREE.Vector4(boundingBox.max.x, boundingBox.min.y, boundingBox.max.z, 1), new THREE.Vector4(boundingBox.max.x, boundingBox.max.y, boundingBox.min.z, 1), new THREE.Vector4(boundingBox.max.x, boundingBox.max.y, boundingBox.max.z, 1));
            var minZ = +Infinity;
            for (var i = 0; i < points.length; i++) {
                points[i].applyMatrix4(projScreenMatrix);
                points[i].divideScalar(points[i].w);
                if (points[i].z < minZ)
                    minZ = points[i].z;
            }
            var boxPoints = new Array(new THREE.Vector3(points[0].x, points[0].y, points[0].z), new THREE.Vector3(points[1].x, points[1].y, points[1].z), new THREE.Vector3(points[2].x, points[2].y, points[2].z), new THREE.Vector3(points[3].x, points[3].y, points[3].z), new THREE.Vector3(points[4].x, points[4].y, points[4].z), new THREE.Vector3(points[5].x, points[5].y, points[5].z), new THREE.Vector3(points[6].x, points[6].y, points[6].z), new THREE.Vector3(points[7].x, points[7].y, points[7].z));
            var box = new THREE.Box3().setFromPoints(boxPoints);
            return { box: box, points: points, center: box.getCenter(new THREE.Vector3()), size: box.getSize(new THREE.Vector3()), minZ: minZ };
        };
        ThreeJsHelper.prototype.IsFinitePoint = function (p) {
            return TypeCheckUtils.IsNotNullObject(p) && TypeCheckUtils.IsNotNanNumber(p.x) && TypeCheckUtils.IsNotNanNumber(p.y) && TypeCheckUtils.IsNotNanNumber(p.z) && isFinite(p.x) && isFinite(p.y) && isFinite(p.z);
        };
        ThreeJsHelper.prototype.SimulateZoom = function (direction, forcedFactor) {
            var mouseSimulation = {
                offsetX: Math.trunc(this._container.clientWidth / 2),
                offsetY: Math.trunc(this._container.clientHeight / 2),
                deltaY: direction === "out" ? 1 : -1,
                preventDefault: function () { }
            };
            this.HandleZoom(mouseSimulation, false, forcedFactor);
        };
        ThreeJsHelper.prototype.HandleZoom = function (event, disableZoom, forcedFactor) {
            if (TypeCheckUtils.IsNotNullObject(this._controls) && TypeCheckUtils.IsNotNullObject(this._controls.target)) {
                if (disableZoom) {
                    this._controls.enableZoom = false;
                }
                var distance = this._controls.target.distanceTo(this._camera.position);
                var factor = TypeCheckUtils.IsNotNanNumber(forcedFactor) ? forcedFactor : (distance < 800 ? this._zoomFactorSmall : (distance < 1400 ? this._zoomFactorMedium : this._zoomFactorLarge));
                var mX = (event.offsetX / this._container.clientWidth) * 2 - 1;
                var mY = -(event.offsetY / this._container.clientHeight) * 2 + 1;
                var vector = new THREE.Vector3(mX, mY, 0.5);
                vector.unproject(this._camera);
                vector.sub(this._camera.position);
                if (event.deltaY < 0) {
                    this._camera.position.add(vector.setLength(factor));
                }
                else {
                    this._camera.position.sub(vector.setLength(factor));
                }
                var targetToCameraDistance = Math.max(this._minTargetToCameraDistanceAllowed, this._controls.target.distanceTo(this._camera.position));
                var newTarget = this._camera.getWorldDirection(new THREE.Vector3()).setLength(targetToCameraDistance).add(this._camera.position);
                this._controls.target = newTarget;
                this._camera.updateProjectionMatrix();
                this._controls.update();
                this._controls.enableZoom = true;
            }
        };
        ThreeJsHelper.prototype.UpdateMaterial = function (object, options) {
            if (!object) {
                return;
            }
            var mesh = object;
            if (mesh.isMesh && Array.isArray(mesh.material)) {
                var r = options.frontSide ? 0 : 1;
                for (var j = 0, jl = mesh.material.length; j < jl; j++) {
                    var material = mesh.material[j];
                    if (!material || !material.isMaterial) {
                        continue;
                    }
                    if (material.type === "MeshStandardMaterial") {
                        var standardMaterial = material;
                        if (j % 2 !== r) {
                            standardMaterial.roughness = options.frontPowderCoated ? 0.5 : 0.3;
                            standardMaterial.metalness = options.frontPowderCoated ? 0.8 : 1.0;
                        }
                        else {
                            standardMaterial.roughness = options.backPowderCoated ? 0.5 : 0.3;
                            standardMaterial.metalness = options.backPowderCoated ? 0.8 : 1.0;
                        }
                        standardMaterial.envMap = TypeCheckUtils.IsNotNullObject(this._envMapTexture) ? this._envMapTexture : null;
                        standardMaterial.envMapIntensity = 0.6;
                        standardMaterial.needsUpdate = true;
                    }
                    if (material.type === "MeshPhongMaterial") {
                        var phongMaterial = material;
                        phongMaterial.envMap = TypeCheckUtils.IsNotNullObject(this._envMapTexture) ? this._envMapTexture : null;
                        phongMaterial.reflectivity = phongMaterial.refractionRatio = 0.08;
                        phongMaterial.needsUpdate = true;
                    }
                }
            }
            var group = object;
            if (group.isGroup && Array.isArray(group.children)) {
                for (var i = 0, il = group.children.length; i < il; i++) {
                    this.UpdateMaterial(group.children[i], options);
                }
            }
        };
        ThreeJsHelper.prototype.AddEdgeGeometries = function (scene, meshData) {
            if (!meshData || !Array.isArray(meshData.geometries)) {
                return;
            }
            var material = this.GetMaterialByName(meshData, "EdgesColor");
            if (!material)
                material = new THREE.LineBasicMaterial({ name: "EdgesColor", color: 0x808080, transparent: true, opacity: 0.2 });
            var edgeObject = new Array(0);
            for (var i = 0, il = meshData.geometries.length; i < il; i++) {
                var geometryData = meshData.geometries[i].data;
                if (!geometryData) {
                    continue;
                }
                var vertices = geometryData.attributes && geometryData.attributes.position ? geometryData.attributes.position.array : null;
                var normals = geometryData.attributes && geometryData.attributes.normal ? geometryData.attributes.normal.array : null;
                if (!Array.isArray(vertices)) {
                    continue;
                }
                var edges = geometryData._Edges;
                if (!Array.isArray(edges)) {
                    continue;
                }
                try {
                    var geometryVertices = new Array(0);
                    var geometryNormals = new Array(0);
                    for (var j = 0, jl = edges.length; j + 1 < jl; j += 2) {
                        var edge = edges[j];
                        this.AddGeometryVertex(geometryVertices, vertices, edge);
                        this.AddGeometryNormal(geometryNormals, normals, edge);
                        edge = edges[j + 1];
                        this.AddGeometryVertex(geometryVertices, vertices, edge);
                        this.AddGeometryNormal(geometryNormals, normals, edge);
                    }
                    var geometry = new THREE.BufferGeometry();
                    var lines = new THREE.LineSegments(geometry, material);
                    geometry.attributes["position"] = new THREE.Float32BufferAttribute(geometryVertices, 3, false);
                    geometry.attributes["normal"] = new THREE.Float32BufferAttribute(geometryNormals, 3, false);
                    scene.add(lines);
                    edgeObject.push(lines);
                }
                catch (ex) {
                    console.log(ex.message);
                }
            }
            this._oldEdgeObject = edgeObject;
        };
        ThreeJsHelper.prototype.AddGeometryVertex = function (geometryVertices, vertices, edge) {
            var vIndex = edge * 3;
            geometryVertices.push(vertices[vIndex], vertices[vIndex + 1], vertices[vIndex + 2]);
        };
        ThreeJsHelper.prototype.AddGeometryNormal = function (geometryNormals, normals, edge) {
            if (!Array.isArray(normals))
                return;
            var nIndex = edge * 3;
            geometryNormals.push(normals[nIndex], normals[nIndex + 1], normals[nIndex + 2]);
        };
        ThreeJsHelper.prototype.GetMaterialByName = function (meshData, materialName) {
            var material = null;
            if (Array.isArray(meshData.materials)) {
                var materialData = null;
                for (var i = 0, l = meshData.materials.length; i < l; i++) {
                    var currentMaterialData = meshData.materials[i];
                    if (currentMaterialData && currentMaterialData.name === materialName) {
                        materialData = currentMaterialData;
                        break;
                    }
                }
                if (materialData) {
                    var materialLoader = new THREE.MaterialLoader();
                    material = materialLoader.parse(materialData);
                }
            }
            return material;
        };
        return ThreeJsHelper;
    }());
    Bendex.ThreeJsHelper = ThreeJsHelper;
})(Bendex || (Bendex = {}));
var THREE_LOADER;
(function (THREE_LOADER) {
    var EquirectangularToCubeGenerator = (function () {
        function EquirectangularToCubeGenerator(sourceTexture, options) {
            this._sourceTexture = sourceTexture;
            this._resolution = options.resolution || 512;
            this._views = new Array({ t: new Array(+1, +0, +0), u: new Array(+0, -1, +0) }, { t: new Array(-1, +0, +0), u: new Array(+0, -1, +0) }, { t: new Array(+0, +1, +0), u: new Array(+0, +0, +1) }, { t: new Array(+0, -1, +0), u: new Array(+0, +0, -1) }, { t: new Array(+0, +0, +1), u: new Array(+0, -1, +0) }, { t: new Array(+0, +0, -1), u: new Array(+0, -1, +0) });
            this._camera = new THREE.PerspectiveCamera(90, 1, 0.1, 10);
            this._boxMesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), this.getShader());
            this._boxMesh.material.side = THREE.BackSide;
            this._scene = new THREE.Scene();
            this._scene.add(this._boxMesh);
            var params = {
                format: options.format || this._sourceTexture.format,
                magFilter: this._sourceTexture.magFilter,
                minFilter: this._sourceTexture.minFilter,
                type: options.type || this._sourceTexture.type,
                generateMipmaps: this._sourceTexture.generateMipmaps,
                anisotropy: this._sourceTexture.anisotropy,
                encoding: this._sourceTexture.encoding
            };
            this.renderTarget = new THREE.WebGLCubeRenderTarget(this._resolution, params);
        }
        EquirectangularToCubeGenerator.prototype.getShader = function () {
            var shaderMaterialParams = {
                uniforms: {
                    "equirectangularMap": { value: this._sourceTexture },
                },
                vertexShader: "varying vec3 localPosition;\n\
				    \n\
				    void main() {\n\
					    localPosition = position;\n\
					    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				    }",
                fragmentShader: "#include <common>\n\
                    \n\
				    varying vec3 localPosition;\n\
				    uniform sampler2D equirectangularMap;\n\
				    \n\
				    vec2 EquirectangularSampleUV(vec3 v) {\n\
			            vec2 uv = vec2(atan(v.z, v.x), asin(v.y));\n\
			            uv *= vec2(0.1591, 0.3183); // inverse atan\n\
			            uv += 0.5;\n\
			            return uv;\n\
				    }\n\
				    \n\
				    void main() {\n\
					    vec2 uv = EquirectangularSampleUV(normalize(localPosition));\n\
    			        vec3 color = texture2D(equirectangularMap, uv).rgb;\n\
    			        \n\
					    gl_FragColor = vec4( color, 1.0 );\n\
				    }",
                blending: THREE.NoBlending
            };
            var shaderMaterial = new THREE.ShaderMaterial(shaderMaterialParams);
            shaderMaterial.type = 'EquirectangularToCubeGenerator';
            return shaderMaterial;
        };
        EquirectangularToCubeGenerator.prototype.update = function (renderer) {
            var currentRenderTarget = renderer.getRenderTarget();
            var currentFaceIndex = renderer.getActiveCubeFace();
            var currentAutoClear = renderer.autoClear;
            try {
                for (var i = 0; i < 6; i++) {
                    var v = this._views[i];
                    renderer.setRenderTarget(this.renderTarget, i);
                    renderer.autoClear = true;
                    this._camera.position.set(0, 0, 0);
                    this._camera.up.set(v.u[0], v.u[1], v.u[2]);
                    this._camera.lookAt(v.t[0], v.t[1], v.t[2]);
                    renderer.render(this._scene, this._camera);
                }
            }
            finally {
                renderer.setRenderTarget(currentRenderTarget, currentFaceIndex);
                renderer.autoClear = currentAutoClear;
            }
            return this.renderTarget.texture;
        };
        EquirectangularToCubeGenerator.prototype.dispose = function () {
            this._boxMesh.geometry.dispose();
            this._boxMesh.material.dispose();
            this.renderTarget.dispose();
        };
        return EquirectangularToCubeGenerator;
    }());
    THREE_LOADER.EquirectangularToCubeGenerator = EquirectangularToCubeGenerator;
})(THREE_LOADER || (THREE_LOADER = {}));
var THREE_LOADER;
(function (THREE_LOADER) {
    var PMREMCubeUVPacker = (function () {
        function PMREMCubeUVPacker(cubeTextureLods) {
            this._cubeLods = cubeTextureLods;
            var size = cubeTextureLods[0].width * 4;
            var sourceTexture = cubeTextureLods[0].texture;
            var params = {
                format: sourceTexture.format,
                magFilter: sourceTexture.magFilter,
                minFilter: sourceTexture.minFilter,
                type: sourceTexture.type,
                generateMipmaps: sourceTexture.generateMipmaps,
                anisotropy: sourceTexture.anisotropy,
                encoding: sourceTexture.encoding
            };
            if (params.encoding === THREE.RGBM16Encoding) {
                params.magFilter = THREE.LinearFilter;
                params.minFilter = THREE.LinearFilter;
            }
            this.CubeUVRenderTarget = new THREE.WebGLRenderTarget(size, size, params);
            this.CubeUVRenderTarget.texture.name = "PMREMCubeUVPacker.cubeUv";
            this.CubeUVRenderTarget.texture.mapping = THREE.CubeUVReflectionMapping;
            this._camera = new THREE.OrthographicCamera(-size * 0.5, size * 0.5, -size * 0.5, size * 0.5, 0, 1);
            this._scene = new THREE.Scene();
            this._objects = new Array();
            var geometry = new THREE.PlaneBufferGeometry(1, 1);
            var faceOffsets = new Array(new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(2, 0), new THREE.Vector2(0, 1), new THREE.Vector2(1, 1), new THREE.Vector2(2, 1));
            var textureResolution = size;
            size = cubeTextureLods[0].width;
            var offset2 = 0;
            var c = 4.0;
            this._numLods = Math.log(cubeTextureLods[0].width) / Math.log(2) - 2;
            for (var i = 0; i < this._numLods; i++) {
                var offset1 = (textureResolution - textureResolution / c) * 0.5;
                if (size > 16)
                    c *= 2;
                var nMips = size > 16 ? 6 : 1;
                var mipOffsetX = 0;
                var mipOffsetY = 0;
                var mipSize = size;
                for (var j = 0; j < nMips; j++) {
                    for (var k = 0; k < 6; k++) {
                        var material = this.getShader();
                        material.uniforms['envMap'].value = this._cubeLods[i].texture;
                        material.uniforms['faceIndex'].value = k;
                        material.uniforms['mapSize'].value = mipSize;
                        var planeMesh = new THREE.Mesh(geometry, material);
                        planeMesh.position.x = faceOffsets[k].x * mipSize - offset1 + mipOffsetX;
                        planeMesh.position.y = faceOffsets[k].y * mipSize - offset1 + offset2 + mipOffsetY;
                        planeMesh.material.side = THREE.BackSide;
                        planeMesh.scale.setScalar(mipSize);
                        this._scene.add(planeMesh);
                        this._objects.push(planeMesh);
                    }
                    mipOffsetY += 1.75 * mipSize;
                    mipOffsetX += 1.25 * mipSize;
                    mipSize /= 2;
                }
                offset2 += 2 * size;
                if (size > 16)
                    size /= 2;
            }
        }
        PMREMCubeUVPacker.prototype.getShader = function () {
            var shaderMaterialParams = {
                uniforms: {
                    "faceIndex": { value: 0 },
                    "mapSize": { value: 0 },
                    "envMap": { value: null },
                    "testColor": { value: new THREE.Vector3(1, 1, 1) }
                },
                vertexShader: "precision highp float;\
				    varying vec2 vUv;\
                    \n\
				    void main() {\
					    vUv = uv;\
					    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\
				    }",
                fragmentShader: "precision highp float;\
				    varying vec2 vUv;\
                    \n\
				    uniform samplerCube envMap;\
				    uniform float mapSize;\
				    uniform vec3 testColor;\
				    uniform int faceIndex;\
				    \
				    void main() {\
					    vec3 sampleDirection;\
					    vec2 uv = vUv;\
					    uv = uv * 2.0 - 1.0;\
					    uv.y *= -1.0;\
					    if(faceIndex == 0) {\
						    sampleDirection = normalize(vec3(1.0, uv.y, -uv.x));\
					    } else if(faceIndex == 1) {\
						    sampleDirection = normalize(vec3(uv.x, 1.0, uv.y));\
					    } else if(faceIndex == 2) {\
						    sampleDirection = normalize(vec3(uv.x, uv.y, 1.0));\
					    } else if(faceIndex == 3) {\
						    sampleDirection = normalize(vec3(-1.0, uv.y, uv.x));\
					    } else if(faceIndex == 4) {\
						    sampleDirection = normalize(vec3(uv.x, -1.0, -uv.y));\
					    } else {\
						    sampleDirection = normalize(vec3(-uv.x, uv.y, -1.0));\
					    }\
					    vec4 color = envMapTexelToLinear( textureCube( envMap, sampleDirection ) );\
					    gl_FragColor = linearToOutputTexel( color );\
				    }",
                blending: THREE.NoBlending
            };
            var shaderMaterial = new THREE.ShaderMaterial(shaderMaterialParams);
            shaderMaterial.type = 'PMREMCubeUVPacker';
            return shaderMaterial;
        };
        PMREMCubeUVPacker.prototype.update = function (renderer) {
            var toneMapping = renderer.toneMapping;
            var toneMappingExposure = renderer.toneMappingExposure;
            var currentRenderTarget = renderer.getRenderTarget();
            var currentFaceIndex = renderer.getActiveCubeFace();
            var currentAutoClear = renderer.autoClear;
            try {
                renderer.toneMapping = THREE.LinearToneMapping;
                renderer.toneMappingExposure = 1.0;
                renderer.setRenderTarget(this.CubeUVRenderTarget);
                renderer.autoClear = false;
                renderer.render(this._scene, this._camera);
            }
            finally {
                renderer.setRenderTarget(currentRenderTarget, currentFaceIndex);
                renderer.autoClear = currentAutoClear;
                renderer.toneMapping = toneMapping;
                renderer.toneMappingExposure = toneMappingExposure;
            }
        };
        PMREMCubeUVPacker.prototype.dispose = function () {
            for (var i = 0, l = this._objects.length; i < l; i++) {
                this._objects[i].geometry.dispose();
                this._objects[i].material.dispose();
            }
        };
        return PMREMCubeUVPacker;
    }());
    THREE_LOADER.PMREMCubeUVPacker = PMREMCubeUVPacker;
})(THREE_LOADER || (THREE_LOADER = {}));
var THREE_LOADER;
(function (THREE_LOADER) {
    var PMREMGenerator = (function () {
        function PMREMGenerator(sourceTexture, samplesPerLevel, resolution) {
            this._sourceTexture = sourceTexture;
            this._resolution = resolution || 256;
            this._samplesPerLevel = samplesPerLevel || 16;
            var monotonicEncoding = (sourceTexture.encoding === THREE.LinearEncoding) || (sourceTexture.encoding === THREE.sRGBEncoding);
            this._sourceTexture.minFilter = (monotonicEncoding) ? THREE.LinearFilter : THREE.NearestFilter;
            this._sourceTexture.magFilter = (monotonicEncoding) ? THREE.LinearFilter : THREE.NearestFilter;
            this._sourceTexture.generateMipmaps = this._sourceTexture.generateMipmaps && monotonicEncoding;
            var size = this._resolution;
            var params = {
                format: this._sourceTexture.format,
                magFilter: this._sourceTexture.magFilter,
                minFilter: this._sourceTexture.minFilter,
                type: this._sourceTexture.type,
                generateMipmaps: this._sourceTexture.generateMipmaps,
                anisotropy: this._sourceTexture.anisotropy,
                encoding: this._sourceTexture.encoding
            };
            this.numLods = Math.log(size) / Math.log(2) - 2;
            this.cubeLods = new Array(this.numLods);
            for (var i = 0; i < this.numLods; i++) {
                var renderTarget = new THREE.WebGLCubeRenderTarget(size, params);
                renderTarget.texture.name = "PMREMGenerator.cube" + i;
                this.cubeLods[i] = renderTarget;
                size = Math.max(16, size / 2);
            }
            this._camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.0, 1000);
            this._shader = this.getShader();
            this._shader.defines['SAMPLES_PER_LEVEL'] = this._samplesPerLevel;
            this._planeMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2, 0), this._shader);
            this._planeMesh.material.side = THREE.DoubleSide;
            this._scene = new THREE.Scene();
            this._scene.add(this._planeMesh);
            this._scene.add(this._camera);
            this._shader.uniforms['envMap'].value = this._sourceTexture;
        }
        PMREMGenerator.prototype.getShader = function () {
            var shaderMaterialParams = {
                defines: {
                    "SAMPLES_PER_LEVEL": 20,
                },
                uniforms: {
                    "faceIndex": { value: 0 },
                    "roughness": { value: 0.5 },
                    "mapSize": { value: 0.5 },
                    "envMap": { value: null },
                    "queryScale": { value: new THREE.Vector3(1, 1, 1) },
                    "testColor": { value: new THREE.Vector3(1, 1, 1) },
                },
                vertexShader: "varying vec2 vUv;\n\
                    \n\
				    void main() {\n\
					    vUv = uv;\n\
					    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				    }",
                fragmentShader: "#include <common>\n\
                    \n\
				    varying vec2 vUv;\n\
				    uniform int faceIndex;\n\
				    uniform float roughness;\n\
				    uniform samplerCube envMap;\n\
				    uniform float mapSize;\n\
				    uniform vec3 testColor;\n\
				    uniform vec3 queryScale;\n\
				    \n\
				    float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\
					    float a = ggxRoughness + 0.0001;\n\
					    a *= a;\n\
					    return ( 2.0 / a - 2.0 );\n\
				    }\n\
                    \n\
				    vec3 ImportanceSamplePhong(vec2 uv, mat3 vecSpace, float specPow) {\n\
					    float phi = uv.y * 2.0 * PI;\n\
					    float cosTheta = pow(1.0 - uv.x, 1.0 / (specPow + 1.0));\n\
					    float sinTheta = sqrt(1.0 - cosTheta * cosTheta);\n\
					    vec3 sampleDir = vec3(cos(phi) * sinTheta, sin(phi) * sinTheta, cosTheta);\n\
					    return vecSpace * sampleDir;\n\
				    }\n\
                    \n\
				    vec3 ImportanceSampleGGX( vec2 uv, mat3 vecSpace, float Roughness )\n\
				    {\n\
					    float a = Roughness * Roughness;\n\
					    float Phi = 2.0 * PI * uv.x;\n\
					    float CosTheta = sqrt( (1.0 - uv.y) / ( 1.0 + (a*a - 1.0) * uv.y ) );\n\
					    float SinTheta = sqrt( 1.0 - CosTheta * CosTheta );\n\
					    return vecSpace * vec3(SinTheta * cos( Phi ), SinTheta * sin( Phi ), CosTheta);\n\
				    }\n\
                    \n\
				    mat3 matrixFromVector(vec3 n) {\n\
					    float a = 1.0 / (1.0 + n.z);\n\
					    float b = -n.x * n.y * a;\n\
					    vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);\n\
					    vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);\n\
					    return mat3(b1, b2, n);\n\
				    }\n\
				    \n\
				    vec4 testColorMap(float Roughness) {\n\
					    vec4 color;\n\
					    if(faceIndex == 0)\n\
						    color = vec4(1.0,0.0,0.0,1.0);\n\
					    else if(faceIndex == 1)\n\
						    color = vec4(0.0,1.0,0.0,1.0);\n\
					    else if(faceIndex == 2)\n\
						    color = vec4(0.0,0.0,1.0,1.0);\n\
					    else if(faceIndex == 3)\n\
						    color = vec4(1.0,1.0,0.0,1.0);\n\
					    else if(faceIndex == 4)\n\
						    color = vec4(0.0,1.0,1.0,1.0);\n\
					    else\n\
						    color = vec4(1.0,0.0,1.0,1.0);\n\
					    color *= ( 1.0 - Roughness );\n\
					    return color;\n\
				    }\n\
                    \n\
				    void main() {\n\
					    vec3 sampleDirection;\n\
					    vec2 uv = vUv*2.0 - 1.0;\n\
					    float offset = -1.0/mapSize;\n\
					    const float a = -1.0;\n\
					    const float b = 1.0;\n\
					    float c = -1.0 + offset;\n\
					    float d = 1.0 - offset;\n\
					    float bminusa = b - a;\n\
					    uv.x = (uv.x - a)/bminusa * d - (uv.x - b)/bminusa * c;\n\
					    uv.y = (uv.y - a)/bminusa * d - (uv.y - b)/bminusa * c;\n\
					    if (faceIndex==0) {\n\
						    sampleDirection = vec3(1.0, -uv.y, -uv.x);\n\
					    } else if (faceIndex==1) {\n\
						    sampleDirection = vec3(-1.0, -uv.y, uv.x);\n\
					    } else if (faceIndex==2) {\n\
						    sampleDirection = vec3(uv.x, 1.0, uv.y);\n\
					    } else if (faceIndex==3) {\n\
						    sampleDirection = vec3(uv.x, -1.0, -uv.y);\n\
					    } else if (faceIndex==4) {\n\
						    sampleDirection = vec3(uv.x, -uv.y, 1.0);\n\
					    } else {\n\
						    sampleDirection = vec3(-uv.x, -uv.y, -1.0);\n\
					    }\n\
					    mat3 vecSpace = matrixFromVector(normalize(sampleDirection * queryScale));\n\
					    vec3 rgbColor = vec3(0.0);\n\
					    const int NumSamples = SAMPLES_PER_LEVEL;\n\
					    vec3 vect;\n\
					    float weight = 0.0;\n\
					    for( int i = 0; i < NumSamples; i ++ ) {\n\
						    float sini = sin(float(i));\n\
						    float cosi = cos(float(i));\n\
						    float r = rand(vec2(sini, cosi));\n\
						    vect = ImportanceSampleGGX(vec2(float(i) / float(NumSamples), r), vecSpace, roughness);\n\
						    float dotProd = dot(vect, normalize(sampleDirection));\n\
						    weight += dotProd;\n\
						    vec3 color = envMapTexelToLinear(textureCube(envMap,vect)).rgb;\n\
						    rgbColor.rgb += color;\n\
					    }\n\
					    rgbColor /= float(NumSamples);\n\
					    //rgbColor = testColorMap( roughness ).rgb;\n\
					    gl_FragColor = linearToOutputTexel( vec4( rgbColor, 1.0 ) );\n\
				    }",
                blending: THREE.NoBlending
            };
            var shaderMaterial = new THREE.ShaderMaterial(shaderMaterialParams);
            shaderMaterial.type = 'PMREMGenerator';
            return shaderMaterial;
        };
        PMREMGenerator.prototype.renderToCubeMapTarget = function (renderer, renderTarget) {
            for (var i = 0; i < 6; i++) {
                this.renderToCubeMapTargetFace(renderer, renderTarget, i);
            }
        };
        PMREMGenerator.prototype.renderToCubeMapTargetFace = function (renderer, renderTarget, faceIndex) {
            renderer.setRenderTarget(renderTarget, faceIndex);
            renderer.autoClear = true;
            this._shader.uniforms['faceIndex'].value = faceIndex;
            renderer.render(this._scene, this._camera);
        };
        PMREMGenerator.prototype.update = function (renderer) {
            this._shader.uniforms['envMap'].value = this._sourceTexture;
            var toneMapping = renderer.toneMapping;
            var toneMappingExposure = renderer.toneMappingExposure;
            var currentRenderTarget = renderer.getRenderTarget();
            var currentFaceIndex = renderer.getActiveCubeFace();
            var currentAutoClear = renderer.autoClear;
            try {
                renderer.toneMapping = THREE.LinearToneMapping;
                renderer.toneMappingExposure = 1.0;
                for (var i = 0; i < this.numLods; i++) {
                    var r = i / (this.numLods - 1);
                    this._shader.uniforms['roughness'].value = r * 0.9;
                    this._shader.uniforms['queryScale'].value.x = (i == 0) ? -1 : 1;
                    var size = this.cubeLods[i].width;
                    this._shader.uniforms['mapSize'].value = size;
                    this.renderToCubeMapTarget(renderer, this.cubeLods[i]);
                    if (i < 5)
                        this._shader.uniforms['envMap'].value = this.cubeLods[i].texture;
                }
            }
            finally {
                renderer.setRenderTarget(currentRenderTarget, currentFaceIndex);
                renderer.autoClear = currentAutoClear;
                renderer.toneMapping = toneMapping;
                renderer.toneMappingExposure = toneMappingExposure;
            }
        };
        PMREMGenerator.prototype.dispose = function () {
            this._planeMesh.geometry.dispose();
            this._planeMesh.material.dispose();
        };
        return PMREMGenerator;
    }());
    THREE_LOADER.PMREMGenerator = PMREMGenerator;
})(THREE_LOADER || (THREE_LOADER = {}));
var Bendex;
(function (Bendex) {
    var Keys = MicroSea.Utils.Models.Keys;
    var ElementHelper = MicroSea.Utils.ElementHelper;
    var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
    var ConvertionHelper = MicroSea.Utils.ConvertionHelper;
    var HtmlElementInterop = MicroSea.Utils.HtmlElementInterop;
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var CartItemOverlayInterop = (function (_super) {
        __extends(CartItemOverlayInterop, _super);
        function CartItemOverlayInterop(targetElement, interopCallback) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.Wrapped_OnKeyDownAsync = _this.OnKeyDownAsync.bind(_this);
            _this.Wrapper_OnResize = _this.UpdateOverlay.bind(_this);
            _this.Wrapper_OnScroll = _this.UpdateOverlay.bind(_this);
            _this.positionTarget = null;
            window.addEventListener("resize", _this.Wrapper_OnResize, { capture: true, passive: true });
            window.addEventListener("scroll", _this.Wrapper_OnScroll, { capture: true, passive: true });
            document.addEventListener("keydown", _this.Wrapped_OnKeyDownAsync, { capture: true, passive: false });
            return _this;
        }
        CartItemOverlayInterop.CreateInstance = function (targetElement, interopCallback) {
            return new CartItemOverlayInterop(targetElement, interopCallback);
        };
        Object.defineProperty(CartItemOverlayInterop.prototype, "positionTargetElement", {
            get: function () {
                if (this.positionTarget === null) {
                    return null;
                }
                return TypeCheckUtils.AsClass(document.querySelector(this.positionTarget), HTMLElement);
            },
            enumerable: false,
            configurable: true
        });
        CartItemOverlayInterop.prototype.UpdatePositionTarget = function (positionTarget) {
            if (typeof positionTarget !== "string") {
                throw new Error("Invalid argument type.");
            }
            if (positionTarget === this.positionTarget) {
                return;
            }
            this.positionTarget = positionTarget;
            this.ScrollSelectedItemIntoView();
            this.UpdateOverlay();
        };
        CartItemOverlayInterop.prototype.Dispose = function () {
            window.removeEventListener("resize", this.Wrapper_OnResize, { capture: true });
            window.removeEventListener("scroll", this.Wrapper_OnScroll, { capture: true });
            document.removeEventListener("keydown", this.Wrapped_OnKeyDownAsync, { capture: true });
            this.positionTarget = null;
            _super.prototype.Dispose.call(this);
        };
        CartItemOverlayInterop.prototype.OnKeyDownAsync = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var focusedElement, keyData, currentElement, nextFocusableElement, reverse, circleElements, currentElement_1, currentButtonElement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            focusedElement = document.activeElement;
                            if (focusedElement === null) {
                                return [2];
                            }
                            keyData = ConvertionHelper.GetKeyData(event);
                            if (!(keyData === Keys.Tab || keyData === (Keys.Tab | Keys.Shift))) return [3, 1];
                            currentElement = TypeCheckUtils.AsClass(focusedElement, HTMLElement);
                            if (currentElement === null) {
                                return [2];
                            }
                            event.preventDefault();
                            event.stopPropagation();
                            nextFocusableElement = void 0;
                            reverse = event.shiftKey;
                            circleElements = true;
                            if (reverse === true) {
                                nextFocusableElement = ElementHelper.FindPreviousFocusableElement(this.TargetElement, currentElement, circleElements);
                            }
                            else {
                                nextFocusableElement = ElementHelper.FindNextFocusableElement(this.TargetElement, currentElement, circleElements);
                            }
                            if (nextFocusableElement !== null) {
                                this.ScrollSelectedItemIntoView();
                                HtmlElementInterop.FocusElement(nextFocusableElement);
                            }
                            else {
                                HtmlElementInterop.BlurActiveElement();
                            }
                            return [3, 4];
                        case 1:
                            if (!(keyData === Keys.Up || keyData === Keys.Down)) return [3, 3];
                            event.preventDefault();
                            event.stopPropagation();
                            currentElement_1 = TypeCheckUtils.AsClass(focusedElement, HTMLElement);
                            HtmlElementInterop.BlurActiveElement();
                            return [4, this.TapToNextOverlayCallbackAsync(keyData === Keys.Up)];
                        case 2:
                            _a.sent();
                            requestAnimationFrame(function () { return HtmlElementInterop.FocusElement(currentElement_1); });
                            return [3, 4];
                        case 3:
                            if (keyData === Keys.Enter) {
                                currentButtonElement = TypeCheckUtils.AsClass(focusedElement, HTMLButtonElement);
                                if (currentButtonElement !== null && ElementHelper.IsChildOf(this.TargetElement, currentButtonElement)) {
                                    return [2];
                                }
                                event.preventDefault();
                                event.stopPropagation();
                                HtmlElementInterop.BlurActiveElement();
                                this.EnterPressedCallback();
                            }
                            else if (keyData === Keys.Escape) {
                                event.preventDefault();
                                event.stopPropagation();
                                HtmlElementInterop.BlurActiveElement();
                                this.EscapePressedCallback();
                            }
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        CartItemOverlayInterop.prototype.UpdateOverlay = function () {
            var positionTargetElement = this.positionTargetElement;
            if (positionTargetElement === null) {
                return;
            }
            var overlayBounds = this.CalculateOverlayPosition(positionTargetElement);
            this.UpdateOverlayCallback(overlayBounds);
        };
        CartItemOverlayInterop.prototype.CalculateOverlayPosition = function (positionTargetElement) {
            var relativeAndOverflowParent = ElementHelper.GetRelativeAndOverflowParent(this.TargetElement);
            var relativeParentBounds = ElementHelper.GetElementBounds(relativeAndOverflowParent.relative);
            var positionTargetOverflowParent = ElementHelper.GetOverflowParent(positionTargetElement);
            var positionTargetOverflowParentBounds = ElementHelper.GetElementBounds(positionTargetOverflowParent);
            var positionTargetBounds = ElementHelper.GetElementBounds(positionTargetElement);
            var scrollbarWidth = positionTargetOverflowParentBounds.width - positionTargetBounds.width;
            return new DOMRect(Math.round(relativeParentBounds.right - positionTargetBounds.right), Math.round(positionTargetBounds.top - relativeParentBounds.top), Math.round(positionTargetOverflowParentBounds.width - scrollbarWidth), positionTargetBounds.height);
        };
        CartItemOverlayInterop.prototype.ScrollSelectedItemIntoView = function () {
            var positionTargetElement = this.positionTargetElement;
            if (positionTargetElement === null) {
                return;
            }
            var positionTargetOverflowParent = ElementHelper.GetOverflowParent(positionTargetElement);
            HtmlElementInterop.ScrollToElementWhenNeeded(positionTargetOverflowParent, positionTargetElement);
        };
        CartItemOverlayInterop.prototype.UpdateOverlayCallback = function (overlayBounds) {
            this.InvokeCallbackMethodAsync("UpdateOverlay", overlayBounds);
        };
        CartItemOverlayInterop.prototype.TapToNextOverlayCallbackAsync = function (reverse) {
            return this.InvokeCallbackMethodAsync("TapToNextOverlay", reverse);
        };
        CartItemOverlayInterop.prototype.EnterPressedCallback = function () {
            this.InvokeCallbackMethodAsync("EnterPressed");
        };
        CartItemOverlayInterop.prototype.EscapePressedCallback = function () {
            this.InvokeCallbackMethodAsync("EscapePressed");
        };
        return CartItemOverlayInterop;
    }(ComponentInteropBase));
    Bendex.CartItemOverlayInterop = CartItemOverlayInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var ComponentInteropBase = MicroSea.Utils.ComponentInteropBase;
    var SessionStorage = MicroSea.Utils.StateStore.SessionStorage;
    var PayPalButtonInterop = (function (_super) {
        __extends(PayPalButtonInterop, _super);
        function PayPalButtonInterop(targetElement, interopCallback) {
            var _this = _super.call(this, targetElement, interopCallback) || this;
            _this.enable = false;
            _this.totalPrice = 0;
            _this.paypalButtons = null;
            var paypalButtonsProperties = {
                style: {
                    layout: "vertical",
                    color: "gold",
                    shape: "pill",
                    label: "checkout"
                },
                onInit: _this.OnInit.bind(_this),
                onCancel: _this.OnCancel.bind(_this),
                onError: _this.OnError.bind(_this),
                createOrder: _this.OnCreateOrderAsync.bind(_this),
                onApprove: _this.OnApproveAsync.bind(_this),
            };
            _this.paypalButtons = paypal.Buttons(paypalButtonsProperties);
            _this.paypalButtons.hide().then(function () { return _this.paypalButtons.render(targetElement); });
            return _this;
        }
        PayPalButtonInterop.CreateInstance = function (targetElement, interopCallback) {
            return new PayPalButtonInterop(targetElement, interopCallback);
        };
        PayPalButtonInterop.prototype.UpdateEnableAsync = function (enable) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof enable !== "boolean") {
                                throw new Error("Invalid argument type.");
                            }
                            if (enable === this.enable) {
                                return [2];
                            }
                            this.enable = enable;
                            return [4, this.UpdateButtonsVisibilityAsync()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.UpdateTotalPrice = function (totalPrice) {
            if (typeof totalPrice !== "number") {
                throw new Error("Invalid argument type.");
            }
            if (totalPrice === this.totalPrice) {
                return;
            }
            this.totalPrice = totalPrice;
        };
        PayPalButtonInterop.prototype.Dispose = function () {
            this.enable = false;
            this.totalPrice = 0;
            this.paypalButtons = null;
            _super.prototype.Dispose.call(this);
        };
        PayPalButtonInterop.prototype.OnInit = function (data, actions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.UpdateButtonsVisibilityAsync()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.OnCancel = function (data, actions) {
        };
        PayPalButtonInterop.prototype.OnError = function (err) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof err === "string" && err === "Error: Detected popup close") {
                                return [2];
                            }
                            alert(err);
                            return [4, this.paypalButtons.close()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.OnCreateOrderAsync = function (data, actions) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchOptions, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fetchOptions = {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Access-Token": SessionStorage.GetItem("access-token")
                                },
                                body: JSON.stringify({
                                    TotalPrice: this.totalPrice
                                })
                            };
                            return [4, fetch("api/paypal/createPayment", fetchOptions)];
                        case 1:
                            response = _a.sent();
                            return [4, response.text()];
                        case 2: return [2, _a.sent()];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.OnApproveAsync = function (data, actions) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchOptions, response, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fetchOptions = {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Access-Token": SessionStorage.GetItem("access-token")
                                },
                                body: JSON.stringify({
                                    OrderId: data.orderID,
                                    TotalPrice: this.totalPrice
                                })
                            };
                            return [4, fetch("api/paypal/authorizePayment/", fetchOptions)];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) return [3, 3];
                            return [4, response.json()];
                        case 2:
                            result = _a.sent();
                            this.OrderApprovedCallback(result.paymentId, result.authorizationId);
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.UpdateButtonsVisibilityAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.paypalButtons === null) {
                                return [2];
                            }
                            if (!this.enable) return [3, 2];
                            return [4, this.paypalButtons.show()];
                        case 1:
                            _a.sent();
                            return [3, 4];
                        case 2: return [4, this.paypalButtons.hide()];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        PayPalButtonInterop.prototype.OrderApprovedCallback = function (paymentId, authorizationId) {
            this.InvokeCallbackMethodAsync("OrderApproved", paymentId, authorizationId);
        };
        return PayPalButtonInterop;
    }(ComponentInteropBase));
    Bendex.PayPalButtonInterop = PayPalButtonInterop;
})(Bendex || (Bendex = {}));
var Bendex;
(function (Bendex) {
    var PayPalScriptManagerInterop = (function () {
        function PayPalScriptManagerInterop() {
        }
        PayPalScriptManagerInterop.RequestPayPalSDKAsync = function (mode, clientId, intent, currency) {
            return __awaiter(this, void 0, void 0, function () {
                var parameter, paypalSDKLoaded;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof mode !== "string") {
                                throw new Error("Invalid argument type.");
                            }
                            if (typeof clientId !== "string") {
                                throw new Error("Invalid argument type.");
                            }
                            if (typeof intent !== "string") {
                                throw new Error("Invalid argument type.");
                            }
                            if (typeof currency !== "string") {
                                throw new Error("Invalid argument type.");
                            }
                            if (this.parameter === null || this.parameter.mode !== mode || this.parameter.clientId !== clientId || this.parameter.intent !== intent || this.parameter.currency !== currency) {
                                this.scriptCounter = 0;
                            }
                            if ((this.scriptCounter = this.scriptCounter + 1) > 1) {
                                return [2, true];
                            }
                            parameter = {
                                mode: mode,
                                clientId: clientId,
                                intent: intent,
                                currency: currency
                            };
                            try {
                                this.RemovePayPalSDK();
                                this.AddPayPalSDK(parameter);
                            }
                            finally {
                                this.parameter = parameter;
                            }
                            return [4, this.AwaitLoadingPayPalSDKAsync()];
                        case 1:
                            paypalSDKLoaded = _a.sent();
                            if (paypalSDKLoaded === false) {
                                this.ReleasePayPalSDK();
                            }
                            return [2, paypalSDKLoaded];
                    }
                });
            });
        };
        PayPalScriptManagerInterop.ReleasePayPalSDK = function () {
            if (this.scriptCounter === 0 || (this.scriptCounter = this.scriptCounter - 1) > 0) {
                return;
            }
            try {
                this.RemovePayPalSDK();
            }
            finally {
                this.parameter = null;
            }
        };
        PayPalScriptManagerInterop.AddPayPalSDK = function (parameter) {
            var scriptElement = document.createElement("script");
            {
                scriptElement.type = "text/javascript";
                scriptElement.src = this.GetPayPalSdkUrlWithParameter(parameter);
            }
            document.head.appendChild(scriptElement);
        };
        PayPalScriptManagerInterop.RemovePayPalSDK = function () {
            var scriptElement = this.GetPayPalSDKScript();
            if (scriptElement !== null) {
                scriptElement.remove();
            }
            if (typeof paypal === "object") {
                if (paypal.__internal_destroy__) {
                    paypal.__internal_destroy__();
                }
                delete globalThis.paypal;
            }
        };
        PayPalScriptManagerInterop.GetPayPalSDKScript = function () {
            if (this.parameter === null) {
                return null;
            }
            var scriptElements = document.head.querySelectorAll("script");
            var paypalSdkUrl = this.GetPayPalSdkUrl(this.parameter.mode);
            for (var i = 0; i < scriptElements.length; i++) {
                var scriptElement = scriptElements.item(i);
                if (scriptElement.src.startsWith(paypalSdkUrl)) {
                    return scriptElement;
                }
            }
            return null;
        };
        PayPalScriptManagerInterop.GetPayPalSdkUrl = function (mode) {
            return mode === "production"
                ? "https://www.paypal.com/sdk/js"
                : "https://www.sandbox.paypal.com/sdk/js";
        };
        PayPalScriptManagerInterop.GetPayPalSdkUrlWithParameter = function (parameter) {
            var queryParams = "";
            if (typeof parameter.intent === "string") {
                queryParams += "&intent=".concat(parameter.intent);
            }
            if (typeof parameter.currency === "string") {
                queryParams += "&currency=".concat(parameter.currency);
            }
            var paypalSdkUrl = this.GetPayPalSdkUrl(parameter.mode);
            return "".concat(paypalSdkUrl, "?client-id=").concat(parameter.clientId) + queryParams;
        };
        PayPalScriptManagerInterop.AwaitLoadingPayPalSDKAsync = function (timeout) {
            return __awaiter(this, void 0, void 0, function () {
                var timeoutDate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof timeout !== "number") {
                                timeout = 10000;
                            }
                            timeoutDate = Date.now() + Math.abs(timeout);
                            _a.label = 1;
                        case 1:
                            if (!(typeof paypal !== "object")) return [3, 3];
                            if (Date.now() >= timeoutDate) {
                                return [2, false];
                            }
                            return [4, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                        case 2:
                            _a.sent();
                            return [3, 1];
                        case 3: return [2, true];
                    }
                });
            });
        };
        PayPalScriptManagerInterop.parameter = null;
        PayPalScriptManagerInterop.scriptCounter = 0;
        return PayPalScriptManagerInterop;
    }());
    Bendex.PayPalScriptManagerInterop = PayPalScriptManagerInterop;
})(Bendex || (Bendex = {}));
//# sourceMappingURL=bendex-ui-razor.js.map