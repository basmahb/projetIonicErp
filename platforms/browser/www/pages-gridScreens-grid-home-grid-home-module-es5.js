function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-home-grid-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-home/grid-home.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-home/grid-home.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGridScreensGridHomeGridHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Grid Examples</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToGrid_1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToGrid_2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToGrid_3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n    <ion-button (click)=\"goToGrid_4()\" expand=\"block\" id=\"g4\">\n      Demo 4\n    </ion-button>\n\n    <ion-button (click)=\"goToGrid_5()\" expand=\"block\" id=\"g5\">\n      Demo 5\n    </ion-button>\n\n    <ion-button (click)=\"goToGrid_6()\" expand=\"block\" id=\"g6\">\n      Demo 6\n    </ion-button>\n\n  </div>  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-home/grid-home-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-home/grid-home-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: GridHomePageRoutingModule */

  /***/
  function srcAppPagesGridScreensGridHomeGridHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridHomePageRoutingModule", function () {
      return GridHomePageRoutingModule;
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


    var _grid_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grid-home.page */
    "./src/app/pages/gridScreens/grid-home/grid-home.page.ts");

    var routes = [{
      path: '',
      component: _grid_home_page__WEBPACK_IMPORTED_MODULE_3__["GridHomePage"]
    }];

    var GridHomePageRoutingModule = function GridHomePageRoutingModule() {
      _classCallCheck(this, GridHomePageRoutingModule);
    };

    GridHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GridHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-home/grid-home.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-home/grid-home.module.ts ***!
    \*****************************************************************/

  /*! exports provided: GridHomePageModule */

  /***/
  function srcAppPagesGridScreensGridHomeGridHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridHomePageModule", function () {
      return GridHomePageModule;
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


    var _grid_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid-home-routing.module */
    "./src/app/pages/gridScreens/grid-home/grid-home-routing.module.ts");
    /* harmony import */


    var _grid_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grid-home.page */
    "./src/app/pages/gridScreens/grid-home/grid-home.page.ts");

    var GridHomePageModule = function GridHomePageModule() {
      _classCallCheck(this, GridHomePageModule);
    };

    GridHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _grid_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridHomePageRoutingModule"]],
      declarations: [_grid_home_page__WEBPACK_IMPORTED_MODULE_6__["GridHomePage"]]
    })], GridHomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-home/grid-home.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-home/grid-home.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGridScreensGridHomeGridHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1ob21lL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxncmlkU2NyZWVuc1xcZ3JpZC1ob21lXFxncmlkLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWhvbWUvZ3JpZC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWhvbWUvZ3JpZC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-home/grid-home.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-home/grid-home.page.ts ***!
    \***************************************************************/

  /*! exports provided: GridHomePage */

  /***/
  function srcAppPagesGridScreensGridHomeGridHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridHomePage", function () {
      return GridHomePage;
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


    var GridHomePage = /*#__PURE__*/function () {
      function GridHomePage(router) {
        _classCallCheck(this, GridHomePage);

        this.router = router;
      }

      _createClass(GridHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToGrid_1",
        value: function goToGrid_1() {
          this.router.navigate(['/grid-ex1']);
        }
      }, {
        key: "goToGrid_2",
        value: function goToGrid_2() {
          this.router.navigate(['/grid-ex2']);
        }
      }, {
        key: "goToGrid_3",
        value: function goToGrid_3() {
          this.router.navigate(['/grid-ex3']);
        }
      }, {
        key: "goToGrid_4",
        value: function goToGrid_4() {
          this.router.navigate(['/grid-ex4']);
        }
      }, {
        key: "goToGrid_5",
        value: function goToGrid_5() {
          this.router.navigate(['/grid-ex5']);
        }
      }, {
        key: "goToGrid_6",
        value: function goToGrid_6() {
          this.router.navigate(['/grid-ex6']);
        }
      }]);

      return GridHomePage;
    }();

    GridHomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GridHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-home/grid-home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid-home.page.scss */
      "./src/app/pages/gridScreens/grid-home/grid-home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], GridHomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-gridScreens-grid-home-grid-home-module-es5.js.map