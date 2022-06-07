(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-rest-image-details-rest-image-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-details/rest-image-details.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-details/rest-image-details.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Rest APIs Image Update\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_img\">\n    <img [src]=\"image\" class=\"img_logo\" />\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"update()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Update List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rest/rest-image-details/rest-image-details-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-details/rest-image-details-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: RestImageDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageDetailsPageRoutingModule", function() { return RestImageDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_image_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-image-details.page */ "./src/app/pages/rest/rest-image-details/rest-image-details.page.ts");




const routes = [
    {
        path: '',
        component: _rest_image_details_page__WEBPACK_IMPORTED_MODULE_3__["RestImageDetailsPage"]
    }
];
let RestImageDetailsPageRoutingModule = class RestImageDetailsPageRoutingModule {
};
RestImageDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestImageDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-image-details/rest-image-details.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-details/rest-image-details.module.ts ***!
  \****************************************************************************/
/*! exports provided: RestImageDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageDetailsPageModule", function() { return RestImageDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_image_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest-image-details-routing.module */ "./src/app/pages/rest/rest-image-details/rest-image-details-routing.module.ts");
/* harmony import */ var _rest_image_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest-image-details.page */ "./src/app/pages/rest/rest-image-details/rest-image-details.page.ts");







let RestImageDetailsPageModule = class RestImageDetailsPageModule {
};
RestImageDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rest_image_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestImageDetailsPageRoutingModule"]
        ],
        declarations: [_rest_image_details_page__WEBPACK_IMPORTED_MODULE_6__["RestImageDetailsPage"]]
    })
], RestImageDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-image-details/rest-image-details.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-details/rest-image-details.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_img {\n  width: 250px;\n  height: 250px;\n  background-color: lightgray;\n  position: relative;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-position: center;\n}\n.div_img .my_spin {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.div_img .img_logo {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWltYWdlLWRldGFpbHMvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXHJlc3RcXHJlc3QtaW1hZ2UtZGV0YWlsc1xccmVzdC1pbWFnZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWltYWdlLWRldGFpbHMvcmVzdC1pbWFnZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NSO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN0L3Jlc3QtaW1hZ2UtZGV0YWlscy9yZXN0LWltYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmRpdl9pbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLm15X3NwaW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAuaW1nX2xvZ297ICAgICAgXG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbn0iLCIuZGl2X2ltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5kaXZfaW1nIC5teV9zcGluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5kaXZfaW1nIC5pbWdfbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rest/rest-image-details/rest-image-details.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-details/rest-image-details.page.ts ***!
  \**************************************************************************/
/*! exports provided: RestImageDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageDetailsPage", function() { return RestImageDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/





let RestImageDetailsPage = class RestImageDetailsPage {
    constructor(route, util, navCtrl, api) {
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('data')) {
                const info = JSON.parse(data.data);
                console.log('nof', info);
                this.id = info.id;
                this.title = info.title;
                this.description = info.description;
                this.image = this.api.imagePath + info.img;
                this.url = info.img;
            }
        });
    }
    update() {
        if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
        }
        if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
        }
        this.isCreate = true;
        let param = {
            id: this.id,
            user_id: localStorage.getItem('uid'),
            title: this.title,
            description: this.description,
            img: this.url
        };
        this.api.post(param, 'ImagesCRUD/editList').then((data) => {
            const info = JSON.parse(data.data);
            console.log(info);
            if (info && info.status === 200) {
                this.navCtrl.back();
            }
            else {
                this.util.showToast('something went wrong', 'danger', 'bottom');
            }
        }).catch(error => {
            console.log(error);
            this.util.showToast('something went wrong', 'danger', 'bottom');
        });
    }
};
RestImageDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"] }
];
RestImageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rest-image-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rest-image-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-details/rest-image-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rest-image-details.page.scss */ "./src/app/pages/rest/rest-image-details/rest-image-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"]])
], RestImageDetailsPage);



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
  Copyright and Good Faith Purchasers © 2020-present initappz.

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
//# sourceMappingURL=pages-rest-rest-image-details-rest-image-details-module-es2015.js.map