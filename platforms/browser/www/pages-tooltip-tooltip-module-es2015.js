(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tooltip-tooltip-module"],{

/***/ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js ***!
  \******************************************************************************/
/*! exports provided: TooltipComponent, TooltipDirective, TooltipModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TooltipOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: lib/tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    transitionEnd(event) {
        if (this.show) {
            this.events.emit({
                type: 'shown'
            });
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set show(value) {
        if (value) {
            this.setPosition();
        }
        this._show = this.hostClassShow = value;
    }
    /**
     * @return {?}
     */
    get show() {
        return this._show;
    }
    /**
     * @return {?}
     */
    get placement() {
        return this.data.options.placement;
    }
    /**
     * @return {?}
     */
    get autoPlacement() {
        return this.data.options.autoPlacement;
    }
    /**
     * @return {?}
     */
    get element() {
        return this.data.element;
    }
    /**
     * @return {?}
     */
    get elementPosition() {
        return this.data.elementPosition;
    }
    /**
     * @return {?}
     */
    get options() {
        return this.data.options;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.data.value;
    }
    /**
     * @return {?}
     */
    get tooltipOffset() {
        return Number(this.data.options.offset);
    }
    /**
     * @return {?}
     */
    get isThemeLight() {
        return this.options['theme'] === 'light';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setCustomClass();
        this.setStyles();
    }
    /**
     * @return {?}
     */
    setPosition() {
        if (this.setHostStyle(this.placement)) {
            this.setPlacementClass(this.placement);
            return;
        }
        else {
            /* Is tooltip outside the visible area */
            /** @type {?} */
            const placements = ['top', 'right', 'bottom', 'left'];
            /** @type {?} */
            let isPlacementSet;
            for (const placement of placements) {
                if (this.setHostStyle(placement)) {
                    this.setPlacementClass(placement);
                    isPlacementSet = true;
                    return;
                }
            }
            /* Set original placement */
            if (!isPlacementSet) {
                this.setHostStyle(this.placement, true);
                this.setPlacementClass(this.placement);
            }
        }
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    setPlacementClass(placement) {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + placement);
    }
    /**
     * @param {?} placement
     * @param {?=} disableAutoPlacement
     * @return {?}
     */
    setHostStyle(placement, disableAutoPlacement = false) {
        /** @type {?} */
        const isSvg = this.element instanceof SVGElement;
        /** @type {?} */
        const tooltip = this.elementRef.nativeElement;
        /** @type {?} */
        const isCustomPosition = !this.elementPosition.right;
        /** @type {?} */
        let elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
        /** @type {?} */
        let elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
        /** @type {?} */
        const tooltipHeight = tooltip.clientHeight;
        /** @type {?} */
        const tooltipWidth = tooltip.clientWidth;
        /** @type {?} */
        const scrollY = window.pageYOffset;
        if (isCustomPosition) {
            elementHeight = 0;
            elementWidth = 0;
        }
        /** @type {?} */
        let topStyle;
        /** @type {?} */
        let leftStyle;
        if (placement === 'top') {
            topStyle = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset);
        }
        if (placement === 'bottom') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset;
        }
        if (placement === 'top' || placement === 'bottom') {
            leftStyle = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2;
        }
        if (placement === 'left') {
            leftStyle = this.elementPosition.left - tooltipWidth - this.tooltipOffset;
        }
        if (placement === 'right') {
            leftStyle = this.elementPosition.left + elementWidth + this.tooltipOffset;
        }
        if (placement === 'left' || placement === 'right') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2;
        }
        /* Is tooltip outside the visible area */
        if (this.autoPlacement && !disableAutoPlacement) {
            /** @type {?} */
            const topEdge = topStyle;
            /** @type {?} */
            const bottomEdge = topStyle + tooltipHeight;
            /** @type {?} */
            const leftEdge = leftStyle;
            /** @type {?} */
            const rightEdge = leftStyle + tooltipWidth;
            /** @type {?} */
            const bodyHeight = window.innerHeight + scrollY;
            /** @type {?} */
            const bodyWidth = document.body.clientWidth;
            if (topEdge < 0 || bottomEdge > bodyHeight || leftEdge < 0 || rightEdge > bodyWidth) {
                return false;
            }
        }
        this.hostStyleTop = topStyle + 'px';
        this.hostStyleLeft = leftStyle + 'px';
        return true;
    }
    /**
     * @return {?}
     */
    setZIndex() {
        if (this.options['zIndex'] !== 0) {
            this.hostStyleZIndex = this.options['zIndex'];
        }
    }
    /**
     * @return {?}
     */
    setPointerEvents() {
        if (this.options['pointerEvents']) {
            this.hostStylePointerEvents = this.options['pointerEvents'];
        }
    }
    /**
     * @return {?}
     */
    setCustomClass() {
        if (this.options['tooltipClass']) {
            this.options['tooltipClass'].split(' ').forEach((/**
             * @param {?} className
             * @return {?}
             */
            className => {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            }));
        }
    }
    /**
     * @return {?}
     */
    setAnimationDuration() {
        if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
            this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
        }
    }
    /**
     * @return {?}
     */
    setStyles() {
        this.setZIndex();
        this.setPointerEvents();
        this.setAnimationDuration();
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['maxWidth'] + "px";
        this.hostStyleWidth = this.options['width'] ? this.options['width'] + "px" : '';
    }
}
TooltipComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tooltip',
                template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['contentType'] === 'template' else htmlOrStringTemplate\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                host: {
                    'class': 'tooltip'
                },
                styles: [":host{max-width:200px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 8px;position:absolute;pointer-events:none;z-index:1000;display:block;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s;top:0;left:0}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip::after{content:\"\";position:absolute;border-style:solid}:host.tooltip-top::after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}:host.tooltip-bottom::after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}:host.tooltip-left::after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}:host.tooltip-right::after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}:host.tooltip-light::after{display:none}:host.tooltip-light{border:1px solid rgba(0,0,0,.06);background-color:#fff;color:#000}:host.tooltip-light .tooltip-arrow{position:absolute;width:10px;height:10px;-webkit-transform:rotate(135deg);transform:rotate(135deg);background-color:rgba(0,0,0,.07)}:host.tooltip-light .tooltip-arrow::after{background-color:#fff;content:\"\";display:block;position:absolute;width:10px;height:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{top:100%;left:50%;margin-top:-4px;margin-left:-5px;background:-webkit-gradient(linear,right top,left bottom,color-stop(50%,rgba(0,0,0,.07)),color-stop(50%,transparent));background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-top.tooltip-light .tooltip-arrow::after{top:1px;right:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px;background:-webkit-gradient(linear,left bottom,right top,color-stop(50%,rgba(0,0,0,.1)),color-stop(50%,transparent));background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 50%)}:host.tooltip-bottom.tooltip-light .tooltip-arrow::after{top:-1px;right:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{top:50%;left:100%;margin-top:-5px;margin-left:-4px;background:-webkit-gradient(linear,left top,right bottom,color-stop(50%,rgba(0,0,0,.07)),color-stop(50%,transparent));background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-left.tooltip-light .tooltip-arrow::after{top:1px;right:-1px}:host.tooltip-right.tooltip-light .tooltip-arrow{top:50%;right:100%;margin-top:-5px;margin-right:-4px;background:-webkit-gradient(linear,right bottom,left top,color-stop(50%,rgba(0,0,0,.07)),color-stop(50%,transparent));background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-right.tooltip-light .tooltip-arrow::after{top:-1px;right:1px}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
TooltipComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hostStyleTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.top',] }],
    hostStyleLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.left',] }],
    hostStyleZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.z-index',] }],
    hostStyleTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transition',] }],
    hostStyleWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    hostStyleMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.max-width',] }],
    hostStylePointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.pointer-events',] }],
    hostClassShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-show',] }],
    hostClassShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-shadow',] }],
    hostClassLight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-light',] }],
    transitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['transitionend', ['$event'],] }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tooltip-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config (initOptions) object, provided from the outside
 * @type {?}
 */
