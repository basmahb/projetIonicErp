(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-ex3-chat-ex3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex3/chat-ex3.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex3/chat-ex3.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"header_div\">\n    <div class=\"first_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n      </ion-buttons>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n      <ion-label>Jonh Doe</ion-label>\n    </div>\n    <div>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <span *ngFor=\"let item of msgs\">\n      <div class=\"left_div\" *ngIf=\"item.side == 'left'\">\n        <div class=\"inner_div\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n        </div>\n        <div class=\"back_img\" style=\"margin-left: 45px;\" [style.backgroundImage]=\"'url(assets/imgs/food.jpg)'\"></div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"item.side == 'right'\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n          <!-- <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food.jpg)'\"></div> -->\n        </div>\n      </div>\n    </span>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-icon name=\"happy-outline\" class=\"smiley\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"Type Here..\"></ion-input>\n    <div class=\"chat_div\">\n      <ion-icon name=\"navigate\"></ion-icon>\n    </div>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/chat/chat-ex3/chat-ex3-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/chat/chat-ex3/chat-ex3-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ChatEx3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx3PageRoutingModule", function() { return ChatEx3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_ex3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-ex3.page */ "./src/app/pages/chat/chat-ex3/chat-ex3.page.ts");




const routes = [
    {
        path: '',
        component: _chat_ex3_page__WEBPACK_IMPORTED_MODULE_3__["ChatEx3Page"]
    }
];
let ChatEx3PageRoutingModule = class ChatEx3PageRoutingModule {
};
ChatEx3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatEx3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chat/chat-ex3/chat-ex3.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/chat/chat-ex3/chat-ex3.module.ts ***!
  \********************************************************/
/*! exports provided: ChatEx3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx3PageModule", function() { return ChatEx3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-ex3-routing.module */ "./src/app/pages/chat/chat-ex3/chat-ex3-routing.module.ts");
/* harmony import */ var _chat_ex3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-ex3.page */ "./src/app/pages/chat/chat-ex3/chat-ex3.page.ts");







let ChatEx3PageModule = class ChatEx3PageModule {
};
ChatEx3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatEx3PageRoutingModule"]
        ],
        declarations: [_chat_ex3_page__WEBPACK_IMPORTED_MODULE_6__["ChatEx3Page"]]
    })
], ChatEx3PageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat-ex3/chat-ex3.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/chat/chat-ex3/chat-ex3.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 65px;\n  border-bottom: 1px solid lightgray;\n  background-color: #4BE3B0;\n}\n.header_div .first_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: bold;\n}\n.header_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  margin-right: 10px;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_img {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: 10px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.main_content_div .left_div .msg_div {\n  background: #F0EFF5;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-left: 5px;\n  align-self: center;\n}\n.main_content_div .right_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .msg_div {\n  background: #4BE3B0;\n  align-self: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-right: 5px;\n  color: white;\n}\nion-footer .footer_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 10px;\n}\nion-footer .smiley {\n  font-size: 35px;\n  color: lightgray;\n  margin-right: 10px;\n}\nion-footer ion-input {\n  border-radius: 25px;\n  border: 1px solid lightgray;\n  --padding-start: 8px;\n}\nion-footer .chat_div {\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  height: 35px;\n  width: 35px;\n  position: relative;\n  margin-left: 10px;\n}\nion-footer .chat_div ion-icon {\n  color: #4BE3B0;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-55%, -45%);\n          transform: translate(-55%, -45%);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4My9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC1leDNcXGNoYXQtZXgzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4My9jaGF0LWV4My5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUNJLFlBQUE7QUNEUjtBRElBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRlI7QURLSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0hSO0FES1E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ0haO0FETVE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlo7QURPSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNMUjtBRE9RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNMWjtBRFFRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNOWjtBRFlJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEWUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZSO0FEWUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNWUjtBRFlJO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZSO0FEV1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxlQUFBO0FDVFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQtZXgzL2NoYXQtZXgzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJFM0IwO1xuXG4gICAgLmZpcnN0X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzZXJuYW1le1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5iYWNrX2ltZ3tcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIH1cblxuICAgIC5sZWZ0X2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5pbm5lcl9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1zZ19kaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEJFM0IwO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVye1xuICAgIC5mb290ZXJfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB9XG5cbiAgICAuc21pbGV5e1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIH1cbiAgICAuY2hhdF9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzRCRTNCMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTU1JSwtNDUlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCRTNCMDtcbn1cbi5oZWFkZXJfZGl2IC5maXJzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlcl9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlcl9kaXYgLnVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlcl9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDQ1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuaW5uZXJfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC5tc2dfZGl2IHtcbiAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAubXNnX2RpdiB7XG4gIGJhY2tncm91bmQ6ICM0QkUzQjA7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZm9vdGVyIC5mb290ZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5pb24tZm9vdGVyIC5zbWlsZXkge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cbmlvbi1mb290ZXIgLmNoYXRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tZm9vdGVyIC5jaGF0X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNEJFM0IwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NSUsIC00NSUpO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/chat/chat-ex3/chat-ex3.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat-ex3/chat-ex3.page.ts ***!
  \******************************************************/
/*! exports provided: ChatEx3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx3Page", function() { return ChatEx3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chats/chat-data.service */ "./src/app/services/chats/chat-data.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers ?? 2020-present initappz.

*/


let ChatEx3Page = class ChatEx3Page {
    constructor(chat) {
        this.chat = chat;
        this.msgs = [];
        this.msgs = this.chat.messages;
    }
    ngOnInit() {
    }
};
ChatEx3Page.ctorParameters = () => [
    { type: src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"] }
];
ChatEx3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-ex3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-ex3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex3/chat-ex3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-ex3.page.scss */ "./src/app/pages/chat/chat-ex3/chat-ex3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]])
], ChatEx3Page);



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-ex3-chat-ex3-module-es2015.js.map