function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-simple-simple-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/simple/simple.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/simple/simple.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapsSimpleSimplePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Simple </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" class=\"map\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/maps/simple/simple-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/maps/simple/simple-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SimplePageRoutingModule */

  /***/
  function srcAppPagesMapsSimpleSimpleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function () {
      return SimplePageRoutingModule;
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


    var _simple_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./simple.page */
    "./src/app/pages/maps/simple/simple.page.ts");

    var routes = [{
      path: '',
      component: _simple_page__WEBPACK_IMPORTED_MODULE_3__["SimplePage"]
    }];

    var SimplePageRoutingModule = function SimplePageRoutingModule() {
      _classCallCheck(this, SimplePageRoutingModule);
    };

    SimplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SimplePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/simple/simple.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/maps/simple/simple.module.ts ***!
    \****************************************************/

  /*! exports provided: SimplePageModule */

  /***/
  function srcAppPagesMapsSimpleSimpleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplePageModule", function () {
      return SimplePageModule;
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


    var _simple_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./simple-routing.module */
    "./src/app/pages/maps/simple/simple-routing.module.ts");
    /* harmony import */


    var _simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./simple.page */
    "./src/app/pages/maps/simple/simple.page.ts");

    var SimplePageModule = function SimplePageModule() {
      _classCallCheck(this, SimplePageModule);
    };

    SimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _simple_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimplePageRoutingModule"]],
      declarations: [_simple_page__WEBPACK_IMPORTED_MODULE_6__["SimplePage"]]
    })], SimplePageModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/simple/simple.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/maps/simple/simple.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapsSimpleSimplePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9zaW1wbGUvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXG1hcHNcXHNpbXBsZVxcc2ltcGxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9zaW1wbGUvc2ltcGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBzL3NpbXBsZS9zaW1wbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/maps/simple/simple.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/maps/simple/simple.page.ts ***!
    \**************************************************/

  /*! exports provided: SimplePage */

  /***/
  function srcAppPagesMapsSimpleSimplePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplePage", function () {
      return SimplePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var SimplePage = /*#__PURE__*/function () {
      function SimplePage() {
        _classCallCheck(this, SimplePage);
      }

      _createClass(SimplePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var latLng = new google.maps.LatLng('21.7606883', '72.1534491');
          var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
      }]);

      return SimplePage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SimplePage.prototype, "mapElement", void 0);
    SimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-simple',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./simple.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/simple/simple.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./simple.page.scss */
      "./src/app/pages/maps/simple/simple.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SimplePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-maps-simple-simple-module-es5.js.map