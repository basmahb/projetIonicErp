(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-ribbon-item-ribbon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-ribbon/item-ribbon.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-ribbon/item-ribbon.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Item Ribbon\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of thumbnails\">\n      <ion-thumbnail slot=\"start\" class=\"item-ribbon\">\n        <span class=\"ribbon \">\n          <span>{{ item.ribbonText }}</span>\n        </span>\n        <img [src]=\"item.image\">\n      </ion-thumbnail>\n      <div>\n        <p>{{ item.title }}</p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-ribbon\">\n      <span class=\"ribbon cruzeiro\">\n        <span>Ionic</span>\n      </span>\n      <ion-thumbnail item-left>\n        <img src=\"assets/ribbons/ionic.png\" alt=\"\">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome framework</p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-ribbon\">\n      <span class=\"ribbon javascript\">\n        <span>JS</span>\n      </span>\n      <ion-thumbnail item-left>\n        <img src=\"assets/ribbons/js.png\" alt=\"\">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome language</p>\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ItemRibbonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPageRoutingModule", function() { return ItemRibbonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_ribbon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-ribbon.page */ "./src/app/pages/item-ribbon/item-ribbon.page.ts");




const routes = [
    {
        path: '',
        component: _item_ribbon_page__WEBPACK_IMPORTED_MODULE_3__["ItemRibbonPage"]
    }
];
let ItemRibbonPageRoutingModule = class ItemRibbonPageRoutingModule {
};
ItemRibbonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemRibbonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.module.ts ***!
  \*********************************************************/
/*! exports provided: ItemRibbonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPageModule", function() { return ItemRibbonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _item_ribbon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-ribbon-routing.module */ "./src/app/pages/item-ribbon/item-ribbon-routing.module.ts");
/* harmony import */ var _item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-ribbon.page */ "./src/app/pages/item-ribbon/item-ribbon.page.ts");







let ItemRibbonPageModule = class ItemRibbonPageModule {
};
ItemRibbonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_ribbon_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemRibbonPageRoutingModule"]
        ],
        declarations: [_item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__["ItemRibbonPage"]]
    })
], ItemRibbonPageModule);



