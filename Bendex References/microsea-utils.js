// https://shop.datus.tech/_content/MicroSea.Utils.JsInterop/scripts/microsea-utils-jsinterop.yty6zzv3n6.js

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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var ComponentInteropBase = (function () {
            function ComponentInteropBase(targetElement, interopCallback) {
                if (interopCallback === void 0) { interopCallback = null; }
                if ((targetElement instanceof HTMLElement) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (typeof interopCallback !== "object") {
                    throw new Error("Invalid argument type.");
                }
                this.targetElement = targetElement;
                this.interopCallback = interopCallback;
            }
            Object.defineProperty(ComponentInteropBase.prototype, "TargetElement", {
                get: function () {
                    return this.targetElement;
                },
                enumerable: false,
                configurable: true
            });
            ComponentInteropBase.prototype.InvokeCallbackMethod = function (methodIdentifier) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (this.interopCallback === null) {
                    return undefined;
                }
                return (_a = this.interopCallback).invokeMethod.apply(_a, __spreadArray([methodIdentifier], args, false));
            };
            ComponentInteropBase.prototype.InvokeCallbackMethodAsync = function (methodIdentifier) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (this.interopCallback === null) {
                                    return [2, undefined];
                                }
                                return [4, (_a = this.interopCallback).invokeMethodAsync.apply(_a, __spreadArray([methodIdentifier], args, false))];
                            case 1: return [2, _b.sent()];
                        }
                    });
                });
            };
            ComponentInteropBase.prototype.Dispose = function () {
                this.targetElement = null;
                this.interopCallback = null;
            };
            return ComponentInteropBase;
        }());
        Utils.ComponentInteropBase = ComponentInteropBase;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var EventUtils = (function () {
            function EventUtils() {
            }
            EventUtils.SenderCallbackWrapper = function (thisArg, callback) {
                function wrapper() {
                    var args = new Array(this);
                    EventUtils.ArgumentsToArray(arguments, args);
                    return callback.apply(thisArg, args);
                }
                return wrapper;
            };
            EventUtils.SenderWebEventWrapper = function (thisArg, callback) {
                function createWrapper(object, callback) {
                    function wrapper() {
                        var args = new Array(this);
                        EventUtils.ArgumentsToArray(arguments, args);
                        return callback.apply(object, args);
                    }
                    ;
                    return wrapper;
                }
                ;
                return createWrapper(thisArg, callback);
            };
            EventUtils.ArgumentsToArray = function (args, array) {
                var newArray = (array instanceof Array) === false;
                if (newArray) {
                    array = new Array();
                }
                for (var i = 0, l = args.length; i < l; i++) {
                    array.push(args[i]);
                }
                if (newArray) {
                    return array;
                }
            };
            EventUtils.CalculateAndDefineEventOffset = function (event) {
                if ((event instanceof MouseEvent) === false) {
                    return false;
                }
                var offset = new Utils.Models.Point(event.clientX, event.clientY);
                if (event.target instanceof Element) {
                    var target = event.target;
                    var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                    offset.x = offset.x - controlOffset.x;
                    offset.y = offset.y - controlOffset.y;
                }
                Object.defineProperty(event, "offsetX", { writable: false, enumerable: true, value: Math.round(offset.x) });
                Object.defineProperty(event, "offsetY", { writable: false, enumerable: true, value: Math.round(offset.y) });
                return true;
            };
            EventUtils.DefineTargetToEvent = function (event, target, currentTarget) {
                if ((event instanceof Event) === false) {
                    return false;
                }
                var eventTarget = target instanceof EventTarget ? target : null;
                Object.defineProperty(event, "target", { writable: false, enumerable: true, value: eventTarget });
                var eventCurrentTarget = currentTarget instanceof EventTarget ? currentTarget : null;
                Object.defineProperty(event, "currentTarget", { writable: false, enumerable: true, value: eventCurrentTarget });
                return true;
            };
            EventUtils.Debounce = function (func, wait) {
                if (wait === void 0) { wait = 100; }
                var timer = null;
                return function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    clearTimeout(timer);
                    timer = window.setTimeout(function () {
                        func.apply(_this, args);
                    }, wait);
                };
            };
            EventUtils.PeriodicDebounce = function (func, wait) {
                if (wait === void 0) { wait = 100; }
                var timer = null;
                var timestamp = null;
                return function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var now = Date.now();
                    clearTimeout(timer);
                    var timeout = wait;
                    if (typeof timestamp === "number") {
                        var ellapsedTime = now - timestamp;
                        timeout = Math.max(timeout - ellapsedTime, 0);
                    }
                    else {
                        timestamp = now;
                    }
                    timer = window.setTimeout(function () {
                        timestamp = null;
                        func.apply(_this, args);
                    }, timeout);
                };
            };
            return EventUtils;
        }());
        Utils.EventUtils = EventUtils;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var GlobalMouseMoveInterop = (function () {
            function GlobalMouseMoveInterop() {
            }
            GlobalMouseMoveInterop.RegisterEvents = function (interopCallback) {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback)) {
                    throw new Error("Interop is already registered.");
                }
                if (Utils.TypeCheckUtils.IsNotNullObject(interopCallback) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.touchHelper = new Utils.TouchToMouseHelper(document);
                this.touchHelper.RegisterEventWrapper("mousemove", { global: true, capture: true, passive: true });
                this.touchHelper.MouseMove.Add(this.OnMouseMoveWrapper);
                this.interopCallback = interopCallback;
            };
            GlobalMouseMoveInterop.UnregisterEvents = function () {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback) === false) {
                    return;
                }
                if (this.touchHelper !== null) {
                    this.touchHelper.UnregisterEventWrapper("mousemove", { global: true, capture: true });
                    this.touchHelper.MouseMove.Remove(this.OnMouseMoveWrapper);
                    this.touchHelper = null;
                }
                this.interopCallback = null;
            };
            GlobalMouseMoveInterop.OnMouseMove = function (event) {
                this.DebouncedHandleMouseMove(event);
                return !event.defaultPrevented;
            };
            GlobalMouseMoveInterop.HandleMouseMove = function (event) {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback) === false) {
                    return;
                }
                this.interopCallback.invokeMethodAsync("MouseMove");
            };
            GlobalMouseMoveInterop.touchHelper = null;
            GlobalMouseMoveInterop.interopCallback = null;
            GlobalMouseMoveInterop.OnMouseMoveWrapper = GlobalMouseMoveInterop.OnMouseMove.bind(GlobalMouseMoveInterop);
            GlobalMouseMoveInterop.DebouncedHandleMouseMove = Utils.EventUtils.PeriodicDebounce(GlobalMouseMoveInterop.HandleMouseMove, 50);
            return GlobalMouseMoveInterop;
        }());
        Utils.GlobalMouseMoveInterop = GlobalMouseMoveInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var GlobalShortcutInterop = (function () {
            function GlobalShortcutInterop(shortcut, interopCallback) {
                if (Utils.TypeCheckUtils.IsNotNullObject(interopCallback) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.shortcut = shortcut;
                this.interopCallback = interopCallback;
            }
            Object.defineProperty(GlobalShortcutInterop, "ElementCallback", {
                get: function () {
                    if (this.elementCallback === null) {
                        this.elementCallback = new Map();
                    }
                    return this.elementCallback;
                },
                enumerable: false,
                configurable: true
            });
            GlobalShortcutInterop.AddKey = function (componentId, shortcut, interopCallback) {
                if (shortcut === Utils.Models.Keys.None)
                    return;
                if (this.ElementCallback.has(componentId) === false) {
                    this.ElementCallback.set(componentId, new GlobalShortcutInterop(shortcut, interopCallback));
                    if (this.ElementCallback.size === 1) {
                        document.addEventListener("keydown", this.Wrapped_OnKeyDown, { capture: true, passive: false });
                        document.addEventListener("keyup", this.Wrapped_OnKeyUp, { capture: true, passive: false });
                    }
                }
            };
            GlobalShortcutInterop.RemoveKey = function (componentId) {
                if (this.ElementCallback.has(componentId) === true) {
                    this.ElementCallback.delete(componentId);
                    if (this.ElementCallback.size < 1) {
                        document.removeEventListener("keydown", this.Wrapped_OnKeyDown, { capture: true });
                        document.removeEventListener("keyup", this.Wrapped_OnKeyUp, { capture: true });
                    }
                }
            };
            GlobalShortcutInterop.OnKeyDown = function (event) {
                if (Utils.ElementHelper.IsTextInputElement(document.activeElement) === true) {
                    return !event.defaultPrevented;
                }
                var keyData = Utils.ConvertionHelper.GetKeyData(event);
                if (this.HandleKeyDown(keyData) === true) {
                    event.preventDefault();
                }
                return !event.defaultPrevented;
            };
            GlobalShortcutInterop.OnKeyUp = function (event) {
                if (Utils.ElementHelper.IsTextInputElement(document.activeElement) === true) {
                    return !event.defaultPrevented;
                }
                var keyData = Utils.ConvertionHelper.GetKeyData(event);
                if (this.HandleKeyUp(keyData) === true) {
                    event.preventDefault();
                }
                return !event.defaultPrevented;
            };
            GlobalShortcutInterop.HandleKeyDown = function (keyData) {
                var foundShortcut = false;
                this.ElementCallback.forEach(function (value) {
                    if (value.shortcut !== keyData) {
                        return;
                    }
                    foundShortcut = true;
                });
                return foundShortcut;
            };
            GlobalShortcutInterop.HandleKeyUp = function (keyData) {
                var foundShortcut = false;
                this.ElementCallback.forEach(function (value) {
                    if (value.shortcut !== keyData) {
                        return;
                    }
                    try {
                        foundShortcut = true;
                        value.interopCallback.invokeMethodAsync("ShortcutPressed", keyData);
                    }
                    catch (ex) {
                        console.error(ex);
                    }
                });
                return foundShortcut;
            };
            GlobalShortcutInterop.elementCallback = null;
            GlobalShortcutInterop.Wrapped_OnKeyDown = GlobalShortcutInterop.OnKeyDown.bind(GlobalShortcutInterop);
            GlobalShortcutInterop.Wrapped_OnKeyUp = GlobalShortcutInterop.OnKeyUp.bind(GlobalShortcutInterop);
            return GlobalShortcutInterop;
        }());
        Utils.GlobalShortcutInterop = GlobalShortcutInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var HtmlElementInterop = (function () {
            function HtmlElementInterop() {
            }
            HtmlElementInterop.BlurActiveElement = function () {
                var activeElement = document.activeElement;
                if ((activeElement instanceof HTMLElement) === false) {
                    return false;
                }
                activeElement.blur();
                return true;
            };
            HtmlElementInterop.BlurElement = function (element) {
                if ((element instanceof HTMLElement) === false) {
                    return false;
                }
                element.blur();
                return true;
            };
            HtmlElementInterop.FocusElement = function (element) {
                if ((element instanceof HTMLElement) === false) {
                    return false;
                }
                element.focus();
                return true;
            };
            HtmlElementInterop.IsElementFocused = function (element) {
                if ((element instanceof HTMLElement) === false) {
                    return false;
                }
                return document.activeElement === element;
            };
            HtmlElementInterop.SelectActiveInputElement = function () {
                var activeElement = document.activeElement;
                if ((activeElement instanceof HTMLInputElement) === false) {
                    return false;
                }
                activeElement.select();
                return true;
            };
            HtmlElementInterop.SelectInputElement = function (element) {
                if ((element instanceof HTMLInputElement) === false) {
                    return false;
                }
                element.focus();
                element.select();
                return true;
            };
            HtmlElementInterop.ScrollElementIntoView = function (element, scrollToOption) {
                if ((element instanceof HTMLElement) === false) {
                    return false;
                }
                if ((scrollToOption in Utils.Models.ScrollToOption) === false) {
                    scrollToOption = Utils.Models.ScrollToOption.ScrollToTop;
                }
                switch (scrollToOption) {
                    case Utils.Models.ScrollToOption.ScrollToTop:
                        element.scrollIntoView(true);
                        return true;
                    case Utils.Models.ScrollToOption.ScollToCenter:
                        element.scrollIntoView({ block: "center", inline: "nearest" });
                        return true;
                    case Utils.Models.ScrollToOption.ScrollToBottom:
                        element.scrollIntoView(false);
                        return true;
                    default:
                        return false;
                }
            };
            HtmlElementInterop.ScrollElement = function (element, top, left, smooth) {
                if ((element instanceof HTMLElement && typeof top === "number" && typeof left === "number") === false) {
                    return false;
                }
                var behavior = smooth === true ? "smooth" : "auto";
                element.scroll({ top: top, left: left, behavior: behavior });
                return true;
            };
            HtmlElementInterop.ScrollToElementWhenNeeded = function (scrollContainer, childElement) {
                if ((scrollContainer instanceof HTMLElement) === false) {
                    return false;
                }
                if ((childElement instanceof HTMLElement) === false) {
                    return false;
                }
                var childElementBounds = Utils.ElementHelper.GetBoundingRectWithMargin(childElement);
                return this.ScrollToElementBoundsWhenNeeded(scrollContainer, childElementBounds);
            };
            HtmlElementInterop.ScrollToElementBoundsWhenNeeded = function (scrollContainer, childElementBounds) {
                if ((scrollContainer instanceof HTMLElement) === false) {
                    return false;
                }
                if ((childElementBounds instanceof DOMRect) === false) {
                    return false;
                }
                var scrollContainerBounds = Utils.ElementHelper.GetBoundingClientRect(scrollContainer);
                var cssStyle = window.getComputedStyle(scrollContainer);
                var border = Utils.ElementHelper.GetBorderOfElement(cssStyle);
                var padding = Utils.ElementHelper.GetPaddingOfElement(cssStyle);
                var scrollOffset = Utils.ElementHelper.GetScrollPadding(cssStyle);
                var paddingOrScrollOffset = new Utils.Models.Margin(padding.left, Math.max(padding.top, scrollOffset.top), padding.right, Math.max(padding.bottom, scrollOffset.bottom));
                scrollContainerBounds = new DOMRect(scrollContainerBounds.left + border.left + paddingOrScrollOffset.left, scrollContainerBounds.top + border.top + paddingOrScrollOffset.top, scrollContainerBounds.width - (border.left + paddingOrScrollOffset.left + border.right + paddingOrScrollOffset.right), scrollContainerBounds.height - (border.top + paddingOrScrollOffset.top + border.bottom + paddingOrScrollOffset.bottom));
                if (childElementBounds.top < scrollContainerBounds.top) {
                    var itemOffset = childElementBounds.top - scrollContainerBounds.top;
                    scrollContainer.scrollTop += itemOffset;
                    return true;
                }
                else if (childElementBounds.bottom > scrollContainerBounds.bottom) {
                    var itemOffset = childElementBounds.bottom - scrollContainerBounds.bottom;
                    scrollContainer.scrollTop += itemOffset;
                    return true;
                }
                return false;
            };
            HtmlElementInterop.GetBoundingClientRect = function (element, includePageOffset) {
                if ((element instanceof HTMLElement) === false) {
                    return new DOMRect();
                }
                return Utils.ElementHelper.GetBoundingClientRect(element, includePageOffset);
            };
            HtmlElementInterop.GetBoundingRectWithMargin = function (element, includePageOffset) {
                if ((element instanceof HTMLElement) === false) {
                    return new DOMRect();
                }
                return Utils.ElementHelper.GetBoundingRectWithMargin(element, includePageOffset);
            };
            HtmlElementInterop.GetBoundingClientRectWithoutPadding = function (element, includePageOffset) {
                if ((element instanceof HTMLElement) === false) {
                    return new DOMRect();
                }
                return Utils.ElementHelper.GetBoundingClientRectWithoutPadding(element, includePageOffset);
            };
            HtmlElementInterop.BlurChildElement = function (element, selectors) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    return this.BlurElement(childElement);
                }
                return false;
            };
            HtmlElementInterop.FocusChildElement = function (element, selectors) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    return this.FocusElement(childElement);
                }
                return false;
            };
            HtmlElementInterop.FocusFocusableChildElement = function (element) {
                if (element instanceof HTMLElement) {
                    return this.FocusChildElement(element, MicroSea.Utils.FocusableElementSelector);
                }
                return false;
            };
            HtmlElementInterop.IsChildElementFocused = function (element, selectors) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    return this.IsElementFocused(childElement);
                }
                return false;
            };
            HtmlElementInterop.SelectChildInputElement = function (element, selectors) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLInputElement);
                    return this.SelectInputElement(childElement);
                }
                return false;
            };
            HtmlElementInterop.ScrollChildElementIntoView = function (element, selectors, scrollToOption) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    return this.ScrollElementIntoView(childElement, scrollToOption);
                }
                return false;
            };
            HtmlElementInterop.ScrollChildElement = function (element, selectors, top, left, smooth) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    return this.ScrollElement(childElement, top, left, smooth);
                }
                return false;
            };
            HtmlElementInterop.ScrollToChildElementWhenNeeded = function (scrollContainerOrElement, childElementSelectorOrScrollContainerSelector, childElementSelector) {
                var scrollContainer = null;
                if (typeof childElementSelector === "string") {
                    var element = scrollContainerOrElement;
                    var scrollContainerSelector = childElementSelectorOrScrollContainerSelector;
                    scrollContainer = element instanceof HTMLElement && typeof scrollContainerSelector === "string"
                        ? element.querySelector(scrollContainerSelector)
                        : null;
                }
                else {
                    scrollContainer = scrollContainerOrElement;
                    childElementSelector = childElementSelectorOrScrollContainerSelector;
                }
                if (scrollContainer instanceof HTMLElement && typeof childElementSelector === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(scrollContainer.querySelector(childElementSelector), HTMLElement);
                    return this.ScrollToElementWhenNeeded(scrollContainer, childElement);
                }
                return false;
            };
            ;
            HtmlElementInterop.ScrollToChildElementBoundsWhenNeeded = function (element, scrollContainerSelector, childElementBounds) {
                if (element instanceof HTMLElement && typeof scrollContainerSelector === "string") {
                    var scrollContainer = Utils.TypeCheckUtils.AsClass(element.querySelector(scrollContainerSelector), HTMLElement);
                    if (scrollContainer !== null) {
                        return this.ScrollToElementBoundsWhenNeeded(scrollContainer, childElementBounds);
                    }
                }
                return false;
            };
            ;
            HtmlElementInterop.GetChildElementsBoundingClientRect = function (element, selectors, includePageOffset) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    if (childElement !== null) {
                        return this.GetBoundingClientRect(childElement, includePageOffset);
                    }
                }
                return new DOMRect();
            };
            HtmlElementInterop.GetChildElementsBoundingRectWithMargin = function (element, selectors, includePageOffset) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    if (childElement !== null) {
                        return this.GetBoundingRectWithMargin(childElement, includePageOffset);
                    }
                }
                return new DOMRect();
            };
            HtmlElementInterop.GetChildElementsBoundingClientRectWithoutPadding = function (element, selectors, includePageOffset) {
                if (element instanceof HTMLElement && typeof selectors === "string") {
                    var childElement = Utils.TypeCheckUtils.AsClass(element.querySelector(selectors), HTMLElement);
                    if (childElement !== null) {
                        return this.GetBoundingClientRectWithoutPadding(childElement, includePageOffset);
                    }
                }
                return new DOMRect();
            };
            HtmlElementInterop.FindHoveredItem = function (elements, clientPos) {
                var hoveredItemId = null;
                if (elements instanceof Array && Utils.TypeCheckUtils.IsNotNullObject(clientPos) && typeof clientPos.x === "number" && typeof clientPos.y === "number") {
                    for (var index = 0, length_1 = elements.length; index < length_1; index++) {
                        if (Utils.TypeCheckUtils.IsNullOrString(elements[index]) === false)
                            continue;
                        var element = document.getElementById(elements[index]);
                        if (element !== null && Utils.ElementHelper.IsInside(element, clientPos.x, clientPos.y)) {
                            hoveredItemId = element.id;
                            break;
                        }
                    }
                }
                return hoveredItemId;
            };
            return HtmlElementInterop;
        }());
        Utils.HtmlElementInterop = HtmlElementInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var HtmlWindowEventsInterop = (function () {
            function HtmlWindowEventsInterop(interopCallback) {
                this.Wrapped_OnResize = this.OnResize.bind(this);
                this.DebouncedHandleResize = Utils.EventUtils.Debounce(this.HandleResize, 100);
                this.Wrapped_OnBeforeUnload = this.OnBeforeUnload.bind(this);
                if (typeof interopCallback !== "object") {
                    throw new Error("Invalid argument type.");
                }
                this.interopCallback = interopCallback;
                this.resizeEventRegisted = false;
                this.beforeUnloadEventRegisted = false;
            }
            HtmlWindowEventsInterop.CreateInstance = function (interopCallback) {
                return new HtmlWindowEventsInterop(interopCallback);
            };
            HtmlWindowEventsInterop.prototype.Dispose = function () {
                this.interopCallback = null;
                if (this.resizeEventRegisted) {
                    this.UnregisterResizeEvent();
                }
                if (this.beforeUnloadEventRegisted) {
                    this.UnregisterBeforeUnloadEvent();
                }
            };
            HtmlWindowEventsInterop.prototype.RegisterResizeEvent = function () {
                if (this.resizeEventRegisted === true) {
                    throw new Error("Interop is already registered.");
                }
                window.addEventListener("resize", this.Wrapped_OnResize, { capture: true, passive: true });
                this.resizeEventRegisted = true;
            };
            HtmlWindowEventsInterop.prototype.UnregisterResizeEvent = function () {
                if (this.resizeEventRegisted === false) {
                    throw new Error("No Interop is registered.");
                }
                window.removeEventListener("resize", this.Wrapped_OnResize, { capture: true });
                this.resizeEventRegisted = false;
            };
            HtmlWindowEventsInterop.prototype.OnResize = function (event) {
                this.DebouncedHandleResize(event);
                return !event.defaultPrevented;
            };
            HtmlWindowEventsInterop.prototype.HandleResize = function (event) {
                if (this.resizeEventRegisted === false) {
                    return;
                }
                var viewportState = Utils.BreakpointUtils.GetViewportState();
                this.interopCallback.invokeMethodAsync("Resized", viewportState);
            };
            HtmlWindowEventsInterop.prototype.RegisterBeforeUnloadEvent = function () {
                if (this.beforeUnloadEventRegisted === true) {
                    throw new Error("Interop is already registered.");
                }
                window.addEventListener("beforeunload", this.Wrapped_OnBeforeUnload, { capture: true, passive: true });
            };
            HtmlWindowEventsInterop.prototype.UnregisterBeforeUnloadEvent = function () {
                if (this.beforeUnloadEventRegisted === false) {
                    throw new Error("No Interop is registered.");
                }
                window.removeEventListener("beforeunload", this.Wrapped_OnBeforeUnload, { capture: true });
            };
            HtmlWindowEventsInterop.prototype.OnBeforeUnload = function (event) {
                if (this.beforeUnloadEventRegisted === false) {
                    return;
                }
                this.interopCallback.invokeMethodAsync("BeforeUnload");
                return !event.defaultPrevented;
            };
            return HtmlWindowEventsInterop;
        }());
        Utils.HtmlWindowEventsInterop = HtmlWindowEventsInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var HtmlWindowInterop = (function () {
            function HtmlWindowInterop() {
            }
            HtmlWindowInterop.GetNavigationType = function () {
                var performance = window.performance;
                if (performance instanceof Performance) {
                    var performanceEntryList = performance.getEntriesByType("navigation");
                    if (performanceEntryList.length > 0) {
                        var performanceNavigationTiming = performanceEntryList[0];
                        if (performanceNavigationTiming instanceof PerformanceNavigationTiming) {
                            switch (performanceNavigationTiming.type) {
                                case "navigate":
                                    return WindowNavigationType.Navigate;
                                case "reload":
                                    return WindowNavigationType.Reload;
                                case "back_forward":
                                    return WindowNavigationType.BackOrForward;
                                case "prerender":
                                    return WindowNavigationType.Prerender;
                                default:
                                    break;
                            }
                        }
                    }
                    var performanceNavigation = performance.navigation;
                    if (performanceNavigation instanceof PerformanceNavigation) {
                        switch (performanceNavigation.type) {
                            case performanceNavigation.TYPE_NAVIGATE:
                                return WindowNavigationType.Navigate;
                            case performanceNavigation.TYPE_RELOAD:
                                return WindowNavigationType.Reload;
                            case performanceNavigation.TYPE_BACK_FORWARD:
                                return WindowNavigationType.BackOrForward;
                            case performanceNavigation.TYPE_RESERVED:
                                return WindowNavigationType.Reserved;
                            default:
                                break;
                        }
                    }
                }
                return WindowNavigationType.Navigate;
            };
            HtmlWindowInterop.NavigateBack = function () {
                window.history.back();
            };
            HtmlWindowInterop.GetDevicePixelRatio = function () {
                return window.devicePixelRatio || 1;
            };
            HtmlWindowInterop.GetViewportState = function () {
                return Utils.BreakpointUtils.GetViewportState();
            };
            HtmlWindowInterop.GetParameter = function (path) {
                var result = window;
                if (typeof path === "string" && path !== "") {
                    var parts = path.split(".");
                    for (var i = 0, l = parts.length; i < l && result !== undefined; i++)
                        result = result[parts[i]];
                }
                return result;
            };
            HtmlWindowInterop.SetParameter = function (path, value) {
                var result = window;
                if (typeof path === "string" && path !== "") {
                    var parts = path.split(".");
                    for (var i = 0, l = parts.length - 1; i <= l && result !== undefined; i++) {
                        if (i === l) {
                            result[parts[i]] = value;
                        }
                        else {
                            result = result[parts[i]];
                        }
                    }
                }
            };
            HtmlWindowInterop.DownloadFile = function (filename, fileContent) {
                if (typeof filename !== "string")
                    throw "Filename not provided!";
                if (typeof fileContent !== "string")
                    throw "File content not provided!";
                var link = document.createElement("a");
                link.download = filename;
                link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
                try {
                    document.body.appendChild(link);
                    link.click();
                }
                finally {
                    document.body.removeChild(link);
                }
            };
            return HtmlWindowInterop;
        }());
        Utils.HtmlWindowInterop = HtmlWindowInterop;
        var WindowNavigationType;
        (function (WindowNavigationType) {
            WindowNavigationType[WindowNavigationType["Navigate"] = 0] = "Navigate";
            WindowNavigationType[WindowNavigationType["Reload"] = 1] = "Reload";
            WindowNavigationType[WindowNavigationType["BackOrForward"] = 2] = "BackOrForward";
            WindowNavigationType[WindowNavigationType["Prerender"] = 3] = "Prerender";
            WindowNavigationType[WindowNavigationType["Reserved"] = 255] = "Reserved";
        })(WindowNavigationType || (WindowNavigationType = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var KeyboardNavigationInterop = (function () {
            function KeyboardNavigationInterop(itemContainerQuerySelector, itemsQuerySelector) {
                this.Wrapped_OnClick = this.OnClick.bind(this);
                this.Debounced_OnFocusIn = Utils.EventUtils.Debounce(this.OnFocusItemContainer.bind(this), 0);
                this.Wrapped_OnFocusOut = this.OnBlurItemContainer.bind(this);
                this.Wrapped_OnKeyDown = this.OnKeyDown.bind(this);
                if (typeof itemContainerQuerySelector !== "string") {
                    throw new Error("Invalid argument type.");
                }
                if (typeof itemsQuerySelector !== "string") {
                    throw new Error("Invalid argument type.");
                }
                this.itemContainerQuerySelector = itemContainerQuerySelector;
                this.itemsQuerySelector = itemsQuerySelector;
                this.currentlyFocusedItem = null;
                this.subItemContainerQuerySelector = null;
                this.selectedItemQuerySelector = null;
                this.selectOnFocus = false;
                document.addEventListener("click", this.Wrapped_OnClick, { capture: true, passive: false });
                document.addEventListener("focusin", this.Debounced_OnFocusIn, { capture: true, passive: false });
                document.addEventListener("focusout", this.Wrapped_OnFocusOut, { capture: true, passive: false });
                document.addEventListener("keydown", this.Wrapped_OnKeyDown, { capture: true, passive: false });
            }
            KeyboardNavigationInterop.CreateInstance = function (itemContainerQuerySelector, itemQuerySelector) {
                return new KeyboardNavigationInterop(itemContainerQuerySelector, itemQuerySelector);
            };
            KeyboardNavigationInterop.prototype.UpdateSubItemContainerQuerySelector = function (subItemContainerQuerySelector) {
                if (Utils.TypeCheckUtils.IsNullOrString(subItemContainerQuerySelector) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.subItemContainerQuerySelector = subItemContainerQuerySelector;
            };
            KeyboardNavigationInterop.prototype.UpdateSelectedItemQuerySelector = function (selectedItemQuerySelector) {
                if (Utils.TypeCheckUtils.IsNullOrString(selectedItemQuerySelector) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.selectedItemQuerySelector = selectedItemQuerySelector;
            };
            KeyboardNavigationInterop.prototype.UpdateSelectOnFocus = function (selectOnFocus) {
                if (typeof selectOnFocus !== "boolean") {
                    throw new Error("Invalid argument type.");
                }
                this.selectOnFocus = selectOnFocus;
            };
            KeyboardNavigationInterop.prototype.Dispose = function () {
                document.removeEventListener("click", this.Wrapped_OnClick, { capture: true });
                document.removeEventListener("focusin", this.Debounced_OnFocusIn, { capture: true });
                document.removeEventListener("focusout", this.Wrapped_OnFocusOut, { capture: true });
                document.removeEventListener("keydown", this.Wrapped_OnKeyDown, { capture: true });
                this.itemContainerQuerySelector = null;
                this.itemsQuerySelector = null;
                this.currentlyFocusedItem = null;
                this.subItemContainerQuerySelector = null;
                this.selectedItemQuerySelector = null;
                this.selectOnFocus = false;
            };
            KeyboardNavigationInterop.prototype.OnClick = function (event) {
                var eventTarget = Utils.TypeCheckUtils.AsClass(event.target, HTMLElement);
                if (eventTarget === null) {
                    return !event.defaultPrevented;
                }
                if (eventTarget === document.activeElement || eventTarget.matches(Utils.FocusableElementSelector) === false) {
                    return !event.defaultPrevented;
                }
                eventTarget.focus();
                return !event.defaultPrevented;
            };
            KeyboardNavigationInterop.prototype.OnFocusItemContainer = function (event) {
                var focusedElement = Utils.TypeCheckUtils.AsClass(document.activeElement, HTMLElement);
                var focusedItemReference = this.FindFocusItemReference(focusedElement);
                if ((focusedItemReference === null || focusedItemReference === void 0 ? void 0 : focusedItemReference.itemContainer) === null || focusedElement === null) {
                    return !event.defaultPrevented;
                }
                if (focusedItemReference.item === null) {
                    var previouslyFocusedElement = Utils.TypeCheckUtils.AsClass(event.relatedTarget, HTMLElement);
                    if (previouslyFocusedElement !== null && Utils.ElementHelper.IsChildOf(focusedItemReference.itemContainer, previouslyFocusedElement)) {
                        if (Utils.ElementHelper.IsReversedFocus(document.body, focusedElement, previouslyFocusedElement)) {
                            var previousFocusableElement = Utils.ElementHelper.FindPreviousFocusableElement(document.body, focusedElement, true);
                            if (previousFocusableElement !== null) {
                                previousFocusableElement.focus();
                            }
                        }
                        return !event.defaultPrevented;
                    }
                }
                this.PreFocusItem(focusedItemReference);
                return !event.defaultPrevented;
            };
            KeyboardNavigationInterop.prototype.OnBlurItemContainer = function (event) {
                var elementToFocus = Utils.TypeCheckUtils.AsClass(event.relatedTarget, HTMLElement);
                var elementToFocusReference = this.FindFocusItemReference(elementToFocus);
                if ((elementToFocusReference === null || elementToFocusReference === void 0 ? void 0 : elementToFocusReference.item) !== null) {
                    return !event.defaultPrevented;
                }
                this.FocusItem(null);
                return !event.defaultPrevented;
            };
            KeyboardNavigationInterop.prototype.OnKeyDown = function (event) {
                var focusedElement = Utils.TypeCheckUtils.AsClass(document.activeElement, HTMLElement);
                var itemContainer = this.FindFocusItemContainer(focusedElement, this.itemContainerQuerySelector);
                if (itemContainer === null || focusedElement === null) {
                    return !event.defaultPrevented;
                }
                if (itemContainer !== focusedElement && Utils.ElementHelper.IsChildOf(itemContainer, focusedElement) === false) {
                    return !event.defaultPrevented;
                }
                var keyData = Utils.ConvertionHelper.GetKeyData(event);
                switch (keyData) {
                    case Utils.Models.Keys.Up:
                        {
                            event.preventDefault();
                            event.stopPropagation();
                            var itemToFocus = this.NavigateUpHandler(itemContainer, this.currentlyFocusedItem);
                            this.FocusItem(itemToFocus);
                            break;
                        }
                    case Utils.Models.Keys.Down:
                        {
                            event.preventDefault();
                            event.stopPropagation();
                            var itemToFocus = this.NavigateDownHandler(itemContainer, this.currentlyFocusedItem);
                            this.FocusItem(itemToFocus);
                            break;
                        }
                    case Utils.Models.Keys.Left:
                        {
                            event.preventDefault();
                            event.stopPropagation();
                            var itemToFocus = this.NavigateLeftHandler(itemContainer, this.currentlyFocusedItem);
                            this.FocusItem(itemToFocus);
                            break;
                        }
                    case Utils.Models.Keys.Right:
                        {
                            event.preventDefault();
                            event.stopPropagation();
                            var itemToFocus = this.NavigateRightHandler(itemContainer, this.currentlyFocusedItem);
                            this.FocusItem(itemToFocus);
                            break;
                        }
                }
                return !event.defaultPrevented;
            };
            KeyboardNavigationInterop.prototype.NavigateUpHandler = function (itemContainer, selectedItem) {
                var itemCollection = itemContainer.querySelectorAll(this.itemsQuerySelector);
                var numberOfItemsInRow = this.CalculateNumberOfItemsInRow(itemContainer, itemCollection);
                if (numberOfItemsInRow < 1) {
                    return null;
                }
                var groupedItemCollections = this.GetGroupedItemCollections(itemCollection);
                var groupOfSearchItem = selectedItem instanceof HTMLElement ? selectedItem.parentElement : null;
                var groupCollection = Array.from(groupedItemCollections.keys());
                var groupItems = groupedItemCollections.get(groupOfSearchItem);
                var currentGroupIndex = Array.isArray(groupCollection) ? groupCollection.indexOf(groupOfSearchItem) : -1;
                if (currentGroupIndex < 0 || currentGroupIndex >= groupCollection.length) {
                    return null;
                }
                var itemIndex = Array.isArray(groupItems) ? groupItems.indexOf(selectedItem) : -1;
                if (itemIndex < 0 || itemIndex >= groupItems.length) {
                    return null;
                }
                if (itemIndex < numberOfItemsInRow) {
                    if (currentGroupIndex <= 0) {
                        return selectedItem;
                    }
                    var newSelectedGroup = groupCollection[currentGroupIndex - 1];
                    var newSelectedGroupItems = groupedItemCollections.get(newSelectedGroup);
                    var itemsOutsideFullRow = newSelectedGroupItems.length % numberOfItemsInRow;
                    var itemCountInLastRow = itemsOutsideFullRow > 0 ? itemsOutsideFullRow : Math.min(numberOfItemsInRow, newSelectedGroupItems.length);
                    var itemCountInFullRows = Math.floor(newSelectedGroupItems.length / numberOfItemsInRow) * numberOfItemsInRow;
                    var firstItemIndexInLastRow = itemCountInFullRows - (itemsOutsideFullRow === 0 ? itemCountInLastRow : 0);
                    var newSelectedItemIndex_1 = firstItemIndexInLastRow + itemIndex;
                    if (newSelectedItemIndex_1 < 0 || newSelectedItemIndex_1 >= newSelectedGroupItems.length) {
                        return selectedItem;
                    }
                    return newSelectedGroupItems[newSelectedItemIndex_1];
                }
                var newSelectedItemIndex = itemIndex - numberOfItemsInRow;
                if (newSelectedItemIndex < 0) {
                    return selectedItem;
                }
                return groupItems[newSelectedItemIndex];
            };
            KeyboardNavigationInterop.prototype.NavigateDownHandler = function (itemContainer, selectedItem) {
                var itemCollection = itemContainer.querySelectorAll(this.itemsQuerySelector);
                var numberOfItemsInRow = this.CalculateNumberOfItemsInRow(itemContainer, itemCollection);
                if (numberOfItemsInRow < 1) {
                    return null;
                }
                var groupedItemCollections = this.GetGroupedItemCollections(itemCollection);
                var groupOfSearchItem = selectedItem instanceof HTMLElement ? selectedItem.parentElement : null;
                var groupCollection = Array.from(groupedItemCollections.keys());
                var groupItems = groupedItemCollections.get(groupOfSearchItem);
                var currentGroupIndex = Array.isArray(groupCollection) ? groupCollection.indexOf(groupOfSearchItem) : -1;
                if (currentGroupIndex < 0 || currentGroupIndex >= groupCollection.length) {
                    return null;
                }
                var itemIndex = Array.isArray(groupItems) ? groupItems.indexOf(selectedItem) : -1;
                if (itemIndex < 0 || itemIndex >= groupItems.length) {
                    return null;
                }
                var itemsOutsideFullRow = groupItems.length % numberOfItemsInRow;
                var numberOfRows = Math.floor(groupItems.length / numberOfItemsInRow) + (itemsOutsideFullRow > 0 ? 1 : 0);
                var rowIndexOfSelectedProfile = Math.floor(itemIndex / numberOfItemsInRow);
                if (rowIndexOfSelectedProfile >= numberOfRows - 1) {
                    if (currentGroupIndex + 1 >= groupCollection.length) {
                        return selectedItem;
                    }
                    var newSelectedGroup = groupCollection[currentGroupIndex + 1];
                    var newSelectedGroupItems = groupedItemCollections.get(newSelectedGroup);
                    var itemCountInLastRow = itemsOutsideFullRow > 0 ? itemsOutsideFullRow : Math.min(numberOfItemsInRow, groupItems.length);
                    var itemCountInFullRows = Math.floor(groupItems.length / numberOfItemsInRow) * numberOfItemsInRow;
                    var firstItemIndexInLastRow = itemCountInFullRows - (itemsOutsideFullRow === 0 ? itemCountInLastRow : 0);
                    var newSelectedItemIndex_2 = itemIndex - firstItemIndexInLastRow;
                    if (newSelectedItemIndex_2 < 0 || newSelectedItemIndex_2 >= newSelectedGroupItems.length) {
                        return selectedItem;
                    }
                    return newSelectedGroupItems[newSelectedItemIndex_2];
                }
                var newSelectedItemIndex = itemIndex + numberOfItemsInRow;
                if (newSelectedItemIndex >= groupItems.length) {
                    return selectedItem;
                }
                return groupItems[newSelectedItemIndex];
            };
            KeyboardNavigationInterop.prototype.NavigateLeftHandler = function (itemContainer, selectedItem) {
                var itemCollection = itemContainer.querySelectorAll(this.itemsQuerySelector);
                var numberOfItemsInRow = this.CalculateNumberOfItemsInRow(itemContainer, itemCollection);
                if (numberOfItemsInRow < 1) {
                    return null;
                }
                var groupedItemCollections = this.GetGroupedItemCollections(itemCollection);
                var groupOfSearchItem = selectedItem instanceof HTMLElement ? selectedItem.parentElement : null;
                var groupItems = groupedItemCollections.get(groupOfSearchItem);
                var itemIndex = Array.isArray(groupItems) ? groupItems.indexOf(selectedItem) : -1;
                if (itemIndex < 0 || itemIndex >= groupItems.length) {
                    return null;
                }
                var newSelectedItemIndex = itemIndex - 1;
                if (newSelectedItemIndex < 0 || itemIndex % numberOfItemsInRow === 0) {
                    return selectedItem;
                }
                return groupItems[newSelectedItemIndex];
            };
            KeyboardNavigationInterop.prototype.NavigateRightHandler = function (itemContainer, selectedItem) {
                var itemCollection = itemContainer.querySelectorAll(this.itemsQuerySelector);
                var numberOfItemsInRow = this.CalculateNumberOfItemsInRow(itemContainer, itemCollection);
                if (numberOfItemsInRow < 1) {
                    return null;
                }
                var groupedItemCollections = this.GetGroupedItemCollections(itemCollection);
                var groupOfSearchItem = selectedItem instanceof HTMLElement ? selectedItem.parentElement : null;
                var groupItems = groupedItemCollections.get(groupOfSearchItem);
                var itemIndex = Array.isArray(groupItems) ? groupItems.indexOf(selectedItem) : -1;
                if (itemIndex < 0 || itemIndex >= groupItems.length) {
                    return null;
                }
                var newSelectedItemIndex = itemIndex + 1;
                if (newSelectedItemIndex >= groupItems.length || newSelectedItemIndex % numberOfItemsInRow === 0) {
                    return selectedItem;
                }
                return groupItems[newSelectedItemIndex];
            };
            KeyboardNavigationInterop.prototype.FindFocusItemReference = function (referenceElement) {
                var result = { itemContainer: null, item: null };
                if ((referenceElement instanceof HTMLElement) === false) {
                    return result;
                }
                if (typeof this.subItemContainerQuerySelector === "string") {
                    result.itemContainer = this.FindFocusItemContainer(referenceElement, "".concat(this.itemContainerQuerySelector, " ").concat(this.subItemContainerQuerySelector));
                }
                else {
                    result.itemContainer = this.FindFocusItemContainer(referenceElement, this.itemContainerQuerySelector);
                }
                if (result.itemContainer === null) {
                    return result;
                }
                var itemCollection = result.itemContainer.querySelectorAll(this.itemsQuerySelector);
                for (var i = 0; i < itemCollection.length; i++) {
                    var item = itemCollection.item(i);
                    if (item === referenceElement || Utils.ElementHelper.IsChildOf(item, referenceElement)) {
                        result.item = item;
                    }
                }
                return result;
            };
            KeyboardNavigationInterop.prototype.FindFocusItemContainer = function (referenceElement, querySelector) {
                if ((referenceElement instanceof HTMLElement) === false) {
                    return null;
                }
                if (typeof querySelector !== "string") {
                    return null;
                }
                var itemContainers = document.querySelectorAll(querySelector);
                for (var i = 0; i < itemContainers.length; i++) {
                    var itemContainer = itemContainers.item(i);
                    if (itemContainer === referenceElement || Utils.ElementHelper.IsChildOf(itemContainer, referenceElement)) {
                        return itemContainer;
                    }
                }
                return null;
            };
            KeyboardNavigationInterop.prototype.CalculateNumberOfItemsInRow = function (itemContainer, itemCollection) {
                if ((itemContainer instanceof HTMLElement) === false || (itemCollection instanceof NodeList) === false || itemCollection.length < 1) {
                    return 0;
                }
                var itemContainerRect = Utils.HtmlElementInterop.GetBoundingClientRect(itemContainer);
                var itemRect = Utils.HtmlElementInterop.GetBoundingClientRect(itemCollection.item(0));
                return itemRect.width > 0 ? Math.floor(itemContainerRect.width / itemRect.width) : 0;
            };
            KeyboardNavigationInterop.prototype.GetGroupedItemCollections = function (itemCollection) {
                var groupedItemCollection = new Map();
                if (itemCollection instanceof NodeList) {
                    itemCollection.forEach(function (item) {
                        var itemGroup = groupedItemCollection.get(item.parentElement);
                        if (Array.isArray(itemGroup) === false) {
                            itemGroup = new Array(0);
                            groupedItemCollection.set(item.parentElement, itemGroup);
                        }
                        itemGroup.push(item);
                    });
                }
                return groupedItemCollection;
            };
            KeyboardNavigationInterop.prototype.PreFocusItem = function (focusedItemReference) {
                if (((focusedItemReference === null || focusedItemReference === void 0 ? void 0 : focusedItemReference.itemContainer) instanceof HTMLElement) === false) {
                    return;
                }
                var itemToFoucs = focusedItemReference.item;
                if (itemToFoucs === null && this.selectedItemQuerySelector !== null) {
                    itemToFoucs = focusedItemReference.itemContainer.querySelector(this.selectedItemQuerySelector);
                }
                if (itemToFoucs === null) {
                    itemToFoucs = focusedItemReference.itemContainer.querySelector(this.itemsQuerySelector);
                }
                if (itemToFoucs !== null) {
                    this.FocusItem(itemToFoucs);
                }
            };
            KeyboardNavigationInterop.prototype.FocusItem = function (itemToFocus) {
                if (this.currentlyFocusedItem === itemToFocus) {
                    return;
                }
                this.currentlyFocusedItem = itemToFocus;
                if (this.currentlyFocusedItem instanceof HTMLElement) {
                    var positionTargetOverflowParent = Utils.ElementHelper.GetOverflowParent(this.currentlyFocusedItem);
                    Utils.HtmlElementInterop.ScrollToElementWhenNeeded(positionTargetOverflowParent, this.currentlyFocusedItem);
                }
                if ((itemToFocus instanceof HTMLElement) === false) {
                    itemToFocus = null;
                }
                else if (itemToFocus.matches(Utils.FocusableElementSelector) === false) {
                    itemToFocus = itemToFocus.querySelector(Utils.FocusableElementSelector);
                }
                if (itemToFocus === null) {
                    Utils.HtmlElementInterop.BlurActiveElement();
                    return;
                }
                itemToFocus.focus();
                if (this.selectOnFocus === true) {
                    itemToFocus.click();
                }
            };
            return KeyboardNavigationInterop;
        }());
        Utils.KeyboardNavigationInterop = KeyboardNavigationInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var Keys;
            (function (Keys) {
                Keys[Keys["None"] = 0] = "None";
                Keys[Keys["KeyCode"] = 65535] = "KeyCode";
                Keys[Keys["Modifiers"] = 4294901760] = "Modifiers";
                Keys[Keys["LButton"] = 1] = "LButton";
                Keys[Keys["RButton"] = 2] = "RButton";
                Keys[Keys["Cancel"] = 3] = "Cancel";
                Keys[Keys["MButton"] = 4] = "MButton";
                Keys[Keys["XButton1"] = 5] = "XButton1";
                Keys[Keys["XButton2"] = 6] = "XButton2";
                Keys[Keys["Back"] = 8] = "Back";
                Keys[Keys["Tab"] = 9] = "Tab";
                Keys[Keys["LineFeed"] = 10] = "LineFeed";
                Keys[Keys["Clear"] = 12] = "Clear";
                Keys[Keys["Return"] = 13] = "Return";
                Keys[Keys["Enter"] = 13] = "Enter";
                Keys[Keys["ShiftKey"] = 16] = "ShiftKey";
                Keys[Keys["ControlKey"] = 17] = "ControlKey";
                Keys[Keys["Menu"] = 18] = "Menu";
                Keys[Keys["Pause"] = 19] = "Pause";
                Keys[Keys["Capital"] = 20] = "Capital";
                Keys[Keys["CapsLock"] = 20] = "CapsLock";
                Keys[Keys["KanaMode"] = 21] = "KanaMode";
                Keys[Keys["HanguelMode"] = 21] = "HanguelMode";
                Keys[Keys["HangulMode"] = 21] = "HangulMode";
                Keys[Keys["JunjaMode"] = 23] = "JunjaMode";
                Keys[Keys["FinalMode"] = 24] = "FinalMode";
                Keys[Keys["HanjaMode"] = 25] = "HanjaMode";
                Keys[Keys["KanjiMode"] = 25] = "KanjiMode";
                Keys[Keys["Escape"] = 27] = "Escape";
                Keys[Keys["IMEConvert"] = 28] = "IMEConvert";
                Keys[Keys["IMENonconvert"] = 29] = "IMENonconvert";
                Keys[Keys["IMEAccept"] = 30] = "IMEAccept";
                Keys[Keys["IMEAceept"] = 30] = "IMEAceept";
                Keys[Keys["IMEModeChange"] = 31] = "IMEModeChange";
                Keys[Keys["Space"] = 32] = "Space";
                Keys[Keys["Prior"] = 33] = "Prior";
                Keys[Keys["PageUp"] = 33] = "PageUp";
                Keys[Keys["Next"] = 34] = "Next";
                Keys[Keys["PageDown"] = 34] = "PageDown";
                Keys[Keys["End"] = 35] = "End";
                Keys[Keys["Home"] = 36] = "Home";
                Keys[Keys["Left"] = 37] = "Left";
                Keys[Keys["Up"] = 38] = "Up";
                Keys[Keys["Right"] = 39] = "Right";
                Keys[Keys["Down"] = 40] = "Down";
                Keys[Keys["Select"] = 41] = "Select";
                Keys[Keys["Print"] = 42] = "Print";
                Keys[Keys["Execute"] = 43] = "Execute";
                Keys[Keys["Snapshot"] = 44] = "Snapshot";
                Keys[Keys["PrintScreen"] = 44] = "PrintScreen";
                Keys[Keys["Insert"] = 45] = "Insert";
                Keys[Keys["Delete"] = 46] = "Delete";
                Keys[Keys["Help"] = 47] = "Help";
                Keys[Keys["D0"] = 48] = "D0";
                Keys[Keys["D1"] = 49] = "D1";
                Keys[Keys["D2"] = 50] = "D2";
                Keys[Keys["D3"] = 51] = "D3";
                Keys[Keys["D4"] = 52] = "D4";
                Keys[Keys["D5"] = 53] = "D5";
                Keys[Keys["D6"] = 54] = "D6";
                Keys[Keys["D7"] = 55] = "D7";
                Keys[Keys["D8"] = 56] = "D8";
                Keys[Keys["D9"] = 57] = "D9";
                Keys[Keys["A"] = 65] = "A";
                Keys[Keys["B"] = 66] = "B";
                Keys[Keys["C"] = 67] = "C";
                Keys[Keys["D"] = 68] = "D";
                Keys[Keys["E"] = 69] = "E";
                Keys[Keys["F"] = 70] = "F";
                Keys[Keys["G"] = 71] = "G";
                Keys[Keys["H"] = 72] = "H";
                Keys[Keys["I"] = 73] = "I";
                Keys[Keys["J"] = 74] = "J";
                Keys[Keys["K"] = 75] = "K";
                Keys[Keys["L"] = 76] = "L";
                Keys[Keys["M"] = 77] = "M";
                Keys[Keys["N"] = 78] = "N";
                Keys[Keys["O"] = 79] = "O";
                Keys[Keys["P"] = 80] = "P";
                Keys[Keys["Q"] = 81] = "Q";
                Keys[Keys["R"] = 82] = "R";
                Keys[Keys["S"] = 83] = "S";
                Keys[Keys["T"] = 84] = "T";
                Keys[Keys["U"] = 85] = "U";
                Keys[Keys["V"] = 86] = "V";
                Keys[Keys["W"] = 87] = "W";
                Keys[Keys["X"] = 88] = "X";
                Keys[Keys["Y"] = 89] = "Y";
                Keys[Keys["Z"] = 90] = "Z";
                Keys[Keys["LWin"] = 91] = "LWin";
                Keys[Keys["RWin"] = 92] = "RWin";
                Keys[Keys["Apps"] = 93] = "Apps";
                Keys[Keys["Sleep"] = 95] = "Sleep";
                Keys[Keys["NumPad0"] = 96] = "NumPad0";
                Keys[Keys["NumPad1"] = 97] = "NumPad1";
                Keys[Keys["NumPad2"] = 98] = "NumPad2";
                Keys[Keys["NumPad3"] = 99] = "NumPad3";
                Keys[Keys["NumPad4"] = 100] = "NumPad4";
                Keys[Keys["NumPad5"] = 101] = "NumPad5";
                Keys[Keys["NumPad6"] = 102] = "NumPad6";
                Keys[Keys["NumPad7"] = 103] = "NumPad7";
                Keys[Keys["NumPad8"] = 104] = "NumPad8";
                Keys[Keys["NumPad9"] = 105] = "NumPad9";
                Keys[Keys["Multiply"] = 106] = "Multiply";
                Keys[Keys["Add"] = 107] = "Add";
                Keys[Keys["Separator"] = 108] = "Separator";
                Keys[Keys["Subtract"] = 109] = "Subtract";
                Keys[Keys["Decimal"] = 110] = "Decimal";
                Keys[Keys["Divide"] = 111] = "Divide";
                Keys[Keys["F1"] = 112] = "F1";
                Keys[Keys["F2"] = 113] = "F2";
                Keys[Keys["F3"] = 114] = "F3";
                Keys[Keys["F4"] = 115] = "F4";
                Keys[Keys["F5"] = 116] = "F5";
                Keys[Keys["F6"] = 117] = "F6";
                Keys[Keys["F7"] = 118] = "F7";
                Keys[Keys["F8"] = 119] = "F8";
                Keys[Keys["F9"] = 120] = "F9";
                Keys[Keys["F10"] = 121] = "F10";
                Keys[Keys["F11"] = 122] = "F11";
                Keys[Keys["F12"] = 123] = "F12";
                Keys[Keys["F13"] = 124] = "F13";
                Keys[Keys["F14"] = 125] = "F14";
                Keys[Keys["F15"] = 126] = "F15";
                Keys[Keys["F16"] = 127] = "F16";
                Keys[Keys["F17"] = 128] = "F17";
                Keys[Keys["F18"] = 129] = "F18";
                Keys[Keys["F19"] = 130] = "F19";
                Keys[Keys["F20"] = 131] = "F20";
                Keys[Keys["F21"] = 132] = "F21";
                Keys[Keys["F22"] = 133] = "F22";
                Keys[Keys["F23"] = 134] = "F23";
                Keys[Keys["F24"] = 135] = "F24";
                Keys[Keys["NumLock"] = 144] = "NumLock";
                Keys[Keys["Scroll"] = 145] = "Scroll";
                Keys[Keys["LShiftKey"] = 160] = "LShiftKey";
                Keys[Keys["RShiftKey"] = 161] = "RShiftKey";
                Keys[Keys["LControlKey"] = 162] = "LControlKey";
                Keys[Keys["RControlKey"] = 163] = "RControlKey";
                Keys[Keys["LMenu"] = 164] = "LMenu";
                Keys[Keys["RMenu"] = 165] = "RMenu";
                Keys[Keys["BrowserBack"] = 166] = "BrowserBack";
                Keys[Keys["BrowserForward"] = 167] = "BrowserForward";
                Keys[Keys["BrowserRefresh"] = 168] = "BrowserRefresh";
                Keys[Keys["BrowserStop"] = 169] = "BrowserStop";
                Keys[Keys["BrowserSearch"] = 170] = "BrowserSearch";
                Keys[Keys["BrowserFavorites"] = 171] = "BrowserFavorites";
                Keys[Keys["BrowserHome"] = 172] = "BrowserHome";
                Keys[Keys["VolumeMute"] = 173] = "VolumeMute";
                Keys[Keys["VolumeDown"] = 174] = "VolumeDown";
                Keys[Keys["VolumeUp"] = 175] = "VolumeUp";
                Keys[Keys["MediaNextTrack"] = 176] = "MediaNextTrack";
                Keys[Keys["MediaPreviousTrack"] = 177] = "MediaPreviousTrack";
                Keys[Keys["MediaStop"] = 178] = "MediaStop";
                Keys[Keys["MediaPlayPause"] = 179] = "MediaPlayPause";
                Keys[Keys["LaunchMail"] = 180] = "LaunchMail";
                Keys[Keys["SelectMedia"] = 181] = "SelectMedia";
                Keys[Keys["LaunchApplication1"] = 182] = "LaunchApplication1";
                Keys[Keys["LaunchApplication2"] = 183] = "LaunchApplication2";
                Keys[Keys["OemSemicolon"] = 186] = "OemSemicolon";
                Keys[Keys["Oem1"] = 186] = "Oem1";
                Keys[Keys["Oemplus"] = 187] = "Oemplus";
                Keys[Keys["Oemcomma"] = 188] = "Oemcomma";
                Keys[Keys["OemMinus"] = 189] = "OemMinus";
                Keys[Keys["OemPeriod"] = 190] = "OemPeriod";
                Keys[Keys["OemQuestion"] = 191] = "OemQuestion";
                Keys[Keys["Oem2"] = 191] = "Oem2";
                Keys[Keys["Oemtilde"] = 192] = "Oemtilde";
                Keys[Keys["Oem3"] = 192] = "Oem3";
                Keys[Keys["OemOpenBrackets"] = 219] = "OemOpenBrackets";
                Keys[Keys["Oem4"] = 219] = "Oem4";
                Keys[Keys["OemPipe"] = 220] = "OemPipe";
                Keys[Keys["Oem5"] = 220] = "Oem5";
                Keys[Keys["OemCloseBrackets"] = 221] = "OemCloseBrackets";
                Keys[Keys["Oem6"] = 221] = "Oem6";
                Keys[Keys["OemQuotes"] = 222] = "OemQuotes";
                Keys[Keys["Oem7"] = 222] = "Oem7";
                Keys[Keys["Oem8"] = 223] = "Oem8";
                Keys[Keys["OemBackslash"] = 226] = "OemBackslash";
                Keys[Keys["Oem102"] = 226] = "Oem102";
                Keys[Keys["ProcessKey"] = 229] = "ProcessKey";
                Keys[Keys["Packet"] = 231] = "Packet";
                Keys[Keys["Attn"] = 246] = "Attn";
                Keys[Keys["Crsel"] = 247] = "Crsel";
                Keys[Keys["Exsel"] = 248] = "Exsel";
                Keys[Keys["EraseEof"] = 249] = "EraseEof";
                Keys[Keys["Play"] = 250] = "Play";
                Keys[Keys["Zoom"] = 251] = "Zoom";
                Keys[Keys["NoName"] = 252] = "NoName";
                Keys[Keys["Pa1"] = 253] = "Pa1";
                Keys[Keys["OemClear"] = 254] = "OemClear";
                Keys[Keys["Shift"] = 65536] = "Shift";
                Keys[Keys["Control"] = 131072] = "Control";
                Keys[Keys["Alt"] = 262144] = "Alt";
            })(Keys = Models.Keys || (Models.Keys = {}));
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var ModifierKeyInterop = (function () {
            function ModifierKeyInterop() {
            }
            ModifierKeyInterop.RegisterEvents = function (interopCallback) {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback)) {
                    throw new Error("Interop is already registered.");
                }
                if (Utils.TypeCheckUtils.IsNotNullObject(interopCallback) === false) {
                    throw new Error("Invalid argument type.");
                }
                document.addEventListener("keydown", this.Wrapped_OnKeyEvent, { capture: true, passive: true });
                document.addEventListener("keyup", this.Wrapped_OnKeyEvent, { capture: true, passive: true });
                if (typeof TouchEvent !== "undefined") {
                    document.addEventListener("touchstart", this.Wrapped_OnTouchEvent, { capture: true, passive: true });
                    document.addEventListener("touchmove", this.Wrapped_OnTouchEvent, { capture: true, passive: true });
                    document.addEventListener("touchend", this.Wrapped_OnTouchEvent, { capture: true, passive: true });
                    document.addEventListener("touchcancel", this.Wrapped_OnTouchEvent, { capture: true, passive: true });
                }
                if (typeof PointerEvent !== "undefined") {
                    document.addEventListener("pointerdown", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                    document.addEventListener("pointermove", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                    document.addEventListener("pointerup", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                    document.addEventListener("pointercancel", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                }
                else {
                    document.addEventListener("mousedown", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                    document.addEventListener("mousemove", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                    document.addEventListener("mouseup", this.Wrapped_OnMouseEvent, { capture: true, passive: true });
                }
                this.interopCallback = interopCallback;
            };
            ModifierKeyInterop.UnregisterEvents = function () {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback) === false) {
                    return;
                }
                document.removeEventListener("keydown", this.Wrapped_OnKeyEvent, { capture: true });
                document.removeEventListener("keyup", this.Wrapped_OnKeyEvent, { capture: true });
                if (typeof TouchEvent !== "undefined") {
                    document.removeEventListener("touchstart", this.Wrapped_OnTouchEvent, { capture: true });
                    document.removeEventListener("touchmove", this.Wrapped_OnTouchEvent, { capture: true });
                    document.removeEventListener("touchend", this.Wrapped_OnTouchEvent, { capture: true });
                    document.removeEventListener("touchcancel", this.Wrapped_OnTouchEvent, { capture: true });
                }
                if (typeof PointerEvent !== "undefined") {
                    document.removeEventListener("pointerdown", this.Wrapped_OnMouseEvent, { capture: true });
                    document.removeEventListener("pointermove", this.Wrapped_OnMouseEvent, { capture: true });
                    document.removeEventListener("pointerup", this.Wrapped_OnMouseEvent, { capture: true });
                    document.removeEventListener("pointercancel", this.Wrapped_OnMouseEvent, { capture: true });
                }
                else {
                    document.removeEventListener("mousedown", this.Wrapped_OnMouseEvent, { capture: true });
                    document.removeEventListener("mousemove", this.Wrapped_OnMouseEvent, { capture: true });
                    document.removeEventListener("mouseup", this.Wrapped_OnMouseEvent, { capture: true });
                }
                this.interopCallback = null;
            };
            ModifierKeyInterop.OnMouseEvent = function (event) {
                this.DebouncedHandleModifierKey(event);
                return !event.defaultPrevented;
            };
            ModifierKeyInterop.OnTouchEvent = function (event) {
                this.DebouncedHandleModifierKey(event);
                return !event.defaultPrevented;
            };
            ModifierKeyInterop.OnKeyEvent = function (event) {
                this.HandleModifierKey(event);
                return !event.defaultPrevented;
            };
            ModifierKeyInterop.HandleModifierKey = function (event) {
                if (Utils.TypeCheckUtils.IsNotNullObject(this.interopCallback) === false) {
                    return;
                }
                var keyData = Utils.Models.Keys.None;
                if (event.ctrlKey === true) {
                    keyData |= Utils.Models.Keys.Control;
                }
                if (event.shiftKey === true) {
                    keyData |= Utils.Models.Keys.Shift;
                }
                if (event.altKey === true) {
                    keyData |= Utils.Models.Keys.Alt;
                }
                if (this.modifierKeys !== keyData) {
                    this.modifierKeys = keyData;
                    this.interopCallback.invokeMethodAsync("ModifierKeyChanged", keyData);
                }
            };
            ModifierKeyInterop.interopCallback = null;
            ModifierKeyInterop.modifierKeys = Utils.Models.Keys.None;
            ModifierKeyInterop.Wrapped_OnMouseEvent = ModifierKeyInterop.OnMouseEvent.bind(ModifierKeyInterop);
            ModifierKeyInterop.Wrapped_OnTouchEvent = ModifierKeyInterop.OnTouchEvent.bind(ModifierKeyInterop);
            ModifierKeyInterop.Wrapped_OnKeyEvent = ModifierKeyInterop.OnKeyEvent.bind(ModifierKeyInterop);
            ModifierKeyInterop.DebouncedHandleModifierKey = Utils.EventUtils.PeriodicDebounce(ModifierKeyInterop.HandleModifierKey, 100);
            return ModifierKeyInterop;
        }());
        Utils.ModifierKeyInterop = ModifierKeyInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var MouseDownOutsideInterop = (function (_super) {
            __extends(MouseDownOutsideInterop, _super);
            function MouseDownOutsideInterop(targetElement, interopCallback) {
                var _this = _super.call(this, targetElement, interopCallback) || this;
                _this.OnMouseDownWrapper = _this.OnMouseDown.bind(_this);
                _this.touchHelper = new Utils.TouchToMouseHelper(_this.TargetElement);
                _this.touchHelper.RegisterEventWrapper("mousedown", { global: true, capture: true, passive: true });
                _this.touchHelper.MouseDown.Add(_this.OnMouseDownWrapper);
                return _this;
            }
            MouseDownOutsideInterop.CreateInstance = function (targetElement, interopCallback) {
                return new MouseDownOutsideInterop(targetElement, interopCallback);
            };
            MouseDownOutsideInterop.prototype.Dispose = function () {
                if (this.touchHelper !== null) {
                    this.touchHelper.MouseDown.Remove(this.OnMouseDownWrapper);
                    this.touchHelper.UnregisterEventWrapper("mousedown", { global: true, capture: true });
                    this.touchHelper = null;
                }
                _super.prototype.Dispose.call(this);
            };
            MouseDownOutsideInterop.prototype.OnMouseDown = function (event) {
                var target = Utils.TypeCheckUtils.AsClass(event.target, Element);
                if (target === null) {
                    return;
                }
                var isOutside = this.IsOutside(target);
                if (isOutside === false) {
                    return;
                }
                this.InvokeCallbackMethodAsync("MouseDownOutside");
            };
            MouseDownOutsideInterop.prototype.IsOutside = function (target) {
                var referenceElement = this.TargetElement;
                if (referenceElement !== null && Utils.LinkedElement.IsChildOf(referenceElement, target)) {
                    return false;
                }
                return true;
            };
            return MouseDownOutsideInterop;
        }(Utils.ComponentInteropBase));
        Utils.MouseDownOutsideInterop = MouseDownOutsideInterop;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var cacheClearRefreshKey = "refreshedByBootResourceLoader";
        var cacheClearRefreshValue = "true";
        var BootResourceLoader = (function () {
            function BootResourceLoader() {
                this.LoadBootResource = this.WrappedLoadBootResource.bind(this);
                this.refreshedByBootResourceLoader = window.localStorage.getItem(cacheClearRefreshKey) === cacheClearRefreshValue;
                window.localStorage.removeItem(cacheClearRefreshKey);
            }
            BootResourceLoader.Create = function () {
                return new BootResourceLoader().LoadBootResource;
            };
            BootResourceLoader.prototype.WrappedLoadBootResource = function (type, filename, defaultUri, integrity) {
                var _this = this;
                if (type !== "assembly") {
                    return defaultUri;
                }
                var resourceFetchRequest = fetch(defaultUri, { cache: "no-cache", integrity: integrity });
                resourceFetchRequest.catch(function (reason) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.FetchResourceFailedAsync(reason, filename)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                return resourceFetchRequest;
            };
            BootResourceLoader.prototype.FetchResourceFailedAsync = function (reason, filename) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.refreshedByBootResourceLoader === true) {
                                    return [2];
                                }
                                return [4, this.ClearBootResourceCacheAsync()];
                            case 1:
                                _a.sent();
                                window.localStorage.setItem(cacheClearRefreshKey, cacheClearRefreshValue);
                                window.location.reload();
                                return [2];
                        }
                    });
                });
            };
            BootResourceLoader.prototype.ClearBootResourceCacheAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var cacheNames, pathName, i, cacheName;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, window.caches.keys()];
                            case 1:
                                cacheNames = _a.sent();
                                pathName = window.location.pathname;
                                i = 0;
                                _a.label = 2;
                            case 2:
                                if (!(i < cacheNames.length)) return [3, 5];
                                cacheName = cacheNames[i];
                                if (cacheName.startsWith("dotnet-resources-".concat(pathName)) === false) {
                                    return [3, 4];
                                }
                                return [4, window.caches.delete(cacheName)];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                i++;
                                return [3, 2];
                            case 5: return [2];
                        }
                    });
                });
            };
            return BootResourceLoader;
        }());
        Utils.BootResourceLoader = BootResourceLoader;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var CustomBlazorStarter = (function () {
            function CustomBlazorStarter() {
            }
            CustomBlazorStarter.Run = function (httpsRedirectConfig) {
                Utils.TitleForTruncatedTextHandler.RegisterEvents();
                if (Utils.TypeCheckUtils.IsNotNullObject(httpsRedirectConfig) && httpsRedirectConfig.useHttpsRedirection === true) {
                    if (Utils.HttpsRedirector.RedirectToHttps(httpsRedirectConfig.httpsPort) === true) {
                        return;
                    }
                }
                Blazor.start({
                    webAssembly: {
                        loadBootResource: Utils.BootResourceLoader.Create(),
                        applicationCulture: document.documentElement.lang
                    }
                });
            };
            return CustomBlazorStarter;
        }());
        Utils.CustomBlazorStarter = CustomBlazorStarter;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var HttpsRedirector = (function () {
            function HttpsRedirector() {
            }
            Object.defineProperty(HttpsRedirector, "HttpScheme", {
                get: function () {
                    return "http:";
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpsRedirector, "HttpsScheme", {
                get: function () {
                    return "https:";
                },
                enumerable: false,
                configurable: true
            });
            HttpsRedirector.IsHttpsScheme = function () {
                var requestUri = window.location;
                return this.IsHttpsSchemeHelper(requestUri);
            };
            HttpsRedirector.RedirectToHttps = function (httpsPort) {
                if (httpsPort === void 0) { httpsPort = 443; }
                if (typeof httpsPort !== "number") {
                    return false;
                }
                var requestUri = window.location;
                if (this.IsHttpsSchemeHelper(requestUri) === true) {
                    return false;
                }
                var redirectUri = new URL(requestUri.toString());
                redirectUri.protocol = this.HttpsScheme;
                redirectUri.port = httpsPort.toString();
                window.location.href = redirectUri.toString();
                return true;
            };
            HttpsRedirector.IsHttpsSchemeHelper = function (requestUri) {
                if ((requestUri instanceof Location) === false) {
                    requestUri = window.location;
                }
                var httpsScheme = this.HttpsScheme;
                return requestUri.protocol.toLowerCase().startsWith(httpsScheme);
            };
            return HttpsRedirector;
        }());
        Utils.HttpsRedirector = HttpsRedirector;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var TitleForTruncatedTextHandler = (function () {
            function TitleForTruncatedTextHandler() {
            }
            Object.defineProperty(TitleForTruncatedTextHandler, "TitleAttribute", {
                get: function () {
                    return "title";
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TitleForTruncatedTextHandler, "TextTrimmedAttribute", {
                get: function () {
                    return "text-trimmed";
                },
                enumerable: false,
                configurable: true
            });
            TitleForTruncatedTextHandler.RegisterEvents = function () {
                document.addEventListener("pointerover", this.OnPointerOverWrapped, { capture: true, passive: true });
                document.addEventListener("pointerout", this.OnPointerOutWrapped, { capture: true, passive: true });
            };
            TitleForTruncatedTextHandler.OnPointerOver = function (event) {
                if (event.pointerType !== "mouse") {
                    return !event.defaultPrevented;
                }
                var element = Utils.TypeCheckUtils.AsClass(event.target, HTMLElement);
                if (element === null || this.CheckAttributes(element, true) === false || this.CheckTruncated(element) === false) {
                    return !event.defaultPrevented;
                }
                this.SetTitleAttribute(element, true);
                return !event.defaultPrevented;
            };
            TitleForTruncatedTextHandler.OnPointerOut = function (event) {
                if (event.pointerType !== "mouse") {
                    return !event.defaultPrevented;
                }
                var element = Utils.TypeCheckUtils.AsClass(event.target, HTMLElement);
                if (element === null || this.CheckAttributes(element, false) === false) {
                    return !event.defaultPrevented;
                }
                this.SetTitleAttribute(element, false);
                return !event.defaultPrevented;
            };
            TitleForTruncatedTextHandler.CheckAttributes = function (element, setAttribue) {
                return element.hasAttribute(this.TitleAttribute) !== setAttribue && element.hasAttribute(this.TextTrimmedAttribute) !== setAttribue;
            };
            TitleForTruncatedTextHandler.CheckTruncated = function (element) {
                if (element.childElementCount > 0) {
                    return false;
                }
                var containsText = element.innerText !== null && element.innerText.trim().length > 0;
                if (containsText === false) {
                    return false;
                }
                return element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight;
            };
            TitleForTruncatedTextHandler.SetTitleAttribute = function (element, setAttribue) {
                if (setAttribue === true) {
                    element.setAttribute(this.TextTrimmedAttribute, "");
                    element.setAttribute(this.TitleAttribute, element.innerText);
                }
                else {
                    element.removeAttribute(this.TextTrimmedAttribute);
                    element.removeAttribute(this.TitleAttribute);
                }
            };
            var _a;
            _a = TitleForTruncatedTextHandler;
            TitleForTruncatedTextHandler.OnPointerOverWrapped = _a.OnPointerOver.bind(_a);
            TitleForTruncatedTextHandler.OnPointerOutWrapped = _a.OnPointerOut.bind(_a);
            return TitleForTruncatedTextHandler;
        }());
        Utils.TitleForTruncatedTextHandler = TitleForTruncatedTextHandler;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var Breakpoint;
            (function (Breakpoint) {
                Breakpoint[Breakpoint["None"] = 0] = "None";
                Breakpoint[Breakpoint["XXS"] = 1] = "XXS";
                Breakpoint[Breakpoint["XS"] = 2] = "XS";
                Breakpoint[Breakpoint["SM"] = 3] = "SM";
                Breakpoint[Breakpoint["MD"] = 4] = "MD";
                Breakpoint[Breakpoint["LG"] = 5] = "LG";
                Breakpoint[Breakpoint["XL"] = 6] = "XL";
                Breakpoint[Breakpoint["XXL"] = 7] = "XXL";
            })(Breakpoint = Models.Breakpoint || (Models.Breakpoint = {}));
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var ImageData = (function () {
                function ImageData(data, mimeType) {
                    if (data === void 0) { data = null; }
                    if (mimeType === void 0) { mimeType = null; }
                    this.data = data;
                    this.mimeType = mimeType;
                }
                return ImageData;
            }());
            Models.ImageData = ImageData;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var Margin = (function () {
                function Margin(left, top, right, bottom) {
                    if (left === void 0) { left = 0; }
                    if (top === void 0) { top = 0; }
                    if (right === void 0) { right = 0; }
                    if (bottom === void 0) { bottom = 0; }
                    this.left = left;
                    this.top = top;
                    this.right = right;
                    this.bottom = bottom;
                }
                return Margin;
            }());
            Models.Margin = Margin;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var MouseButton;
            (function (MouseButton) {
                MouseButton[MouseButton["Invalid"] = -1] = "Invalid";
                MouseButton[MouseButton["Primary"] = 0] = "Primary";
                MouseButton[MouseButton["Auxiliary"] = 1] = "Auxiliary";
                MouseButton[MouseButton["Secondary"] = 2] = "Secondary";
                MouseButton[MouseButton["Fourth"] = 3] = "Fourth";
                MouseButton[MouseButton["Fifth"] = 4] = "Fifth";
            })(MouseButton = Models.MouseButton || (Models.MouseButton = {}));
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var MouseButtons;
            (function (MouseButtons) {
                MouseButtons[MouseButtons["None"] = 0] = "None";
                MouseButtons[MouseButtons["Primary"] = 1] = "Primary";
                MouseButtons[MouseButtons["Secondary"] = 2] = "Secondary";
                MouseButtons[MouseButtons["Auxiliary"] = 4] = "Auxiliary";
                MouseButtons[MouseButtons["Fourth"] = 8] = "Fourth";
                MouseButtons[MouseButtons["Fifth"] = 15] = "Fifth";
            })(MouseButtons = Models.MouseButtons || (Models.MouseButtons = {}));
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var Point = (function () {
                function Point(otherOrX, y) {
                    var x;
                    if (typeof otherOrX === "undefined") {
                        if (typeof y !== "undefined") {
                            throw new Error("Invalid argument type.");
                        }
                        x = 0;
                        y = 0;
                    }
                    else if (typeof otherOrX === "number") {
                        if (typeof y !== "number") {
                            throw new Error("Invalid argument type.");
                        }
                        x = otherOrX;
                    }
                    else if (otherOrX instanceof Point) {
                        if (typeof y !== "undefined") {
                            throw new Error("Invalid argument type.");
                        }
                        var other = otherOrX;
                        x = other.x;
                        y = other.y;
                    }
                    else {
                        throw new Error("Invalid argument type.");
                    }
                    this.x = x;
                    this.y = y;
                }
                return Point;
            }());
            Models.Point = Point;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var ScrollOffset = (function () {
                function ScrollOffset(top, bottom) {
                    if (top === void 0) { top = 0; }
                    if (bottom === void 0) { bottom = 0; }
                    this.top = top;
                    this.bottom = bottom;
                }
                return ScrollOffset;
            }());
            Models.ScrollOffset = ScrollOffset;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var ScrollToOption;
            (function (ScrollToOption) {
                ScrollToOption[ScrollToOption["ScrollToTop"] = 0] = "ScrollToTop";
                ScrollToOption[ScrollToOption["ScollToCenter"] = 1] = "ScollToCenter";
                ScrollToOption[ScrollToOption["ScrollToBottom"] = 2] = "ScrollToBottom";
            })(ScrollToOption = Models.ScrollToOption || (Models.ScrollToOption = {}));
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var Size = (function () {
                function Size(width, height) {
                    if (width === void 0) { width = 0; }
                    if (height === void 0) { height = 0; }
                    this.width = width;
                    this.height = height;
                }
                return Size;
            }());
            Models.Size = Size;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var Models;
        (function (Models) {
            var ViewportState = (function () {
                function ViewportState(windowSize, activeBreakpoint) {
                    if (windowSize === void 0) { windowSize = null; }
                    if (activeBreakpoint === void 0) { activeBreakpoint = Models.Breakpoint.None; }
                    this.windowSize = windowSize;
                    this.activeBreakpoint = activeBreakpoint;
                }
                return ViewportState;
            }());
            Models.ViewportState = ViewportState;
        })(Models = Utils.Models || (Utils.Models = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var StateStore;
        (function (StateStore) {
            var IndexedDbStorage = (function () {
                function IndexedDbStorage() {
                    this._database = null;
                }
                IndexedDbStorage.GetItemAsync = function (key) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, IndexedDbStorage.Instance.GetAsync(key)];
                                case 1: return [2, _a.sent()];
                            }
                        });
                    });
                };
                IndexedDbStorage.SetItemAsync = function (key, value) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, IndexedDbStorage.Instance.SetAsync(key, value)];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                IndexedDbStorage.RemoveItemAsync = function (key) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, IndexedDbStorage.Instance.DeleteAsync(key)];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                IndexedDbStorage.ClearAsync = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, IndexedDbStorage.Instance.ClearAsync()];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                Object.defineProperty(IndexedDbStorage, "Instance", {
                    get: function () {
                        if (this._instance === null) {
                            this._instance = new IndexedDbStorage();
                        }
                        return this._instance;
                    },
                    enumerable: false,
                    configurable: true
                });
                IndexedDbStorage.prototype.GetDatabaseAsync = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(this._database === null)) return [3, 2];
                                    _a = this;
                                    return [4, this.OpenDatabaseAsync()];
                                case 1:
                                    _a._database = _b.sent();
                                    _b.label = 2;
                                case 2: return [2, this._database];
                            }
                        });
                    });
                };
                IndexedDbStorage.prototype.OpenDatabaseAsync = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var openDatabaseRequest, database;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    openDatabaseRequest = new Promise(function (resolve) {
                                        var openIndexedDbRequest = indexedDB.open(IndexedDbStorage.DATABASE_NAME, IndexedDbStorage.DATABASE_VERSION);
                                        openIndexedDbRequest.onerror = function (ev) {
                                            throw new Error("Failed to open the database: ".concat(IndexedDbStorage.DATABASE_NAME, " (ErrorCode: ").concat(this.error.code, ")."));
                                        };
                                        openIndexedDbRequest.onsuccess = Utils.EventUtils.SenderCallbackWrapper(_this, function () {
                                            var methodParams = [];
                                            for (var _i = 0; _i < arguments.length; _i++) {
                                                methodParams[_i] = arguments[_i];
                                            }
                                            var openRequest = methodParams[0];
                                            var ev = methodParams[1];
                                            var database = openRequest.result;
                                            database.onerror = null;
                                            database.onclose = Utils.EventUtils.SenderCallbackWrapper(this, this.OnDatabaseClose);
                                            database.onversionchange = Utils.EventUtils.SenderCallbackWrapper(this, this.OnDatabaseVersionChange);
                                            resolve(database);
                                        });
                                        openIndexedDbRequest.onblocked = function (ev) {
                                            throw new Error("Failed to access database \"".concat(IndexedDbStorage.DATABASE_NAME, "\" because its blocked (ErrorCode: ").concat(this.error.code, ")."));
                                        };
                                        openIndexedDbRequest.onupgradeneeded = function (ev) {
                                            var database = this.result;
                                            database.onerror = function (ev) {
                                                throw new Error("Failed to update the database: ".concat(IndexedDbStorage.DATABASE_NAME));
                                            };
                                            database.createObjectStore(IndexedDbStorage.TABLE_NAME, { keyPath: IndexedDbStorage.KEYPATH_NAME });
                                        };
                                    });
                                    return [4, openDatabaseRequest];
                                case 1:
                                    database = _a.sent();
                                    return [2, database];
                            }
                        });
                    });
                };
                IndexedDbStorage.prototype.OnDatabaseClose = function () {
                    var methodParams = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        methodParams[_i] = arguments[_i];
                    }
                    this._database = null;
                };
                IndexedDbStorage.prototype.OnDatabaseVersionChange = function () {
                    var methodParams = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        methodParams[_i] = arguments[_i];
                    }
                    var database = methodParams[0];
                    var ev = methodParams[1];
                    database.close();
                    this.OnDatabaseClose(database, ev);
                };
                IndexedDbStorage.prototype.GetAsync = function (key) {
                    return __awaiter(this, void 0, void 0, function () {
                        var getValueRequest, result;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    getValueRequest = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                        var database, transaction, objectStore, result;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, this.GetDatabaseAsync()];
                                                case 1:
                                                    database = _a.sent();
                                                    transaction = database.transaction(IndexedDbStorage.TABLE_NAME, "readonly");
                                                    objectStore = transaction.objectStore(IndexedDbStorage.TABLE_NAME);
                                                    result = objectStore.get(key);
                                                    result.onerror = function (ev) {
                                                        throw new Error("Failed to read value of key: ".concat(this.result, " (ErrorCode: ").concat(this.error.code, ")."));
                                                    };
                                                    result.onsuccess = function (ev) {
                                                        var _a;
                                                        var data = this.result;
                                                        resolve((_a = data === null || data === void 0 ? void 0 : data.value) !== null && _a !== void 0 ? _a : null);
                                                    };
                                                    return [2];
                                            }
                                        });
                                    }); });
                                    return [4, getValueRequest];
                                case 1:
                                    result = _a.sent();
                                    return [2, result];
                            }
                        });
                    });
                };
                IndexedDbStorage.prototype.SetAsync = function (key, value) {
                    return __awaiter(this, void 0, void 0, function () {
                        var setValueRequest;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setValueRequest = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                        var database, transaction, objectStore, data, result;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, this.GetDatabaseAsync()];
                                                case 1:
                                                    database = _a.sent();
                                                    transaction = database.transaction(IndexedDbStorage.TABLE_NAME, "readwrite");
                                                    objectStore = transaction.objectStore(IndexedDbStorage.TABLE_NAME);
                                                    data = { key: key, value: value };
                                                    result = objectStore.put(data);
                                                    result.onerror = function (ev) {
                                                        throw new Error("Failed to write value for key: ".concat(this.result, " (ErrorCode: ").concat(this.error.code, ")."));
                                                    };
                                                    result.onsuccess = function (ev) {
                                                        resolve();
                                                    };
                                                    return [2];
                                            }
                                        });
                                    }); });
                                    return [4, setValueRequest];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                IndexedDbStorage.prototype.DeleteAsync = function (key) {
                    return __awaiter(this, void 0, void 0, function () {
                        var deleteValueRequest;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    deleteValueRequest = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                        var database, transaction, objectStore, result;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, this.GetDatabaseAsync()];
                                                case 1:
                                                    database = _a.sent();
                                                    transaction = database.transaction(IndexedDbStorage.TABLE_NAME, "readwrite");
                                                    objectStore = transaction.objectStore(IndexedDbStorage.TABLE_NAME);
                                                    result = objectStore.delete(key);
                                                    result.onerror = function (ev) {
                                                        throw new Error("Failed to delete value with key: ".concat(this.result, " (ErrorCode: ").concat(this.error.code, ")."));
                                                    };
                                                    result.onsuccess = function (ev) {
                                                        resolve();
                                                    };
                                                    return [2];
                                            }
                                        });
                                    }); });
                                    return [4, deleteValueRequest];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                IndexedDbStorage.prototype.ClearAsync = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var clearRequest;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    clearRequest = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                        var result;
                                        return __generator(this, function (_a) {
                                            result = indexedDB.deleteDatabase(IndexedDbStorage.DATABASE_NAME);
                                            result.onerror = function (ev) {
                                                throw new Error("Failed to clear database. (ErrorCode: ".concat(this.error.code, ")."));
                                            };
                                            result.onblocked = function (ev) {
                                                throw new Error("Database is blocked. Unable to clear database. (ErrorCode: ".concat(this.error.code, ")."));
                                            };
                                            result.onsuccess = function (ev) {
                                                resolve();
                                            };
                                            return [2];
                                        });
                                    }); });
                                    return [4, clearRequest];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    });
                };
                IndexedDbStorage.DATABASE_NAME = "BendexIndexedDb";
                IndexedDbStorage.DATABASE_VERSION = 1;
                IndexedDbStorage.TABLE_NAME = "ApplicationState";
                IndexedDbStorage.KEYPATH_NAME = "key";
                IndexedDbStorage._instance = null;
                return IndexedDbStorage;
            }());
            StateStore.IndexedDbStorage = IndexedDbStorage;
        })(StateStore = Utils.StateStore || (Utils.StateStore = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var StateStore;
        (function (StateStore) {
            var LocalStorage = (function () {
                function LocalStorage() {
                }
                LocalStorage.GetItem = function (key) {
                    return localStorage.getItem(key);
                };
                LocalStorage.SetItem = function (key, value) {
                    localStorage.setItem(key, value);
                };
                LocalStorage.RemoveItem = function (key) {
                    localStorage.removeItem(key);
                };
                LocalStorage.Clear = function () {
                    localStorage.clear();
                };
                return LocalStorage;
            }());
            StateStore.LocalStorage = LocalStorage;
        })(StateStore = Utils.StateStore || (Utils.StateStore = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var StateStore;
        (function (StateStore) {
            var ObjectStore = (function () {
                function ObjectStore() {
                    this._storage = new Map();
                }
                ObjectStore.prototype.Save = function (key, object) {
                    this._storage.set(key, object);
                    return key;
                };
                ObjectStore.prototype.Get = function (key) {
                    return this._storage.get(key);
                };
                ObjectStore.prototype.Delete = function (key) {
                    return this._storage.delete(key);
                };
                return ObjectStore;
            }());
            StateStore.ObjectStore = ObjectStore;
        })(StateStore = Utils.StateStore || (Utils.StateStore = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var StateStore;
        (function (StateStore) {
            var SessionStorage = (function () {
                function SessionStorage() {
                }
                SessionStorage.GetItem = function (key) {
                    return sessionStorage.getItem(key);
                };
                SessionStorage.SetItem = function (key, value) {
                    sessionStorage.setItem(key, value);
                };
                SessionStorage.RemoveItem = function (key) {
                    sessionStorage.removeItem(key);
                };
                SessionStorage.Clear = function () {
                    sessionStorage.clear();
                };
                return SessionStorage;
            }());
            StateStore.SessionStorage = SessionStorage;
        })(StateStore = Utils.StateStore || (Utils.StateStore = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var BreakpointUtils = (function () {
            function BreakpointUtils() {
            }
            BreakpointUtils.GetViewportState = function () {
                var windowSize = new Utils.Models.Size(window.innerWidth, window.innerHeight);
                var activeBreakpoint = this.GetActiveBreakpoint(windowSize.width);
                return new Utils.Models.ViewportState(windowSize, activeBreakpoint);
            };
            BreakpointUtils.GetActiveBreakpoint = function (windowWidth) {
                if (typeof windowWidth !== "number") {
                    throw new Error("Invalid argument type.");
                }
                var rootElement = document.documentElement;
                var rootCssStyle = getComputedStyle(rootElement);
                if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-xxs'))) {
                    return Utils.Models.Breakpoint.XXS;
                }
                else if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-xs'))) {
                    return Utils.Models.Breakpoint.XS;
                }
                else if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-sm'))) {
                    return Utils.Models.Breakpoint.SM;
                }
                else if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-md'))) {
                    return Utils.Models.Breakpoint.MD;
                }
                else if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-lg'))) {
                    return Utils.Models.Breakpoint.LG;
                }
                else if (windowWidth <= Utils.ConvertionHelper.CalculateRemToPx(rootCssStyle.getPropertyValue('--bdx-breakpoint-xl'))) {
                    return Utils.Models.Breakpoint.XL;
                }
                return Utils.Models.Breakpoint.XXL;
            };
            return BreakpointUtils;
        }());
        Utils.BreakpointUtils = BreakpointUtils;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var ConvertionHelper = (function () {
            function ConvertionHelper() {
            }
            ConvertionHelper.GenericToString = function (obj) {
                switch (typeof obj) {
                    case "undefined":
                        return "undefined";
                    case "object":
                        if (obj === null)
                            return "null";
                        else
                            return obj.toString();
                    case "function":
                        return "function";
                    case "number":
                        return obj.toString(10);
                    case "string":
                        return obj;
                    default:
                        return obj.toString();
                }
            };
            ConvertionHelper.GetKeyData = function (event) {
                var keyData = (event.which !== undefined ? event.which : event.keyCode);
                if (event.ctrlKey === true) {
                    keyData |= Utils.Models.Keys.Control;
                }
                if (event.shiftKey === true) {
                    keyData |= Utils.Models.Keys.Shift;
                }
                if (event.altKey === true) {
                    keyData |= Utils.Models.Keys.Alt;
                }
                return keyData;
            };
            ConvertionHelper.TryParseInt = function (string, fallback) {
                var result = parseInt(string);
                if (Number.isNaN(result) || Number.isFinite(result) === false) {
                    result = fallback;
                }
                return result;
            };
            ConvertionHelper.TryParseFloat = function (string, fallback) {
                var result = parseFloat(string);
                if (Number.isNaN(result) || Number.isFinite(result) === false) {
                    result = fallback;
                }
                return result;
            };
            ConvertionHelper.CalculateRemToPx = function (remValue) {
                if (typeof remValue === "string") {
                    if (/^(\d+\.)?(\d+)(\s*rem)$/.test(remValue)) {
                        return this.CalculateRemToPx(parseFloat(remValue));
                    }
                    else if (/^(\d+\.)?(\d+)(\s*px)?$/.test(remValue)) {
                        return parseFloat(remValue);
                    }
                    else {
                        throw new Error("Argument is neighter rem nor px.");
                    }
                }
                else if (typeof remValue === "number") {
                    var rootElement = document.documentElement;
                    var fontSize = this.TryParseFloat(getComputedStyle(rootElement).fontSize, 16);
                    return remValue * fontSize;
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            return ConvertionHelper;
        }());
        Utils.ConvertionHelper = ConvertionHelper;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var _dataUrlPrefix = "data:";
        var _dataUrlMimeTypeSeparator = ";";
        var _dataUrlBase64Separator = "base64,";
        var DataConverter = (function () {
            function DataConverter() {
            }
            DataConverter.BlobToDataUrlAsync = function (blob) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if ((blob instanceof Blob) === false) {
                            throw new Error("Invalid argument type for blob.");
                        }
                        return [2, new Promise(function (resolve, reject) {
                                var fileReader = new FileReader();
                                fileReader.onloadend = function (fileReaderProgressEvent) {
                                    try {
                                        var targetFileReader = fileReaderProgressEvent.target;
                                        var dataURL = targetFileReader.result;
                                        if (typeof dataURL !== "string") {
                                            throw new Error("Invalid type received for dataURL.");
                                        }
                                        resolve(dataURL);
                                    }
                                    catch (ex) {
                                        reject(ex);
                                    }
                                };
                                fileReader.onabort = function (fileReaderProgressEvent) {
                                    var targetFileReader = fileReaderProgressEvent.target;
                                    reject(targetFileReader.error);
                                };
                                fileReader.readAsDataURL(blob);
                            })];
                    });
                });
            };
            DataConverter.BlobToByteArrayAsync = function (blob) {
                if ((blob instanceof Blob) === false) {
                    throw new Error("Invalid argument type for blob.");
                }
                return new Promise(function (resolve, reject) {
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (fileReaderProgressEvent) {
                        try {
                            var targetFileReader = fileReaderProgressEvent.target;
                            var arrayBuffer = targetFileReader.result;
                            if ((arrayBuffer instanceof ArrayBuffer) === false) {
                                throw new Error("Invalid type received for arrayBuffer.");
                            }
                            resolve(new Uint8Array(arrayBuffer));
                        }
                        catch (ex) {
                            reject(ex);
                        }
                    };
                    fileReader.onabort = function (fileReaderProgressEvent) {
                        var targetFileReader = fileReaderProgressEvent.target;
                        reject(targetFileReader.error);
                    };
                    fileReader.readAsArrayBuffer(blob);
                });
            };
            DataConverter.DataUrlToBlob = function (dataUrl) {
                var byteArray = this.DataUrlToByteArray(dataUrl);
                var mimeType = this.GetMineTypeOfDataUrl(dataUrl);
                return this.ByteArrayToBlob(byteArray, mimeType);
            };
            DataConverter.DataUrlToByteArray = function (dataUrl) {
                if (typeof dataUrl !== "string") {
                    throw new Error("Invalid argument type for dataUrl.");
                }
                var base64SeparatorIndex = dataUrl.indexOf(_dataUrlBase64Separator);
                if (dataUrl.startsWith(_dataUrlPrefix) === false || base64SeparatorIndex < _dataUrlPrefix.length) {
                    throw new Error("Passed argument is not in DataUrl format.");
                }
                var byteString = atob(dataUrl.substring(base64SeparatorIndex + _dataUrlBase64Separator.length));
                var byteArray = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    byteArray[i] = byteString.charCodeAt(i);
                }
                return byteArray;
            };
            DataConverter.ByteArrayToBlob = function (byteArray, mimeType) {
                if ((byteArray instanceof Uint8Array) === false) {
                    throw new Error("Invalid argument type for byteArray.");
                }
                var options = undefined;
                if (typeof mimeType === "string" && mimeType.trim().length > 0) {
                    options = { type: mimeType.trim() };
                }
                var blobParts = new Array(byteArray.buffer);
                return new Blob(blobParts, options);
            };
            DataConverter.ByteArrayToDataUrl = function (byteArray, mimeType) {
                if ((byteArray instanceof Uint8Array) === false) {
                    throw new Error("Invalid argument type for byteArray.");
                }
                var dataMimeTypePrefix = _dataUrlPrefix;
                if (typeof mimeType === "string" && mimeType.trim().length > 0) {
                    dataMimeTypePrefix += mimeType.trim() + _dataUrlMimeTypeSeparator;
                }
                var byteString = String.fromCharCode.apply(null, byteArray);
                return dataMimeTypePrefix + _dataUrlBase64Separator + btoa(byteString);
            };
            DataConverter.GetMineTypeOfDataUrl = function (dataUrl) {
                if (typeof dataUrl !== "string") {
                    throw new Error("Invalid argument type for dataUrl.");
                }
                var base64SeparatorIndex = dataUrl.indexOf(_dataUrlBase64Separator);
                if (dataUrl.startsWith(_dataUrlPrefix) === false || base64SeparatorIndex < _dataUrlPrefix.length) {
                    throw new Error("Passed argument is not in DataUrl format.");
                }
                var mimeTypeSeparatorIndex = dataUrl.indexOf(_dataUrlMimeTypeSeparator);
                if (mimeTypeSeparatorIndex < _dataUrlPrefix.length || mimeTypeSeparatorIndex >= base64SeparatorIndex) {
                    return null;
                }
                return dataUrl.substring(_dataUrlPrefix.length, mimeTypeSeparatorIndex);
            };
            return DataConverter;
        }());
        Utils.DataConverter = DataConverter;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        Utils.FocusableElementSelector = "a[href], button, input, textarea, select, details, [tabindex='0']";
        var ElementHelper = (function () {
            function ElementHelper() {
            }
            ElementHelper.IsTextInputElement = function (control) {
                if ((control instanceof HTMLInputElement) === false) {
                    return false;
                }
                var type = control.type.toLowerCase();
                return type !== "submit" && type !== "reset" && type !== "button" && type !== "image" && type !== "hidden";
            };
            ElementHelper.GetIndexOfNodeList = function (nodeList, searchElement) {
                if ((nodeList instanceof NodeList) === false) {
                    throw new Error("Invalid argument type.");
                }
                for (var index = 0; index < nodeList.length; index++) {
                    var item = nodeList.item(index);
                    if (item === searchElement) {
                        return index;
                    }
                }
                return -1;
            };
            ElementHelper.IsReversedFocus = function (parentElement, currentlyFocusedNode, previouslyFocusedNode) {
                if (currentlyFocusedNode instanceof Node === false) {
                    throw new Error("Invalid argument type.");
                }
                if (previouslyFocusedNode instanceof Node === false) {
                    throw new Error("Invalid argument type.");
                }
                var previouslyFocusedNodeFound = false;
                var currentlyFocusedNodeFound = false;
                var isReversedFocus = false;
                var focusableNodeList = parentElement.querySelectorAll(Utils.FocusableElementSelector);
                for (var i = 0; i < focusableNodeList.length; i++) {
                    var focusableNode = focusableNodeList.item(i);
                    if (focusableNode === currentlyFocusedNode) {
                        currentlyFocusedNodeFound = true;
                        if (previouslyFocusedNodeFound === true) {
                            break;
                        }
                    }
                    if (focusableNode === previouslyFocusedNode) {
                        isReversedFocus = currentlyFocusedNodeFound === true;
                        previouslyFocusedNodeFound = true;
                        if (currentlyFocusedNodeFound === true) {
                            break;
                        }
                    }
                }
                if (currentlyFocusedNodeFound === false) {
                    throw new Error("Focused node not found.");
                }
                if (previouslyFocusedNodeFound === false) {
                    throw new Error("Previously focused node not found.");
                }
                return isReversedFocus;
            };
            ElementHelper.ConvertNodeListToArray = function (elements, filterTabIndex, filterDisabled, filterHidden) {
                if (filterTabIndex === void 0) { filterTabIndex = true; }
                if (filterDisabled === void 0) { filterDisabled = true; }
                if (filterHidden === void 0) { filterHidden = false; }
                var filteredElements = new Array(0);
                if (elements instanceof NodeList) {
                    for (var i = 0, l = elements.length - 1; i <= l; i++) {
                        var item = elements.item(i);
                        var elementItem = Utils.TypeCheckUtils.AsClass(item, Element);
                        if (elementItem !== null && filterTabIndex === true && elementItem.getAttribute("tabindex") === "-1") {
                            continue;
                        }
                        if (elementItem !== null && filterDisabled === true && elementItem.hasAttribute("disabled")) {
                            continue;
                        }
                        if (elementItem !== null && filterHidden === true && this.IsElementVisible(elementItem) === false) {
                            continue;
                        }
                        filteredElements.push(item);
                    }
                }
                return filteredElements;
            };
            ElementHelper.FindPreviousFocusableElement = function (parentElement, currentElement, circleElements) {
                if (circleElements === void 0) { circleElements = false; }
                return this.FindPreviousElement(parentElement, currentElement, Utils.FocusableElementSelector, true, true, true, circleElements);
            };
            ElementHelper.FindNextFocusableElement = function (parentElement, currentElement, circleElements) {
                if (circleElements === void 0) { circleElements = false; }
                return this.FindNextElement(parentElement, currentElement, Utils.FocusableElementSelector, true, true, true, circleElements);
            };
            ElementHelper.FindPreviousElement = function (parentElement, currentElement, elementSelector, filterTabIndex, filterDisabled, filterHidden, circleElements) {
                if (filterTabIndex === void 0) { filterTabIndex = true; }
                if (filterDisabled === void 0) { filterDisabled = true; }
                if (filterHidden === void 0) { filterHidden = false; }
                if (circleElements === void 0) { circleElements = false; }
                var elements = this.ConvertNodeListToArray(parentElement.querySelectorAll(elementSelector), filterTabIndex, filterDisabled, filterHidden);
                var previousElement = null;
                for (var i = elements.length - 1; i >= 0; i--) {
                    var item = elements[i];
                    if (item === currentElement) {
                        previousElement = i > 0 ? elements[i - 1] : null;
                        break;
                    }
                }
                if (circleElements === true && previousElement === null) {
                    var lastIndex = elements.length - 1;
                    previousElement = lastIndex >= 0 ? elements[lastIndex] : null;
                }
                return previousElement;
            };
            ElementHelper.FindNextElement = function (parentElement, currentElement, elementSelector, filterTabIndex, filterDisabled, filterHidden, circleElements) {
                if (filterTabIndex === void 0) { filterTabIndex = true; }
                if (filterDisabled === void 0) { filterDisabled = true; }
                if (filterHidden === void 0) { filterHidden = false; }
                if (circleElements === void 0) { circleElements = false; }
                var elements = this.ConvertNodeListToArray(parentElement.querySelectorAll(elementSelector), filterTabIndex, filterDisabled, filterHidden);
                var nextElement = null;
                for (var i = 0, l = elements.length - 1; i <= l; i++) {
                    var item = elements[i];
                    if (item === currentElement) {
                        nextElement = i < l ? elements[i + 1] : null;
                        break;
                    }
                }
                if (circleElements === true && nextElement === null) {
                    var elementCount = elements.length;
                    nextElement = elementCount > 0 ? elements[0] : null;
                }
                return nextElement;
            };
            ElementHelper.IsInside = function (control, clientX, clientY) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return false;
                }
                var controlClientRect = control.getBoundingClientRect();
                return clientX >= Math.floor(controlClientRect.left) && clientX <= Math.ceil(controlClientRect.right) && clientY >= Math.floor(controlClientRect.top) && clientY <= Math.ceil(controlClientRect.bottom);
            };
            ElementHelper.IsChildOf = function (control, child) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if ((child instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                var node = child.parentNode;
                while (node !== null) {
                    if (node === control) {
                        return true;
                    }
                    node = node.parentNode;
                }
                return false;
            };
            ElementHelper.IsElementVisible = function (control) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return false;
                }
                var cssStyle = window.getComputedStyle(control);
                var opacity = Utils.ConvertionHelper.TryParseFloat(cssStyle.opacity, 1);
                var zIndex = Utils.ConvertionHelper.TryParseInt(cssStyle.zIndex, 0);
                var visibility = cssStyle.visibility;
                return visibility === "visible" && opacity > 0 && zIndex >= 0;
            };
            ElementHelper.GetElementBounds = function (control) {
                return this.GetBoundingClientRect(control, false);
            };
            ElementHelper.GetElementBoundsWithoutPadding = function (control) {
                return this.GetBoundingClientRectWithoutPadding(control, false);
            };
            ElementHelper.GetUnplacedElementBounds = function (control) {
                if ((control instanceof HTMLElement) === false) {
                    return new DOMRect();
                }
                var controlStyle = control.style;
                var oldLeft = controlStyle.left, oldRight = controlStyle.right;
                var oldTop = controlStyle.top, oldBottom = controlStyle.bottom;
                var oldWidth = controlStyle.width, oldMaxWidth = controlStyle.maxWidth;
                var oldHeight = controlStyle.height, oldMaxHeight = controlStyle.maxHeight;
                try {
                    controlStyle.removeProperty("right");
                    controlStyle.setProperty("left", "-1000px");
                    controlStyle.removeProperty("bottom");
                    controlStyle.setProperty("top", "-1000px");
                    controlStyle.removeProperty("width");
                    controlStyle.removeProperty("max-width");
                    controlStyle.removeProperty("height");
                    controlStyle.removeProperty("max-height");
                    return this.GetElementBounds(control);
                }
                finally {
                    controlStyle.setProperty("left", oldLeft);
                    controlStyle.setProperty("right", oldRight);
                    controlStyle.setProperty("top", oldTop);
                    controlStyle.setProperty("bottom", oldBottom);
                    controlStyle.setProperty("width", oldWidth);
                    controlStyle.setProperty("max-width", oldMaxWidth);
                    controlStyle.setProperty("height", oldHeight);
                    controlStyle.setProperty("max-height", oldMaxHeight);
                }
            };
            ElementHelper.GetRelativeAndOverflowParent = function (control) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control instanceof HTMLBodyElement) {
                    return { relative: control, overflow: control };
                    ;
                }
                for (var parent_1 = control.parentElement; parent_1 !== null; parent_1 = parent_1.parentElement) {
                    var parentIsBody = parent_1 instanceof HTMLBodyElement;
                    var cssStyle = parentIsBody === false ? window.getComputedStyle(parent_1) : null;
                    if (parentIsBody || cssStyle !== null && (cssStyle.position === "absolute" || cssStyle.position === "relative" || cssStyle.position === "sticky")) {
                        return { relative: parent_1, overflow: this.GetOverflowParent(parent_1) };
                    }
                }
                return { relative: null, overflow: null };
            };
            ElementHelper.GetOverflowParent = function (control) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control instanceof HTMLBodyElement) {
                    return control;
                }
                for (var parent_2 = control.parentElement; parent_2 !== null; parent_2 = parent_2.parentElement) {
                    var parentIsBody = parent_2 instanceof HTMLBodyElement;
                    var cssStyle = parentIsBody === false ? window.getComputedStyle(parent_2) : null;
                    if (parentIsBody || cssStyle !== null && (cssStyle.overflowX !== "visible" || cssStyle.overflowY !== "visible")) {
                        return parent_2;
                    }
                }
                return null;
            };
            ElementHelper.GetEffectiveZIndex = function (control, referenceControl) {
                if (referenceControl === void 0) { referenceControl = null; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                var result = null;
                do {
                    var controlIsBody = control instanceof HTMLBodyElement;
                    var cssStyle = controlIsBody === false ? window.getComputedStyle(control) : null;
                    if (cssStyle !== null && (cssStyle.position === "absolute" || cssStyle.position === "fixed" || cssStyle.position === "relative" || cssStyle.position === "sticky")) {
                        var zIndex = Utils.ConvertionHelper.TryParseInt(cssStyle.zIndex, null);
                        if (zIndex !== null) {
                            result = zIndex;
                        }
                    }
                    if (controlIsBody || referenceControl instanceof Element && (control === referenceControl || control.parentNode === referenceControl.parentNode)) {
                        break;
                    }
                    control = control.parentElement;
                } while (control instanceof Element);
                return result;
            };
            ElementHelper.GetClientOffset = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlOffset = new Utils.Models.Point(controlClientRect.x, controlClientRect.y);
                if (includePageOffset === true) {
                    controlOffset.x += window.pageXOffset;
                    controlOffset.y += window.pageYOffset;
                }
                return controlOffset;
            };
            ElementHelper.GetOffsetWithMargin = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlOffset = new Utils.Models.Point(controlClientRect.x, controlClientRect.y);
                var cssStyle = window.getComputedStyle(control);
                var margin = this.GetMarginOfElement(cssStyle);
                controlOffset.x -= margin.left;
                controlOffset.y -= margin.top;
                if (includePageOffset === true) {
                    controlOffset.x += window.pageXOffset;
                    controlOffset.y += window.pageYOffset;
                }
                return controlOffset;
            };
            ElementHelper.GetOffsetWithoutPadding = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlOffset = new Utils.Models.Point(controlClientRect.x, controlClientRect.y);
                var cssStyle = window.getComputedStyle(control);
                var border = this.GetBorderOfElement(cssStyle);
                var padding = this.GetPaddingOfElement(cssStyle);
                controlOffset.x += border.left + padding.left;
                controlOffset.y += border.top + padding.top;
                if (includePageOffset === true) {
                    controlOffset.x += window.pageXOffset;
                    controlOffset.y += window.pageYOffset;
                }
                return controlOffset;
            };
            ElementHelper.GetBoundingClientRect = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlRectangle = new DOMRect(controlClientRect.left, controlClientRect.top, controlClientRect.width, controlClientRect.height);
                if (includePageOffset === true) {
                    controlRectangle.x += window.pageXOffset;
                    controlRectangle.y += window.pageYOffset;
                }
                return controlRectangle;
            };
            ElementHelper.GetBoundingRectWithMargin = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlRectangle = new DOMRect(controlClientRect.left, controlClientRect.top, controlClientRect.width, controlClientRect.height);
                var cssStyle = window.getComputedStyle(control);
                var margin = this.GetMarginOfElement(cssStyle);
                controlRectangle.x -= margin.left;
                controlRectangle.y -= margin.top;
                controlRectangle.width += margin.left + margin.right;
                controlRectangle.height += margin.top + margin.bottom;
                if (includePageOffset === true) {
                    controlRectangle.x += window.pageXOffset;
                    controlRectangle.y += window.pageYOffset;
                }
                return controlRectangle;
            };
            ElementHelper.GetBoundingClientRectWithoutPadding = function (control, includePageOffset) {
                if (includePageOffset === void 0) { includePageOffset = true; }
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                if (control.getClientRects().length <= 0) {
                    return new DOMRect();
                }
                var controlClientRect = control.getBoundingClientRect();
                var controlRectangle = new DOMRect(controlClientRect.left, controlClientRect.top, controlClientRect.width, controlClientRect.height);
                var cssStyle = window.getComputedStyle(control);
                var border = this.GetBorderOfElement(cssStyle);
                var padding = this.GetPaddingOfElement(cssStyle);
                controlRectangle.x += border.left + padding.left;
                controlRectangle.y += border.top + padding.top;
                controlRectangle.width -= (border.left + padding.left + border.right + padding.right);
                controlRectangle.height -= (border.top + padding.top + border.bottom + padding.bottom);
                if (includePageOffset === true) {
                    controlRectangle.x += window.pageXOffset;
                    controlRectangle.y += window.pageYOffset;
                }
                return controlRectangle;
            };
            ElementHelper.CalculateSizeOffsetToFitIntoBoundingClientRectWithoutPadding = function (control) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                var offset = new DOMRect();
                var cssStyle = window.getComputedStyle(control);
                var margin = this.GetMarginOfElement(cssStyle);
                offset.x += margin.left;
                offset.y += margin.top;
                offset.width += margin.left + margin.right;
                offset.height += margin.top + margin.bottom;
                if (cssStyle.boxSizing === "content-box") {
                    var contentBoxOffset = this.GetContentBoxOffset(cssStyle);
                    offset.x += contentBoxOffset.left;
                    offset.y += contentBoxOffset.top;
                    offset.width += contentBoxOffset.left + contentBoxOffset.right;
                    offset.height += contentBoxOffset.top + contentBoxOffset.bottom;
                }
                return offset;
            };
            ElementHelper.CalculateSizeOffsetToBoundingClientRectWithoutPadding = function (control) {
                if ((control instanceof Element) === false) {
                    throw new Error("Invalid argument type.");
                }
                var offset = new DOMRect();
                var cssStyle = window.getComputedStyle(control);
                if (cssStyle.boxSizing !== "content-box") {
                    var contentBoxOffset = this.GetContentBoxOffset(cssStyle);
                    offset.x += contentBoxOffset.left;
                    offset.y += contentBoxOffset.top;
                    offset.width += contentBoxOffset.left + contentBoxOffset.right;
                    offset.height += contentBoxOffset.top + contentBoxOffset.bottom;
                }
                return offset;
            };
            ElementHelper.GetPaddingOfElement = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetPaddingOfElement(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    return new Utils.Models.Margin(Utils.ConvertionHelper.TryParseFloat(cssStyle.paddingLeft, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.paddingTop, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.paddingRight, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.paddingBottom, 0));
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            ElementHelper.GetBorderOfElement = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetBorderOfElement(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    return new Utils.Models.Margin(Utils.ConvertionHelper.TryParseFloat(cssStyle.borderLeftWidth, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.borderTopWidth, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.borderRightWidth, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.borderBottomWidth, 0));
                }
                else {
                    throw Error("Invalid argument type.");
                }
            };
            ElementHelper.GetMarginOfElement = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetMarginOfElement(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    return new Utils.Models.Margin(Utils.ConvertionHelper.TryParseFloat(cssStyle.marginLeft, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.marginTop, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.marginRight, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.marginBottom, 0));
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            ElementHelper.GetTranslateOfElement = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetTranslateOfElement(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    var matrix = new DOMMatrixReadOnly(cssStyle.transform);
                    return new Utils.Models.Point(matrix.m41, matrix.m42);
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            ElementHelper.GetScrollPadding = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetScrollPadding(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    return new Utils.Models.ScrollOffset(Utils.ConvertionHelper.TryParseFloat(cssStyle.scrollPaddingTop, 0), Utils.ConvertionHelper.TryParseFloat(cssStyle.scrollPaddingBottom, 0));
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            ElementHelper.GetContentBoxOffset = function (controlOrCssStyle) {
                if (controlOrCssStyle instanceof Element) {
                    var control = controlOrCssStyle;
                    return this.GetContentBoxOffset(window.getComputedStyle(control));
                }
                else if (controlOrCssStyle instanceof CSSStyleDeclaration) {
                    var cssStyle = controlOrCssStyle;
                    var padding = this.GetPaddingOfElement(cssStyle);
                    var border = this.GetBorderOfElement(cssStyle);
                    return new Utils.Models.Margin(border.left + padding.left, border.top + padding.top, padding.right + border.right, padding.bottom + border.bottom);
                }
                else {
                    throw new Error("Invalid argument type.");
                }
            };
            ElementHelper.GetTextNodeBoundingClientRect = function (textNode) {
                if ((textNode instanceof Node) === false || textNode.nodeType !== Node.TEXT_NODE) {
                    return new DOMRect();
                }
                var range = document.createRange();
                range.selectNodeContents(textNode);
                return range.getBoundingClientRect();
            };
            return ElementHelper;
        }());
        Utils.ElementHelper = ElementHelper;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var EnumUtils = (function () {
            function EnumUtils() {
            }
            EnumUtils.GetNames = function (enumClass) {
                if (Utils.TypeCheckUtils.IsNotNullObject(enumClass) === false) {
                    throw new Error("enumType");
                }
                var keys = Object.keys(enumClass);
                if (keys.length > 0) {
                    var noKeys_1 = new Array();
                    for (var i = 0, l = keys.length; i < l; i++) {
                        var checkName = enumClass[keys[i]];
                        if (typeof checkName === "string") {
                            continue;
                        }
                        noKeys_1.push(Utils.ConvertionHelper.GenericToString(checkName));
                    }
                    keys = keys.filter(function (key) { return noKeys_1.includes(key) === false; });
                }
                return keys;
            };
            EnumUtils.GetValues = function (enumClass) {
                var keys = this.GetNames(enumClass);
                var values = new Array(keys.length);
                for (var i = 0, l = keys.length; i < l; i++) {
                    values[i] = enumClass[keys[i]];
                }
                return values;
            };
            EnumUtils.GetName = function (enumClass, value) {
                if (Utils.TypeCheckUtils.IsNotNullObject(enumClass) === false) {
                    throw new Error("enumType");
                }
                if (value in enumClass) {
                    return enumClass[value];
                }
                else {
                    return null;
                }
            };
            EnumUtils.HasFlag = function (checkValue, flag) {
                return (checkValue & flag) === flag;
            };
            return EnumUtils;
        }());
        Utils.EnumUtils = EnumUtils;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var NEvent = (function () {
            function NEvent() {
                this.listeners = new Array(0);
                this.enlistener = null;
            }
            NEvent.prototype.GetEnlistener = function () {
                if (this.enlistener === null) {
                    this.enlistener = new NEventEnlistener(this.listeners);
                }
                return this.enlistener;
            };
            NEvent.prototype.ToMulticastFunction = function () {
                if (this.listeners.length < 1) {
                    return null;
                }
                return Utils.EventUtils.SenderCallbackWrapper(this, function (sender) {
                    var args = Utils.EventUtils.ArgumentsToArray(arguments);
                    args.shift();
                    for (var i = 0, l = this.listeners.length; i < l; i++) {
                        var listener = this.listeners[i];
                        listener.apply(sender, args);
                    }
                });
            };
            return NEvent;
        }());
        Utils.NEvent = NEvent;
        var NEventEnlistener = (function () {
            function NEventEnlistener(listeners) {
                if ((listeners instanceof Array) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.listeners = listeners;
            }
            NEventEnlistener.prototype.Add = function (listener) {
                this.listeners.push(listener);
            };
            NEventEnlistener.prototype.Remove = function (listener) {
                var index = this.listeners.indexOf(listener);
                if (index > -1)
                    this.listeners.splice(index, 1);
            };
            return NEventEnlistener;
        }());
        Utils.NEventEnlistener = NEventEnlistener;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var GesturePointer = (function () {
            function GesturePointer(eventInitDict) {
                this._currentTarget = null;
                this._target = null;
                this._clientX = 0;
                this._clientY = 0;
                this._screenX = 0;
                this._screenY = 0;
                this._pointerId = 0;
                this._isPrimary = false;
                this._pressure = 0;
                if (Utils.TypeCheckUtils.IsNotNullObject(eventInitDict)) {
                    if (eventInitDict.currentTarget === null || eventInitDict.currentTarget instanceof Window || eventInitDict.currentTarget instanceof Node) {
                        this._currentTarget = eventInitDict.currentTarget;
                    }
                    if (eventInitDict.relatedTarget === null || eventInitDict.relatedTarget instanceof Window || eventInitDict.relatedTarget instanceof Node) {
                        this._target = eventInitDict.relatedTarget;
                    }
                    if (typeof eventInitDict.clientX === "number") {
                        this._clientX = eventInitDict.clientX;
                    }
                    if (typeof eventInitDict.clientY === "number") {
                        this._clientY = eventInitDict.clientY;
                    }
                    if (typeof eventInitDict.screenX === "number") {
                        this._screenX = eventInitDict.screenX;
                    }
                    if (typeof eventInitDict.screenY === "number") {
                        this._screenY = eventInitDict.screenY;
                    }
                    if (typeof eventInitDict.pointerId === "number") {
                        this._pointerId = eventInitDict.pointerId;
                    }
                    if (typeof eventInitDict.isPrimary === "boolean") {
                        this._isPrimary = eventInitDict.isPrimary;
                    }
                    if (typeof eventInitDict.pressure === "number") {
                        this._pressure = eventInitDict.pressure;
                    }
                }
            }
            Object.defineProperty(GesturePointer.prototype, "currentTarget", {
                get: function () {
                    return this._currentTarget;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "target", {
                get: function () {
                    return this._target;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "clientX", {
                get: function () {
                    return this._clientX;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "clientY", {
                get: function () {
                    return this._clientY;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "screenX", {
                get: function () {
                    return this._screenX;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "screenY", {
                get: function () {
                    return this._screenY;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "pointerId", {
                get: function () {
                    return this._pointerId;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "isPrimary", {
                get: function () {
                    return this._isPrimary;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePointer.prototype, "pressure", {
                get: function () {
                    return this._pressure;
                },
                enumerable: false,
                configurable: true
            });
            return GesturePointer;
        }());
        Utils.GesturePointer = GesturePointer;
        var GestureEvent = (function () {
            function GestureEvent(typeArg, eventInitDict) {
                this._type = "";
                this._cancelBubble = false;
                this._defaultPrevented = false;
                this._altKey = false;
                this._ctrlKey = false;
                this._metaKey = false;
                this._shiftKey = false;
                this._pointers = new Array();
                this._changedPointers = new Array();
                if (typeof typeArg === "string") {
                    this._type = typeArg;
                }
                if (Utils.TypeCheckUtils.IsNotNullObject(eventInitDict)) {
                    if (typeof eventInitDict.altKey === "boolean") {
                        this._altKey = eventInitDict.altKey;
                    }
                    if (typeof eventInitDict.ctrlKey === "boolean") {
                        this._ctrlKey = eventInitDict.ctrlKey;
                    }
                    if (typeof eventInitDict.metaKey === "boolean") {
                        this._metaKey = eventInitDict.metaKey;
                    }
                    if (typeof eventInitDict.shiftKey === "boolean") {
                        this._shiftKey = eventInitDict.shiftKey;
                    }
                    if (Array.isArray(eventInitDict.pointers)) {
                        for (var i = 0, l = eventInitDict.pointers.length; i < l; i++) {
                            this._pointers.push(eventInitDict.pointers[i]);
                        }
                    }
                    if (Array.isArray(eventInitDict.changedPointers)) {
                        for (var i = 0, l = eventInitDict.changedPointers.length; i < l; i++) {
                            this._changedPointers.push(eventInitDict.changedPointers[i]);
                        }
                    }
                }
            }
            Object.defineProperty(GestureEvent.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "cancelBubble", {
                get: function () {
                    return this._cancelBubble;
                },
                set: function (value) {
                    this._cancelBubble = value ? true : false;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "defaultPrevented", {
                get: function () {
                    return this._defaultPrevented;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "altKey", {
                get: function () {
                    return this._altKey;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "ctrlKey", {
                get: function () {
                    return this._ctrlKey;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "metaKey", {
                get: function () {
                    return this._metaKey;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "shiftKey", {
                get: function () {
                    return this._shiftKey;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "pointers", {
                get: function () {
                    return this._pointers;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEvent.prototype, "changedPointers", {
                get: function () {
                    return this._changedPointers;
                },
                enumerable: false,
                configurable: true
            });
            GestureEvent.prototype.preventDefault = function () {
                this._defaultPrevented = true;
            };
            return GestureEvent;
        }());
        Utils.GestureEvent = GestureEvent;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var GestureHelper = (function () {
            function GestureHelper() {
                this.gesturePointers = new Array(0);
                this.gestureAction = GestureHelper.GestureAction.None;
                this.gestureStartMoveOffset = 20;
                this.gestureStartRotateDegree = 5;
                this.gestureStartDistanceFactor = 200;
                this.mouseButtonClicks = null;
                this.detectDoubleClickHandle = -1;
                this.twoFingerTapFirstPointer = null;
                this.detectTwoFingerTapHandler = -1;
                this.HandleGestureDown = this.WrappedGestureDown.bind(this);
                this.HandleGestureMove = this.WrappedGestureMove.bind(this);
                this.HandleGestureUp = this.WrappedGestureUp.bind(this);
                this.HandleGestureCancel = this.WrappedGestureCancel.bind(this);
                this.MouseDownEvent = new Utils.NEvent();
                this.MouseMoveEvent = new Utils.NEvent();
                this.MouseUpEvent = new Utils.NEvent();
                this.MouseClickEvent = new Utils.NEvent();
                this.PressAndTapEvent = new Utils.NEvent();
                this.TwoFingerTapEvent = new Utils.NEvent();
                this.TwoFingerPanEvent = new Utils.NEvent();
                this.RotateEvent = new Utils.NEvent();
                this.ZoomEvent = new Utils.NEvent();
            }
            GestureHelper.prototype.WrappedGestureDown = function (sender, event) {
                var _this = this;
                event.preventDefault();
                event.changedPointers.forEach(function (pointer) {
                    var startPosition = _this.GetPointerPosition(pointer);
                    _this.gesturePointers[pointer.pointerId] = new GestureHelper.GestureInfo(startPosition);
                });
                try {
                    switch (this.gestureAction) {
                        case GestureHelper.GestureAction.Pan: {
                            this.gestureAction = GestureHelper.GestureAction.Invalid;
                            var firstPointer = event.pointers[0];
                            this.PerformGestureMouseUp(sender, event, firstPointer, Utils.Models.MouseButton.Primary);
                            break;
                        }
                        case GestureHelper.GestureAction.NoneNoPan: {
                            var firstPointer = event.pointers[0];
                            var gestureInfo = this.TryGetGestureInfo(firstPointer.pointerId);
                            if (gestureInfo !== null) {
                                var startPosition = this.GetPointerPosition(firstPointer);
                                gestureInfo.StartPosition = startPosition;
                            }
                            break;
                        }
                        default:
                            break;
                    }
                }
                finally {
                    if (event.pointers.length >= 3) {
                        this.gestureAction = GestureHelper.GestureAction.Invalid;
                    }
                }
                return !event.defaultPrevented;
            };
            GestureHelper.prototype.WrappedGestureMove = function (sender, event) {
                var _this = this;
                event.preventDefault();
                event.changedPointers.forEach(function (pointer) {
                    switch (_this.gestureAction) {
                        case GestureHelper.GestureAction.None: {
                            if (event.pointers.length === 1) {
                                if (_this.IsOneFingerMoving(pointer)) {
                                    _this.gestureAction = GestureHelper.GestureAction.Pan;
                                    _this.PerformGestureMouseDown(sender, event, pointer, Utils.Models.MouseButton.Primary);
                                    _this.PerformGestureMouseMove(sender, event, pointer, Utils.Models.MouseButton.Primary);
                                }
                            }
                            else if (event.pointers.length === 2) {
                                var other = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                var gestureAction = _this.GetTwoFingerMovingGesture(pointer, other);
                                if (gestureAction === GestureHelper.GestureAction.TwoFingerPan) {
                                    _this.gestureAction = gestureAction;
                                    var other_1 = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                    _this.PerformGestureTwoFingerPan(sender, pointer, other_1);
                                }
                                else if (gestureAction === GestureHelper.GestureAction.Rotate) {
                                    _this.gestureAction = gestureAction;
                                    var other_2 = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                    _this.PerformGestureRotate(sender, pointer, other_2);
                                }
                                else if (gestureAction === GestureHelper.GestureAction.Zoom) {
                                    _this.gestureAction = gestureAction;
                                    var other_3 = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                    _this.PerformGestureZoom(sender, pointer, other_3);
                                }
                            }
                            break;
                        }
                        case GestureHelper.GestureAction.NoneNoPan: {
                            if (event.pointers.length === 2) {
                                var other = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                var gestureAction = _this.GetTwoFingerMovingGesture(pointer, other);
                                if (gestureAction === GestureHelper.GestureAction.TwoFingerPan) {
                                    _this.gestureAction = gestureAction;
                                    _this.PerformGestureTwoFingerPan(sender, event.pointers[0], event.pointers[1]);
                                }
                                else if (gestureAction === GestureHelper.GestureAction.Rotate) {
                                    _this.gestureAction = gestureAction;
                                    var other_4 = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                    _this.PerformGestureRotate(sender, pointer, other_4);
                                }
                                else if (gestureAction === GestureHelper.GestureAction.Zoom) {
                                    _this.gestureAction = gestureAction;
                                    var other_5 = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                                    _this.PerformGestureZoom(sender, pointer, other_5);
                                }
                            }
                            break;
                        }
                        case GestureHelper.GestureAction.Pan: {
                            _this.PerformGestureMouseMove(sender, event, pointer, Utils.Models.MouseButton.Primary);
                            break;
                        }
                        case GestureHelper.GestureAction.TwoFingerPan: {
                            _this.PerformGestureTwoFingerPan(sender, event.pointers[0], event.pointers[1]);
                            break;
                        }
                        case GestureHelper.GestureAction.Rotate: {
                            var other = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                            _this.PerformGestureRotate(sender, pointer, other);
                            break;
                        }
                        case GestureHelper.GestureAction.Zoom: {
                            var other = event.pointers[0].pointerId === pointer.pointerId ? event.pointers[1] : event.pointers[0];
                            _this.PerformGestureZoom(sender, pointer, other);
                            break;
                        }
                        default:
                            break;
                    }
                });
                return !event.defaultPrevented;
            };
            GestureHelper.prototype.WrappedGestureUp = function (sender, event) {
                var _this = this;
                event.preventDefault();
                try {
                    var totalPointers_1 = event.pointers.length + event.changedPointers.length;
                    event.changedPointers.forEach(function (pointer) {
                        switch (_this.gestureAction) {
                            case GestureHelper.GestureAction.None: {
                                if (totalPointers_1 === 1) {
                                    _this.PerformGestureMouseDown(sender, event, pointer, Utils.Models.MouseButton.Primary);
                                    _this.PerformGestureMouseUp(sender, event, pointer, Utils.Models.MouseButton.Primary);
                                }
                                else if (totalPointers_1 === 2) {
                                    var pointerStillPressed = event.pointers.map(function (pointer) { return _this.TryGetGestureInfo(pointer.pointerId); }).some(function (gestureInfo) { return gestureInfo !== null && gestureInfo.Press === true; });
                                    var releasedPointersTaped = event.changedPointers.map(function (pointer) { return _this.TryGetGestureInfo(pointer.pointerId); }).every(function (gestureInfo) { return gestureInfo !== null && gestureInfo.Press === false; });
                                    if (pointerStillPressed === false && releasedPointersTaped === true) {
                                        _this.gestureAction = GestureHelper.GestureAction.TwoFingerTap;
                                        _this.twoFingerTapFirstPointer = pointer;
                                        _this.DetectTwoFingerTap();
                                    }
                                    else if (pointerStillPressed === true && releasedPointersTaped === true) {
                                        _this.gestureAction = GestureHelper.GestureAction.PressAndTap;
                                        var stillPressedPointer = event.pointers[0];
                                        _this.PerformGesturePressAndTap(sender, stillPressedPointer, pointer);
                                    }
                                    else {
                                        _this.gestureAction = GestureHelper.GestureAction.NoneNoPan;
                                    }
                                }
                                break;
                            }
                            case GestureHelper.GestureAction.Pan: {
                                _this.PerformGestureMouseUp(sender, event, pointer, Utils.Models.MouseButton.Primary);
                                break;
                            }
                            case GestureHelper.GestureAction.PressAndTap: {
                                if (totalPointers_1 === 2) {
                                    var pointerStillPressed = event.pointers.map(function (pointer) { return _this.TryGetGestureInfo(pointer.pointerId); }).some(function (gestureInfo) { return gestureInfo !== null && gestureInfo.Press === true; });
                                    var releasedPointersTaped = event.changedPointers.map(function (pointer) { return _this.TryGetGestureInfo(pointer.pointerId); }).every(function (gestureInfo) { return gestureInfo !== null && gestureInfo.Press === false; });
                                    if (pointerStillPressed === true && releasedPointersTaped === true) {
                                        var stillPressedPointer = event.pointers[0];
                                        _this.PerformGesturePressAndTap(sender, stillPressedPointer, pointer);
                                    }
                                }
                                break;
                            }
                            case GestureHelper.GestureAction.TwoFingerTap: {
                                window.clearTimeout(_this.detectTwoFingerTapHandler);
                                _this.gestureAction = GestureHelper.GestureAction.Invalid;
                                _this.PerformGestureTwoFingerTap(sender, _this.twoFingerTapFirstPointer, pointer);
                                _this.twoFingerTapFirstPointer = null;
                                break;
                            }
                            case GestureHelper.GestureAction.TwoFingerPan:
                            case GestureHelper.GestureAction.Rotate:
                            case GestureHelper.GestureAction.Zoom: {
                                _this.gestureAction = GestureHelper.GestureAction.NoneNoPan;
                                break;
                            }
                            default:
                                break;
                        }
                    });
                }
                finally {
                    event.changedPointers.forEach(function (pointer) {
                        delete _this.gesturePointers[pointer.pointerId];
                    });
                    if (event.pointers.length === 0) {
                        this.gestureAction = GestureHelper.GestureAction.None;
                    }
                }
                return !event.defaultPrevented;
            };
            GestureHelper.prototype.WrappedGestureCancel = function (sender, event) {
                this.gestureAction = GestureHelper.GestureAction.Invalid;
                return this.WrappedGestureUp(sender, event);
            };
            GestureHelper.prototype.PerformMouseClick = function (sender, event, pointer) {
                var buttonClicks = this.mouseButtonClicks;
                if (Utils.TypeCheckUtils.IsNotNullObject(buttonClicks)) {
                    var button = buttonClicks.item1;
                    var clicks = buttonClicks.item2;
                    try {
                        var mouseEvent = this.GestureToMouseEvent("click", event, pointer, button, clicks);
                        this.OnMouseClick(sender, mouseEvent);
                    }
                    finally {
                        if (clicks > 1) {
                            this.mouseButtonClicks = null;
                        }
                    }
                }
            };
            GestureHelper.prototype.PerformGestureMouseDown = function (sender, event, pointer, button) {
                var gestureInfo = this.TryGetGestureInfo(pointer.pointerId);
                if (gestureInfo !== null) {
                    var startPosition = gestureInfo.StartPosition;
                    var clicks = this.DetectMouseClick(button);
                    var comparePosition = this.GetPointerPosition(pointer);
                    var offset = new Utils.Models.Point(startPosition.x - comparePosition.x, startPosition.y - comparePosition.y);
                    var mouseEvent = this.GestureToMouseEvent("mousedown", event, pointer, button, clicks, offset);
                    this.OnMouseDown(sender, mouseEvent);
                }
            };
            GestureHelper.prototype.PerformGestureMouseMove = function (sender, event, pointer, button) {
                if (this.HasGestureInfo(pointer.pointerId) === true) {
                    var mouseEvent = this.GestureToMouseEvent("mousemove", event, pointer, button, 0);
                    this.OnMouseMove(sender, mouseEvent);
                }
            };
            GestureHelper.prototype.PerformGestureMouseUp = function (sender, event, pointer, button) {
                if (this.HasGestureInfo(pointer.pointerId) === true) {
                    var buttonClicks = this.mouseButtonClicks;
                    var clickedMouseButton = Utils.TypeCheckUtils.IsNotNullObject(buttonClicks) ? buttonClicks.item1 : Utils.Models.MouseButton.Invalid;
                    if (button === clickedMouseButton) {
                        var mouseEvent = this.GestureToMouseEvent("mouseup", event, pointer, button, 1);
                        this.OnMouseUp(sender, mouseEvent);
                        this.PerformMouseClick(sender, event, pointer);
                    }
                }
            };
            GestureHelper.prototype.PerformGesturePressAndTap = function (sender, pressed, tapped) {
                var pressScreen = new Utils.Models.Point(pressed.screenX, pressed.screenY);
                var pressClient = new Utils.Models.Point(pressed.clientX, pressed.clientY);
                var pressOffset = new Utils.Models.Point();
                if (pressed.target instanceof Element) {
                    var target = pressed.target;
                    var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                    pressOffset.x = Math.round(pressClient.x - controlOffset.x);
                    pressOffset.y = Math.round(pressClient.y - controlOffset.y);
                }
                var tapScreen = new Utils.Models.Point(tapped.screenX, tapped.screenY);
                var tapClient = new Utils.Models.Point(tapped.clientX, tapped.clientY);
                var tapOffset = new Utils.Models.Point();
                if (tapped.target instanceof Element) {
                    var target = tapped.target;
                    var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                    tapOffset.x = Math.round(tapClient.x - controlOffset.x);
                    tapOffset.y = Math.round(tapClient.y - controlOffset.y);
                }
                var pressedPointer = new Utils.GestureEventPointer(pressOffset, pressClient, pressScreen, pressed.pressure);
                var tappedPointer = new Utils.GestureEventPointer(tapOffset, tapClient, tapScreen, tapped.pressure);
                this.OnPressAndTap(sender, new Utils.GesturePressAndTapEvent(pressedPointer, tappedPointer));
            };
            GestureHelper.prototype.PerformGestureTwoFingerTap = function (sender, first, second) {
                var firstScreen = new Utils.Models.Point(first.screenX, first.screenY);
                var firstClient = new Utils.Models.Point(first.clientX, first.clientY);
                var firstOffset = new Utils.Models.Point();
                if (first.target instanceof Element) {
                    var target = first.target;
                    var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                    firstOffset.x = Math.round(firstClient.x - controlOffset.x);
                    firstOffset.y = Math.round(firstClient.y - controlOffset.y);
                }
                var secondScreen = new Utils.Models.Point(second.screenX, second.screenY);
                var secondClient = new Utils.Models.Point(second.clientX, second.clientY);
                var secondOffset = new Utils.Models.Point();
                if (second.target instanceof Element) {
                    var target = second.target;
                    var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                    secondOffset.x = Math.round(secondClient.x - controlOffset.x);
                    secondOffset.y = Math.round(secondClient.y - controlOffset.y);
                }
                var firstPointer = new Utils.GestureEventPointer(firstOffset, firstClient, firstScreen, first.pressure);
                var secondPointer = new Utils.GestureEventPointer(secondOffset, secondClient, secondScreen, second.pressure);
                this.OnTwoFingerTap(sender, new Utils.GestureTwoFingerTapEvent(firstPointer, secondPointer));
            };
            GestureHelper.prototype.PerformGestureTwoFingerPan = function (sender, first, second) {
                var firstGestureInfo = this.TryGetGestureInfo(first.pointerId);
                var secondGestureInfo = this.TryGetGestureInfo(second.pointerId);
                if (firstGestureInfo !== null && secondGestureInfo !== null) {
                    var oldFirstStartPosition = firstGestureInfo.StartPosition;
                    var oldSecondStartPosition = secondGestureInfo.StartPosition;
                    var newFirstStartPosition = this.GetPointerPosition(first);
                    var newSecondStartPosition = this.GetPointerPosition(second);
                    firstGestureInfo.StartPosition = newFirstStartPosition;
                    secondGestureInfo.StartPosition = newSecondStartPosition;
                    var oldCenterPosition = new Utils.Models.Point(Math.round((oldFirstStartPosition.x + oldSecondStartPosition.x) / 2), Math.round((oldFirstStartPosition.y + oldSecondStartPosition.y) / 2));
                    var newCenterPosition = new Utils.Models.Point(Math.round((newFirstStartPosition.x + newSecondStartPosition.x) / 2), Math.round((newFirstStartPosition.y + newSecondStartPosition.y) / 2));
                    var panDelta = new Utils.Models.Point(newCenterPosition.x - oldCenterPosition.x, newCenterPosition.y - oldCenterPosition.y);
                    if (panDelta.x !== 0 || panDelta.y !== 0) {
                        var firstScreen = new Utils.Models.Point(first.screenX, first.screenY);
                        var firstClient = new Utils.Models.Point(first.clientX, first.clientY);
                        var firstOffset = new Utils.Models.Point();
                        if (first.target instanceof Element) {
                            var target = first.target;
                            var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                            firstOffset.x = Math.round(firstClient.x - controlOffset.x);
                            firstOffset.y = Math.round(firstClient.y - controlOffset.y);
                        }
                        var secondScreen = new Utils.Models.Point(second.screenX, second.screenY);
                        var secondClient = new Utils.Models.Point(second.clientX, second.clientY);
                        var secondOffset = new Utils.Models.Point();
                        if (second.target instanceof Element) {
                            var target = second.target;
                            var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                            secondOffset.x = Math.round(secondClient.x - controlOffset.x);
                            secondOffset.y = Math.round(secondClient.y - controlOffset.y);
                        }
                        var firstPointer = new Utils.GestureEventPointer(firstOffset, firstClient, firstScreen, first.pressure);
                        var secondPointer = new Utils.GestureEventPointer(secondOffset, secondClient, secondScreen, second.pressure);
                        this.OnTwoFingerPan(sender, new Utils.GestureTwoFingerPanEvent(firstPointer, secondPointer, panDelta));
                    }
                }
            };
            GestureHelper.prototype.PerformGestureRotate = function (sender, pointer, other) {
                var currentGestureInfo = this.TryGetGestureInfo(pointer.pointerId);
                var otherGestureInfo = this.TryGetGestureInfo(other.pointerId);
                if (currentGestureInfo !== null && otherGestureInfo !== null) {
                    var oldStartPosition = currentGestureInfo.StartPosition;
                    var oldOtherStartPosition = otherGestureInfo.StartPosition;
                    var newStartPosition = this.GetPointerPosition(pointer);
                    var newOtherStartPosition = this.GetPointerPosition(other);
                    currentGestureInfo.StartPosition = newStartPosition;
                    otherGestureInfo.StartPosition = newOtherStartPosition;
                    var originalAngle = this.GetRadianBetweenPoints(oldStartPosition, oldOtherStartPosition);
                    var currentAngle = this.GetRadianBetweenPoints(newStartPosition, newOtherStartPosition);
                    var rotateDelta = currentAngle - originalAngle;
                    if (rotateDelta !== 0) {
                        var clientCenter = new Utils.Models.Point((oldStartPosition.x + oldOtherStartPosition.x) / 2, (oldStartPosition.y + oldOtherStartPosition.y) / 2);
                        var screenCenter = new Utils.Models.Point(clientCenter.x - (pointer.screenX - pointer.clientX), clientCenter.y - (pointer.screenY - pointer.clientY));
                        var offsetCenter = new Utils.Models.Point();
                        if (pointer.target instanceof Element) {
                            var target = pointer.target;
                            var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                            offsetCenter.x = Math.round(clientCenter.x - controlOffset.x);
                            offsetCenter.y = Math.round(clientCenter.y - controlOffset.y);
                        }
                        this.OnRotate(sender, new Utils.GestureRotateEvent(offsetCenter, clientCenter, screenCenter, this.RadianToDegree(rotateDelta)));
                    }
                }
            };
            GestureHelper.prototype.PerformGestureZoom = function (sender, pointer, other) {
                var currentGestureInfo = this.TryGetGestureInfo(pointer.pointerId);
                var otherGestureInfo = this.TryGetGestureInfo(other.pointerId);
                if (currentGestureInfo !== null && otherGestureInfo !== null) {
                    var oldStartPosition = currentGestureInfo.StartPosition;
                    var otherStartPosition = otherGestureInfo.StartPosition;
                    var newStartPosition = this.GetPointerPosition(pointer);
                    currentGestureInfo.StartPosition = newStartPosition;
                    var originalDistance = this.GetDistance(oldStartPosition, otherStartPosition);
                    var currentDistance = this.GetDistance(newStartPosition, otherStartPosition);
                    var zoomDelta = currentDistance / originalDistance;
                    if (zoomDelta !== 1) {
                        var clientCenter = new Utils.Models.Point((oldStartPosition.x + otherStartPosition.x) / 2, (oldStartPosition.y + otherStartPosition.y) / 2);
                        var screenCenter = new Utils.Models.Point(clientCenter.x - (pointer.screenX - pointer.clientX), clientCenter.y - (pointer.screenY - pointer.clientY));
                        var offsetCenter = new Utils.Models.Point();
                        if (pointer.target instanceof Element) {
                            var target = pointer.target;
                            var controlOffset = Utils.ElementHelper.GetOffsetWithoutPadding(target, false);
                            offsetCenter.x = Math.round(clientCenter.x - controlOffset.x);
                            offsetCenter.y = Math.round(clientCenter.y - controlOffset.y);
                        }
                        this.OnZoom(sender, new Utils.GestureZoomEvent(offsetCenter, clientCenter, screenCenter, zoomDelta));
                    }
                }
            };
            GestureHelper.prototype.GetRadianBetweenPoints = function (point1, point2) {
                return Math.atan2(point2.y - point1.y, point2.x - point1.x);
            };
            GestureHelper.prototype.GetDistance = function (point1, point2) {
                if ((point1 instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                if ((point2 instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                var x = point1.x - point2.x;
                var y = point1.y - point2.y;
                return Math.sqrt(Math.abs(x * x + y * y));
            };
            GestureHelper.prototype.CorrectNormalizedRadian = function (radian) {
                return radian > Math.PI ? Math.PI * 2 - radian : radian;
            };
            GestureHelper.prototype.NormalizeRadian = function (radian) {
                return radian < 0 ? radian + Math.PI * 2 : radian;
            };
            GestureHelper.prototype.RadianToDegree = function (radians) {
                return radians * 180 / Math.PI;
            };
            GestureHelper.prototype.GetPointerPosition = function (pointer) {
                return new Utils.Models.Point(pointer.clientX, pointer.clientY);
            };
            GestureHelper.prototype.TryGetGestureInfo = function (pointerId) {
                var gestureInfo = this.gesturePointers[pointerId];
                return gestureInfo instanceof GestureHelper.GestureInfo ? gestureInfo : null;
            };
            GestureHelper.prototype.HasGestureInfo = function (pointerId) {
                var gestureInfo = this.gesturePointers[pointerId];
                return gestureInfo instanceof GestureHelper.GestureInfo;
            };
            GestureHelper.prototype.DetectMouseClick = function (button, timeout) {
                if (timeout === void 0) { timeout = 200; }
                var buttonClicks = this.mouseButtonClicks;
                if (Utils.TypeCheckUtils.IsNotNullObject(buttonClicks) === false || this.detectDoubleClickHandle < 0) {
                    this.mouseButtonClicks = buttonClicks = { item1: button, item2: 1 };
                    this.detectDoubleClickHandle = window.setTimeout(this.DetectMouseClickTimeout.bind(this), timeout);
                }
                else {
                    window.clearTimeout(this.detectDoubleClickHandle);
                    if (buttonClicks.item1 === button) {
                        this.mouseButtonClicks = buttonClicks = { item1: button, item2: 2 };
                    }
                    else {
                        this.mouseButtonClicks = buttonClicks = { item1: button, item2: 1 };
                        this.detectDoubleClickHandle = window.setTimeout(this.DetectMouseClickTimeout.bind(this), timeout);
                    }
                }
                return buttonClicks.item2;
            };
            GestureHelper.prototype.DetectMouseClickTimeout = function () {
                this.detectDoubleClickHandle = -1;
            };
            GestureHelper.prototype.DetectTwoFingerTap = function (timeout) {
                var _this = this;
                if (timeout === void 0) { timeout = 50; }
                this.detectTwoFingerTapHandler = window.setTimeout(function () {
                    _this.gestureAction = GestureHelper.GestureAction.NoneNoPan;
                    _this.twoFingerTapFirstPointer = null;
                }, timeout);
            };
            GestureHelper.prototype.IsOneFingerMoving = function (pointer) {
                var gestureInfo = this.TryGetGestureInfo(pointer.pointerId);
                if (gestureInfo !== null) {
                    var startPosition = gestureInfo.StartPosition;
                    var comparePosition = this.GetPointerPosition(pointer);
                    var distance = this.GetDistance(startPosition, comparePosition);
                    return distance >= this.gestureStartMoveOffset;
                }
                return false;
            };
            GestureHelper.prototype.GetTwoFingerMovingGesture = function (pointer, other) {
                var currentGestureInfo = this.TryGetGestureInfo(pointer.pointerId);
                var otherGestureInfo = this.TryGetGestureInfo(other.pointerId);
                if (currentGestureInfo !== null && otherGestureInfo !== null) {
                    var currentStartPosition = currentGestureInfo.StartPosition;
                    var otherStartPosition = otherGestureInfo.StartPosition;
                    var currentPosition = this.GetPointerPosition(pointer);
                    var otherPosition = this.GetPointerPosition(other);
                    var currentPositionDistance = this.GetDistance(currentPosition, otherPosition);
                    var startGestureFactor = currentPositionDistance / this.gestureStartDistanceFactor;
                    var currentAngle = this.GetRadianBetweenPoints(currentPosition, otherPosition);
                    var startAngle = this.GetRadianBetweenPoints(currentStartPosition, otherStartPosition);
                    var correctedAngleOffset = this.CorrectNormalizedRadian(this.NormalizeRadian(currentAngle - startAngle));
                    var correctedAngleOffsetInDegree = this.RadianToDegree(correctedAngleOffset);
                    var startRotateDegree = startGestureFactor > 1 ? this.gestureStartRotateDegree / startGestureFactor : this.gestureStartRotateDegree;
                    if (correctedAngleOffsetInDegree >= startRotateDegree) {
                        return GestureHelper.GestureAction.Rotate;
                    }
                    var startPositionDistance = this.GetDistance(currentStartPosition, otherStartPosition);
                    var positionDistanceOffset = Math.abs(currentPositionDistance - startPositionDistance);
                    var startZoomOffset = startGestureFactor > 1 ? this.gestureStartMoveOffset * startGestureFactor : this.gestureStartMoveOffset;
                    if (positionDistanceOffset >= startZoomOffset) {
                        return GestureHelper.GestureAction.Zoom;
                    }
                    var currentPositionCenter = new Utils.Models.Point((currentPosition.x + otherPosition.x) / 2, (currentPosition.y + otherPosition.y) / 2);
                    var startPositionCenter = new Utils.Models.Point((currentStartPosition.x + otherStartPosition.x) / 2, (currentStartPosition.y + otherStartPosition.y) / 2);
                    var positionCenterDistance = this.GetDistance(currentPositionCenter, startPositionCenter);
                    var startPanOffset = startGestureFactor > 1 ? this.gestureStartMoveOffset * startGestureFactor : this.gestureStartMoveOffset;
                    if (positionCenterDistance >= startPanOffset) {
                        return GestureHelper.GestureAction.TwoFingerPan;
                    }
                }
                return GestureHelper.GestureAction.Invalid;
            };
            GestureHelper.prototype.GestureToMouseEvent = function (type, event, pointer, button, clicks, offset) {
                if (offset === void 0) { offset = null; }
                var screenPos = new Utils.Models.Point(pointer.screenX, pointer.screenY);
                var clientPos = new Utils.Models.Point(pointer.clientX, pointer.clientY);
                if (offset instanceof Utils.Models.Point) {
                    screenPos.x += offset.x;
                    screenPos.y += offset.y;
                    clientPos.x += offset.x;
                    clientPos.y += offset.y;
                }
                var mouseEvent;
                if (typeof document.createEvent !== "undefined") {
                    var convertedEvent = document.createEvent("MouseEvent");
                    convertedEvent.initMouseEvent(type, false, false, document.defaultView, clicks, screenPos.x, screenPos.y, clientPos.x, clientPos.y, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, button, pointer.target);
                    mouseEvent = convertedEvent;
                }
                else {
                    var convertedEvent = new MouseEvent(type, {
                        bubbles: false, cancelable: false, view: document.defaultView, detail: clicks, screenX: screenPos.x, screenY: screenPos.y,
                        clientX: clientPos.x, clientY: clientPos.y, ctrlKey: event.ctrlKey, altKey: event.altKey, shiftKey: event.shiftKey,
                        metaKey: event.metaKey, button: button, relatedTarget: pointer.target
                    });
                    mouseEvent = convertedEvent;
                }
                Utils.EventUtils.DefineTargetToEvent(mouseEvent, pointer.target, pointer.currentTarget);
                Utils.EventUtils.CalculateAndDefineEventOffset(mouseEvent);
                return mouseEvent;
            };
            Object.defineProperty(GestureHelper.prototype, "MouseDown", {
                get: function () {
                    return this.MouseDownEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "MouseMove", {
                get: function () {
                    return this.MouseMoveEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "MouseUp", {
                get: function () {
                    return this.MouseUpEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "MouseClick", {
                get: function () {
                    return this.MouseClickEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "PressAndTap", {
                get: function () {
                    return this.PressAndTapEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "TwoFingerTap", {
                get: function () {
                    return this.TwoFingerTapEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "TwoFingerPan", {
                get: function () {
                    return this.TwoFingerPanEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "Rotate", {
                get: function () {
                    return this.RotateEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureHelper.prototype, "Zoom", {
                get: function () {
                    return this.ZoomEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            GestureHelper.prototype.OnMouseDown = function (sender, e) {
                if ((e instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseDownEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnMouseMove = function (sender, e) {
                if ((e instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseMoveEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnMouseUp = function (sender, e) {
                if ((e instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseUpEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnMouseClick = function (sender, e) {
                if ((e instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseClickEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnPressAndTap = function (sender, e) {
                if ((e instanceof Utils.GesturePressAndTapEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.PressAndTapEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnTwoFingerTap = function (sender, e) {
                if ((e instanceof Utils.GestureTwoFingerTapEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.TwoFingerTapEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnTwoFingerPan = function (sender, e) {
                if ((e instanceof Utils.GestureTwoFingerPanEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.TwoFingerPanEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnRotate = function (sender, e) {
                if ((e instanceof Utils.GestureRotateEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.RotateEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            GestureHelper.prototype.OnZoom = function (sender, e) {
                if ((e instanceof Utils.GestureZoomEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.ZoomEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler(sender, e);
                }
            };
            return GestureHelper;
        }());
        Utils.GestureHelper = GestureHelper;
        (function (GestureHelper) {
            var GestureAction;
            (function (GestureAction) {
                GestureAction[GestureAction["Invalid"] = -1] = "Invalid";
                GestureAction[GestureAction["None"] = 0] = "None";
                GestureAction[GestureAction["Pan"] = 1] = "Pan";
                GestureAction[GestureAction["NoneNoPan"] = 2] = "NoneNoPan";
                GestureAction[GestureAction["TwoFingerTap"] = 3] = "TwoFingerTap";
                GestureAction[GestureAction["PressAndTap"] = 4] = "PressAndTap";
                GestureAction[GestureAction["TwoFingerPan"] = 5] = "TwoFingerPan";
                GestureAction[GestureAction["Rotate"] = 6] = "Rotate";
                GestureAction[GestureAction["Zoom"] = 7] = "Zoom";
            })(GestureAction = GestureHelper.GestureAction || (GestureHelper.GestureAction = {}));
            var GestureInfo = (function () {
                function GestureInfo(startPosition) {
                    this.startPosition = new Utils.Models.Point();
                    this.press = false;
                    if (startPosition instanceof Utils.Models.Point) {
                        this.StartPosition = startPosition;
                    }
                    this.HandleGesturePress();
                }
                Object.defineProperty(GestureInfo.prototype, "StartPosition", {
                    get: function () {
                        return new Utils.Models.Point(this.startPosition);
                    },
                    set: function (value) {
                        if (value instanceof Utils.Models.Point) {
                            this.startPosition = new Utils.Models.Point(value);
                        }
                        else {
                            throw new Error("Invalid argument type.");
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(GestureInfo.prototype, "Press", {
                    get: function () {
                        return this.press;
                    },
                    enumerable: false,
                    configurable: true
                });
                GestureInfo.prototype.Copy = function () {
                    var copy = new GestureInfo();
                    copy.startPosition = this.StartPosition;
                    copy.press = this.press;
                    return copy;
                };
                GestureInfo.prototype.HandleGesturePress = function (timeout) {
                    var _this = this;
                    if (timeout === void 0) { timeout = 200; }
                    window.setTimeout(function () {
                        _this.press = true;
                    }, timeout);
                };
                return GestureInfo;
            }());
            GestureHelper.GestureInfo = GestureInfo;
        })(GestureHelper = Utils.GestureHelper || (Utils.GestureHelper = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var GestureEventPointer = (function () {
            function GestureEventPointer(offset, client, screen, pressure) {
                if ((offset instanceof Utils.Models.Point || client instanceof Utils.Models.Point || screen instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._offset = new Utils.Models.Point(offset);
                this._client = new Utils.Models.Point(client);
                this._screen = new Utils.Models.Point(screen);
                this._pressure = pressure;
            }
            Object.defineProperty(GestureEventPointer.prototype, "offset", {
                get: function () {
                    return new Utils.Models.Point(this._offset);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEventPointer.prototype, "client", {
                get: function () {
                    return new Utils.Models.Point(this._client);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEventPointer.prototype, "screen", {
                get: function () {
                    return new Utils.Models.Point(this._screen);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureEventPointer.prototype, "pressure", {
                get: function () {
                    return this._pressure;
                },
                enumerable: false,
                configurable: true
            });
            return GestureEventPointer;
        }());
        Utils.GestureEventPointer = GestureEventPointer;
        var GesturePressAndTapEvent = (function () {
            function GesturePressAndTapEvent(pressPointer, tapPointer) {
                if ((pressPointer instanceof GestureEventPointer || tapPointer instanceof GestureEventPointer) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._pressPointer = new GestureEventPointer(new Utils.Models.Point(pressPointer.offset), new Utils.Models.Point(pressPointer.client), new Utils.Models.Point(pressPointer.screen), pressPointer.pressure);
                this._tapPointer = new GestureEventPointer(new Utils.Models.Point(tapPointer.offset), new Utils.Models.Point(tapPointer.client), new Utils.Models.Point(tapPointer.screen), tapPointer.pressure);
            }
            Object.defineProperty(GesturePressAndTapEvent.prototype, "pressPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._pressPointer.offset), new Utils.Models.Point(this._pressPointer.client), new Utils.Models.Point(this._pressPointer.screen), this._pressPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GesturePressAndTapEvent.prototype, "tapPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._tapPointer.offset), new Utils.Models.Point(this._tapPointer.client), new Utils.Models.Point(this._tapPointer.screen), this._tapPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            return GesturePressAndTapEvent;
        }());
        Utils.GesturePressAndTapEvent = GesturePressAndTapEvent;
        var GestureTwoFingerTapEvent = (function () {
            function GestureTwoFingerTapEvent(firstPointer, secondPointer) {
                if ((firstPointer instanceof GestureEventPointer || secondPointer instanceof GestureEventPointer) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._firstPointer = new GestureEventPointer(new Utils.Models.Point(firstPointer.offset), new Utils.Models.Point(firstPointer.client), new Utils.Models.Point(firstPointer.screen), firstPointer.pressure);
                this._secondPointer = new GestureEventPointer(new Utils.Models.Point(secondPointer.offset), new Utils.Models.Point(secondPointer.client), new Utils.Models.Point(secondPointer.screen), secondPointer.pressure);
            }
            Object.defineProperty(GestureTwoFingerTapEvent.prototype, "firstPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._firstPointer.offset), new Utils.Models.Point(this._firstPointer.client), new Utils.Models.Point(this._firstPointer.screen), this._firstPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureTwoFingerTapEvent.prototype, "secondPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._secondPointer.offset), new Utils.Models.Point(this._secondPointer.client), new Utils.Models.Point(this._secondPointer.screen), this._secondPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            return GestureTwoFingerTapEvent;
        }());
        Utils.GestureTwoFingerTapEvent = GestureTwoFingerTapEvent;
        var GestureTwoFingerPanEvent = (function () {
            function GestureTwoFingerPanEvent(firstPointer, secondPointer, delta) {
                if ((firstPointer instanceof GestureEventPointer || secondPointer instanceof GestureEventPointer) === false) {
                    throw new Error("Invalid argument type.");
                }
                if ((delta instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._firstPointer = new GestureEventPointer(new Utils.Models.Point(firstPointer.offset), new Utils.Models.Point(firstPointer.client), new Utils.Models.Point(firstPointer.screen), firstPointer.pressure);
                this._secondPointer = new GestureEventPointer(new Utils.Models.Point(secondPointer.offset), new Utils.Models.Point(secondPointer.client), new Utils.Models.Point(secondPointer.screen), secondPointer.pressure);
                this._delta = new Utils.Models.Point(delta);
            }
            Object.defineProperty(GestureTwoFingerPanEvent.prototype, "firstPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._firstPointer.offset), new Utils.Models.Point(this._firstPointer.client), new Utils.Models.Point(this._firstPointer.screen), this._firstPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureTwoFingerPanEvent.prototype, "secondPointer", {
                get: function () {
                    return new GestureEventPointer(new Utils.Models.Point(this._secondPointer.offset), new Utils.Models.Point(this._secondPointer.client), new Utils.Models.Point(this._secondPointer.screen), this._secondPointer.pressure);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureTwoFingerPanEvent.prototype, "delta", {
                get: function () {
                    return new Utils.Models.Point(this._delta);
                },
                enumerable: false,
                configurable: true
            });
            return GestureTwoFingerPanEvent;
        }());
        Utils.GestureTwoFingerPanEvent = GestureTwoFingerPanEvent;
        var GestureRotateEvent = (function () {
            function GestureRotateEvent(centerOffset, centerClient, centerScreen, delta) {
                if ((centerOffset instanceof Utils.Models.Point || centerClient instanceof Utils.Models.Point || centerScreen instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._offsetCenter = new Utils.Models.Point(centerOffset);
                this._clientCenter = new Utils.Models.Point(centerClient);
                this._screenCenter = new Utils.Models.Point(centerScreen);
                this._delta = delta;
            }
            Object.defineProperty(GestureRotateEvent.prototype, "centerOffset", {
                get: function () {
                    return new Utils.Models.Point(this._offsetCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureRotateEvent.prototype, "centerClient", {
                get: function () {
                    return new Utils.Models.Point(this._clientCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureRotateEvent.prototype, "centerScreen", {
                get: function () {
                    return new Utils.Models.Point(this._screenCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureRotateEvent.prototype, "delta", {
                get: function () {
                    return this._delta;
                },
                enumerable: false,
                configurable: true
            });
            return GestureRotateEvent;
        }());
        Utils.GestureRotateEvent = GestureRotateEvent;
        var GestureZoomEvent = (function () {
            function GestureZoomEvent(centerOffset, centerClient, centerScreen, delta) {
                if ((centerOffset instanceof Utils.Models.Point || centerClient instanceof Utils.Models.Point || centerScreen instanceof Utils.Models.Point) === false) {
                    throw new Error("Invalid argument type.");
                }
                this._offsetCenter = new Utils.Models.Point(centerOffset);
                this._clientCenter = new Utils.Models.Point(centerClient);
                this._screenCenter = new Utils.Models.Point(centerScreen);
                this._delta = delta;
            }
            Object.defineProperty(GestureZoomEvent.prototype, "centerOffset", {
                get: function () {
                    return new Utils.Models.Point(this._offsetCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureZoomEvent.prototype, "centerClient", {
                get: function () {
                    return new Utils.Models.Point(this._clientCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureZoomEvent.prototype, "centerScreen", {
                get: function () {
                    return new Utils.Models.Point(this._screenCenter);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(GestureZoomEvent.prototype, "delta", {
                get: function () {
                    return this._delta;
                },
                enumerable: false,
                configurable: true
            });
            return GestureZoomEvent;
        }());
        Utils.GestureZoomEvent = GestureZoomEvent;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var StatusCode_NoContent = 204;
        var ImageUtils = (function () {
            function ImageUtils() {
            }
            ImageUtils.FetchImageDataAsync = function (imageUrl) {
                var _this = this;
                if (typeof imageUrl !== "string")
                    throw new Error("Invalid argument type for url.");
                return new Promise(function (resolve, reject) {
                    var options = {
                        method: "GET"
                    };
                    fetch(imageUrl, options)
                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var blob, data, errorMessage, resultErrorMessage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!response.ok) return [3, 3];
                                    if (response.status === StatusCode_NoContent) {
                                        resolve(null);
                                        return [2];
                                    }
                                    return [4, response.blob()];
                                case 1:
                                    blob = _a.sent();
                                    return [4, Utils.DataConverter.BlobToByteArrayAsync(blob)];
                                case 2:
                                    data = _a.sent();
                                    resolve(new Utils.Models.ImageData(Array.from(data), blob.type));
                                    return [3, 5];
                                case 3:
                                    errorMessage = response.statusText;
                                    return [4, response.text()];
                                case 4:
                                    resultErrorMessage = _a.sent();
                                    if (typeof resultErrorMessage === "string") {
                                        errorMessage = resultErrorMessage;
                                    }
                                    reject(errorMessage);
                                    _a.label = 5;
                                case 5: return [2];
                            }
                        });
                    }); })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            };
            ImageUtils.GetBase64FromUrlAsync = function (url) {
                return __awaiter(this, void 0, void 0, function () {
                    var requestUrl, data, dataBlob, loadRequest, result;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requestUrl = typeof url === "string" ? url.trim() : "";
                                if (requestUrl.length <= 0) {
                                    return [2, null];
                                }
                                return [4, fetch(requestUrl)];
                            case 1:
                                data = _a.sent();
                                return [4, data.blob()];
                            case 2:
                                dataBlob = _a.sent();
                                if (typeof dataBlob.type !== "string" || dataBlob.type.startsWith("image") === false) {
                                    return [2, null];
                                }
                                loadRequest = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                    var reader;
                                    return __generator(this, function (_a) {
                                        reader = new FileReader();
                                        reader.readAsDataURL(dataBlob);
                                        reader.onerror = function (ev) {
                                            resolve(null);
                                        };
                                        reader.onloadend = function (ev) {
                                            var base64data = this.result;
                                            resolve(base64data);
                                        };
                                        return [2];
                                    });
                                }); });
                                return [4, loadRequest];
                            case 3:
                                result = _a.sent();
                                return [2, result];
                        }
                    });
                });
            };
            return ImageUtils;
        }());
        Utils.ImageUtils = ImageUtils;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var LinkedElement;
        (function (LinkedElement) {
            function IsLinkedElement(control) {
                if ((control instanceof Element) === false) {
                    return false;
                }
                var linkedControl = control;
                if (Utils.TypeCheckUtils.IsFunction(linkedControl.getLinkedParentElement, 0) === false) {
                    return false;
                }
                return true;
            }
            LinkedElement.IsLinkedElement = IsLinkedElement;
            ;
            function AsLinkedElement(control) {
                return IsLinkedElement(control) ? control : null;
            }
            LinkedElement.AsLinkedElement = AsLinkedElement;
            ;
            function IsLinkedHTMLElement(control) {
                if ((control instanceof HTMLElement) === false) {
                    return false;
                }
                var linkedControl = control;
                if (Utils.TypeCheckUtils.IsFunction(linkedControl.getLinkedParentElement, 0) === false) {
                    return false;
                }
                return true;
            }
            LinkedElement.IsLinkedHTMLElement = IsLinkedHTMLElement;
            ;
            function AsLinkedHTMLElement(control) {
                return IsLinkedHTMLElement(control) ? control : null;
            }
            LinkedElement.AsLinkedHTMLElement = AsLinkedHTMLElement;
            ;
            function IsChildOf(control, child) {
                while (child !== null) {
                    if (child === control) {
                        return true;
                    }
                    child = LinkedElement.GetParent(child);
                }
                return false;
            }
            LinkedElement.IsChildOf = IsChildOf;
            ;
            function GetParent(control) {
                var linkedTarget = LinkedElement.AsLinkedElement(control);
                if (linkedTarget !== null) {
                    var linkedParentElement = Utils.TypeCheckUtils.AsClass(linkedTarget.getLinkedParentElement(), HTMLElement);
                    if (linkedParentElement !== null) {
                        return linkedParentElement;
                    }
                }
                return control.parentElement;
            }
            LinkedElement.GetParent = GetParent;
            ;
        })(LinkedElement = Utils.LinkedElement || (Utils.LinkedElement = {}));
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var OverlayElementLogger = (function () {
            function OverlayElementLogger() {
                this.overlayElement = null;
                this.logLines = new Array(0);
            }
            Object.defineProperty(OverlayElementLogger, "Instance", {
                get: function () {
                    if (this._instance === null) {
                        this._instance = new OverlayElementLogger();
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(OverlayElementLogger, "MaxLines", {
                get: function () {
                    if (OverlayElementLogger._instance === null) {
                        OverlayElementLogger._instance = new OverlayElementLogger();
                    }
                    return this._maxLines;
                },
                set: function (value) {
                    if (typeof value !== "number") {
                        throw new Error("Invalid argument type.");
                    }
                    this._maxLines = value;
                },
                enumerable: false,
                configurable: true
            });
            OverlayElementLogger.prototype.LogToLogArea = function () {
                var _this = this;
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                if ((this.overlayElement instanceof HTMLElement) === false || Utils.ElementHelper.IsChildOf(document.body, this.overlayElement) === false) {
                    this.overlayElement = document.createElement("div");
                    var logAreaStyles = this.overlayElement.style;
                    logAreaStyles.setProperty("position", "absolute");
                    logAreaStyles.setProperty("background", "white");
                    logAreaStyles.setProperty("border-bottom", "1px solid darkgray");
                    logAreaStyles.setProperty("max-height", "20vh");
                    logAreaStyles.setProperty("top", "0");
                    logAreaStyles.setProperty("left", "0");
                    logAreaStyles.setProperty("right", "0");
                    logAreaStyles.setProperty("z-index", "100000");
                    logAreaStyles.setProperty("overflow", "auto");
                    document.body.appendChild(this.overlayElement);
                }
                var maxLines = OverlayElementLogger._maxLines;
                if (this.logLines.length >= maxLines) {
                    var lineOverflow = this.logLines.length - (maxLines - 1);
                    this.logLines.splice(0, lineOverflow);
                }
                var objectsAsString = objects.map(function (obj) { return _this.ObjectToString(obj); });
                this.logLines.push(objectsAsString.join(" "));
                this.overlayElement.innerHTML = this.logLines.join("<br>");
            };
            OverlayElementLogger.prototype.LogToLogAreaAndScrollToBottom = function () {
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                this.LogToLogArea.apply(this, objects);
                this.overlayElement.scrollTop = this.overlayElement.scrollHeight;
            };
            OverlayElementLogger.prototype.ObjectToString = function (object) {
                var objectType = typeof object;
                if (objectType === "undefined" || objectType === "function") {
                    return objectType;
                }
                else if (object === null) {
                    return "null";
                }
                else if (objectType !== "object") {
                    return object.toString();
                }
                else if (object instanceof Node) {
                    return "Element[".concat(object.nodeName.toLowerCase(), "]");
                }
                var objectName = object.constructor.name;
                var objectPropertyStrings = new Array(0);
                for (var key in object) {
                    var property = object[key];
                    var propertyAsString = this.ObjectToString(property);
                    objectPropertyStrings.push("".concat(key, ": ").concat(propertyAsString));
                }
                return "".concat(objectName, " {").concat(objectPropertyStrings.join(", "), "}");
            };
            OverlayElementLogger._instance = null;
            OverlayElementLogger._maxLines = 100;
            return OverlayElementLogger;
        }());
        Utils.OverlayElementLogger = OverlayElementLogger;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var TouchHelper = (function () {
            function TouchHelper(control) {
                this.HandlePointerDown = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerDown);
                this.HandlePointerMove = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerMove);
                this.HandlePointerUp = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerUp);
                this.HandlePointerCancel = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerCancel);
                this.HandleTouchStart = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchStart);
                this.HandleTouchMove = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchMove);
                this.HandleTouchEnd = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchEnd);
                this.HandleTouchCancel = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchCancel);
                this.GestureDownEvent = new Utils.NEvent();
                this.GestureUpEvent = new Utils.NEvent();
                this.GestureMoveEvent = new Utils.NEvent();
                this.GestureCancelEvent = new Utils.NEvent();
                if ((control instanceof Window || control instanceof Node) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.control = control;
                this.RegisterEvents();
            }
            TouchHelper.prototype.RegisterEvents = function () {
                if (typeof TouchEvent !== "undefined") {
                    this.control.addEventListener("touchstart", this.HandleTouchStart, { passive: false });
                    this.control.addEventListener("touchmove", this.HandleTouchMove, { passive: false });
                    this.control.addEventListener("touchend", this.HandleTouchEnd, { passive: false });
                    this.control.addEventListener("touchcancel", this.HandleTouchCancel, { passive: false });
                }
                else if (typeof PointerEvent !== "undefined") {
                    this.pointerEvents = new Array(0);
                    this.control.addEventListener("pointerdown", this.HandlePointerDown, { passive: false });
                    this.control.addEventListener("pointermove", this.HandlePointerMove, { passive: false });
                    this.control.addEventListener("pointerup", this.HandlePointerUp, { passive: false });
                    this.control.addEventListener("pointercancel", this.HandlePointerCancel, { passive: false });
                }
            };
            TouchHelper.prototype.Dispose = function () {
                if (typeof TouchEvent !== "undefined") {
                    this.control.removeEventListener("touchstart", this.HandleTouchStart);
                    this.control.removeEventListener("touchmove", this.HandleTouchMove);
                    this.control.removeEventListener("touchend", this.HandleTouchEnd);
                    this.control.removeEventListener("touchcancel", this.HandleTouchCancel);
                }
                else if (typeof PointerEvent !== "undefined") {
                    this.control.removeEventListener("pointerdown", this.HandlePointerDown);
                    this.control.removeEventListener("pointermove", this.HandlePointerMove);
                    this.control.removeEventListener("pointerup", this.HandlePointerUp);
                    this.control.removeEventListener("pointercancel", this.HandlePointerCancel);
                    if (this.pointerEvents !== null) {
                        this.pointerEvents.splice(0, this.pointerEvents.length);
                        this.pointerEvents = null;
                    }
                }
            };
            TouchHelper.prototype.WrappedPointerDown = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                this.CashePointerEvent(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.PointerToGestureEvent(event);
                    return this.OnGestureDown(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedPointerMove = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                this.UpdatePointerEvent(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.PointerToGestureEvent(event);
                    return this.OnGestureMove(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedPointerUp = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                this.UncashePointerEvent(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.PointerToGestureEvent(event);
                    return this.OnGestureUp(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedPointerCancel = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                this.UncashePointerEvent(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.PointerToGestureEvent(event);
                    return this.OnGestureCancel(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.CashePointerEvent = function (event) {
                var pointerEventIndex = -1;
                for (var i = 0, l = this.pointerEvents.length; i < l; i++) {
                    if (this.pointerEvents[i].pointerId === event.pointerId) {
                        pointerEventIndex = i;
                        break;
                    }
                }
                if (pointerEventIndex < 0) {
                    this.pointerEvents.push(event);
                }
            };
            TouchHelper.prototype.UpdatePointerEvent = function (event) {
                for (var i = 0, l = this.pointerEvents.length; i < l; i++) {
                    if (this.pointerEvents[i].pointerId === event.pointerId) {
                        this.pointerEvents[i] = event;
                        break;
                    }
                }
            };
            TouchHelper.prototype.UncashePointerEvent = function (event) {
                var pointerEventIndex = -1;
                for (var i = 0, l = this.pointerEvents.length; i < l; i++) {
                    if (this.pointerEvents[i].pointerId === event.pointerId) {
                        pointerEventIndex = i;
                        break;
                    }
                }
                if (pointerEventIndex >= 0) {
                    this.pointerEvents.splice(pointerEventIndex, 1);
                }
            };
            TouchHelper.prototype.PointerToGestureEvent = function (event) {
                var gesturePointers = new Array(this.pointerEvents.length);
                for (var i = 0, l = this.pointerEvents.length; i < l; i++) {
                    var cashedPointerEvent = this.pointerEvents[i];
                    var gesturePointer = new Utils.GesturePointer({
                        currentTarget: cashedPointerEvent.currentTarget,
                        relatedTarget: cashedPointerEvent.target,
                        pointerId: cashedPointerEvent.pointerId,
                        isPrimary: cashedPointerEvent.isPrimary,
                        pressure: cashedPointerEvent.pressure,
                        screenX: cashedPointerEvent.screenX,
                        screenY: cashedPointerEvent.screenY,
                        clientX: cashedPointerEvent.clientX,
                        clientY: cashedPointerEvent.clientY
                    });
                    gesturePointers[i] = gesturePointer;
                }
                var changedGesturePointers = new Array(1);
                changedGesturePointers[0] = new Utils.GesturePointer({
                    currentTarget: event.currentTarget,
                    relatedTarget: event.target,
                    pointerId: event.pointerId,
                    isPrimary: event.isPrimary,
                    pressure: event.pressure,
                    screenX: event.screenX,
                    screenY: event.screenY,
                    clientX: event.clientX,
                    clientY: event.clientY
                });
                var type;
                switch (event.type) {
                    case "pointerdown":
                        type = "gesturestart";
                        break;
                    case "pointermove":
                        type = "gesturemove";
                        break;
                    case "pointerup":
                        type = "gestureend";
                        break;
                    case "pointercancel":
                        type = "gesturecancel";
                        break;
                    default:
                        return;
                }
                return new Utils.GestureEvent(type, {
                    pointers: gesturePointers,
                    changedPointers: changedGesturePointers,
                    altKey: event.altKey,
                    ctrlKey: event.ctrlKey,
                    metaKey: event.metaKey,
                    shiftKey: event.shiftKey
                });
            };
            TouchHelper.prototype.WrappedTouchStart = function (sender, event) {
                this.CashePrimaryTouch(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.TouchToGestureEvent(event);
                    return this.OnGestureDown(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedTouchMove = function (sender, event) {
                var gestureEvent = null;
                try {
                    gestureEvent = this.TouchToGestureEvent(event);
                    return this.OnGestureMove(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedTouchEnd = function (sender, event) {
                this.UncashePrimaryTouch(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.TouchToGestureEvent(event);
                    return this.OnGestureUp(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.WrappedTouchCancel = function (sender, event) {
                this.UncashePrimaryTouch(event);
                var gestureEvent = null;
                try {
                    gestureEvent = this.TouchToGestureEvent(event);
                    return this.OnGestureCancel(sender, gestureEvent);
                }
                finally {
                    if (gestureEvent !== null) {
                        if (gestureEvent.defaultPrevented) {
                            event.preventDefault();
                        }
                        if (gestureEvent.cancelBubble) {
                            event.cancelBubble = true;
                        }
                    }
                }
            };
            TouchHelper.prototype.CashePrimaryTouch = function (event) {
                if (this.primaryTouch === undefined && event.changedTouches.length > 0) {
                    this.primaryTouch = event.changedTouches.item(0).identifier;
                }
            };
            TouchHelper.prototype.UncashePrimaryTouch = function (event) {
                if (this.primaryTouch !== undefined && event.touches.length <= 0) {
                    this.primaryTouch = undefined;
                }
            };
            TouchHelper.prototype.TouchToGestureEvent = function (event) {
                var gesturePointers = new Array(event.touches.length);
                for (var i = 0, l = event.touches.length; i < l; i++) {
                    var touch = event.touches.item(i);
                    var gesturePointer = new Utils.GesturePointer({
                        currentTarget: event.currentTarget,
                        relatedTarget: event.target,
                        pointerId: touch.identifier,
                        isPrimary: (this.primaryTouch === touch.identifier),
                        pressure: (typeof touch.force === "number" ? touch.force : 0.5),
                        screenX: touch.screenX,
                        screenY: touch.screenY,
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    gesturePointers[i] = gesturePointer;
                }
                var changedGesturePointers = new Array(event.changedTouches.length);
                for (var i = 0, l = event.changedTouches.length; i < l; i++) {
                    var changedTouch = event.changedTouches.item(i);
                    var changedGesturePointer = new Utils.GesturePointer({
                        currentTarget: event.currentTarget,
                        relatedTarget: event.target,
                        pointerId: changedTouch.identifier,
                        isPrimary: (this.primaryTouch === changedTouch.identifier),
                        pressure: (typeof changedTouch.force === "number" ? changedTouch.force : 0.5),
                        screenX: changedTouch.screenX,
                        screenY: changedTouch.screenY,
                        clientX: changedTouch.clientX,
                        clientY: changedTouch.clientY
                    });
                    changedGesturePointers[i] = changedGesturePointer;
                }
                var type;
                switch (event.type) {
                    case "touchstart":
                        type = "gesturestart";
                        break;
                    case "touchmove":
                        type = "gesturemove";
                        break;
                    case "touchend":
                        type = "gestureend";
                        break;
                    case "touchcancel":
                        type = "gesturecancel";
                        break;
                    default:
                        return;
                }
                return new Utils.GestureEvent(type, {
                    pointers: gesturePointers,
                    changedPointers: changedGesturePointers,
                    altKey: event.altKey,
                    ctrlKey: event.ctrlKey,
                    metaKey: event.metaKey,
                    shiftKey: event.shiftKey
                });
            };
            Object.defineProperty(TouchHelper.prototype, "GestureDown", {
                get: function () {
                    return this.GestureDownEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TouchHelper.prototype, "GestureUp", {
                get: function () {
                    return this.GestureUpEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TouchHelper.prototype, "GestureMove", {
                get: function () {
                    return this.GestureMoveEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TouchHelper.prototype, "GestureCancel", {
                get: function () {
                    return this.GestureCancelEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            TouchHelper.prototype.OnGestureDown = function (sender, event) {
                var action = this.GestureDownEvent.ToMulticastFunction();
                if (action !== null) {
                    action(sender, event);
                }
                return !event.preventDefault;
            };
            TouchHelper.prototype.OnGestureUp = function (sender, event) {
                var action = this.GestureUpEvent.ToMulticastFunction();
                if (action !== null) {
                    action(sender, event);
                }
                return !event.preventDefault;
            };
            TouchHelper.prototype.OnGestureMove = function (sender, event) {
                var action = this.GestureMoveEvent.ToMulticastFunction();
                if (action !== null) {
                    action(sender, event);
                }
                return !event.preventDefault;
            };
            TouchHelper.prototype.OnGestureCancel = function (sender, event) {
                var action = this.GestureCancelEvent.ToMulticastFunction();
                if (action !== null) {
                    action(sender, event);
                }
                return !event.preventDefault;
            };
            return TouchHelper;
        }());
        Utils.TouchHelper = TouchHelper;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var TouchToMouseHelper = (function () {
            function TouchToMouseHelper(control) {
                this.HandlePointerDown = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerDown);
                this.HandlePointerMove = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerMove);
                this.HandlePointerUp = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedPointerUp);
                this.HandleTouchStart = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchStart);
                this.HandleTouchMove = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchMove);
                this.HandleTouchEnd = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedTouchEnd);
                this.HandleMouseDown = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedMouseDown);
                this.HandleMouseMove = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedMouseMove);
                this.HandleMouseUp = Utils.EventUtils.SenderWebEventWrapper(this, this.WrappedMouseUp);
                this.MouseDownEvent = new Utils.NEvent();
                this.MouseMoveEvent = new Utils.NEvent();
                this.MouseUpEvent = new Utils.NEvent();
                if ((control instanceof Window || control instanceof Node) === false) {
                    throw new Error("Invalid argument type.");
                }
                this.control = control;
            }
            TouchToMouseHelper.prototype.RegisterEventWrapper = function (type, options) {
                var eventTarget = this.control;
                if (options === undefined) {
                    options = new Object();
                }
                if (typeof options === "object") {
                    if (options.passive === undefined) {
                        options.passive = false;
                    }
                    if (options.global === true) {
                        eventTarget = document;
                    }
                }
                switch (type) {
                    case "mousedown": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.addEventListener("touchstart", this.HandleTouchStart, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.addEventListener("pointerdown", this.HandlePointerDown, options);
                        }
                        eventTarget.addEventListener("mousedown", this.HandleMouseDown, options);
                        break;
                    }
                    case "mousemove": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.addEventListener("touchmove", this.HandleTouchMove, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.addEventListener("pointermove", this.HandlePointerMove, options);
                        }
                        eventTarget.addEventListener("mousemove", this.HandleMouseMove, options);
                        break;
                    }
                    case "mouseup": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.addEventListener("touchend", this.HandleTouchEnd, options);
                            eventTarget.addEventListener("touchcancel", this.HandleTouchEnd, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.addEventListener("pointerup", this.HandlePointerUp, options);
                            eventTarget.addEventListener("pointercancel", this.HandlePointerUp, options);
                        }
                        eventTarget.addEventListener("mouseup", this.HandleMouseUp, options);
                        break;
                    }
                    default:
                        break;
                }
            };
            TouchToMouseHelper.prototype.UnregisterEventWrapper = function (type, options) {
                var eventTarget = this.control;
                if (typeof options === "object" && options.global === true) {
                    eventTarget = document;
                }
                switch (type) {
                    case "mousedown": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.removeEventListener("touchstart", this.HandleTouchStart, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.removeEventListener("pointerdown", this.HandlePointerDown, options);
                        }
                        eventTarget.removeEventListener("mousedown", this.HandleMouseDown, options);
                        break;
                    }
                    case "mousemove": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.removeEventListener("touchmove", this.HandleTouchMove, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.removeEventListener("pointermove", this.HandlePointerMove, options);
                        }
                        eventTarget.removeEventListener("mousemove", this.HandleMouseMove, options);
                        break;
                    }
                    case "mouseup": {
                        if (typeof TouchEvent !== "undefined") {
                            eventTarget.removeEventListener("touchend", this.HandleTouchEnd, options);
                            eventTarget.removeEventListener("touchcancel", this.HandleTouchEnd, options);
                        }
                        else if (typeof PointerEvent !== "undefined") {
                            eventTarget.removeEventListener("pointerup", this.HandlePointerUp, options);
                            eventTarget.removeEventListener("pointercancel", this.HandlePointerUp, options);
                        }
                        eventTarget.removeEventListener("mouseup", this.HandleMouseUp, options);
                        break;
                    }
                    default:
                        break;
                }
            };
            TouchToMouseHelper.prototype.WrappedPointerDown = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                return this.WrappedMouseDown(sender, event);
            };
            TouchToMouseHelper.prototype.WrappedPointerMove = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                return this.WrappedMouseMove(sender, event);
            };
            TouchToMouseHelper.prototype.WrappedPointerUp = function (sender, event) {
                if (event.pointerType !== "pen" && event.pointerType !== "touch") {
                    return !event.defaultPrevented;
                }
                return this.WrappedMouseUp(sender, event);
            };
            TouchToMouseHelper.prototype.WrappedTouchStart = function (sender, event) {
                return this.TouchHandler(sender, event, this.WrappedMouseDown);
            };
            TouchToMouseHelper.prototype.WrappedTouchMove = function (sender, event) {
                return this.TouchHandler(sender, event, this.WrappedMouseMove);
            };
            TouchToMouseHelper.prototype.WrappedTouchEnd = function (sender, event) {
                return this.TouchHandler(sender, event, this.WrappedMouseUp);
            };
            TouchToMouseHelper.prototype.TouchHandler = function (sender, event, callback) {
                var result = true;
                for (var i = 0, l = event.changedTouches.length; i < l; i++) {
                    var handledTouch = event.changedTouches.item(i);
                    var mouseEvent = null;
                    try {
                        mouseEvent = this.TouchToMouseEvent(event, handledTouch);
                        if (callback.call(this, sender, mouseEvent) === false) {
                            result = false;
                        }
                    }
                    finally {
                        if (mouseEvent !== null) {
                            if (mouseEvent.defaultPrevented) {
                                event.preventDefault();
                            }
                            if (mouseEvent.cancelBubble) {
                                event.cancelBubble = true;
                            }
                        }
                    }
                }
                return result;
            };
            TouchToMouseHelper.prototype.TouchToMouseEvent = function (event, handledTouch) {
                var type;
                switch (event.type) {
                    case "touchstart":
                        type = "mousedown";
                        break;
                    case "touchmove":
                        type = "mousemove";
                        break;
                    case "touchend":
                    case "touchcancel":
                        type = "mouseup";
                        break;
                    default:
                        return;
                }
                var mouseEvent;
                if (typeof document.createEvent !== "undefined") {
                    var convertedEvent = document.createEvent("MouseEvent");
                    convertedEvent.initMouseEvent(type, event.bubbles, event.cancelable, event.view, event.detail, handledTouch.screenX, handledTouch.screenY, handledTouch.clientX, handledTouch.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, event.NONE, event.target);
                    mouseEvent = convertedEvent;
                }
                else {
                    var convertedEvent = new MouseEvent(type, {
                        bubbles: event.bubbles, cancelable: event.cancelable, view: event.view, detail: event.detail, screenX: handledTouch.screenX, screenY: handledTouch.screenY,
                        clientX: handledTouch.clientX, clientY: handledTouch.clientY, ctrlKey: event.ctrlKey, altKey: event.altKey, shiftKey: event.shiftKey,
                        metaKey: event.metaKey, button: event.NONE, relatedTarget: event.target
                    });
                    mouseEvent = convertedEvent;
                }
                Utils.EventUtils.DefineTargetToEvent(mouseEvent, handledTouch.target, event.currentTarget);
                Utils.EventUtils.CalculateAndDefineEventOffset(mouseEvent);
                this.DefineTouchToMouseProperties(mouseEvent, "touch", handledTouch.identifier);
                return mouseEvent;
            };
            TouchToMouseHelper.prototype.WrappedMouseDown = function (sender, event) {
                return this.MouseHandler(sender, event, this.OnMouseDown);
            };
            TouchToMouseHelper.prototype.WrappedMouseMove = function (sender, event) {
                return this.MouseHandler(sender, event, this.OnMouseMove);
            };
            TouchToMouseHelper.prototype.WrappedMouseUp = function (sender, event) {
                return this.MouseHandler(sender, event, this.OnMouseUp);
            };
            TouchToMouseHelper.prototype.MouseHandler = function (sender, event, callback) {
                if (event.pointerType === undefined) {
                    this.DefineTouchToMouseProperties(event, "mouse", 0);
                }
                callback.call(this, sender, event);
                return !event.defaultPrevented;
            };
            TouchToMouseHelper.prototype.DefineTouchToMouseProperties = function (mouseEvent, pointerType, pointerId) {
                if ((mouseEvent instanceof MouseEvent) === false) {
                    return false;
                }
                if ((typeof pointerType === "string" && typeof pointerId === "number") === false) {
                    return false;
                }
                Object.defineProperty(mouseEvent, "pointerType", { writable: false, enumerable: true, value: pointerType });
                Object.defineProperty(mouseEvent, "pointerId", { writable: false, enumerable: true, value: pointerId });
                return true;
            };
            Object.defineProperty(TouchToMouseHelper.prototype, "MouseDown", {
                get: function () {
                    return this.MouseDownEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TouchToMouseHelper.prototype, "MouseMove", {
                get: function () {
                    return this.MouseMoveEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TouchToMouseHelper.prototype, "MouseUp", {
                get: function () {
                    return this.MouseUpEvent.GetEnlistener();
                },
                enumerable: false,
                configurable: true
            });
            TouchToMouseHelper.prototype.OnMouseDown = function (sender, event) {
                if ((event instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseDownEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler.call(sender, event);
                }
            };
            TouchToMouseHelper.prototype.OnMouseMove = function (sender, event) {
                if ((event instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseMoveEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler.call(sender, event);
                }
            };
            TouchToMouseHelper.prototype.OnMouseUp = function (sender, event) {
                if ((event instanceof MouseEvent) === false) {
                    throw new Error("Invalid argument type.");
                }
                var handler = this.MouseUpEvent.ToMulticastFunction();
                if (handler !== null) {
                    handler.call(sender, event);
                }
            };
            return TouchToMouseHelper;
        }());
        Utils.TouchToMouseHelper = TouchToMouseHelper;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Utils;
    (function (Utils) {
        var TypeCheckUtils = (function () {
            function TypeCheckUtils() {
            }
            TypeCheckUtils.IsNullOrString = function (checkParam) {
                return (typeof checkParam === "string" || checkParam === null);
            };
            TypeCheckUtils.IsNotNullObject = function (checkParam) {
                return (typeof checkParam === "object" && checkParam !== null);
            };
            TypeCheckUtils.IsNotNanNumber = function (checkParam) {
                return typeof checkParam === "number" && isNaN(checkParam) === false;
            };
            TypeCheckUtils.IsFunction = function (checkParam, paramCount) {
                if (typeof checkParam !== "function") {
                    return false;
                }
                if (typeof paramCount === "number") {
                    var checkFunction = checkParam;
                    return checkFunction.length === paramCount;
                }
                return true;
            };
            TypeCheckUtils.AsClass = function (checkParam, ofClass) {
                switch (ofClass) {
                    case Symbol:
                        return typeof checkParam === "symbol" ? checkParam : null;
                    case String:
                        return typeof checkParam === "string" ? checkParam : null;
                    case Number:
                        return typeof checkParam === "number" ? checkParam : null;
                    case Boolean:
                        return typeof checkParam === "boolean" ? checkParam : null;
                    default:
                        return checkParam instanceof ofClass ? checkParam : null;
                }
            };
            return TypeCheckUtils;
        }());
        Utils.TypeCheckUtils = TypeCheckUtils;
    })(Utils = MicroSea.Utils || (MicroSea.Utils = {}));
})(MicroSea || (MicroSea = {}));
//# sourceMappingURL=microsea-utils-jsinterop.js.map