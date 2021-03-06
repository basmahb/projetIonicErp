(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-parallax1-parallax1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax1/parallax1.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax1/parallax1.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Parallax Example 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" parallaxHeader=\"assets/imgs/image4.jpg\" [parallaxHeight]=\"300\">\n  <div class=\"main-content\">\n    <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n      <ion-img [src]=\"fruits.image\"></ion-img>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"title\">{{fruits.name}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p class=\"descriptions\">{{fruits.descriptions}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/directives/parallax-header.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/parallax-header.directive.ts ***!
  \*********************************************************/
/*! exports provided: ParallaxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function() { return ParallaxHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ParallaxHeaderDirective = class ParallaxHeaderDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ngAfterViewInit() {
        this.headerHeight = this.parallaxHeight;
        this.mainContent = this.element.nativeElement.querySelector('.main-content');
        this.domCtrl.write(() => {
            this.header = this.renderer.createElement('div');
            this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);
            this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
            this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
            this.renderer.setStyle(this.header, 'background-size', 'cover');
        });
    }
    onContentScroll(ev) {
        this.domCtrl.read(() => {
            let translateAmt, scaleAmt;
            // Already scrolled past the point at which the header image is visible
            if (ev.detail.scrollTop > this.parallaxHeight) {
                return;
            }
            if (ev.detail.scrollTop >= 0) {
                translateAmt = -(ev.detail.scrollTop / 2);
                scaleAmt = 1;
            }
            else {
                translateAmt = 0;
                scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
            }
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'transform', 'translate3d(0,' + translateAmt + 'px,0) scale(' + scaleAmt + ',' + scaleAmt + ')');
                this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, ' + (-ev.detail.scrollTop) + 'px, 0');
            });
        });
    }
};
ParallaxHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parallaxHeader'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ParallaxHeaderDirective.prototype, "imagePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parallaxHeight'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ParallaxHeaderDirective.prototype, "parallaxHeight", void 0);
ParallaxHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[parallaxHeader]',
        host: {
            '(ionScroll)': 'onContentScroll($event)'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
], ParallaxHeaderDirective);



/***/ }),

/***/ "./src/app/pages/parallax/parallax1/parallax1-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/parallax/parallax1/parallax1-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: Parallax1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax1PageRoutingModule", function() { return Parallax1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _parallax1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax1.page */ "./src/app/pages/parallax/parallax1/parallax1.page.ts");




const routes = [
    {
        path: '',
        component: _parallax1_page__WEBPACK_IMPORTED_MODULE_3__["Parallax1Page"]
    }
];
let Parallax1PageRoutingModule = class Parallax1PageRoutingModule {
};
Parallax1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Parallax1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/parallax/parallax1/parallax1.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/parallax/parallax1/parallax1.module.ts ***!
  \**************************************************************/
/*! exports provided: Parallax1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax1PageModule", function() { return Parallax1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _parallax1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parallax1-routing.module */ "./src/app/pages/parallax/parallax1/parallax1-routing.module.ts");
/* harmony import */ var _parallax1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax1.page */ "./src/app/pages/parallax/parallax1/parallax1.page.ts");
/* harmony import */ var src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/parallax-header.directive */ "./src/app/directives/parallax-header.directive.ts");








let Parallax1PageModule = class Parallax1PageModule {
};
Parallax1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parallax1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Parallax1PageRoutingModule"]
        ],
        declarations: [_parallax1_page__WEBPACK_IMPORTED_MODULE_6__["Parallax1Page"], src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_7__["ParallaxHeaderDirective"]]
    })
], Parallax1PageModule);



/***/ }),

/***/ "./src/app/pages/parallax/parallax1/parallax1.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/parallax/parallax1/parallax1.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  background-color: #fff;\n  padding: 8px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.descriptions {\n  font-size: 10px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyYWxsYXgvcGFyYWxsYXgxL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwYXJhbGxheFxccGFyYWxsYXgxXFxwYXJhbGxheDEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9wYXJhbGxheDEvcGFyYWxsYXgxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9wYXJhbGxheDEvcGFyYWxsYXgxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRwYWRkaW5nOiA4cHg7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGVzY3JpcHRpb25ze1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogZ3JheTtcbn1cbiIsIi5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY3JpcHRpb25zIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/parallax/parallax1/parallax1.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/parallax/parallax1/parallax1.page.ts ***!
  \************************************************************/
/*! exports provided: Parallax1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax1Page", function() { return Parallax1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/parallex/parallax.service */ "./src/app/services/parallex/parallax.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/



let Parallax1Page = class Parallax1Page {
    constructor(alertCtrl, parallax) {
        this.alertCtrl = alertCtrl;
        this.parallax = parallax;
        this.basicAlertCard = this.parallax.card;
    }
    ngOnInit() {
    }
    showBasicAlert(fruits) {
        this.presentAlert(fruits.name, fruits.descriptions);
    }
    /*
     Show basic Alert Message
     param :header = header or title of alert message, msg = message to display
     Call this method to show basic Alert,
     */
    presentAlert(headerMsg, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: headerMsg,
                message: msg,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (Cancle) => {
                            console.log('Cancle Button');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Parallax1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__["ParallaxService"] }
];
Parallax1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parallax1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parallax1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax1/parallax1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parallax1.page.scss */ "./src/app/pages/parallax/parallax1/parallax1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__["ParallaxService"]])
], Parallax1Page);



/***/ })

}]);
//# sourceMappingURL=pages-parallax-parallax1-parallax1-module-es2015.js.map