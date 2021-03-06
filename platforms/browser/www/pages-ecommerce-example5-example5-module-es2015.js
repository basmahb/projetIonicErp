(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ecommerce-example5-example5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example5/example5.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example5/example5.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">Produits</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"5.8\" *ngFor=\"let item of product_list\">\n          <div class=\"back_image\">\n            <img [src]=\"showImage(item.geturlimg())\" />\n            <!-- - <img [src]='item.getimageUrl()' width=\"100%\" height=\"100%\" alt=\"Image\" />\n          div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\n            <ion-icon name=\"heart-outline\"></ion-icon>-->\n          </div>\n          <ion-label class=\"name\" (click)=\"gotodetail(item.getid())\"> {{item.getname()}}</ion-label>\n          <ion-label class=\"prize\">{{item.getsellingPrice()}}.00</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/modals/Image.ts":
/*!*********************************!*\
  !*** ./src/app/modals/Image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Created by Asus on 03/06/2022.
 */
class Image {
    constructor() {
    }
    getid() {
        return this._id;
    }
    setid(value) {
        this._id = value;
    }
    getdata() {
        return this._data;
    }
    setdata(value) {
        this._data = value;
    }
}


/***/ }),

/***/ "./src/app/modals/Product.ts":
/*!***********************************!*\
  !*** ./src/app/modals/Product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Created by Asus on 02/06/2022.
 */
class Product {
    constructor() {
    }
    geturlimg() {
        return this._urlimg;
    }
    seturlimg(value) {
        this._urlimg = value;
    }
    getimageUrl() {
        return this._imageUrl;
    }
    setimageUrl(value) {
        this._imageUrl = value;
    }
    getid() {
        return this._id;
    }
    getname() {
        return this._name;
    }
    getdescription() {
        return this._description;
    }
    getsellingPrice() {
        return this._sellingPrice;
    }
    getbuyingPrice() {
        return this._buyingPrice;
    }
    getstate() {
        return this._state;
    }
    getactive() {
        return this._active;
    }
    getimagesIds() {
        return this._imagesIds;
    }
    getcategoryId() {
        return this._categoryId;
    }
    getsiteStockId() {
        return this._siteStockId;
    }
    setid(value) {
        this._id = value;
    }
    setname(value) {
        this._name = value;
    }
    setdescription(value) {
        this._description = value;
    }
    setsellingPrice(value) {
        this._sellingPrice = value;
    }
    setbuyingPrice(value) {
        this._buyingPrice = value;
    }
    setstate(value) {
        this._state = value;
    }
    setactive(value) {
        this._active = value;
    }
    setimagesIds(value) {
        this._imagesIds = value;
    }
    setcategoryId(value) {
        this._categoryId = value;
    }
    setsiteStockId(value) {
        this._siteStockId = value;
    }
}


/***/ }),

/***/ "./src/app/pages/ecommerce/example5/example5-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ecommerce/example5/example5-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: Example5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example5PageRoutingModule", function() { return Example5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _example5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example5.page */ "./src/app/pages/ecommerce/example5/example5.page.ts");




const routes = [
    {
        path: '',
        component: _example5_page__WEBPACK_IMPORTED_MODULE_3__["Example5Page"]
    }
];
let Example5PageRoutingModule = class Example5PageRoutingModule {
};
Example5PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Example5PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example5/example5.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example5/example5.module.ts ***!
  \*************************************************************/
/*! exports provided: Example5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example5PageModule", function() { return Example5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _example5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example5-routing.module */ "./src/app/pages/ecommerce/example5/example5-routing.module.ts");
/* harmony import */ var _example5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example5.page */ "./src/app/pages/ecommerce/example5/example5.page.ts");







