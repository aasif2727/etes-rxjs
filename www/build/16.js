webpackJsonp([16],{

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfilePageModule", function() { return EditUserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user_profile__ = __webpack_require__(1174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserProfilePageModule = (function () {
    function EditUserProfilePageModule() {
    }
    EditUserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_user_profile__["a" /* EditUserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user_profile__["a" /* EditUserProfilePage */]),
            ],
        })
    ], EditUserProfilePageModule);
    return EditUserProfilePageModule;
}());

//# sourceMappingURL=edit-user-profile.module.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_team_service_team_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditUserProfilePage = (function () {
    function EditUserProfilePage(navCtrl, navParams, formBuilder, userService, teamService, appContext, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.teamService = teamService;
        this.appContext = appContext;
        this.authService = authService;
        this.user = {};
        this.managers$ = [];
        this.teams$ = [];
        this.profileForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // manager: [{value: '',disabled: true}],
            // team: [{value: '',disabled: true}],
            phoneNumber: ['']
        });
        this.user = this.appContext.myProfileObject;
    }
    EditUserProfilePage.prototype.updateProfile = function () {
        this.userService.updateUserById(this.user.email, this.user);
        //this.navCtrl.push("UserProfilePage",{user: this.user});
        this.navCtrl.pop();
    };
    EditUserProfilePage.prototype.ionViewDidLoad = function () {
    };
    EditUserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-user-profile',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\edit-user-profile\edit-user-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Edit User Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <form [formGroup]="profileForm" (ngSubmit)="updateProfile()" >\n\n    <ion-card>\n\n      <ion-card-content>\n\n          <ion-list>\n\n            <ion-item class="ionitems">\n\n              <ion-label>Name</ion-label>\n\n              <ion-input type="text" formControlName="name" maxlength="30" placeholder="Name" [(ngModel)]="user.name"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="ionitems"  style="margin-top: 10px;">\n\n              <ion-label>Mobile</ion-label>\n\n              <ion-input type="tel" formControlName="phoneNumber" maxlength="10" placeholder="Mobile" [(ngModel)]="user.phoneNumber"></ion-input>\n\n            </ion-item>\n\n            <!-- <ion-item class="ionitems"  style="margin-top: 10px;">\n\n              <ion-label>Manager</ion-label>\n\n              <ion-select [(ngModel)]="user.manager" formControlName="manager"   (ionChange)="onChange($event)" placeholder="Manager">\n\n                <ion-option *ngFor="let mgr of managers$ " [value] = "mgr.id">{{mgr.data.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item class="ionitems"  style="margin-top: 10px;">\n\n              <ion-label>Team</ion-label>\n\n              <ion-select [(ngModel)]="user.team" formControlName="team" placeholder="Team">\n\n                <ion-option *ngFor="let tm of teams$" [value] = "tm.id">{{tm.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item> -->\n\n            <button class="btnlogin" ion-button type="submit" [disabled]="!profileForm.valid" full>Save</button>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\edit-user-profile\edit-user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_team_service_team_service__["a" /* TeamServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_team_service_team_service__["a" /* TeamServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _g || Object])
    ], EditUserProfilePage);
    return EditUserProfilePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=edit-user-profile.js.map

/***/ })

});
//# sourceMappingURL=16.js.map