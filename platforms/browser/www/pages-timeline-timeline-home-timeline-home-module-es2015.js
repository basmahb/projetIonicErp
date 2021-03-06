(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timeline-timeline-home-timeline-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline-home/timeline-home.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline-home/timeline-home.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Timeline Screens</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToTimeline1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToTimeline2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToTimeline3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n    <ion-button (click)=\"goToTimeline4()\" expand=\"block\" id=\"g4\">\n      Demo 4\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/timeline/timeline-home/timeline-home-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/timeline/timeline-home/timeline-home-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TimelineHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineHomePageRoutingModule", function() { return TimelineHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _timeline_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline-home.page */ "./src/app/pages/timeline/timeline-home/timeline-home.page.ts");




const routes = [
    {
        path: '',
        component: _timeline_home_page__WEBPACK_IMPORTED_MODULE_3__["TimelineHomePage"]
    }
];
let TimelineHomePageRoutingModule = class TimelineHomePageRoutingModule {
};
TimelineHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TimelineHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/timeline/timeline-home/timeline-home.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/timeline/timeline-home/timeline-home.module.ts ***!
  \**********************************************************************/
/*! exports provided: TimelineHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineHomePageModule", function() { return TimelineHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _timeline_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline-home-routing.module */ "./src/app/pages/timeline/timeline-home/timeline-home-routing.module.ts");
/* harmony import */ var _timeline_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline-home.page */ "./src/app/pages/timeline/timeline-home/timeline-home.page.ts");







let TimelineHomePageModule = class TimelineHomePageModule {
};
TimelineHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _timeline_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimelineHomePageRoutingModule"]
        ],
        declarations: [_timeline_home_page__WEBPACK_IMPORTED_MODULE_6__["TimelineHomePage"]]
    })
], TimelineHomePageModule);



/***/ }),

/***/ "./src/app/pages/timeline/timeline-home/timeline-home.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/timeline/timeline-home/timeline-home.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUtaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcdGltZWxpbmVcXHRpbWVsaW5lLWhvbWVcXHRpbWVsaW5lLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aW1lbGluZS90aW1lbGluZS1ob21lL3RpbWVsaW5lLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpbWVsaW5lL3RpbWVsaW5lLWhvbWUvdGltZWxpbmUtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/timeline/timeline-home/timeline-home.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/timeline/timeline-home/timeline-home.page.ts ***!
  \********************************************************************/
/*! exports provided: TimelineHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineHomePage", function() { return TimelineHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/


let TimelineHomePage = class TimelineHomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToTimeline1() {
        this.router.navigate(['/timeline1']);
    }
    goToTimeline2() {
        this.router.navigate(['/timeline2']);
    }
    goToTimeline3() {
        this.router.navigate(['/timeline3']);
    }
    goToTimeline4() {
        this.router.navigate(['/timeline4']);
    }
};
TimelineHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TimelineHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeline-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline-home/timeline-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeline-home.page.scss */ "./src/app/pages/timeline/timeline-home/timeline-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TimelineHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-timeline-timeline-home-timeline-home-module-es2015.js.map