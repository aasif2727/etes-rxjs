webpackJsonp([9],{

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(1199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                // AvatarDirective,
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_service_image_service__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, navParams, toastCtrl, imageSrv, appContext, imageViewerCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.imageSrv = imageSrv;
        this.appContext = appContext;
        this.actionSheetCtrl = actionSheetCtrl;
        this.user = {};
        // this.user =this.appContext.myProfileObject;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    ;
    UserProfilePage.prototype.editProfile = function () {
        this.navCtrl.push("EditUserProfilePage", { user: this.user });
    };
    UserProfilePage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 3000);
        imageViewer.onDidDismiss(function () { });
    };
    UserProfilePage.prototype.changePicture = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.uploadFromCamera();
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.uploadFromGallery();
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UserProfilePage.prototype.uploadFromGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.user;
                        return [4 /*yield*/, this.imageSrv.uploadFromGallery()];
                    case 1:
                        _a.photoUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.uploadFromCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.user;
                        return [4 /*yield*/, this.imageSrv.uploadFromCamera()];
                    case 1:
                        _a.photoUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.ionViewWillEnter = function () {
        this.user = this.appContext.myProfileObject;
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>User Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="editProfile()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="width:100%;height:100%">\n\n    <div style="display:table;width:100%;height:40%;background-color:#039be5;text-align:center;">\n\n        <div style="display:table-cell;vertical-align:middle;">          \n\n              <img class="profilepic" [src]="user.photoUrl ? user.photoUrl : \'assets/imgs/defaults/user.jpg\'" #myImage (click)="presentImage(myImage)"/>\n\n              <ion-icon name="camera" (click)="changePicture()" style="color:white;position: relative;right: 30px;bottom: 5px;font-size: 1.5em;"></ion-icon>\n\n              <h2 style="color:white;text-align: center; position: relative; right: 5px;font-family: g_bold;">{{ user?.name }}</h2>          \n\n        </div>\n\n      </div>    \n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="mail" style="color:rgb(238, 198, 22)" item-start></ion-icon>\n\n      <h2>Email</h2>\n\n      <p>{{ user?.email }}</p>          \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="call" style="color:rgb(16, 160, 59)" item-start></ion-icon>\n\n      <h2>Mobile</h2>\n\n      <p>{{ user?.phoneNumber }}</p>          \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="person" style="color:rgb(38, 113, 226)" item-start></ion-icon>\n\n      <h2>Manager</h2>\n\n      <p>{{ user?.manager?.name }}</p>          \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="people" style="color:rgb(116, 75, 21)" item-start></ion-icon>\n\n      <h2>Team</h2>\n\n      <p>{{ user?.team?.name }}</p>          \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_image_service_image_service__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__["a" /* AppContextProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=9.js.map