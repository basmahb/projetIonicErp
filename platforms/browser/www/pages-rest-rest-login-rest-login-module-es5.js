function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-rest-login-rest-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-login/rest-login.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-login/rest-login.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRestRestLoginRestLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n   <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Rest APIs Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/rest/icon.png\" class=\"logo_icon\" alt=\"starter\">\n    <p class=\"login-name\">Login</p>\n    <p class=\"subTitle\">Enter your login detail to <br>\n      access your account</p>\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\"\n          spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\n          #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <ion-button color=\"danger\" class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\"\n          [disabled]=\"isLogin\">\n          <span class=\"title\" *ngIf=\"!isLogin\"> Log In</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n  <p class=\"createAcc\" (click)=\"register()\">Dont have an account?\n    <span class=\"registerTag\">Sign up</span>\n  </p>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/rest/rest-login/rest-login-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/rest/rest-login/rest-login-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: RestLoginPageRoutingModule */

  /***/
  function srcAppPagesRestRestLoginRestLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestLoginPageRoutingModule", function () {
      return RestLoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rest_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rest-login.page */
    "./src/app/pages/rest/rest-login/rest-login.page.ts");

    var routes = [{
      path: '',
      component: _rest_login_page__WEBPACK_IMPORTED_MODULE_3__["RestLoginPage"]
    }];

    var RestLoginPageRoutingModule = function RestLoginPageRoutingModule() {
      _classCallCheck(this, RestLoginPageRoutingModule);
    };

    RestLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RestLoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rest/rest-login/rest-login.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/rest/rest-login/rest-login.module.ts ***!
    \************************************************************/

  /*! exports provided: RestLoginPageModule */

  /***/
  function srcAppPagesRestRestLoginRestLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestLoginPageModule", function () {
      return RestLoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _rest_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rest-login-routing.module */
    "./src/app/pages/rest/rest-login/rest-login-routing.module.ts");
    /* harmony import */


    var _rest_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rest-login.page */
    "./src/app/pages/rest/rest-login/rest-login.page.ts");

    var RestLoginPageModule = function RestLoginPageModule() {
      _classCallCheck(this, RestLoginPageModule);
    };

    RestLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rest_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestLoginPageRoutingModule"]],
      declarations: [_rest_login_page__WEBPACK_IMPORTED_MODULE_6__["RestLoginPage"]]
    })], RestLoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/rest/rest-login/rest-login.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/rest/rest-login/rest-login.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRestRestLoginRestLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin-top: 10px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-danger);\n}\n.btn_class {\n  margin-top: 10px;\n  --border-radius: 5px;\n  height: 50px;\n}\n.btn_class .title {\n  color: white !important;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWxvZ2luL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxyZXN0XFxyZXN0LWxvZ2luXFxyZXN0LWxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWxvZ2luL3Jlc3QtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBQ0ksdUJBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVo7QURBUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VaO0FEQ0k7RUFDUSxpQkFBQTtFQUNBLDhCQUFBO0FDRVo7QURBSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFJQSxZQUFBO0FDQVI7QURIUTtFQUNJLHVCQUFBO0FDS1o7QURESTtFQUNLLGdCQUFBO0FDSVQ7QURGSTtFQUNJLGdCQUFBO0FDS1I7QURISTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtBQ01SO0FESkk7RUFDSyw4QkFBQTtFQUNELDZCQUFBO0VBQ0EsZ0JBQUE7QUNPUjtBREhHO0VBQ0ssa0JBQUE7QUNNUjtBRExPO0VBQ0ssOEJBQUE7RUFDQSxpQkFBQTtBQ09aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWxvZ2luL3Jlc3QtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5sb2dvX2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4tbmFtZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRpdGxle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZnJnVGFne1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmJ0bl9jbGFzc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28gaW1nIHtcbiAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAuY3JlYXRlQWNje1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgIC5yZWdpc3RlclRhZ3tcbiAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgfVxuICAgfSAiLCIubG9naW4tbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dvX2ljb24ge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dpbi1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmxvZ2luLWxvZ28gLnN1YlRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYnRuX2NsYXNzIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/rest/rest-login/rest-login.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/rest/rest-login/rest-login.page.ts ***!
    \**********************************************************/

  /*! exports provided: RestLoginPage */

  /***/
  function srcAppPagesRestRestLoginRestLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestLoginPage", function () {
      return RestLoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/rest/rest-apis.service */
    "./src/app/services/rest/rest-apis.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var RestLoginPage = /*#__PURE__*/function () {
      function RestLoginPage(util, router, api) {
        _classCallCheck(this, RestLoginPage);

        this.util = util;
        this.router = router;
        this.api = api;
        this.login = {
          email: '',
          password: ''
        };
        this.submitted = false;
        this.isLogin = false;
      }

      _createClass(RestLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this = this;

          console.log('form', form);
          this.submitted = true;

          if (form.valid) {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.login.email)) {
              this.util.showToast('Please enter valid email', 'danger', 'bottom');
              return false;
            }

            console.log('login');
            this.isLogin = true;
            var param = {
              email: this.login.email,
              password: this.login.password
            };
            this.api.post(param, 'Users/login').then(function (data) {
              _this.isLogin = false;
              var info = JSON.parse(data.data);
              console.log('inof', info);

              if (info && info.status === 200) {
                localStorage.setItem('uid', info.data.id);

                _this.router.navigate(['/rest-home']);
              } else {
                _this.util.showToast("".concat(info.data.message), 'danger', 'bottom');
              }
            }).catch(function (error) {
              _this.isLogin = false;
              console.log(error);

              _this.util.showToast("".concat(error), 'danger', 'bottom');
            });
          }
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['rest-register']);
        }
      }]);

      return RestLoginPage;
    }();

    RestLoginPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"]
      }];
    };

    RestLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rest-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rest-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-login/rest-login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rest-login.page.scss */
      "./src/app/pages/rest/rest-login/rest-login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"]])], RestLoginPage);
    /***/
  },

  /***/
  "./src/app/services/util/util.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/util/util.service.ts ***!
    \***********************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.isLoading = false;
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this2.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context6.next = 10;
                      break;
                    }

                    _context6.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context6.sent;
                    _context6.next = 7;
                    return alert.present();

                  case 7:
                    return _context6.abrupt("return", false);

                  case 10:
                    return _context6.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, color, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: color,
                      position: positon
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, color, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: color,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {//console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context8.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          //console.log("Error got in service =>", err)
          if (err.status == -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status == 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status == 500) {
            this.showErrorAlert("Somethimg Went Wrong..");
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], UtilService);
    /***/
  }
}]);
//# sourceMappingURL=pages-rest-rest-login-rest-login-module-es5.js.map