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
    var Drawing;
    (function (Drawing) {
        var ObjectStore = MicroSea.Utils.StateStore.ObjectStore;
        var Canvas2DContextInterop = (function () {
            function Canvas2DContextInterop() {
            }
            Object.defineProperty(Canvas2DContextInterop, "Store", {
                get: function () {
                    if (this._store === null)
                        this._store = new ObjectStore();
                    return this._store;
                },
                enumerable: false,
                configurable: true
            });
            Canvas2DContextInterop.CreateCanvasContext = function (canvasKey, contextKey) {
                if (typeof canvasKey !== "string") {
                    throw "Canvas key or canvas element not provided!";
                }
                var canvasItem = Drawing.CanvasInterop.Store.Get(canvasKey);
                if ((canvasItem instanceof Drawing.Models.CanvasItem) === false) {
                    throw "Canvas key does not point to a CanvasItem!";
                }
                var canvas = canvasItem.Canvas;
                var context = canvas.getContext("2d");
                this.Store.Save(contextKey, context);
            };
            Canvas2DContextInterop.DeleteCanvasContext = function (contextKey) {
                if (typeof contextKey !== "string")
                    throw "Context key not provided!";
                return this.Store.Delete(contextKey);
            };
            Canvas2DContextInterop.SetFont = function (contextKey, font) {
                this.ResolveContext(contextKey).font = font;
            };
            Canvas2DContextInterop.SetTextAlign = function (contextKey, textAlign) {
                this.ResolveContext(contextKey).textAlign = textAlign;
            };
            Canvas2DContextInterop.SetTextBaseline = function (contextKey, textBaseline) {
                this.ResolveContext(contextKey).textBaseline = textBaseline;
            };
            Canvas2DContextInterop.SetLineJoin = function (contextKey, lineJoin) {
                this.ResolveContext(contextKey).lineJoin = lineJoin;
            };
            Canvas2DContextInterop.SetGlobalAlpha = function (contextKey, globalAlpha) {
                this.ResolveContext(contextKey).globalAlpha = globalAlpha;
            };
            Canvas2DContextInterop.SetGlobalCompositeOperation = function (contextKey, globalCompositeOperation) {
                this.ResolveContext(contextKey).globalCompositeOperation = globalCompositeOperation;
            };
            Canvas2DContextInterop.SetImageSmoothingQuality = function (contextKey, imageSmoothingQuality) {
                this.ResolveContext(contextKey).imageSmoothingQuality = imageSmoothingQuality;
            };
            Canvas2DContextInterop.SetLineDashOffset = function (contextKey, lineDashOffset) {
                this.ResolveContext(contextKey).lineDashOffset = lineDashOffset;
            };
            Canvas2DContextInterop.SetLineWidth = function (contextKey, lineWidth) {
                this.ResolveContext(contextKey).lineWidth = lineWidth;
            };
            Canvas2DContextInterop.SetLineCap = function (contextKey, lineCap) {
                this.ResolveContext(contextKey).lineCap = lineCap;
            };
            Canvas2DContextInterop.SetStrokeStyle = function (contextKey, strokeStyle) {
                this.ResolveContext(contextKey).strokeStyle = strokeStyle;
            };
            Canvas2DContextInterop.SetFillStyle = function (contextKey, fillStyle) {
                this.ResolveContext(contextKey).fillStyle = fillStyle;
            };
            Canvas2DContextInterop.SetTransform = function (contextKey, m11, m12, m21, m22, dx, dy) {
                this.ResolveContext(contextKey).setTransform(m11, m12, m21, m22, dx, dy);
            };
            Canvas2DContextInterop.GetLineDash = function (contextKey) {
                return this.ResolveContext(contextKey).getLineDash();
            };
            Canvas2DContextInterop.SetLineDash = function (contextKey, segments) {
                var context = this.ResolveContext(contextKey);
                if (segments instanceof Float64Array) {
                    segments = Array.from(segments);
                }
                else if ((Array.isArray(segments) && segments.length > 0 && typeof segments[0] === "number") === false) {
                    throw "Invalid argument type: segments must be a Float64Array or an Array<number>!";
                }
                context.setLineDash(segments);
            };
            Canvas2DContextInterop.BeginPath = function (contextKey) {
                this.ResolveContext(contextKey).beginPath();
            };
            Canvas2DContextInterop.ClosePath = function (contextKey) {
                this.ResolveContext(contextKey).closePath();
            };
            Canvas2DContextInterop.MoveTo = function (contextKey, x, y) {
                this.ResolveContext(contextKey).moveTo(x, y);
            };
            Canvas2DContextInterop.LineTo = function (contextKey, x, y) {
                this.ResolveContext(contextKey).lineTo(x, y);
            };
            Canvas2DContextInterop.Rect = function (contextKey, x, y, width, height) {
                this.ResolveContext(contextKey).rect(x, y, width, height);
            };
            Canvas2DContextInterop.Arc = function (contextKey, x, y, radius, startAngle, endAngle, counterClockwise) {
                this.ResolveContext(contextKey).arc(x, y, radius, startAngle, endAngle, counterClockwise);
            };
            Canvas2DContextInterop.BezierCurveTo = function (contextKey, cp1x, cp1y, cp2x, cp2y, x, y) {
                this.ResolveContext(contextKey).bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            };
            Canvas2DContextInterop.Stroke = function (contextKey) {
                this.ResolveContext(contextKey).stroke();
            };
            Canvas2DContextInterop.Fill = function (contextKey, fillRule) {
                this.ResolveContext(contextKey).fill(fillRule);
            };
            Canvas2DContextInterop.StrokeRect = function (contextKey, x, y, width, height) {
                this.ResolveContext(contextKey).strokeRect(x, y, width, height);
            };
            Canvas2DContextInterop.FillText = function (contextKey, text, x, y) {
                this.ResolveContext(contextKey).fillText(text, x, y);
            };
            Canvas2DContextInterop.FillRect = function (contextKey, x, y, width, height) {
                this.ResolveContext(contextKey).fillRect(x, y, width, height);
            };
            Canvas2DContextInterop.ClearRect = function (contextKey, x, y, width, height) {
                this.ResolveContext(contextKey).clearRect(x, y, width, height);
            };
            Canvas2DContextInterop.Save = function (contextKey) {
                this.ResolveContext(contextKey).save();
            };
            Canvas2DContextInterop.Restore = function (contextKey) {
                this.ResolveContext(contextKey).restore();
            };
            Canvas2DContextInterop.Clip = function (contextKey, fillRule) {
                this.ResolveContext(contextKey).clip(fillRule);
            };
            Canvas2DContextInterop.MeasureTextWidth = function (contextKey, text) {
                return this.ResolveContext(contextKey).measureText(text).width;
            };
            Canvas2DContextInterop.DrawImage = function (contextKey, imageKey, isCanvas, xOrSX, YOrSY, widthOrSWidth, heightOrSHeight, dX, dY, dWidth, dHeight) {
                var context = this.ResolveContext(contextKey);
                var imageSource = this.ResolveImage(imageKey, isCanvas);
                if (typeof dX === "number" && typeof dY === "number" && typeof dWidth === "number" && typeof dHeight === "number") {
                    var sX = xOrSX, sY = YOrSY;
                    var sWidth = widthOrSWidth, sHeight = heightOrSHeight;
                    context.drawImage(imageSource, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
                }
                else {
                    var x = xOrSX, y = YOrSY;
                    var width = widthOrSWidth, height = heightOrSHeight;
                    context.drawImage(imageSource, x, y, width, height);
                }
            };
            Canvas2DContextInterop.DrawGrid = function (contextKey, left, top, right, bottom, distX, distY) {
                var context = this.ResolveContext(contextKey);
                context.beginPath();
                var dx = left;
                while (dx < right) {
                    context.moveTo(dx, top);
                    context.lineTo(dx, bottom);
                    dx += distX;
                }
                var dy = top;
                while (dy < bottom) {
                    context.moveTo(left, dy);
                    context.lineTo(right, dy);
                    dy += distY;
                }
                context.stroke();
            };
            Canvas2DContextInterop.FillTextWithOutline = function (contextKey, text, color, outlineColor, x, y) {
                var context = this.ResolveContext(contextKey);
                context.fillStyle = outlineColor;
                context.fillText(text, x - 1, y);
                context.fillText(text, x + 1, y);
                context.fillText(text, x, y - 1);
                context.fillText(text, x, y + 1);
                context.fillStyle = color;
                context.fillText(text, x, y);
            };
            Canvas2DContextInterop.ResolveContext = function (contextKey) {
                if (typeof contextKey !== "string")
                    throw "Context key not provided!";
                var context = this.Store.Get(contextKey);
                if ((context instanceof CanvasRenderingContext2D) === false) {
                    throw "Context key does not point to a CanvasRenderingContext2D!";
                }
                return context;
            };
            Canvas2DContextInterop.ResolveImage = function (imageKey, isCanvas) {
                if (isCanvas === true) {
                    return Drawing.OffscreenCanvasInterop.GetOffscreenCanvas(imageKey);
                }
                return Drawing.CanvasImagePreloadInterop.GetImage(imageKey);
            };
            Canvas2DContextInterop._store = null;
            return Canvas2DContextInterop;
        }());
        Drawing.Canvas2DContextInterop = Canvas2DContextInterop;
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var Size = MicroSea.Utils.Models.Size;
        var ImageUtils = MicroSea.Utils.ImageUtils;
        var ImageData = MicroSea.Utils.Models.ImageData;
        var DataConverter = MicroSea.Utils.DataConverter;
        var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
        var ObjectStore = MicroSea.Utils.StateStore.ObjectStore;
        var CanvasImagePreloadInterop = (function () {
            function CanvasImagePreloadInterop() {
            }
            Object.defineProperty(CanvasImagePreloadInterop, "Store", {
                get: function () {
                    if (this._store === null)
                        this._store = new ObjectStore();
                    return this._store;
                },
                enumerable: false,
                configurable: true
            });
            CanvasImagePreloadInterop.DownloadImageDataAsync = function (imageUrl) {
                return __awaiter(this, void 0, void 0, function () {
                    var imageData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, ImageUtils.FetchImageDataAsync(imageUrl)];
                            case 1:
                                imageData = _a.sent();
                                return [2, JSON.stringify(imageData)];
                        }
                    });
                });
            };
            CanvasImagePreloadInterop.SetImageAsync = function (imageKey, imageData, mimeType) {
                return __awaiter(this, void 0, void 0, function () {
                    var imageDataUrl, imageElement, size;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (typeof imageKey !== "string")
                                    throw new Error("Image key not provided!");
                                if ((imageData instanceof Uint8Array) === false)
                                    throw new Error("Image-Data not provided!");
                                if (typeof mimeType !== "string" || mimeType.trim().length <= 0) {
                                    mimeType = "image";
                                }
                                imageDataUrl = DataConverter.ByteArrayToDataUrl(imageData, mimeType);
                                return [4, this.LoadImageAsync(imageDataUrl)];
                            case 1:
                                imageElement = _a.sent();
                                size = new Size(imageElement.width, imageElement.height);
                                this.Store.Save(imageKey, imageElement);
                                return [2, JSON.stringify(size)];
                        }
                    });
                });
            };
            CanvasImagePreloadInterop.ToByteArray = function (imageKey, mimeType) {
                var imageElement = this.GetImage(imageKey);
                Drawing.OffscreenCanvasInterop.CreateOffscreenCanvas(imageKey, imageElement.width, imageElement.height);
                try {
                    var canvas = Drawing.OffscreenCanvasInterop.GetOffscreenCanvas(imageKey);
                    var context = canvas.getContext("2d");
                    context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);
                    var data = Drawing.CanvasInterop.ToByteArray(imageKey, mimeType);
                    var imageData = new ImageData(Array.from(data), mimeType);
                    return JSON.stringify(imageData);
                }
                finally {
                    Drawing.OffscreenCanvasInterop.DeleteOffscreenCanvas(imageKey);
                }
            };
            CanvasImagePreloadInterop.CloneImage = function (imageKey, cloneImageKey) {
                var originalImageElement = this.GetImage(imageKey);
                var imageElement = TypeCheckUtils.AsClass(originalImageElement.cloneNode(true), HTMLImageElement);
                var size = new Size(imageElement.width, imageElement.height);
                this.Store.Save(cloneImageKey, imageElement);
                return JSON.stringify(size);
            };
            CanvasImagePreloadInterop.GetImage = function (imageKey) {
                if (typeof imageKey !== "string")
                    throw new Error("Image key not provided!");
                var imageElement = this.Store.Get(imageKey);
                if ((imageElement instanceof HTMLImageElement) === false) {
                    throw new Error("Image key does not point to a HTMLImageElement!");
                }
                return imageElement;
            };
            CanvasImagePreloadInterop.DeleteImage = function (imageKey) {
                if (typeof imageKey !== "string")
                    throw new Error("Image key not provided!");
                return this.Store.Delete(imageKey);
            };
            CanvasImagePreloadInterop.LoadImageAsync = function (imageUrl) {
                return new Promise(function (resolve, reject) {
                    var image = new Image();
                    image.onload = function (ev) { return resolve(image); };
                    image.onerror = function (ev) { return reject(new Error("Error while loading the Image.")); };
                    image.src = imageUrl;
                });
            };
            CanvasImagePreloadInterop._store = null;
            return CanvasImagePreloadInterop;
        }());
        Drawing.CanvasImagePreloadInterop = CanvasImagePreloadInterop;
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var DataConverter = MicroSea.Utils.DataConverter;
        var ObjectStore = MicroSea.Utils.StateStore.ObjectStore;
        var CanvasInterop = (function () {
            function CanvasInterop() {
            }
            Object.defineProperty(CanvasInterop, "Store", {
                get: function () {
                    if (this._store === null)
                        this._store = new ObjectStore();
                    return this._store;
                },
                enumerable: false,
                configurable: true
            });
            CanvasInterop.GetAttribute = function (canvasKey, qualifiedName) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                var canvas = canvasItem.Canvas;
                return canvas.getAttribute(qualifiedName);
            };
            CanvasInterop.SetAttribute = function (canvasKey, qualifiedName, value) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                var canvas = canvasItem.Canvas;
                return canvas.setAttribute(qualifiedName, value);
            };
            CanvasInterop.ToByteArray = function (canvasKey, mimeType) {
                if (typeof mimeType !== "string" || mimeType.trim().length <= 0) {
                    mimeType = "image/png";
                }
                var canvasItem = this.ResolveCanvas(canvasKey);
                var sourceCanvas = canvasItem.Canvas;
                var dataUrl = sourceCanvas.toDataURL(mimeType);
                if (DataConverter.GetMineTypeOfDataUrl(dataUrl) !== mimeType) {
                    throw new Error("Type ".concat(mimeType, " is not supported."));
                }
                return DataConverter.DataUrlToByteArray(dataUrl);
            };
            CanvasInterop.ResolveCanvas = function (canvasKey) {
                if (typeof canvasKey !== "string")
                    throw "Canvas key not provided!";
                var canvasItem = this.Store.Get(canvasKey);
                if ((canvasItem instanceof Drawing.Models.CanvasItem) === false) {
                    throw "Canvas key does not point to a CanvasItem!";
                }
                return canvasItem;
            };
            CanvasInterop._store = null;
            return CanvasInterop;
        }());
        Drawing.CanvasInterop = CanvasInterop;
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var OffscreenCanvasInterop = (function () {
            function OffscreenCanvasInterop() {
            }
            Object.defineProperty(OffscreenCanvasInterop, "Store", {
                get: function () {
                    return Drawing.CanvasInterop.Store;
                },
                enumerable: false,
                configurable: true
            });
            OffscreenCanvasInterop.CreateOffscreenCanvas = function (canvasKey, width, height) {
                if (typeof canvasKey !== "string")
                    throw "Canvas key not provided!";
                if (typeof width !== "number" || typeof height !== "number")
                    throw "Height and Width must be provided!";
                var canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                var canvasItem = new Drawing.Models.OffscreenCanvasItem(canvas);
                this.Store.Save(canvasKey, canvasItem);
            };
            OffscreenCanvasInterop.ResizeOffscreenCanvas = function (canvasKey, width, height) {
                this.DeleteOffscreenCanvas(canvasKey);
                this.CreateOffscreenCanvas(canvasKey, width, height);
            };
            OffscreenCanvasInterop.GetOffscreenCanvas = function (canvasKey) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                return canvasItem.Canvas;
            };
            OffscreenCanvasInterop.DeleteOffscreenCanvas = function (canvasKey) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                canvasItem.Dispose();
                canvasItem = null;
                this.Store.Delete(canvasKey);
            };
            OffscreenCanvasInterop.ResolveCanvas = function (canvasKey) {
                if (typeof canvasKey !== "string")
                    throw "Canvas key not provided!";
                var canvasItem = this.Store.Get(canvasKey);
                if ((canvasItem instanceof Drawing.Models.OffscreenCanvasItem) === false) {
                    throw "Canvas key does not point to a OffscreenCanvasItem!";
                }
                return canvasItem;
            };
            return OffscreenCanvasInterop;
        }());
        Drawing.OffscreenCanvasInterop = OffscreenCanvasInterop;
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var ElementHelper = MicroSea.Utils.ElementHelper;
        var HtmlWindowInterop = MicroSea.Utils.HtmlWindowInterop;
        var HtmlElementInterop = MicroSea.Utils.HtmlElementInterop;
        var ViewCanvasInterop = (function () {
            function ViewCanvasInterop() {
            }
            Object.defineProperty(ViewCanvasInterop, "Store", {
                get: function () {
                    return Drawing.CanvasInterop.Store;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ViewCanvasInterop, "CanvasTabIndex", {
                get: function () {
                    return 0;
                },
                enumerable: false,
                configurable: true
            });
            ViewCanvasInterop.CreateCanvas = function (canvasKey, container, addTabIndex, interopCallback) {
                if (typeof canvasKey !== "string")
                    throw "Canvas key not provided!";
                if ((container instanceof HTMLElement) === false)
                    throw "Container must be provided!";
                var canvas = document.createElement("canvas");
                container.appendChild(canvas);
                var canvasItem = new Drawing.Models.ViewCanvasItem(canvas, interopCallback);
                this.Store.Save(canvasKey, canvasItem);
                var canvasBounds = this.CalculateCanvasBounds(canvas, container);
                var canvasStyle = canvas.style;
                if (addTabIndex === true) {
                    canvas.tabIndex = ViewCanvasInterop.CanvasTabIndex;
                }
                canvas.width = canvasBounds.width;
                canvas.height = canvasBounds.height;
                canvasStyle.width = "".concat(canvasBounds.cssWidth, "px");
                canvasStyle.height = "".concat(canvasBounds.cssHeight, "px");
                return canvasBounds;
            };
            ViewCanvasInterop.ResizeCanvas = function (canvasKey, container, interopCallback) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                var addTabIndex = canvasItem.Canvas.tabIndex === ViewCanvasInterop.CanvasTabIndex;
                this.DeleteCanvas(canvasKey);
                return this.CreateCanvas(canvasKey, container, addTabIndex, interopCallback);
            };
            ViewCanvasInterop.FocusCanvas = function (canvasKey) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                HtmlElementInterop.FocusElement(canvasItem.Canvas);
            };
            ViewCanvasInterop.DeleteCanvas = function (canvasKey) {
                var canvasItem = this.ResolveCanvas(canvasKey);
                canvasItem.Dispose();
                canvasItem = null;
                this.Store.Delete(canvasKey);
            };
            ViewCanvasInterop.CalculateCanvasBounds = function (element, container) {
                var parentContentBoxRect = ElementHelper.GetBoundingClientRectWithoutPadding(container);
                var dpr = HtmlWindowInterop.GetDevicePixelRatio();
                var cssSizeOffset = ElementHelper.CalculateSizeOffsetToFitIntoBoundingClientRectWithoutPadding(element);
                var cssHeight = parentContentBoxRect.height - cssSizeOffset.height;
                var cssWidth = parentContentBoxRect.width - cssSizeOffset.width;
                var contentBoxOffset = ElementHelper.CalculateSizeOffsetToBoundingClientRectWithoutPadding(element);
                var height = cssHeight - contentBoxOffset.height;
                var width = cssWidth - contentBoxOffset.width;
                var cssTop = parentContentBoxRect.top + cssSizeOffset.top + contentBoxOffset.top;
                var cssLeft = parentContentBoxRect.left + cssSizeOffset.left + contentBoxOffset.left;
                return new Drawing.Models.CanvasBounds(Math.floor(width * dpr), Math.floor(height * dpr), Math.floor(cssTop), Math.floor(cssLeft), Math.floor(cssWidth), Math.floor(cssHeight));
            };
            ViewCanvasInterop.ResolveCanvas = function (canvasKey) {
                if (typeof canvasKey !== "string")
                    throw "Canvas key not provided!";
                var canvasItem = this.Store.Get(canvasKey);
                if ((canvasItem instanceof Drawing.Models.ViewCanvasItem) === false) {
                    throw "Canvas key does not point to a ViewCanvasItem!";
                }
                return canvasItem;
            };
            return ViewCanvasInterop;
        }());
        Drawing.ViewCanvasInterop = ViewCanvasInterop;
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var Models;
        (function (Models) {
            var Size = MicroSea.Utils.Models.Size;
            var CanvasBounds = (function (_super) {
                __extends(CanvasBounds, _super);
                function CanvasBounds(width, height, cssTop, cssLeft, cssWidth, cssHeight) {
                    if (width === void 0) { width = 0; }
                    if (height === void 0) { height = 0; }
                    if (cssTop === void 0) { cssTop = 0; }
                    if (cssLeft === void 0) { cssLeft = 0; }
                    if (cssWidth === void 0) { cssWidth = 0; }
                    if (cssHeight === void 0) { cssHeight = 0; }
                    var _this = _super.call(this, width, height) || this;
                    _this.cssTop = cssTop;
                    _this.cssLeft = cssLeft;
                    _this.cssWidth = cssWidth;
                    _this.cssHeight = cssHeight;
                    return _this;
                }
                return CanvasBounds;
            }(Size));
            Models.CanvasBounds = CanvasBounds;
        })(Models = Drawing.Models || (Drawing.Models = {}));
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var Models;
        (function (Models) {
            var CanvasItem = (function () {
                function CanvasItem(canvas) {
                    if ((canvas instanceof HTMLCanvasElement) === false) {
                        throw new Error("Invalid argument type.");
                    }
                    this._canvas = canvas;
                }
                Object.defineProperty(CanvasItem.prototype, "Canvas", {
                    get: function () {
                        return this._canvas;
                    },
                    enumerable: false,
                    configurable: true
                });
                CanvasItem.prototype.Dispose = function () {
                    if (this._canvas !== null) {
                        this._canvas.width = 0;
                        this._canvas.height = 0;
                        this._canvas.remove();
                        delete this._canvas;
                        this._canvas = null;
                    }
                };
                return CanvasItem;
            }());
            Models.CanvasItem = CanvasItem;
        })(Models = Drawing.Models || (Drawing.Models = {}));
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var Models;
        (function (Models) {
            var OffscreenCanvasItem = (function (_super) {
                __extends(OffscreenCanvasItem, _super);
                function OffscreenCanvasItem(canvas) {
                    return _super.call(this, canvas) || this;
                }
                OffscreenCanvasItem.prototype.Dispose = function () {
                    _super.prototype.Dispose.call(this);
                };
                return OffscreenCanvasItem;
            }(Models.CanvasItem));
            Models.OffscreenCanvasItem = OffscreenCanvasItem;
        })(Models = Drawing.Models || (Drawing.Models = {}));
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
var MicroSea;
(function (MicroSea) {
    var Drawing;
    (function (Drawing) {
        var Models;
        (function (Models) {
            var Keys = MicroSea.Utils.Models.Keys;
            var EventUtils = MicroSea.Utils.EventUtils;
            var TouchHelper = MicroSea.Utils.TouchHelper;
            var GestureHelper = MicroSea.Utils.GestureHelper;
            var TypeCheckUtils = MicroSea.Utils.TypeCheckUtils;
            var ConvertionHelper = MicroSea.Utils.ConvertionHelper;
            var ViewCanvasItem = (function (_super) {
                __extends(ViewCanvasItem, _super);
                function ViewCanvasItem(canvas, interopCallback) {
                    var _this = _super.call(this, canvas) || this;
                    _this.OnKeyDownWrapped = _this.OnKeyDown.bind(_this);
                    _this.OnKeyUpWrapped = _this.OnKeyUp.bind(_this);
                    _this.OnWheelWrapped = _this.OnWheel.bind(_this);
                    _this.OnClickWrapped = _this.OnClick.bind(_this);
                    _this.OnDebouncedHandleMouseMove = EventUtils.PeriodicDebounce(_this.OnMouseMove.bind(_this), 20);
                    _this.OnMouseDownWrapped = _this.OnMouseDown.bind(_this);
                    _this.OnMouseUpWrapped = _this.OnMouseUp.bind(_this);
                    _this.OnGestureClickWrapper = _this.OnGestureClick.bind(_this);
                    _this.OnDebouncedHandleGestureMouseMove = _this.OnGestureMouseMove.bind(_this);
                    _this.OnGestureMouseDownWrapper = _this.OnGestureMouseDown.bind(_this);
                    _this.OnGestureMouseUpWrapped = _this.OnGestureMouseUp.bind(_this);
                    _this.OnPressAndTapWrapped = _this.OnPressAndTap.bind(_this);
                    _this.OnTwoFingerTapWrapped = _this.OnTwoFingerTap.bind(_this);
                    _this.OnTwoFingerPanWrapped = _this.OnTwoFingerPan.bind(_this);
                    _this.OnRotateWrapped = _this.OnRotate.bind(_this);
                    _this.OnZoomWrapped = _this.OnZoom.bind(_this);
                    if (TypeCheckUtils.IsNotNullObject(interopCallback) === false) {
                        throw new Error("Invalid argument type.");
                    }
                    _this.interopCallback = interopCallback;
                    _this.RegisterEvents();
                    return _this;
                }
                ViewCanvasItem.prototype.Dispose = function () {
                    this.UnregisterEvents();
                    _super.prototype.Dispose.call(this);
                    this.interopCallback = null;
                };
                ViewCanvasItem.prototype.RegisterEvents = function () {
                    if (this._canvas === null) {
                        return;
                    }
                    this.touchHelper = new TouchHelper(this._canvas);
                    this.gestureHelper = new GestureHelper();
                    this.touchHelper.GestureCancel.Add(this.gestureHelper.HandleGestureCancel);
                    this.touchHelper.GestureDown.Add(this.gestureHelper.HandleGestureDown);
                    this.touchHelper.GestureMove.Add(this.gestureHelper.HandleGestureMove);
                    this.touchHelper.GestureUp.Add(this.gestureHelper.HandleGestureUp);
                    this.gestureHelper.MouseClick.Add(this.OnGestureClickWrapper);
                    this.gestureHelper.MouseDown.Add(this.OnGestureMouseDownWrapper);
                    this.gestureHelper.MouseMove.Add(this.OnDebouncedHandleGestureMouseMove);
                    this.gestureHelper.MouseUp.Add(this.OnGestureMouseUpWrapped);
                    this.gestureHelper.PressAndTap.Add(this.OnPressAndTapWrapped);
                    this.gestureHelper.TwoFingerTap.Add(this.OnTwoFingerTapWrapped);
                    this.gestureHelper.TwoFingerPan.Add(this.OnTwoFingerPanWrapped);
                    this.gestureHelper.Rotate.Add(this.OnRotateWrapped);
                    this.gestureHelper.Zoom.Add(this.OnZoomWrapped);
                    this._canvas.addEventListener("keydown", this.OnKeyDownWrapped, { passive: false });
                    this._canvas.addEventListener("keyup", this.OnKeyUpWrapped, { passive: false });
                    this._canvas.addEventListener("wheel", this.OnWheelWrapped, { passive: false });
                    this._canvas.addEventListener("click", this.OnClickWrapped, { passive: false });
                    this._canvas.addEventListener("mousemove", this.OnDebouncedHandleMouseMove, { passive: false });
                    this._canvas.addEventListener("mousedown", this.OnMouseDownWrapped, { passive: false });
                    this._canvas.addEventListener("mouseup", this.OnMouseUpWrapped, { passive: false });
                    this._canvas.addEventListener("contextmenu", this.OnEventPreventDefault, { passive: false });
                };
                ViewCanvasItem.prototype.UnregisterEvents = function () {
                    if (this.touchHelper !== null) {
                        if (this.gestureHelper !== null) {
                            this.touchHelper.GestureCancel.Remove(this.gestureHelper.HandleGestureCancel);
                            this.touchHelper.GestureDown.Remove(this.gestureHelper.HandleGestureDown);
                            this.touchHelper.GestureMove.Remove(this.gestureHelper.HandleGestureMove);
                            this.touchHelper.GestureUp.Remove(this.gestureHelper.HandleGestureUp);
                        }
                        this.touchHelper.Dispose();
                        this.touchHelper = null;
                    }
                    if (this.gestureHelper !== null) {
                        this.gestureHelper.MouseClick.Remove(this.OnGestureClickWrapper);
                        this.gestureHelper.MouseDown.Remove(this.OnGestureMouseDownWrapper);
                        this.gestureHelper.MouseMove.Remove(this.OnDebouncedHandleGestureMouseMove);
                        this.gestureHelper.MouseUp.Remove(this.OnGestureMouseUpWrapped);
                        this.gestureHelper.PressAndTap.Remove(this.OnPressAndTapWrapped);
                        this.gestureHelper.TwoFingerTap.Remove(this.OnTwoFingerTapWrapped);
                        this.gestureHelper.Zoom.Remove(this.OnZoomWrapped);
                        this.gestureHelper = null;
                    }
                    if (this._canvas !== null) {
                        this._canvas.removeEventListener("keydown", this.OnKeyDownWrapped);
                        this._canvas.removeEventListener("keyup", this.OnKeyUpWrapped);
                        this._canvas.removeEventListener("wheel", this.OnWheelWrapped);
                        this._canvas.removeEventListener("click", this.OnClickWrapped);
                        this._canvas.removeEventListener("mousemove", this.OnDebouncedHandleMouseMove);
                        this._canvas.removeEventListener("mousedown", this.OnMouseDownWrapped);
                        this._canvas.removeEventListener("mouseup", this.OnMouseUpWrapped);
                        this._canvas.removeEventListener("contextmenu", this.OnEventPreventDefault);
                    }
                };
                ViewCanvasItem.prototype.OnKeyDown = function (event) {
                    var keyData = ConvertionHelper.GetKeyData(event);
                    if (keyData === Keys.Tab || keyData === (Keys.Tab | Keys.Shift)) {
                        return !event.defaultPrevented;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeKeyDown(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnKeyUp = function (event) {
                    var keyData = ConvertionHelper.GetKeyData(event);
                    if (keyData === Keys.Tab || keyData === (Keys.Tab | Keys.Shift)) {
                        return !event.defaultPrevented;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeKeyUp(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnWheel = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeWheel(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnClick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeClick(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnMouseMove = function (event) {
                    if (TypeCheckUtils.IsNotNullObject(this.interopCallback) === false) {
                        return !event.defaultPrevented;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeMouseMove(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnMouseDown = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeMouseDown(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnMouseUp = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.InvokeMouseUp(event);
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnEventPreventDefault = function (event) {
                    event.preventDefault();
                    return !event.defaultPrevented;
                };
                ViewCanvasItem.prototype.OnGestureClick = function (sender, event) {
                    return this.OnClick(event);
                };
                ViewCanvasItem.prototype.OnGestureMouseMove = function (sender, event) {
                    return this.OnMouseMove(event);
                };
                ViewCanvasItem.prototype.OnGestureMouseDown = function (sender, event) {
                    return this.OnMouseDown(event);
                };
                ViewCanvasItem.prototype.OnGestureMouseUp = function (sender, event) {
                    return this.OnMouseUp(event);
                };
                ViewCanvasItem.prototype.OnPressAndTap = function (sender, event) {
                    this.InvokePressAndTap(event);
                    return true;
                };
                ViewCanvasItem.prototype.OnTwoFingerTap = function (sender, event) {
                    this.InvokeTwoFingerTap(event);
                    return true;
                };
                ViewCanvasItem.prototype.OnTwoFingerPan = function (sender, event) {
                    this.InvokeTwoFingerPan(event);
                    return true;
                };
                ViewCanvasItem.prototype.OnRotate = function (sender, event) {
                    this.InvokeRotate(event);
                    return true;
                };
                ViewCanvasItem.prototype.OnZoom = function (sender, event) {
                    this.InvokeZoom(event);
                    return true;
                };
                ViewCanvasItem.prototype.InvokeKeyDown = function (event) {
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("KeyDown", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeKeyUp = function (event) {
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("KeyUp", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeWheel = function (event) {
                    this.AddOffsetPropertyIfMissing(event);
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("Wheel", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeClick = function (event) {
                    this.AddOffsetPropertyIfMissing(event);
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("Click", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeMouseMove = function (event) {
                    this.AddOffsetPropertyIfMissing(event);
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("MouseMove", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeMouseDown = function (event) {
                    this.AddOffsetPropertyIfMissing(event);
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("MouseDown", eventCopy);
                };
                ViewCanvasItem.prototype.InvokeMouseUp = function (event) {
                    this.AddOffsetPropertyIfMissing(event);
                    var eventCopy = this.CopyEventToObject(event);
                    this.interopCallback.invokeMethodAsync("MouseUp", eventCopy);
                };
                ViewCanvasItem.prototype.InvokePressAndTap = function (event) {
                    this.interopCallback.invokeMethodAsync("PressAndTap", event);
                };
                ViewCanvasItem.prototype.InvokeTwoFingerTap = function (event) {
                    this.interopCallback.invokeMethodAsync("TwoFingerTap", event);
                };
                ViewCanvasItem.prototype.InvokeTwoFingerPan = function (event) {
                    this.interopCallback.invokeMethodAsync("TwoFingerPan", event);
                };
                ViewCanvasItem.prototype.InvokeRotate = function (event) {
                    this.interopCallback.invokeMethodAsync("Rotate", event);
                };
                ViewCanvasItem.prototype.InvokeZoom = function (event) {
                    this.interopCallback.invokeMethodAsync("Zoom", event);
                };
                ViewCanvasItem.prototype.AddOffsetPropertyIfMissing = function (mouseEvent) {
                    if (mouseEvent.offsetX === 0 && mouseEvent.offsetY === 0) {
                        EventUtils.CalculateAndDefineEventOffset(mouseEvent);
                    }
                };
                ViewCanvasItem.prototype.CopyEventToObject = function (event) {
                    var result = new Object();
                    if (event instanceof Event) {
                        for (var key in event) {
                            var property = event[key];
                            var propertyType = typeof property;
                            if (propertyType !== "function" && propertyType !== "object") {
                                result[key] = property;
                            }
                        }
                    }
                    return result;
                };
                return ViewCanvasItem;
            }(Models.CanvasItem));
            Models.ViewCanvasItem = ViewCanvasItem;
        })(Models = Drawing.Models || (Drawing.Models = {}));
    })(Drawing = MicroSea.Drawing || (MicroSea.Drawing = {}));
})(MicroSea || (MicroSea = {}));
//# sourceMappingURL=microsea-drawing-canvas.js.map
