webpackJsonp([17],{

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeaveRequestPageModule", function() { return CreateLeaveRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_leave_request__ = __webpack_require__(1173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateLeaveRequestPageModule = (function () {
    function CreateLeaveRequestPageModule() {
    }
    CreateLeaveRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_leave_request__["a" /* CreateLeaveRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_leave_request__["a" /* CreateLeaveRequestPage */]),
            ],
        })
    ], CreateLeaveRequestPageModule);
    return CreateLeaveRequestPageModule;
}());

//# sourceMappingURL=create-leave-request.module.js.map

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLeaveRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateLeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateLeaveRequestPage = (function () {
    function CreateLeaveRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateLeaveRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateLeaveRequestPage');
    };
    CreateLeaveRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-leave-request',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\create-leave-request\create-leave-request.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>New Leave</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true">\n\n  <form class="list">\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-list no-line>\n\n          <ion-item>\n\n            <ion-label>Half Day</ion-label>\n\n            <ion-toggle></ion-toggle>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>From</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>To</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-textarea placeholder="Reason for leave"></ion-textarea>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <button ion-button full>Apply</button>\n\n          </ion-item>\n\n          <!-- <ion-item>\n\n              <ion-input type="text" formControlName="name" placeholder="Name"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" formControlName="manager" placeholder="Manager"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="password" formControlName="team" placeholder="Team"></ion-input>\n\n            </ion-item>\n\n            <button ion-button type="submit" [disabled]="!profileForm.valid" block outline color="dark">Update</button> -->\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\create-leave-request\create-leave-request.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object])
    ], CreateLeaveRequestPage);
    return CreateLeaveRequestPage;
    var _a, _b;
}());

//# sourceMappingURL=create-leave-request.js.map

/***/ })

});
//# sourceMappingURL=17.js.map