const TooltipOptionsService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TooltipOptions');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultOptions = {
    'placement': 'top',
    'autoPlacement': true,
    'contentType': 'string',
    'showDelay': 0,
    'hideDelay': 300,
    'hideDelayMobile': 0,
    'hideDelayTouchscreen': 0,
    'zIndex': 0,
    'animationDuration': 300,
    'animationDurationDefault': 300,
    'trigger': 'hover',
    'tooltipClass': '',
    'display': true,
    'displayMobile': true,
    'displayTouchscreen': true,
    'shadow': true,
    'theme': 'dark',
    'offset': 8,
    'maxWidth': '',
    'id': false,
    'hideDelayAfterClick': 2000
};
/** @type {?} */
const backwardCompatibilityOptions = {
    'delay': 'showDelay',
    'show-delay': 'showDelay',
    'hide-delay': 'hideDelay',
    'hide-delay-mobile': 'hideDelayTouchscreen',
    'hideDelayMobile': 'hideDelayTouchscreen',
    'z-index': 'zIndex',
    'animation-duration': 'animationDuration',
    'animation-duration-default': 'animationDurationDefault',
    'tooltip-class': 'tooltipClass',
    'display-mobile': 'displayTouchscreen',
    'displayMobile': 'displayTouchscreen',
    'max-width': 'maxWidth'
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AdComponent() { }
if (false) {}
class TooltipDirective {
    /**
     * @param {?} initOptions
     * @param {?} elementRef
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
        this.initOptions = initOptions;
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        if (value && defaultOptions) {
            this._options = value;
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed;
    }
    /**
     * @return {?}
     */
    get destroyDelay() {
        if (this._destroyDelay) {
            return this._destroyDelay;
        }
        else {
            return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set destroyDelay(value) {
        this._destroyDelay = value;
    }
    /**
     * @return {?}
     */
    get tooltipPosition() {
        if (this.options['position']) {
            return this.options['position'];
        }
        else {
            return this.elementPosition;
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.destroyTooltip();
        }), this.options['hideDelayAfterClick']);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.initOptions = this.renameProperties(this.initOptions);
        /** @type {?} */
        let changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultOptions, changedOptions);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyTooltip({
            fast: true
        });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    getShowDelay() {
        return this.options['showDelay'];
    }
    /**
     * @return {?}
     */
    getHideDelay() {
        /** @type {?} */
        const hideDelay = this.options['hideDelay'];
        /** @type {?} */
        const hideDelayTouchscreen = this.options['hideDelayTouchscreen'];
        return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    getProperties(changes) {
        /** @type {?} */
        let properties = {};
        for (var prop in changes) {
            if (prop !== 'options' && prop !== 'tooltipValue') {
                properties[prop] = changes[prop].currentValue;
            }
            if (prop === 'options') {
                properties = changes[prop].currentValue;
            }
        }
        return properties;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    renameProperties(options) {
        for (var prop in options) {
            if (backwardCompatibilityOptions[prop]) {
                options[backwardCompatibilityOptions[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    }
    /**
     * @return {?}
     */
    getElementPosition() {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @return {?}
     */
    createTooltip() {
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.appendComponentToBody(TooltipComponent);
        }), this.getShowDelay());
        this.showTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.showTooltipElem();
        }), this.getShowDelay());
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    destroyTooltip(options = {
        fast: false
    }) {
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            () => {
                this.hideTooltip();
            }), options.fast ? 0 : this.getHideDelay());
            this.destroyTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            () => {
                if (!this.componentRef || this.isTooltipDestroyed) {
                    return;
                }
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.events.emit({
                    type: 'hidden',
                    position: this.tooltipPosition
                });
            }), options.fast ? 0 : this.destroyDelay);
        }
    }
    /**
     * @return {?}
     */
    showTooltipElem() {
        this.clearTimeouts();
        ((/** @type {?} */ (this.componentRef.instance))).show = true;
        this.events.emit({
            type: 'show',
            position: this.tooltipPosition
        });
    }
    /**
     * @return {?}
     */
    hideTooltip() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ((/** @type {?} */ (this.componentRef.instance))).show = false;
        this.events.emit({
            type: 'hide',
            position: this.tooltipPosition
        });
    }
    /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    appendComponentToBody(component, data = {}) {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        ((/** @type {?} */ (this.componentRef.instance))).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.tooltipPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.componentSubscribe = ((/** @type {?} */ (this.componentRef.instance))).events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.handleEvents(event);
        }));
    }
    /**
     * @return {?}
     */
    clearTimeouts() {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    }
    /**
     * @return {?}
     */
    get isDisplayOnHover() {
        if (this.options['display'] == false) {
            return false;
        }
        if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
            return false;
        }
        if (this.options['trigger'] !== 'hover') {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get isDisplayOnClick() {
        if (this.options['display'] == false) {
            return false;
        }
        if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
            return false;
        }
        if (this.options['trigger'] != 'click') {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get isTouchScreen() {
        /** @type {?} */
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        /** @type {?} */
        var mq = (/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            return window.matchMedia(query).matches;
        });
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        /** @type {?} */
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    applyOptionsDefault(defaultOptions, options) {
        this.options = Object.assign({}, defaultOptions, this.initOptions || {}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEvents(event) {
        if (event.type === 'shown') {
            this.events.emit({
                type: 'shown',
                position: this.tooltipPosition
            });
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.destroyTooltip();
    }
}
TooltipDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[tooltip]',
                exportAs: 'tooltip',
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TooltipOptionsService,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
TooltipDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }],
    tooltipValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip',] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placement',] }],
    autoPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['autoPlacement',] }],
    contentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['content-type',] }],
    hideDelayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay-mobile',] }],
    hideDelayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideDelayTouchscreen',] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['z-index',] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['animation-duration',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['trigger',] }],
    tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip-class',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display',] }],
    displayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display-mobile',] }],
    displayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['displayTouchscreen',] }],
    shadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['shadow',] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['theme',] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['offset',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['max-width',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['id',] }],
    showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-delay',] }],
    hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay',] }],
    hideDelayAfterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideDelayAfterClick',] }],
    pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pointerEvents',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['position',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusin',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusout',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
    /**
     * @param {?} initOptions
     * @return {?}
     */
    static forRoot(initOptions) {
        return {
            ngModule: TooltipModule,
            providers: [
                {
                    provide: TooltipOptionsService,
                    useValue: initOptions
                }
            ]
        };
    }
}
TooltipModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    TooltipDirective,
                    TooltipComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    TooltipDirective
                ],
                entryComponents: [
                    TooltipComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tooltip-options.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TooltipOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng2-tooltip-directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-tooltip-directive.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tooltip/tooltip.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tooltip/tooltip.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Tooltip</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <span tooltip=\"<b>Bold text</b>\">\n    Tooltip with HTML content\n  </span>\n\n  <br>\n  <!-- Html template -->\n  <ng-template #HtmlTemplate>\n    <b>Bold text</b>\n  </ng-template>\n\n  <button tooltip=\"Custom position\" placement=\"bottom\" [position]=\"{top: 150, left: 100}\">Custom position</button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tooltip/tooltip-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tooltip/tooltip-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TooltipPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPageRoutingModule", function() { return TooltipPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tooltip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.page */ "./src/app/pages/tooltip/tooltip.page.ts");




const routes = [
    {
        path: '',
        component: _tooltip_page__WEBPACK_IMPORTED_MODULE_3__["TooltipPage"]
    }
];
let TooltipPageRoutingModule = class TooltipPageRoutingModule {
};
TooltipPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TooltipPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tooltip/tooltip.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tooltip/tooltip.module.ts ***!
  \*************************************************/
/*! exports provided: TooltipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPageModule", function() { return TooltipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip-routing.module */ "./src/app/pages/tooltip/tooltip-routing.module.ts");
/* harmony import */ var _tooltip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip.page */ "./src/app/pages/tooltip/tooltip.page.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");







//https://www.npmjs.com/package/ng2-tooltip-directive

let TooltipPageModule = class TooltipPageModule {
};
TooltipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_5__["TooltipPageRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
        ],
        declarations: [_tooltip_page__WEBPACK_IMPORTED_MODULE_6__["TooltipPage"]]
    })
], TooltipPageModule);



/***/ }),

/***/ "./src/app/pages/tooltip/tooltip.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tooltip/tooltip.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  height: 50px;\n  width: 200px;\n  border-radius: 3px;\n  margin-top: 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9vbHRpcC9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcdG9vbHRpcFxcdG9vbHRpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rvb2x0aXAvdG9vbHRpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90b29sdGlwL3Rvb2x0aXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSIsImJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tooltip/tooltip.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tooltip/tooltip.page.ts ***!
  \***********************************************/
/*! exports provided: TooltipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPage", function() { return TooltipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/

let TooltipPage = class TooltipPage {
    constructor() { }
    ngOnInit() {
    }
};
TooltipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tooltip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tooltip.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tooltip/tooltip.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tooltip.page.scss */ "./src/app/pages/tooltip/tooltip.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TooltipPage);



/***/ })

}]);
//# sourceMappingURL=pages-tooltip-tooltip-module-es2015.js.map