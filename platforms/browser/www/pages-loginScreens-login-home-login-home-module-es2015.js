(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginScreens-login-home-login-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-home/login-home.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-home/login-home.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Login Screens</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToLogin1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToLogin2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToLogin3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n    <ion-button (click)=\"goToLogin4()\" expand=\"block\" id=\"g4\">\n      Demo 4\n    </ion-button>\n\n    <ion-button (click)=\"goToLogin5()\" expand=\"block\" id=\"g5\">\n      Demo 5\n    </ion-button>\n\n    <ion-button (click)=\"goToLogin6()\" expand=\"block\" id=\"g6\">\n      Demo 6\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/loginScreens/login-home/login-home-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-home/login-home-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: LoginHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomePageRoutingModule", function() { return LoginHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-home.page */ "./src/app/pages/loginScreens/login-home/login-home.page.ts");




const routes = [
    {
        path: '',
        component: _login_home_page__WEBPACK_IMPORTED_MODULE_3__["LoginHomePage"]
    }
];
let LoginHomePageRoutingModule = class LoginHomePageRoutingModule {
};
LoginHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/loginScreens/login-home/login-home.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-home/login-home.module.ts ***!
  \********************************************************************/
/*! exports provided: LoginHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomePageModule", function() { return LoginHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-home-routing.module */ "./src/app/pages/loginScreens/login-home/login-home-routing.module.ts");
/* harmony import */ var _login_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-home.page */ "./src/app/pages/loginScreens/login-home/login-home.page.ts");







let LoginHomePageModule = class LoginHomePageModule {
};
LoginHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginHomePageRoutingModule"]
        ],
        declarations: [_login_home_page__WEBPACK_IMPORTED_MODULE_6__["LoginHomePage"]]
    })
], LoginHomePageModule);



/***/ }),

/***/ "./src/app/pages/loginScreens/login-home/login-home.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-home/login-home.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWhvbWUvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luU2NyZWVuc1xcbG9naW4taG9tZVxcbG9naW4taG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1ob21lL2xvZ2luLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1ob21lL2xvZ2luLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/loginScreens/login-home/login-home.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-home/login-home.page.ts ***!
  \******************************************************************/
/*! exports provided: LoginHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomePage", function() { return LoginHomePage; });
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


let LoginHomePage = class LoginHomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin1() {
        this.router.navigate(['/login-ex1']);
    }
    goToLogin2() {
        this.router.navigate(['/login-ex2']);
    }
    goToLogin3() {
        this.router.navigate(['/login-ex3']);
    }
    goToLogin4() {
        this.router.navigate(['/login-ex4']);
    }
    goToLogin5() {
        this.router.navigate(['/login-ex5']);
    }
    goToLogin6() {
        this.router.navigate(['/login-ex6']);
    }
};
LoginHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-home/login-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-home.page.scss */ "./src/app/pages/loginScreens/login-home/login-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-loginScreens-login-home-login-home-module-es2015.js.map