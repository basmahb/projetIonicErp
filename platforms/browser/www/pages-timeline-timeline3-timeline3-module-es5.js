function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timeline-timeline3-timeline3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline3/timeline3.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline3/timeline3.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTimelineTimeline3Timeline3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Timeline 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"\">\n      <ul class=\"timeline\">\n        <li>\n          <div class=\"timeline-thumb bg-color-blue timeline-icon\"></div>\n          <div class=\"timeline-item\">\n            <h5>Like Title</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n            <div class=\"timeline-stats\">\n              <ion-icon name=\"star-half\"></ion-icon> 2,450\n              <span class=\"pos-absolute-right\"><i class=\"ion-ios-clock\"></i> 2 mins ago</span>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-thumb bg-color-red timeline-icon\"></div>\n          <div class=\"timeline-item\">\n            <h5>Updated Profile Picture</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n            <div class=\"timeline-stats\">\n              <ion-icon name=\"heart\"></ion-icon> 2,450\n              <span class=\"pos-absolute-right\"><i class=\"ion-ios-clock\"></i> 2 mins ago</span>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-thumb bg-color-lightblue timeline-icon\">\n            <!-- <ion-icon name=\"wine\"></ion-icon> -->\n          </div>\n          <div class=\"timeline-item\">\n            <h5>A Wine Glass</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n            <div class=\"timeline-stats\">\n              <ion-icon name=\"heart\"></ion-icon> 2,450\n              <span class=\"pos-absolute-right\"><i class=\"ion-ios-clock\"></i> 2 mins ago</span>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-thumb bg-color-blue timeline-icon\"></div>\n          <div class=\"timeline-item\">\n            <h5>Like Title</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n            <div class=\"timeline-stats\">\n              <ion-icon name=\"star-half\"></ion-icon> 2,450\n              <span class=\"pos-absolute-right\"><i class=\"ion-ios-clock\"></i> 2 mins ago</span>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-thumb bg-color-red timeline-icon\"></div>\n          <div class=\"timeline-item\">\n            <h5>Updated Profile Picture</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n            <div class=\"timeline-stats\">\n              <ion-icon name=\"heart\"></ion-icon> 2,450\n              <span class=\"pos-absolute-right\"><i class=\"ion-ios-clock\"></i> 2 mins ago</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline3/timeline3-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/timeline/timeline3/timeline3-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Timeline3PageRoutingModule */

  /***/
  function srcAppPagesTimelineTimeline3Timeline3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline3PageRoutingModule", function () {
      return Timeline3PageRoutingModule;
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


    var _timeline3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timeline3.page */
    "./src/app/pages/timeline/timeline3/timeline3.page.ts");

    var routes = [{
      path: '',
      component: _timeline3_page__WEBPACK_IMPORTED_MODULE_3__["Timeline3Page"]
    }];

    var Timeline3PageRoutingModule = function Timeline3PageRoutingModule() {
      _classCallCheck(this, Timeline3PageRoutingModule);
    };

    Timeline3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Timeline3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline3/timeline3.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/timeline/timeline3/timeline3.module.ts ***!
    \**************************************************************/

  /*! exports provided: Timeline3PageModule */

  /***/
  function srcAppPagesTimelineTimeline3Timeline3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline3PageModule", function () {
      return Timeline3PageModule;
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


    var _timeline3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline3-routing.module */
    "./src/app/pages/timeline/timeline3/timeline3-routing.module.ts");
    /* harmony import */


    var _timeline3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timeline3.page */
    "./src/app/pages/timeline/timeline3/timeline3.page.ts");

    var Timeline3PageModule = function Timeline3PageModule() {
      _classCallCheck(this, Timeline3PageModule);
    };

    Timeline3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timeline3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Timeline3PageRoutingModule"]],
      declarations: [_timeline3_page__WEBPACK_IMPORTED_MODULE_6__["Timeline3Page"]]
    })], Timeline3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline3/timeline3.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/timeline/timeline3/timeline3.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTimelineTimeline3Timeline3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: whitesmoke;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  /*Timeline*/\n  /* === Color Themes === */\n}\n\n.main_content_div ul {\n  list-style-type: none;\n}\n\n.main_content_div li {\n  background: white;\n}\n\n.main_content_div .bar-stable {\n  background-color: #d9d9d9 !important;\n}\n\n.main_content_div .tabs {\n  background-color: #d9d9d9 !important;\n}\n\n.main_content_div .icon-size-lg {\n  font-size: 40px;\n}\n\n.main_content_div .timeline-thumb ion-icon {\n  zoom: 1.2;\n  margin-top: 0.3em;\n}\n\n.main_content_div .timeline-stats ion-icon {\n  vertical-align: bottom;\n  font-size: 1.3em;\n}\n\n.main_content_div .pos-absolute-right {\n  position: absolute;\n  right: 8px;\n}\n\n.main_content_div .timeline {\n  position: relative;\n  margin: 15px 0 0 0;\n}\n\n.main_content_div .timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #afdcf8;\n  left: 44px;\n  margin-left: -29px;\n  z-index: 1;\n}\n\n.main_content_div .timeline .timeline-thumb {\n  border-radius: 500px;\n  width: 12px;\n  z-index: 2;\n  position: absolute;\n  left: 10px;\n}\n\n.main_content_div .timeline .timeline-thumb.timeline-icon {\n  height: 12px;\n  text-align: center;\n  color: white;\n}\n\n.main_content_div .timeline .timeline-thumb.timeline-icon i {\n  font-size: 28px;\n  margin: 6px 0;\n  display: block;\n}\n\n.main_content_div .timeline .timeline-item {\n  padding-bottom: 8px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n\n.main_content_div .timeline .timeline-stats {\n  position: relative;\n  font-size: 12px;\n  color: #7F8C8D;\n}\n\n.main_content_div .divider-title {\n  background: #e4e4e4;\n  padding: 5px 15px;\n  margin-top: 15px;\n}\n\n.main_content_div .text-muted {\n  color: #6d6d72 !important;\n}\n\n.main_content_div .color-gray {\n  color: #8e8e93 !important;\n}\n\n.main_content_div .color-red {\n  color: #ff3b30 !important;\n}\n\n.main_content_div .bg-color-red {\n  background-color: #ff3b30 !important;\n}\n\n.main_content_div .color-white {\n  color: #ffffff !important;\n}\n\n.main_content_div .color-yellow {\n  color: #ffcc00 !important;\n}\n\n.main_content_div .bg-color-yellow {\n  background-color: #ffcc00 !important;\n}\n\n.main_content_div .color-green {\n  color: #4cd964 !important;\n}\n\n.main_content_div .color-orange {\n  color: #ff9500 !important;\n}\n\n.main_content_div .bg-color-orange {\n  background-color: #ff9500 !important;\n}\n\n.main_content_div .color-blue {\n  color: #007aff !important;\n}\n\n.main_content_div .bg-color-blue {\n  background-color: #007aff !important;\n}\n\n.main_content_div .color-lightblue {\n  color: #5ac8fa !important;\n}\n\n.main_content_div .bg-color-lightblue {\n  background-color: #5ac8fa !important;\n}\n\n.main_content_div .color-bluegray {\n  color: #607d8b !important;\n}\n\n.main_content_div .bg-color-bluegray {\n  background-color: #607d8b !important;\n}\n\n.main_content_div .color-night {\n  color: #2B1B17 !important;\n}\n\n.main_content_div .color-black {\n  color: black !important;\n}\n\n.main_content_div .bg-color-white {\n  background-color: #ffffff;\n}\n\n.main_content_div .bg-color-green {\n  background-color: #4cd964 !important;\n}\n\n.main_content_div h5 {\n  font-size: 14px;\n  margin: 0;\n}\n\n.main_content_div p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUzL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx0aW1lbGluZVxcdGltZWxpbmUzXFx0aW1lbGluZTMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aW1lbGluZS90aW1lbGluZTMvdGltZWxpbmUzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQTRCRSxXQUFBO0VBK0RBLHlCQUFBO0FDdkZOOztBREZJO0VBQ0kscUJBQUE7QUNJUjs7QURESTtFQUNJLGlCQUFBO0FDR1I7O0FEQUk7RUFDSSxvQ0FBQTtBQ0VSOztBREFNO0VBQ0Usb0NBQUE7QUNFUjs7QURBTTtFQUNFLGVBQUE7QUNFUjs7QURDTTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtBQ0NWOztBRENNO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ0NWOztBREdNO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRFY7O0FESU07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRlY7O0FES007RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNIVjs7QURNTTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNKVjs7QURPTTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMVjs7QURRTTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ05WOztBRFNNO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNQVjs7QURVTTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNSVjs7QURZTTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZWOztBRGNNO0VBQ0kseUJBQUE7QUNaVjs7QURlTTtFQUNJLHlCQUFBO0FDYlY7O0FEZ0JNO0VBQ0kseUJBQUE7QUNkVjs7QURpQk07RUFDSSxvQ0FBQTtBQ2ZWOztBRGtCTTtFQUNJLHlCQUFBO0FDaEJWOztBRG1CTTtFQUNJLHlCQUFBO0FDakJWOztBRG9CTTtFQUNJLG9DQUFBO0FDbEJWOztBRHFCTTtFQUNJLHlCQUFBO0FDbkJWOztBRHNCTTtFQUNJLHlCQUFBO0FDcEJWOztBRHVCTTtFQUNJLG9DQUFBO0FDckJWOztBRHdCTTtFQUNJLHlCQUFBO0FDdEJWOztBRHlCTTtFQUNJLG9DQUFBO0FDdkJWOztBRDBCTTtFQUNJLHlCQUFBO0FDeEJWOztBRDJCTTtFQUNJLG9DQUFBO0FDekJWOztBRDRCTTtFQUNJLHlCQUFBO0FDMUJWOztBRDZCTTtFQUNJLG9DQUFBO0FDM0JWOztBRDhCTTtFQUNJLHlCQUFBO0FDNUJWOztBRCtCTTtFQUNJLHVCQUFBO0FDN0JWOztBRGdDTTtFQUNJLHlCQUFBO0FDOUJWOztBRGlDTTtFQUNJLG9DQUFBO0FDL0JWOztBRGlDTTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDL0JSOztBRGlDTTtFQUNJLGVBQUE7QUMvQlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aW1lbGluZS90aW1lbGluZTMvdGltZWxpbmUzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cblxuICAgIGxpe1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYmFyLXN0YWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC50YWJze1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuaWNvbi1zaXplLWxnIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtdGh1bWIgaW9uLWljb24ge1xuICAgICAgICAgIHpvb206IDEuMjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuM2VtO1xuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLXN0YXRzIGlvbi1pY29uIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICB9XG4gICAgICAvKlRpbWVsaW5lKi9cbiAgICAgIFxuICAgICAgLnBvcy1hYnNvbHV0ZS1yaWdodCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWZkY2Y4O1xuICAgICAgICAgIGxlZnQ6IDQ0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yOXB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZSAudGltZWxpbmUtdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDEwcHhcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYi50aW1lbGluZS1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYi50aW1lbGluZS1pY29uIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUgLnRpbWVsaW5lLXN0YXRzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAjN0Y4QzhEO1xuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIC5kaXZpZGVyLXRpdGxlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qID09PSBDb2xvciBUaGVtZXMgPT09ICovXG4gICAgICAudGV4dC1tdXRlZCB7XG4gICAgICAgICAgY29sb3I6ICM2ZDZkNzIgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbG9yLWdyYXkge1xuICAgICAgICAgIGNvbG9yOiAjOGU4ZTkzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2xvci1yZWQge1xuICAgICAgICAgIGNvbG9yOiAjZmYzYjMwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5iZy1jb2xvci1yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNiMzAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbG9yLXdoaXRlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sb3IteWVsbG93IHtcbiAgICAgICAgICBjb2xvcjogI2ZmY2MwMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYmctY29sb3IteWVsbG93IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2xvci1ncmVlbiB7XG4gICAgICAgICAgY29sb3I6ICM0Y2Q5NjQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbG9yLW9yYW5nZSB7XG4gICAgICAgICAgY29sb3I6ICNmZjk1MDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmJnLWNvbG9yLW9yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sb3ItYmx1ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDdhZmYgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmJnLWNvbG9yLWJsdWUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmYgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbG9yLWxpZ2h0Ymx1ZSB7XG4gICAgICAgICAgY29sb3I6ICM1YWM4ZmEgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmJnLWNvbG9yLWxpZ2h0Ymx1ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYzhmYSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sb3ItYmx1ZWdyYXkge1xuICAgICAgICAgIGNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5iZy1jb2xvci1ibHVlZ3JheSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sb3ItbmlnaHQge1xuICAgICAgICAgIGNvbG9yOiAjMkIxQjE3ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2xvci1ibGFjayB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5iZy1jb2xvci13aGl0ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmJnLWNvbG9yLWdyZWVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC8qVGltZWxpbmUqL1xuICAvKiA9PT0gQ29sb3IgVGhlbWVzID09PSAqL1xufVxuLm1haW5fY29udGVudF9kaXYgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBsaSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhci1zdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGFicyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDkgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uLXNpemUtbGcge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGltZWxpbmUtdGh1bWIgaW9uLWljb24ge1xuICB6b29tOiAxLjI7XG4gIG1hcmdpbi10b3A6IDAuM2VtO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpbWVsaW5lLXN0YXRzIGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wb3MtYWJzb2x1dGUtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTVweCAwIDAgMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjYWZkY2Y4O1xuICBsZWZ0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogLTI5cHg7XG4gIHotaW5kZXg6IDE7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGltZWxpbmUgLnRpbWVsaW5lLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIHdpZHRoOiAxMnB4O1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGltZWxpbmUgLnRpbWVsaW5lLXRodW1iLnRpbWVsaW5lLWljb24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYi50aW1lbGluZS1pY29uIGkge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbjogNnB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50aW1lbGluZSAudGltZWxpbmUtc3RhdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3RjhDOEQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGl2aWRlci10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZkNmQ3MiAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbG9yLWdyYXkge1xuICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZmYzYjMwICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmctY29sb3ItcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2IzMCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2ZmY2MwMCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJnLWNvbG9yLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDAgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmZjk1MDAgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iZy1jb2xvci1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NTAwICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMDA3YWZmICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmctY29sb3ItYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmYgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xvci1saWdodGJsdWUge1xuICBjb2xvcjogIzVhYzhmYSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJnLWNvbG9yLWxpZ2h0Ymx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWM4ZmEgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xvci1ibHVlZ3JheSB7XG4gIGNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmctY29sb3ItYmx1ZWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sb3ItbmlnaHQge1xuICBjb2xvcjogIzJCMUIxNyAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmctY29sb3Itd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJnLWNvbG9yLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IHAge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline3/timeline3.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/timeline/timeline3/timeline3.page.ts ***!
    \************************************************************/

  /*! exports provided: Timeline3Page */

  /***/
  function srcAppPagesTimelineTimeline3Timeline3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline3Page", function () {
      return Timeline3Page;
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


    var Timeline3Page = /*#__PURE__*/function () {
      function Timeline3Page() {
        _classCallCheck(this, Timeline3Page);
      }

      _createClass(Timeline3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Timeline3Page;
    }();

    Timeline3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timeline3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timeline3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline3/timeline3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timeline3.page.scss */
      "./src/app/pages/timeline/timeline3/timeline3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Timeline3Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-timeline-timeline3-timeline3-module-es5.js.map