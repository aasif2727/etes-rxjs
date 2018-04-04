webpackJsonp([5],{

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllTdyPageModule", function() { return SeeAllTdyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seeall_tdy__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_common_methods__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SeeAllTdyPageModule = (function () {
    function SeeAllTdyPageModule() {
    }
    SeeAllTdyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seeall_tdy__["a" /* SeeAllTdyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seeall_tdy__["a" /* SeeAllTdyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_4__helper_common_methods__["a" /* commonMethods */]]
        })
    ], SeeAllTdyPageModule);
    return SeeAllTdyPageModule;
}());

//# sourceMappingURL=seeall-tdy.module.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var commonMethods = (function () {
    function commonMethods(toastCtrl, loadevent) {
        this.toastCtrl = toastCtrl;
        this.loadevent = loadevent;
    }
    commonMethods.prototype.showToast = function (alert_message) {
        var toast = this.toastCtrl.create({
            message: alert_message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    commonMethods.prototype.InitializeLoader = function () {
        this.loader = this.loadevent.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    commonMethods = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* LoadingController */]) === "function" && _b || Object])
    ], commonMethods);
    return commonMethods;
    var _a, _b;
}());

//# sourceMappingURL=common-methods.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeAllTdyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeeAllTdyPage = (function () {
    function SeeAllTdyPage(navCtrl, appContext, navParams) {
        this.navCtrl = navCtrl;
        this.appContext = appContext;
        this.navParams = navParams;
    }
    SeeAllTdyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seeall-tdy',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\seeall-tdy\seeall-tdy.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>WhosOff Today</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header">\n\n  <div>\n\n    <ion-card *ngFor="let res of appContext.todaysLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject">\n\n      <!-- <img src="img/nin-live.png"/> -->\n\n\n\n      <div style="background-color:#f5f8fb;">\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img [src]="res.owner.photoUrl ? res.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'">\n\n            <!-- <ion-icon style="font-size:2.2em" name="md-contact"></ion-icon> -->\n\n          </ion-avatar>\n\n          <h2>{{res?.owner?.name }}</h2>   \n\n          <h2  style="font-size:12px">&bull;{{res?.owner?.team?.name}}</h2>\n\n          <h6 style="font-size:12px">Req. On: {{res?.createdAt | date : "MMM d, y" }} [ {{res?.lveType}} ]</h6>\n\n        </ion-item>\n\n      </div>\n\n      <hr>\n\n      <ion-card-content style="background-color:#f5f8fb;">\n\n        <!-- <h3> Reason For Leave:</h3><p>{{data.reason }}</p> -->\n\n        <div class="contentStyle">\n\n          <p> Hey!!! I will be on leave from\n\n            <span class="FontAvatar">{{res.from | date : "MMM d, y"}}</span> to\n\n            <span class="FontAvatar">{{res.to | date : "MMM d, y"}}</span> due to\n\n            <span class="FontAvatar">{{res.reason }}</span>\n\n          </p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="appContext.todaysLeavesCollection.length == 0">\n\n    <p align="center" style="color:#0699b3;font-weight:bold;font-size:small" >No Events </p>  \n\n  </div>\n\n  <br/>\n\n</ion-content>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\seeall-tdy\seeall-tdy.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _c || Object])
    ], SeeAllTdyPage);
    return SeeAllTdyPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=seeall-tdy.js.map

/***/ })

});
//# sourceMappingURL=5.js.map