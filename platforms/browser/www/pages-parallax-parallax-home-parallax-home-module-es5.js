function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-parallax-home-parallax-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax-home/parallax-home.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax-home/parallax-home.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesParallaxParallaxHomeParallaxHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>parallax-home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToParallex1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToParallex2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToParallex3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n  </div>  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax-home/parallax-home-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/parallax/parallax-home/parallax-home-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ParallaxHomePageRoutingModule */

  /***/
  function srcAppPagesParallaxParallaxHomeParallaxHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxHomePageRoutingModule", function () {
      return ParallaxHomePageRoutingModule;
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


    var _parallax_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parallax-home.page */
    "./src/app/pages/parallax/parallax-home/parallax-home.page.ts");

    var routes = [{
      path: '',
      component: _parallax_home_page__WEBPACK_IMPORTED_MODULE_3__["ParallaxHomePage"]
    }];

    var ParallaxHomePageRoutingModule = function ParallaxHomePageRoutingModule() {
      _classCallCheck(this, ParallaxHomePageRoutingModule);
    };

    ParallaxHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ParallaxHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax-home/parallax-home.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/parallax/parallax-home/parallax-home.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ParallaxHomePageModule */

  /***/
  function srcAppPagesParallaxParallaxHomeParallaxHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxHomePageModule", function () {
      return ParallaxHomePageModule;
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


    var _parallax_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parallax-home-routing.module */
    "./src/app/pages/parallax/parallax-home/parallax-home-routing.module.ts");
    /* harmony import */


    var _parallax_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./parallax-home.page */
    "./src/app/pages/parallax/parallax-home/parallax-home.page.ts");

    var ParallaxHomePageModule = function ParallaxHomePageModule() {
      _classCallCheck(this, ParallaxHomePageModule);
    };

    ParallaxHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parallax_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParallaxHomePageRoutingModule"]],
      declarations: [_parallax_home_page__WEBPACK_IMPORTED_MODULE_6__["ParallaxHomePage"]]
    })], ParallaxHomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax-home/parallax-home.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/parallax/parallax-home/parallax-home.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesParallaxParallaxHomeParallaxHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyYWxsYXgvcGFyYWxsYXgtaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xccGFyYWxsYXhcXHBhcmFsbGF4LWhvbWVcXHBhcmFsbGF4LWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFsbGF4L3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax-home/parallax-home.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/parallax/parallax-home/parallax-home.page.ts ***!
    \********************************************************************/

  /*! exports provided: ParallaxHomePage */

  /***/
  function srcAppPagesParallaxParallaxHomeParallaxHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxHomePage", function () {
      return ParallaxHomePage;
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


    var ParallaxHomePage = /*#__PURE__*/function () {
      function ParallaxHomePage(router) {
        _classCallCheck(this, ParallaxHomePage);

        this.router = router;
      }

      _createClass(ParallaxHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToParallex1",
        value: function goToParallex1() {
          this.router.navigate(['/parallax1']);
        }
      }, {
        key: "goToParallex2",
        value: function goToParallex2() {
          this.router.navigate(['/parallax2']);
        }
      }, {
        key: "goToParallex3",
        value: function goToParallex3() {
          this.router.navigate(['/parallax5']);
        }
      }]);

      return ParallaxHomePage;
    }();

    ParallaxHomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ParallaxHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parallax-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./parallax-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax-home/parallax-home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./parallax-home.page.scss */
      "./src/app/pages/parallax/parallax-home/parallax-home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ParallaxHomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-parallax-parallax-home-parallax-home-module-es5.js.map