/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-ribbon {\n  background-color: #fff;\n  position: relative;\n  -webkit-filter: none;\n          filter: none;\n  opacity: 1;\n}\n.item-ribbon .ribbon {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  z-index: 2;\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  text-align: right;\n}\n.item-ribbon .ribbon span {\n  font-size: 10px;\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 13px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  width: 79px;\n  display: block;\n  background: #f53d3d;\n  position: absolute;\n  top: 18px;\n  right: -15px;\n}\n.item-ribbon .ribbon span::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid #f53d3d;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #f53d3d;\n}\n.item-ribbon .ribbon span::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid transparent;\n  border-right: 3px solid #f53d3d;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #f53d3d;\n}\n.ribbon.cruzeiro span {\n  color: white;\n  background: #387ef5;\n}\n.ribbon.cruzeiro span::before {\n  border-left: 3px solid #387ef5;\n  border-top: 3px solid #387ef5;\n}\n.ribbon.cruzeiro span::after {\n  border-right: 3px solid #387ef5;\n  border-top: 3px solid #387ef5;\n}\n.ribbon.atletico span {\n  color: white;\n  background: #818181;\n}\n.ribbon.atletico span::before {\n  border-left: 3px solid #818181;\n  border-top: 3px solid #818181;\n}\n.ribbon.atletico span::after {\n  border-right: 3px solid #818181;\n  border-top: 3px solid #818181;\n}\n.ribbon.javascript span {\n  color: black;\n  background: #f7e023;\n}\n.ribbon.javascript span::before {\n  border-left: 3px solid #f7e023;\n  border-top: 3px solid #f7e023;\n}\n.ribbon.javascript span::after {\n  border-right: 3px solid #f7e023;\n  border-top: 3px solid #f7e023;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1yaWJib24vRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGl0ZW0tcmliYm9uXFxpdGVtLXJpYmJvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2l0ZW0tcmliYm9uL2l0ZW0tcmliYm9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0VBQ0EsVUFBQTtBQ25CSjtBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDbEJOO0FEbUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ2pCUjtBRGtCUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FDaEJWO0FEa0JRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUNoQlY7QURwREk7RUFDRSxZQUZ5QztFQUd6QyxtQkFhTztBQzBDYjtBRHRETTtFQUNFLDhCQUFBO0VBQ0EsNkJBQUE7QUN3RFI7QUR0RE07RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDd0RSO0FEakVJO0VBQ0UsWUFGeUM7RUFHekMsbUJBY087QUNzRGI7QURuRU07RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FDcUVSO0FEbkVNO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3FFUjtBRDlFSTtFQUNFLFlBa0Y4QjtFQWpGOUIsbUJBZVM7QUNrRWY7QURoRk07RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FDa0ZSO0FEaEZNO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2tGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tcmliYm9uL2l0ZW0tcmliYm9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAbWl4aW4gcmliYm9uaXplICgkcmliYm9uLWNvbG9yLCAkdGV4dC1jb2xvcjogd2hpdGUsICRib3JkZXItd2lkdGg6IDNweCkge1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgYmFja2dyb3VuZDogJHJpYmJvbi1jb2xvcjtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyLXdpZHRoIHNvbGlkICRyaWJib24tY29sb3I7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyLXdpZHRoIHNvbGlkICRyaWJib24tY29sb3I7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAkZGVmYXVsdDogI2Y1M2QzZDtcbiAgJGNydXplaXJvOiAjMzg3ZWY1O1xuICAkYXRsZXRpY286IGRhcmtlbigjZjRmNGY0LCA0NSUpO1xuICAkamF2YXNjcmlwdDogI2Y3ZTAyMztcblxuICAuaXRlbS1yaWJib257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmlsdGVyOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLnJpYmJvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTVweDtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjUzZDNkO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMThweDtcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJGRlZmF1bHQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGRlZmF1bHQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yaWJib24uY3J1emVpcm8ge1xuICAgIEBpbmNsdWRlIHJpYmJvbml6ZSgkY3J1emVpcm8pO1xuICB9XG5cbiAgLnJpYmJvbi5hdGxldGljbyB7XG4gICAgQGluY2x1ZGUgcmliYm9uaXplKCRhdGxldGljbyk7XG4gIH1cblxuICAucmliYm9uLmphdmFzY3JpcHQge1xuICAgIEBpbmNsdWRlIHJpYmJvbml6ZSgkamF2YXNjcmlwdCwgYmxhY2spO1xuICB9XG4gICIsIi5pdGVtLXJpYmJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmlsdGVyOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuLml0ZW0tcmliYm9uIC5yaWJib24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IC01cHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLml0ZW0tcmliYm9uIC5yaWJib24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogNzlweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmNTNkM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICByaWdodDogLTE1cHg7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y1M2QzZDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmNTNkM2Q7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNTNkM2Q7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmNTNkM2Q7XG59XG5cbi5yaWJib24uY3J1emVpcm8gc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzM4N2VmNTtcbn1cbi5yaWJib24uY3J1emVpcm8gc3Bhbjo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMzg3ZWY1O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzM4N2VmNTtcbn1cbi5yaWJib24uY3J1emVpcm8gc3Bhbjo6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMzg3ZWY1O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzM4N2VmNTtcbn1cblxuLnJpYmJvbi5hdGxldGljbyBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjODE4MTgxO1xufVxuLnJpYmJvbi5hdGxldGljbyBzcGFuOjpiZWZvcmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM4MTgxODE7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjODE4MTgxO1xufVxuLnJpYmJvbi5hdGxldGljbyBzcGFuOjphZnRlciB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM4MTgxODE7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjODE4MTgxO1xufVxuXG4ucmliYm9uLmphdmFzY3JpcHQgc3BhbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogI2Y3ZTAyMztcbn1cbi5yaWJib24uamF2YXNjcmlwdCBzcGFuOjpiZWZvcmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmN2UwMjM7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjdlMDIzO1xufVxuLnJpYmJvbi5qYXZhc2NyaXB0IHNwYW46OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2Y3ZTAyMztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmN2UwMjM7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.page.ts ***!
  \*******************************************************/
/*! exports provided: ItemRibbonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPage", function() { return ItemRibbonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/

let ItemRibbonPage = class ItemRibbonPage {
    constructor() {
        this.thumbnails = [
            { title: 'Awesome Shoes - $9', image: 'assets/ribbons/shoes.jpg', ribbonText: 'sale', class: 'sale' },
            { title: 'Awesome Team', image: 'assets/ribbons/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
            { title: 'Bad team', image: 'assets/ribbons/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
        ];
    }
    ngOnInit() {
    }
};
ItemRibbonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-ribbon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-ribbon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-ribbon/item-ribbon.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-ribbon.page.scss */ "./src/app/pages/item-ribbon/item-ribbon.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ItemRibbonPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-ribbon-item-ribbon-module-es2015.js.map