function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ecommerce-example2-example2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example2/example2.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example2/example2.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEcommerceExample2Example2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n     <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\n\n        <ion-back-button defaultHref=\"/example5\"></ion-back-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\n        <ion-badge color=\"danger\" >{{this.badgecount}}</ion-badge>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">produit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <img [src]=\"showImage(urlimgProd)\">\n    <ion-label class=\"name\">{{ this.nameProd}} <span>{{this.sellingPriceProd}}.00</span></ion-label>\n    <ion-label class=\"desc\">{{this.descriptionProd}}</ion-label>\n\n    <!--<div class=\"main_div\">\n      <div class=\"flex_div\">\n        <div class=\"round_div red\" (click)=\"onClick(1)\">\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 1\"></ion-icon>\n        </div>\n        <div class=\"round_div green\" (click)=\"onClick(2)\">\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 2\"></ion-icon>\n        </div>\n        <div class=\"round_div blue\" (click)=\"onClick(3)\">\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 3\"></ion-icon>\n        </div>\n        <div class=\"round_div orange\" (click)=\"onClick(4)\">\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 4\"></ion-icon>\n        </div>\n      </div>\n      <div>\n        <ion-icon class=\"heart_icn\" name=\"heart\"></ion-icon>\n      </div>\n    </div>-->\n\n    <div class=\"desc_card\">\n      <ion-label class=\"small_header\">Prix de vente</ion-label>\n      <ion-label class=\"pro_desc\">{{this.sellingPriceProd}}.00</ion-label>\n    </div>\n    <div class=\"desc_card\">\n      <ion-label class=\"small_header\">Prix d'achat</ion-label>\n      <ion-label class=\"pro_desc\">{{this.buyingPriceProd}}.00</ion-label>\n    </div>\n\n\n\n    <ion-button expand=\"block\" (click)=\"addtocartform()\">\n      Ajouter au panier\n    </ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modals/Panier.ts":
  /*!**********************************!*\
    !*** ./src/app/modals/Panier.ts ***!
    \**********************************/

  /*! exports provided: Panier */

  /***/
  function srcAppModalsPanierTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Panier", function () {
      return Panier;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Created by Asus on 04/06/2022.
     */


    var Panier = /*#__PURE__*/function () {
      function Panier() {
        _classCallCheck(this, Panier);
      }

      _createClass(Panier, [{
        key: "getcompteur",
        value: function getcompteur() {
          return this._compteur;
        }
      }, {
        key: "setcompteur",
        value: function setcompteur(value) {
          this._compteur = value;
        }
      }, {
        key: "getidProd",
        value: function getidProd() {
          return this._idProd;
        }
      }, {
        key: "setidProd",
        value: function setidProd(value) {
          this._idProd = value;
        }
      }, {
        key: "getnameProd",
        value: function getnameProd() {
          return this._nameProd;
        }
      }, {
        key: "setnameProd",
        value: function setnameProd(value) {
          this._nameProd = value;
        }
      }, {
        key: "getdescriptionProd",
        value: function getdescriptionProd() {
          return this._descriptionProd;
        }
      }, {
        key: "setdescriptionProd",
        value: function setdescriptionProd(value) {
          this._descriptionProd = value;
        }
      }, {
        key: "getsellingPriceProd",
        value: function getsellingPriceProd() {
          return this._sellingPriceProd;
        }
      }, {
        key: "setsellingPriceProd",
        value: function setsellingPriceProd(value) {
          this._sellingPriceProd = value;
        }
      }, {
        key: "getbuyingPriceProd",
        value: function getbuyingPriceProd() {
          return this._buyingPriceProd;
        }
      }, {
        key: "setbuyingPriceProd",
        value: function setbuyingPriceProd(value) {
          this._buyingPriceProd = value;
        }
      }, {
        key: "getstateProd",
        value: function getstateProd() {
          return this._stateProd;
        }
      }, {
        key: "setstateProd",
        value: function setstateProd(value) {
          this._stateProd = value;
        }
      }, {
        key: "getactiveProd",
        value: function getactiveProd() {
          return this._activeProd;
        }
      }, {
        key: "setactiveProd",
        value: function setactiveProd(value) {
          this._activeProd = value;
        }
      }, {
        key: "getimagesIdsProd",
        value: function getimagesIdsProd() {
          return this._imagesIdsProd;
        }
      }, {
        key: "setimagesIdsProd",
        value: function setimagesIdsProd(value) {
          this._imagesIdsProd = value;
        }
      }, {
        key: "getimageUrlProd",
        value: function getimageUrlProd() {
          return this._imageUrlProd;
        }
      }, {
        key: "setimageUrlProd",
        value: function setimageUrlProd(value) {
          this._imageUrlProd = value;
        }
      }, {
        key: "getcategoryIdProd",
        value: function getcategoryIdProd() {
          return this._categoryIdProd;
        }
      }, {
        key: "setcategoryIdProd",
        value: function setcategoryIdProd(value) {
          this._categoryIdProd = value;
        }
      }, {
        key: "getsiteStockIdProd",
        value: function getsiteStockIdProd() {
          return this._siteStockIdProd;
        }
      }, {
        key: "setsiteStockIdProd",
        value: function setsiteStockIdProd(value) {
          this._siteStockIdProd = value;
        }
      }, {
        key: "geturlimgProd",
        value: function geturlimgProd() {
          return this._urlimgProd;
        }
      }, {
        key: "seturlimgProd",
        value: function seturlimgProd(value) {
          this._urlimgProd = value;
        }
      }]);

      return Panier;
    }();
    /***/

  },

  /***/
  "./src/app/pages/ecommerce/example2/example2-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/ecommerce/example2/example2-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: Example2PageRoutingModule */

  /***/
  function srcAppPagesEcommerceExample2Example2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Example2PageRoutingModule", function () {
      return Example2PageRoutingModule;
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


    var _example2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./example2.page */
    "./src/app/pages/ecommerce/example2/example2.page.ts");

    var routes = [{
      path: '',
      component: _example2_page__WEBPACK_IMPORTED_MODULE_3__["Example2Page"]
    }];

    var Example2PageRoutingModule = function Example2PageRoutingModule() {
      _classCallCheck(this, Example2PageRoutingModule);
    };

    Example2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Example2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ecommerce/example2/example2.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ecommerce/example2/example2.module.ts ***!
    \*************************************************************/

  /*! exports provided: Example2PageModule */

  /***/
  function srcAppPagesEcommerceExample2Example2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Example2PageModule", function () {
      return Example2PageModule;
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


    var _example2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./example2-routing.module */
    "./src/app/pages/ecommerce/example2/example2-routing.module.ts");
    /* harmony import */


    var _example2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./example2.page */
    "./src/app/pages/ecommerce/example2/example2.page.ts");

    var Example2PageModule = function Example2PageModule() {
      _classCallCheck(this, Example2PageModule);
    };

    Example2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _example2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Example2PageRoutingModule"]],
      declarations: [_example2_page__WEBPACK_IMPORTED_MODULE_6__["Example2Page"]]
    })], Example2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/ecommerce/example2/example2.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ecommerce/example2/example2.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEcommerceExample2Example2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div img {\n  width: 100%;\n  height: 300px;\n  border-radius: 5px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .name {\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main_content_div .name span {\n  position: absolute;\n  right: 20px;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 5px;\n}\n.main_content_div .desc {\n  margin-top: 5px;\n  color: gray;\n}\n.main_content_div .main_div {\n  margin-top: 20px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .main_div .heart_icn {\n  padding: 7px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 17px;\n  color: #29b507;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.main_content_div .flex_div .round_div {\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  position: relative;\n  margin-right: 10px;\n}\n.main_content_div .flex_div .round_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n}\n.main_content_div .flex_div .red {\n  background-color: #871717;\n}\n.main_content_div .flex_div .green {\n  background-color: #919151;\n}\n.main_content_div .flex_div .blue {\n  background-color: #916383;\n}\n.main_content_div .flex_div .orange {\n  background-color: #deaa7c;\n}\n.main_content_div .desc_card {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .desc_card .small_header {\n  color: lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_card .pro_desc {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n  margin-top: 30px;\n  font-weight: 600;\n  --background: #73D25C;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGUyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxlY29tbWVyY2VcXGV4YW1wbGUyXFxleGFtcGxlMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMi9leGFtcGxlMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNHLGNBQUE7QUNDUDtBRENJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RSO0FER1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRFo7QURLSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNIUjtBRElRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBREtRO0VBQ0kseUJBQUE7QUNIWjtBREtRO0VBQ0kseUJBQUE7QUNIWjtBREtRO0VBQ0kseUJBQUE7QUNIWjtBREtRO0VBQ0kseUJBQUE7QUNIWjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDSlo7QURPUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDTFo7QURRSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDTlI7QURTQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTko7QURVQSw2QkFBQTtBQUNBO0VBQ0ksaUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMi9leGFtcGxlMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZXNje1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5tYWluX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuaGVhcnRfaWNue1xuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAucm91bmRfZGl2e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg3MTcxNztcbiAgICAgICAgfVxuICAgICAgICAuZ3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTUxO1xuICAgICAgICB9XG4gICAgICAgIC5ibHVle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxNjM4MztcbiAgICAgICAgfVxuICAgICAgICAub3Jhbmdle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlYWE3YztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjX2NhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5zbWFsbF9oZWFkZXJ7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb19kZXNje1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7ICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM3M0QyNUM7XG4gICAgfVxufVxuaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYgLmhlYXJ0X2ljbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMyOWI1MDc7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucm91bmRfZGl2IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnJvdW5kX2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODcxNzE3O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTkxNTE7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE2MzgzO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVhYTdjO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19jYXJkIC5zbWFsbF9oZWFkZXIge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19jYXJkIC5wcm9fZGVzYyB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYmFja2dyb3VuZDogIzczRDI1Qztcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/ecommerce/example2/example2.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/ecommerce/example2/example2.page.ts ***!
    \***********************************************************/

  /*! exports provided: Example2Page */

  /***/
  function srcAppPagesEcommerceExample2Example2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Example2Page", function () {
      return Example2Page;
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


    var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/products/products.service */
    "./src/app/services/products/products.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @awesome-cordova-plugins/toast/ngx */
    "./node_modules/@awesome-cordova-plugins/toast/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _modals_Panier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../modals/Panier */
    "./src/app/modals/Panier.ts");
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var Example2Page = /*#__PURE__*/function () {
      function Example2Page(util, products, navCtrl, toast, route, sanitizer) {
        var _this = this;

        _classCallCheck(this, Example2Page);

        this.util = util;
        this.products = products;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.route = route;
        this.sanitizer = sanitizer;
        this.produits_commandes_list = [];
        this.ancien_badgecount = 0;
        this.ancien_compteur = 0;
        this.c2 = 0;
        this.allProducts = this.products.products;
        this.route.queryParams.subscribe(function (params) {
          _this.idProd = params["id"];
          _this.nameProd = params["name"];
          _this.descriptionProd = params["description"];
          _this.sellingPriceProd = params["sellingPrice"];
          _this.buyingPriceProd = params["buyingPrice"];
          _this.stateProd = params["state"];
          _this.activeProd = params["active"];
          _this.imagesIdsProd = params["imagesIds"];
          _this.imageUrlProd = params["imageUrl"];
          _this.categoryIdProd = params["categoryId"];
          _this.siteStockIdProd = params["siteStockId"];
          _this.urlimgProd = params["urlimg"]; // this.currency = JSON.parse(params["currency"]);
        }); //  alert(this.urlimgProd);
      }

      _createClass(Example2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
          } else {
            this.badgecount = 0;
          }

          if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
          }
        }
      }, {
        key: "showImage",
        value: function showImage(data) {
          var sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
          return sanitizedContent;
        }
      }, {
        key: "onClick",
        value: function onClick(val) {
          this.id = val;
        }
      }, {
        key: "verif_occ",
        value: function verif_occ(idprod) {
          var i,
              comp = 1;

          for (i = 0; i < this.produits_commandes_list.length; i++) {
            if (this.produits_commandes_list[i]['_idProd'] == idprod) {
              comp = comp + 1;
              this.produits_commandes_list[i]['_compteur'] = comp + "";
            }
          }

          return comp;
        }
      }, {
        key: "addtocartform",
        value: function addtocartform() {
          //localStorage.setItem("compteur", '');
          this.c2 = parseInt(this.badgecount) + 1;
          localStorage.setItem("compteur", this.c2 + "");
          alert("_idProd " + this.idProd);
          var panier, i;

          if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));

            if (this.verif_occ(this.idProd) == 1) {
              panier = new _modals_Panier__WEBPACK_IMPORTED_MODULE_7__["Panier"]();
              panier.setcompteur(this.verif_occ(this.idProd) + "");
              panier.setidProd(this.idProd);
              panier.setnameProd(this.nameProd);
              panier.setdescriptionProd(this.descriptionProd);
              panier.setsellingPriceProd(this.sellingPriceProd);
              panier.setbuyingPriceProd(this.buyingPriceProd);
              panier.setstateProd(this.stateProd);
              panier.setactiveProd(this.activeProd);
              panier.setimagesIdsProd(this.imagesIdsProd);
              panier.setimageUrlProd(this.imageUrlProd);
              panier.setcategoryIdProd(this.categoryIdProd);
              panier.setsiteStockIdProd(this.siteStockIdProd);
              panier.seturlimgProd(this.urlimgProd);
              this.produits_commandes_list.push(panier);
            }
            /*if (this.verif_occ(this.idProd)>1){
               for(i=0;i<this.produits_commandes_list.length;i++){
                 if(this.produits_commandes_list[i]['_idProd'] == this.idProd){
                   alert ("esxiste modif "+this.idProd);
                            this.c2 = this.verif_occ(this.idProd);
                   alert ("esxiste _compteur "+  this.c2);
                   this.produits_commandes_list[i]['_compteur'] = this.c2+"";
                 }
               }
               alert ("esxiste "+this.idProd);
             }*/

          }

          if (localStorage.getItem("produits_commandes") == null) {
            var c = parseInt(this.badgecount + 1);
            panier = new _modals_Panier__WEBPACK_IMPORTED_MODULE_7__["Panier"]();
            panier.setcompteur(c + "");
            panier.setidProd(this.idProd);
            panier.setnameProd(this.nameProd);
            panier.setdescriptionProd(this.descriptionProd);
            panier.setsellingPriceProd(this.sellingPriceProd);
            panier.setbuyingPriceProd(this.buyingPriceProd);
            panier.setstateProd(this.stateProd);
            panier.setactiveProd(this.activeProd);
            panier.setimagesIdsProd(this.imagesIdsProd);
            panier.setimageUrlProd(this.imageUrlProd);
            panier.setcategoryIdProd(this.categoryIdProd);
            panier.setsiteStockIdProd(this.siteStockIdProd);
            panier.seturlimgProd(this.urlimgProd);
            this.produits_commandes_list.push(panier);
          }

          localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
          this.util.showToast('Produit ajout?? !', 'success', 'bottom');
          this.navCtrl.navigateForward(['example5']);
        }
      }, {
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }]);

      return Example2Page;
    }();

    Example2Page.ctorParameters = function () {
      return [{
        type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    Example2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-example2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./example2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example2/example2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./example2.page.scss */
      "./src/app/pages/ecommerce/example2/example2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])], Example2Page);
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
//# sourceMappingURL=pages-ecommerce-example2-example2-module-es5.js.map