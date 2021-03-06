(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-accordions-accordions-module~pages-user-avatar-user-avatar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item class=\"child-item\" text-wrap detail=\"false\" lines=\"none\">\n  <ion-row no-padding align-items-center>\n    <ion-col size=\"9\">\n      <ion-row no-padding>\n        <ion-col size=\"12\">\n          <h3>{{product.name}}</h3>\n        </ion-col>\n        <ion-col size=\"12\">\n          <p text-lowercase color=\"medium\">{{product.information}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"3\" text-right>\n      <ion-button fill=\"outline\" (click)=\"buyItem()\">{{product.price}}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-avatar/text-avatar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-avatar/text-avatar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"u-text-avatar\" [ngStyle]=\"styles\">{{ firstLetter }}</div>");

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".child-item {\n  --ion-item-background: #f3f2f1;\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWNjb3JkaW9uXFxhY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpbGQtaXRlbSB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZjNmMmYxO1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59IiwiLmNoaWxkLWl0ZW0ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmM2YyZjE7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.ts ***!
  \*************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");


// import { ToastController } from '@ionic/angular';

let AccordionComponent = class AccordionComponent {
    constructor(util) {
        this.util = util;
    }
    ngOnInit() { }
    buyItem() {
        this.util.showToast('Added to the Cart', 'success', 'bottom');
    }
};
AccordionComponent.ctorParameters = () => [
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AccordionComponent.prototype, "product", void 0);
AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion.component.scss */ "./src/app/components/accordion/accordion.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
], AccordionComponent);



/***/ }),

/***/ "./src/app/components/component.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_text_avatar_text_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text-avatar/text-avatar.component */ "./src/app/components/text-avatar/text-avatar.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/components/accordion/accordion.component.ts");






const components = [
    _components_text_avatar_text_avatar_component__WEBPACK_IMPORTED_MODULE_4__["TextAvatarComponent"],
    _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]
];
let ComponentModule = class ComponentModule {
};
ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            components
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        exports: [
            ...components,
        ]
    })
], ComponentModule);



/***/ }),

/***/ "./src/app/components/text-avatar/text-avatar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/text-avatar/text-avatar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".u-text-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 46px;\n  max-height: 46px;\n  border-radius: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LWF2YXRhci9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZXh0LWF2YXRhclxcdGV4dC1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1hdmF0YXIvdGV4dC1hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1hdmF0YXIvdGV4dC1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudS10ZXh0LWF2YXRhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NnB4O1xuICAgIG1heC1oZWlnaHQ6IDQ2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIH0iLCIudS10ZXh0LWF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ2cHg7XG4gIG1heC1oZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/text-avatar/text-avatar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/text-avatar/text-avatar.component.ts ***!
  \*****************************************************************/
/*! exports provided: TextAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAvatarComponent", function() { return TextAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextAvatarComponent = class TextAvatarComponent {
    constructor() {
        this.firstLetter = '';
        this.styles = {
            'background-color': '#fff',
            color: '#000'
        };
        this.COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
            '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
            '#ffb74d', '#a1887f', '#90a4ae'];
    }
    ngOnChanges(changes) {
        let text = changes['text'] ? changes['text'].currentValue : null;
        let color = changes['color'] ? changes['color'].currentValue : null;
        let textColor = changes['textColor'] ? changes['textColor'].currentValue : this.styles.color;
        this.firstLetter = this.extractFirstCharacter(text);
        this.styles = Object.assign({}, this.styles, { 'background-color': this.backgroundColorHexString(color, text), color: textColor });
    }
    extractFirstCharacter(text) {
        return text.charAt(0) || '';
    }
    backgroundColorHexString(color, text) {
        return color || this.getColor(text);
    }
    ngOnInit() { }
    getColor(str) {
        return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
    }
    toNumber(str) {
        let h = 0;
        for (let i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
            h |= 0; // Convert to 32bit integer
        }
        return h;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TextAvatarComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TextAvatarComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TextAvatarComponent.prototype, "textColor", void 0);
TextAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-avatar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-avatar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-avatar/text-avatar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-avatar.component.scss */ "./src/app/components/text-avatar/text-avatar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TextAvatarComponent);



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/



let UtilService = class UtilService {
    constructor(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl) {
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
    show(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: msg,
                spinner: 'bubbles',
            }).then(a => {
                a.present().then(() => {
                    //console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    /*
      Show Warning Alert Message
      param : msg = message to display
      Call this method to show Warning Alert,
      */
    showWarningAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showSimpleAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    showErrorAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
       param : email = email to verify
       Call this method to get verify email
       */
    getEmailFilter(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!(emailfilter.test(email))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please enter valid email',
                    buttons: ['OK']
                });
                yield alert.present();
                return false;
            }
            else {
                return true;
            }
        });
    }
    /*
      Show Toast Message on Screen
       param : msg = message to display, color= background color of toast example dark,danger,light. position  = position of message example top,bottom
       Call this method to show toast message
       */
    showToast(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                color: color,
                position: positon
            });
            toast.present();
        });
    }
    shoNotification(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                color: color,
                position: positon,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    apiErrorHandler(err) {
        //console.log("Error got in service =>", err)
        if (err.status == -1) {
            this.showErrorAlert('Failed To Connect With Server');
        }
        else if (err.status == 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
        }
        else if (err.status == 500) {
            this.showErrorAlert("Somethimg Went Wrong..");
        }
    }
    // setDetails(data) {
    //   this.details = null;
    //   this.details = data;
    // }
    // getDetails() {
    //   return this.details;
    // }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], UtilService);



/***/ })

}]);
//# sourceMappingURL=default~pages-accordions-accordions-module~pages-user-avatar-user-avatar-module-es2015.js.map