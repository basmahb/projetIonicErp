function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sliderScreens-slider-home-slider-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-home/slider-home.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-home/slider-home.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSliderScreensSliderHomeSliderHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Slider Screen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    \n    <ion-button (click)=\"goToSlider1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToSlider2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToSlider3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sliderScreens/slider-home/slider-home-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/sliderScreens/slider-home/slider-home-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: SliderHomePageRoutingModule */

  /***/
  function srcAppPagesSliderScreensSliderHomeSliderHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderHomePageRoutingModule", function () {
      return SliderHomePageRoutingModule;
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


    var _slider_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slider-home.page */
    "./src/app/pages/sliderScreens/slider-home/slider-home.page.ts");

    var routes = [{
      path: '',
      component: _slider_home_page__WEBPACK_IMPORTED_MODULE_3__["SliderHomePage"]
    }];

    var SliderHomePageRoutingModule = function SliderHomePageRoutingModule() {
      _classCallCheck(this, SliderHomePageRoutingModule);
    };

    SliderHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SliderHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sliderScreens/slider-home/slider-home.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/sliderScreens/slider-home/slider-home.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SliderHomePageModule */

  /***/
  function srcAppPagesSliderScreensSliderHomeSliderHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderHomePageModule", function () {
      return SliderHomePageModule;
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


    var _slider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slider-home-routing.module */
    "./src/app/pages/sliderScreens/slider-home/slider-home-routing.module.ts");
    /* harmony import */


    var _slider_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slider-home.page */
    "./src/app/pages/sliderScreens/slider-home/slider-home.page.ts");

    var SliderHomePageModule = function SliderHomePageModule() {
      _classCallCheck(this, SliderHomePageModule);
    };

    SliderHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderHomePageRoutingModule"]],
      declarations: [_slider_home_page__WEBPACK_IMPORTED_MODULE_6__["SliderHomePage"]]
    })], SliderHomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/sliderScreens/slider-home/slider-home.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/sliderScreens/slider-home/slider-home.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSliderScreensSliderHomeSliderHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVyU2NyZWVucy9zbGlkZXItaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcc2xpZGVyU2NyZWVuc1xcc2xpZGVyLWhvbWVcXHNsaWRlci1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2xpZGVyU2NyZWVucy9zbGlkZXItaG9tZS9zbGlkZXItaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2xpZGVyU2NyZWVucy9zbGlkZXItaG9tZS9zbGlkZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/sliderScreens/slider-home/slider-home.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/sliderScreens/slider-home/slider-home.page.ts ***!
    \*********************************************************************/

  /*! exports provided: SliderHomePage */

  /***/
  function srcAppPagesSliderScreensSliderHomeSliderHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderHomePage", function () {
      return SliderHomePage;
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
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var SliderHomePage = /*#__PURE__*/function () {
      function SliderHomePage(router) {
        _classCallCheck(this, SliderHomePage);

        this.router = router;
      }

      _createClass(SliderHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSlider1",
        value: function goToSlider1() {
          this.router.navigate(['/slider-ex1']);
        }
      }, {
        key: "goToSlider2",
        value: function goToSlider2() {
          this.router.navigate(['/slider-ex2']);
        }
      }, {
        key: "goToSlider3",
        value: function goToSlider3() {
          this.router.navigate(['/slider-ex3']);
        }
      }]);

      return SliderHomePage;
    }();

    SliderHomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SliderHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-home/slider-home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider-home.page.scss */
      "./src/app/pages/sliderScreens/slider-home/slider-home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SliderHomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sliderScreens-slider-home-slider-home-module-es5.js.map