let Example5PageModule = class Example5PageModule {
};
Example5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _example5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Example5PageRoutingModule"]
        ],
        declarations: [_example5_page__WEBPACK_IMPORTED_MODULE_6__["Example5Page"]]
    })
], Example5PageModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example5/example5.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example5/example5.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-row ion-col {\n  border: 1px solid lightgray;\n  padding: 0px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div ion-row ion-col .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.main_content_div ion-row ion-col .back_image ion-icon {\n  position: absolute;\n  right: 5px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  font-size: 16px;\n  color: #29b507;\n}\n.main_content_div ion-row ion-col ion-label {\n  display: block;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.main_content_div ion-row ion-col .name {\n  font-size: 14px;\n}\n.main_content_div ion-row ion-col .prize {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGU1L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxlY29tbWVyY2VcXGV4YW1wbGU1XFxleGFtcGxlNS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlNS9leGFtcGxlNS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NSO0FEQ1E7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ0NaO0FEQ1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0FoQjtBREVnQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBcEI7QURHWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7QUNEaEI7QURHWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURNQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDSEo7QURNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEo7QURPQSw2QkFBQTtBQUNBO0VBQ0ksaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlNS9leGFtcGxlNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLXJvd3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCAuYmFja19pbWFnZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjliNTA3O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLnByaXplIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICByaWdodDogLTVweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ecommerce/example5/example5.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ecommerce/example5/example5.page.ts ***!
  \***********************************************************/
/*! exports provided: Example5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example5Page", function() { return Example5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");
/* harmony import */ var _modals_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modals/Product */ "./src/app/modals/Product.ts");
/* harmony import */ var _modals_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modals/Image */ "./src/app/modals/Image.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/









let Example5Page = class Example5Page {
    constructor(sanitizer, products, navCtrl, api, loadingCtrl, router) {
        this.sanitizer = sanitizer;
        this.products = products;
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.imagesIds = '';
        this.produits_commandes_list = [];
        this.product_list = [];
        this.img_list = [];
        this.allProducts = this.products.products;
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
        this.charge_compteur();
        this.getallimages();
        this.getallproducts();
    }
    charge_compteur() {
        if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
        }
        else {
            this.badgecount = 0;
        }
        return this.badgecount;
    }
    ngOnInit() {
    }
    gotodetail(id) {
        var i;
        for (i = 0; i < this.product_list.length; i++) {
            if (this.product_list[i].getid() == id) {
                let navigationExtras = {
                    queryParams: {
                        id: this.product_list[i].getid(),
                        name: this.product_list[i].getname(),
                        description: this.product_list[i].getdescription(),
                        sellingPrice: this.product_list[i].getsellingPrice(),
                        buyingPrice: this.product_list[i].getbuyingPrice(),
                        state: this.product_list[i].getstate(),
                        active: this.product_list[i].getactive(),
                        imagesIds: this.product_list[i].getimagesIds(),
                        imageUrl: this.product_list[i].getimageUrl(),
                        categoryId: this.product_list[i].getcategoryId(),
                        siteStockId: this.product_list[i].getsiteStockId(),
                        urlimg: this.product_list[i].geturlimg(),
                    }
                };
                this.navCtrl.navigateForward(['example2'], navigationExtras);
            }
        }
        //this.navCtrl.navigateRoot(['example2']);
    }
    addtocart() {
        this.navCtrl.navigateRoot(['my-cart']);
    }
    showImage(data) {
        const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
        return sanitizedContent;
    }
    simpleLoader(message) {
        this.loadingCtrl.create({
            message: message
        }).then((response) => {
            response.present();
        });
    }
    dismissLoader() {
        this.loadingCtrl.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
    getallimages() {
        var img, i;
        this.simpleLoader('Chargement ..');
        this.api.get('image/images').then((data) => {
            const info = JSON.parse(data.data);
            if (info.length > 0) {
                for (i = 0; i < info.length; i++) {
                    img = new _modals_Image__WEBPACK_IMPORTED_MODULE_6__["Image"]();
                    img.setid(info[i]['id']);
                    img.setdata(info[i]['data']);
                    this.img_list.push(img);
                }
            }
            this.mergelists(this.product_list, this.img_list);
            this.dismissLoader();
        }).catch(error => {
            //this.isLogin = false;
            alert('getallimages');
            alert(error.message);
            //this.util.showToast(`${error}`, 'danger', 'bottom');
        });
    }
    getallproducts() {
        var prod, i, j;
        this.api.get('product/products').then((data) => {
            const info = JSON.parse(data.data);
            //alert(info[0]['id']);
            // alert(info.length);
            // if (info && info.status === 200) {
            if (info.length > 0) {
                for (i = 0; i < info.length; i++) {
                    prod = new _modals_Product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
                    prod.setid(info[i]['id']);
                    prod.setname(info[i]['name']);
                    prod.setdescription(info[i]['description']);
                    prod.setsellingPrice(info[i]['sellingPrice']);
                    prod.setbuyingPrice(info[i]['buyingPrice']);
                    prod.setstate(info[i]['state']);
                    prod.setactive(info[i]['active']);
                    prod.setimagesIds(info[i]['imagesIds']);
                    this.imagesIds = info[i]['imagesIds'];
                    prod.setcategoryId(info[i]['categoryId']);
                    prod.setsiteStockId(info[i]['siteStockId']);
                    this.product_list.push(prod);
                    //  alert('22222    '+this.product_list[0].geturlimg());
                }
            }
            //   if(this.img_list.length>0) {
            //  }
            // }
            /* else {
              // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
             }*/
        }).catch(error => {
            //this.isLogin = false;
            alert('getallproducts');
            alert(error.message);
            //this.util.showToast(`${error}`, 'danger', 'bottom');
        });
    }
    mergelists(productlist, imagelist) {
        var i, j;
        if (imagelist.length >= productlist.length) {
            for (j = 0; j < imagelist.length; j++) {
                for (i = 0; i < productlist.length; i++) {
                    if (imagelist[j].getid() == productlist[i].getimagesIds()) {
                        productlist[i].seturlimg(imagelist[j].getdata());
                    }
                }
            }
        }
        if (imagelist.length <= productlist.length) {
            for (i = 0; i < productlist.length; i++) {
                for (j = 0; j < imagelist.length; j++) {
                    if (imagelist[j].getid() == productlist[i].getimagesIds()) {
                        productlist[i].seturlimg(imagelist[j].getdata());
                    }
                }
            }
        }
    }
};
Example5Page.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
Example5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example5/example5.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example5.page.scss */ "./src/app/pages/ecommerce/example5/example5.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], Example5Page);



/***/ })

}]);
//# sourceMappingURL=pages-ecommerce-example5-example5-module-es2015.js.map