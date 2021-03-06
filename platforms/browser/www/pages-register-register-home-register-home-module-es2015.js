(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-home-register-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-home/register-home.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-home/register-home.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Register Screens</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToReg1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToReg2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToReg3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n    <ion-button (click)=\"goToReg4()\" expand=\"block\" id=\"g4\">\n      Demo 4\n    </ion-button>\n\n    <ion-button (click)=\"goToReg5()\" expand=\"block\" id=\"g5\">\n      Demo 5\n    </ion-button>\n\n    <ion-button (click)=\"goToReg6()\" expand=\"block\" id=\"g6\">\n      Demo 6\n    </ion-button>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/register/register-home/register-home-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/register/register-home/register-home-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHomePageRoutingModule", function() { return RegisterHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-home.page */ "./src/app/pages/register/register-home/register-home.page.ts");




const routes = [
    {
        path: '',
        component: _register_home_page__WEBPACK_IMPORTED_MODULE_3__["RegisterHomePage"]
    }
];
let RegisterHomePageRoutingModule = class RegisterHomePageRoutingModule {
};
RegisterHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register-home/register-home.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/register/register-home/register-home.module.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHomePageModule", function() { return RegisterHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-home-routing.module */ "./src/app/pages/register/register-home/register-home-routing.module.ts");
/* harmony import */ var _register_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-home.page */ "./src/app/pages/register/register-home/register-home.page.ts");







let RegisterHomePageModule = class RegisterHomePageModule {
};
RegisterHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterHomePageRoutingModule"]
        ],
        declarations: [_register_home_page__WEBPACK_IMPORTED_MODULE_6__["RegisterHomePage"]]
    })
], RegisterHomePageModule);



/***/ }),

/***/ "./src/app/pages/register/register-home/register-home.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/register/register-home/register-home.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLWhvbWVcXHJlZ2lzdGVyLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1ob21lL3JlZ2lzdGVyLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLWhvbWUvcmVnaXN0ZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register-home/register-home.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/register/register-home/register-home.page.ts ***!
  \********************************************************************/
/*! exports provided: RegisterHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHomePage", function() { return RegisterHomePage; });
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


let RegisterHomePage = class RegisterHomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToReg1() {
        this.router.navigate(['/register-ex1']);
    }
    goToReg2() {
        this.router.navigate(['/register-ex2']);
    }
    goToReg3() {
        this.router.navigate(['/register-ex3']);
    }
    goToReg4() {
        this.router.navigate(['/register-ex4']);
    }
    goToReg5() {
        this.router.navigate(['/register-ex5']);
    }
    goToReg6() {
        this.router.navigate(['/register-ex6']);
    }
};
RegisterHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-home/register-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-home.page.scss */ "./src/app/pages/register/register-home/register-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RegisterHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-home-register-home-module-es2015.js.map