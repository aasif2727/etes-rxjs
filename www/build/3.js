webpackJsonp([3],{

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_common_methods__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SigninPageModule = (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__helper_common_methods__["a" /* commonMethods */]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

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

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_common_methods__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, _Cmmethods, formBuilder, appContext, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._Cmmethods = _Cmmethods;
        this.formBuilder = formBuilder;
        this.appContext = appContext;
        this.authService = authService;
        this.signInForm = this.formBuilder.group({
            userid: [null, ([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.navToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    SigninPage.prototype.forgotPassword = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        this._Cmmethods.InitializeLoader();
        this.authService.signIn(this.signInForm.value).then(function (res) {
            if (res) {
                _this.appContext.myAccount.next(res);
                _this.navCtrl.setRoot("HomePage");
                _this._Cmmethods.loader.dismiss();
            }
            else {
                _this.appContext.clearAppState();
            }
        }, function (err) {
            var errorCode = err.code;
            var errorMessage = err.message;
            _this._Cmmethods.loader.dismiss();
            _this.authService.presentToast(errorMessage);
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\signin\signin.html"*/'\n\n  <ion-content padding class="img">\n\n    <div class="formcontent">\n\n    <form id="signInForm" [formGroup]="signInForm" (ngSubmit)="signIn()">\n\n      <ion-card text-center>\n\n        <ion-card-header>\n\n          <span class="fontbolder"> Sign In</span>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list no-line>\n\n            <ion-item class="ionitems">\n\n                <ion-label> <ion-icon name="mail"></ion-icon> </ion-label>\n\n              <ion-input type="text" formControlName="userid" placeholder="Email"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="ionitems" style="margin-top: 10px;">\n\n                <ion-label> <ion-icon name="eye"></ion-icon> </ion-label>\n\n              <ion-input type="password" formControlName="password" placeholder="Password">\n\n              </ion-input>\n\n            </ion-item>\n\n            <button class="btnlogin" ion-button type="submit" [disabled]="!signInForm.valid" block>Sign In</button>\n\n          </ion-list>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </form>\n\n    <!-- <button class="signup-btn" ion-button clear full color="dark" (tap)="navToSignup()">Not a member yet? Create your account</button> -->\n\n    <button ion-button clear full color="dark" (tap)="forgotPassword()" style="color:white">Forgot | Reset Password</button>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__helper_common_methods__["a" /* commonMethods */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__helper_common_methods__["a" /* commonMethods */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object])
    ], SigninPage);
    return SigninPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=3.js.map