function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slider-slider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSliderSliderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n   <!-- <ion-buttons slot=\"end\">\n      <ion-button color='dark' (click)=\"startApp()\" [hidden]=\"!showSkip\">skip </ion-button>\n    </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"bg\">\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n\n   <!-- <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>-->\n\n    <div class=\"green_curve\"></div>\n    <div class=\"black_curve\">\n      <img src=\"assets/imgs/logo_sonicerp.png\" class=\"car\">\n    </div>\n    <div class=\"black_green_curve\"></div>\n\n    <div class=\"form_div\">\n    <!--  <ion-label class=\"head_lbl\">Login</ion-label>-->\n      <form #loginForm=\"ngForm\" novalidate>\n        <ion-input [(ngModel)]=\"login.email\" type=\"text\" placeholder=\"Login\" name=\"email\" #email=\"ngModel\"\n                   spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n        <ion-text>\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\n            Login requis\n          </p>\n        </ion-text>\n\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\n                   #password=\"ngModel\" required>\n        </ion-input>\n        <ion-text>\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\n            Mot de passe requis\n          </p>\n        </ion-text>\n\n\n        <ion-label class=\"forgot\">Mot de passe oubli?? ?</ion-label>\n\n        <ion-row class=\"ion-no-margin ion-no-padding\">\n          <ion-col class=\"ion-no-margin ion-no-padding\">\n            <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\"\n                        [disabled]=\"isLogin\">\n              <span class=\"title\" *ngIf=\"!isLogin\"> Log In</span>\n              <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <!--<ion-label class=\"bottom_lbl\">Don't have Account ? <span class=\"signup_span\">Sign Up</span></ion-label>\n        <br>-->\n      </form>\n        <h2>Stripe Checkout</h2>\n        <div class=\"row mt-5\">\n            <div class=\"col-md-4\">\n                <button (click)=\"pay(20)\" class=\"btn btn-primary btn-block\">Pay $20</button>\n            </div>\n            <!-- <div class=\"col-md-4\">\n              <button (click)=\"pay(30)\" class=\"btn btn-success btn-block\">Pay $30</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button (click)=\"pay(50)\" class=\"btn btn-info btn-block\">Pay $50</button>\n            </div>     -->\n        </div>\n        <p class=\"mt-5\">\n            Try it out using the test card number <b>4242 4242 4242 4242</b>, a random three-digit CVC number, any expiration date in the future, and a random five-digit U.S. ZIP code.\n        </p>\n        <form action=\"/\" method=\"post\" id=\"payment-form\">\n            <div class=\"form-row\">\n                <div id=\"card-element\"> <!-- a Stripe Element will be inserted here. --> </div>\n                <!-- Used to display Element errors -->\n                <div id=\"card-errors\" role=\"alert\"></div>\n            </div>\n            <ion-button type=\"submit\" color=\"success\" expand=\"full\">Make Payment</ion-button>\n        </form>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/slider/slider-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/slider/slider-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SliderPageRoutingModule */

  /***/
  function srcAppPagesSliderSliderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPageRoutingModule", function () {
      return SliderPageRoutingModule;
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


    var _slider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slider.page */
    "./src/app/pages/slider/slider.page.ts");

    var routes = [{
      path: '',
      component: _slider_page__WEBPACK_IMPORTED_MODULE_3__["SliderPage"]
    }];

    var SliderPageRoutingModule = function SliderPageRoutingModule() {
      _classCallCheck(this, SliderPageRoutingModule);
    };

    SliderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SliderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/slider/slider.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/slider/slider.module.ts ***!
    \***********************************************/

  /*! exports provided: SliderPageModule */

  /***/
  function srcAppPagesSliderSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPageModule", function () {
      return SliderPageModule;
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


    var _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slider-routing.module */
    "./src/app/pages/slider/slider-routing.module.ts");
    /* harmony import */


    var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slider.page */
    "./src/app/pages/slider/slider.page.ts");

    var SliderPageModule = function SliderPageModule() {
      _classCallCheck(this, SliderPageModule);
    };

    SliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderPageRoutingModule"]],
      declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]]
    })], SliderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/slider/slider.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/slider/slider.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSliderSliderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #e7f4fc;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #1c9aea;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #e7f4fc;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 200px;\n  left: 43%;\n  position: absolute;\n  margin-top: 10px;\n}\n\n.main_content_div .black_green_curve {\n  background: #e7f4fc;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: #1c9aea;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: #1c9aea;\n  border-bottom: 1px solid #1c9aea;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #1c9aea;\n  --border-color: #1c9aea;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: #1c9aea;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  color: #1c9aea;\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-slides {\n  height: 80vh;\n  --bullet-background: #f2d7d7;\n  --bullet-background-active: var(--ion-color-primary);\n  --bullet-width:30px !important;\n}\n\n.bg {\n  --ion-background-color: white;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  color: black;\n  font-size: 1rem;\n}\n\n.slide-image {\n  height: 250px;\n  width: 100%;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: black;\n}\n\np b {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxzbGlkZXJcXHNsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElFO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hOOztBRE1JO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNKTjs7QURPSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0xOOztBRFFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTk47O0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BOOztBRFNJO0VBQ0UsZ0JBQUE7QUNQTjs7QUQwQkU7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDdkJGOztBRHlCQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNELG9EQUFBO0VBQ0EsOEJBQUE7QUN0Qkg7O0FEeUJBO0VBQ0UsNkJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UsY0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDckJGOztBRHlCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNFLGdCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3RCRjs7QUR3QkU7RUFDRSxZQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdmNGZjO1xufVxuLy9lN2Y0ZmNcbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmdyZWVuX2N1cnZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5YWVhO1xuICAgIHdpZHRoOiAxMzAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmJsYWNrX2N1cnZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTdmNGZjO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA2NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLmNhciB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBsZWZ0OiA0MyU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuICAuYmxhY2tfZ3JlZW5fY3VydmUge1xuICAgIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB3aWR0aDogMTUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNjUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAudXBwZXJfY3VydmUge1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDAgMCByZWQ7XG4gIH1cblxuICAuZm9ybV9kaXYge1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgLmhlYWRfbGJsIHtcbiAgICAgIGNvbG9yOiAjMWM5YWVhO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBjb2xvcjogIzFjOWFlYTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWM5YWVhO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIC0tYmFja2dyb3VuZDogIzFjOWFlYTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMWM5YWVhO1xuXG4gICAgfVxuICAgIC5ib3R0b21fbGJsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxYzlhZWE7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5mb3Jnb3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogIzFjOWFlYTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5zaWdudXBfc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNmMmQ3ZDc7XG4gICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgLS1idWxsZXQtd2lkdGg6MzBweCAhaW1wb3J0YW50O1xufVxuXG4uYmcge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5cbi5zbGlkZS1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogYmxhY2s7XG5cbiAgYiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cblxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlN2Y0ZmM7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmdyZWVuX2N1cnZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOWFlYTtcbiAgd2lkdGg6IDEzMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmxhY2tfY3VydmUge1xuICBiYWNrZ3JvdW5kOiAjZTdmNGZjO1xuICBoZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ibGFja19jdXJ2ZSAuY2FyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBsZWZ0OiA0MyU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ibGFja19ncmVlbl9jdXJ2ZSB7XG4gIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfY3VydmUge1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDAgMCByZWQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYge1xuICBwYWRkaW5nLXRvcDogMzAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuaGVhZF9sYmwge1xuICBjb2xvcjogIzFjOWFlYTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQge1xuICBjb2xvcjogIzFjOWFlYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYzlhZWE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzFjOWFlYTtcbiAgLS1ib3JkZXItY29sb3I6ICMxYzlhZWE7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmJvdHRvbV9sYmwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFjOWFlYTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZm9yZ290IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuc2lnbnVwX3NwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogODB2aDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI2YyZDdkNztcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1idWxsZXQtd2lkdGg6MzBweCAhaW1wb3J0YW50O1xufVxuXG4uYmcge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogYmxhY2s7XG59XG5wIGIge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/slider/slider.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/slider/slider.page.ts ***!
    \*********************************************/

  /*! exports provided: SliderPage */

  /***/
  function srcAppPagesSliderSliderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPage", function () {
      return SliderPage;
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
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


    var SliderPage = /*#__PURE__*/function () {
      function SliderPage(menuCtrl, navCtrl, util, router, api) {
        _classCallCheck(this, SliderPage);

        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.stripe = Stripe('pk_test_51KttcIGIYSkTrrl7fD3P8rZf5YuhWtkfnWZJROoCPZlZwZbjGO5E83du4112RirhtxPvNzklBCx71YtUNkymuVCj00MCoUeWos');
        this.handler = null;
        this.login = {
          email: '',
          password: ''
        };
        this.submitted = false;
        this.isLogin = false;
        this.showSkip = true;
        this.slideOpts = {
          zoom: false
        };
      }

      _createClass(SliderPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "onSlideChangeStart",
        value: function onSlideChangeStart(event) {
          var _this = this;

          event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.setupStripe();
          this.loadStripe();
        }
      }, {
        key: "pay",
        value: function pay(amount) {
          var handler = window.StripeCheckout.configure({
            key: 'pk_test_51KttcIGIYSkTrrl7fD3P8rZf5YuhWtkfnWZJROoCPZlZwZbjGO5E83du4112RirhtxPvNzklBCx71YtUNkymuVCj00MCoUeWos',
            locale: 'auto',
            token: function token(_token) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(_token);
              alert('Token Created!!');
            }
          });
          handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: amount * 100
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          var _this2 = this;

          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";

            s.onload = function () {
              _this2.handler = window.StripeCheckout.configure({
                key: 'pk_test_51KttcIGIYSkTrrl7fD3P8rZf5YuhWtkfnWZJROoCPZlZwZbjGO5E83du4112RirhtxPvNzklBCx71YtUNkymuVCj00MCoUeWos',
                locale: 'auto',
                token: function token(_token2) {
                  // You can access the token ID with `token.id`.
                  // Get the token ID to your server-side code for use.
                  console.log(_token2);
                  alert('Payment Success!!');
                }
              });
            };

            window.document.body.appendChild(s);
          }
        }
      }, {
        key: "setupStripe",
        value: function setupStripe() {
          var _this3 = this;

          var elements = this.stripe.elements();
          var style = {
            base: {
              color: '#32325d',
              lineHeight: '24px',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          };
          this.card = elements.create('card', {
            style: style
          });
          console.log(this.card);
          this.card.mount('#card-element');
          this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');

            if (event.error) {
              displayError.textContent = event.error.message;
            } else {
              displayError.textContent = '';
            }
          });
          var form = document.getElementById('payment-form');
          form.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log(event);

            _this3.stripe.createSource(_this3.card).then(function (result) {
              if (result.error) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
              } else {
                console.log(result); //  this.makePayment(result.id);
              }
            });
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.menuCtrl.enable(true);
        }
      }, {
        key: "startApp",
        value: function startApp() {
          console.log('logn');
          this.navCtrl.navigateRoot(['home']);
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          console.log('form', form);
          this.submitted = true;

          if (form.valid) {
            /*const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
              this.util.showToast('Please enter valid email', 'danger', 'bottom');
              return false;
            }*/
            console.log('login');
            this.isLogin = true;
            var param = {
              email: this.login.email,
              password: this.login.password
            };
            /*this.api.post(param,'Users/login').then((data) => {
              this.isLogin = false;
              const info = JSON.parse(data.data);
              console.log('inof', info);
              if (info && info.status === 200) {
                localStorage.setItem('uid', info.data.id);
                this.router.navigate(['/rest-home']);
              } else {
                this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
              }
            }).catch(error => {
              this.isLogin = false;
              console.log(error);
              this.util.showToast(`${error}`, 'danger', 'bottom');
            });*/

            this.navCtrl.navigateRoot(['charts']);
          }
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['rest-register']);
        }
      }]);

      return SliderPage;
    }();

    SliderPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], SliderPage.prototype, "slides", void 0);
    SliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.page.scss */
      "./src/app/pages/slider/slider.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"]])], SliderPage);
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
            var _this4 = this;

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
                        if (!_this4.isLoading) {
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
            var emailfilter, _alert;

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
                    _alert = _context6.sent;
                    _context6.next = 7;
                    return _alert.present();

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
//# sourceMappingURL=pages-slider-slider-module-es5.js.map