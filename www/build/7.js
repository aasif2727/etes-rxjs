webpackJsonp([7],{

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLeavePageModule", function() { return NewLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_leave__ = __webpack_require__(1190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_common_methods__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewLeavePageModule = (function () {
    function NewLeavePageModule() {
    }
    NewLeavePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_leave__["a" /* NewLeavePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_leave__["a" /* NewLeavePage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__helper_common_methods__["a" /* commonMethods */]]
        })
    ], NewLeavePageModule);
    return NewLeavePageModule;
}());

//# sourceMappingURL=new-leave.module.js.map

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* LoadingController */]])
    ], commonMethods);
    return commonMethods;
}());

//# sourceMappingURL=common-methods.js.map

/***/ }),

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_common_methods__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewLeavePage = (function () {
    function NewLeavePage(leaveSvc, appContext, navCtrl, _Cmmethods) {
        this.leaveSvc = leaveSvc;
        this.appContext = appContext;
        this.navCtrl = navCtrl;
        this._Cmmethods = _Cmmethods;
        this.maxToDate = __WEBPACK_IMPORTED_MODULE_1_moment__(new Date()).add(90, 'days').format('YYYY-MM-DD');
        this.minFromDate = __WEBPACK_IMPORTED_MODULE_1_moment__(new Date()).add(0, 'days').format('YYYY-MM-DD');
        this.LveType = false;
        this.PlnFrmDate = new Date(new Date()).toISOString();
        this.leave = {
            from: new Date().toISOString(),
            to: new Date().toISOString(),
            isHalfDay: false,
            reason: "",
            status: 0,
            lveType: "Un-Planned"
        };
    }
    NewLeavePage.prototype.getMaxFromDate = function (toDate) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(this.leave.to).format('YYYY-MM-DD');
    };
    NewLeavePage.prototype.getMinToDate = function (fromDate) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(this.leave.from).format('YYYY-MM-DD');
    };
    NewLeavePage.prototype.createLeave = function () {
        var _this = this;
        this._Cmmethods.InitializeLoader();
        var sub = this.leaveSvc.createLeave(this.leave).subscribe(function () {
            sub.unsubscribe();
            _this.navCtrl.pop();
        });
        this._Cmmethods.loader.dismiss();
    };
    NewLeavePage.prototype.onDateChange = function () {
        if (new Date(__WEBPACK_IMPORTED_MODULE_1_moment__(this.leave.from).format('YYYY-MM-DD')) < new Date(__WEBPACK_IMPORTED_MODULE_1_moment__(new Date()).add(0, 'days').format('YYYY-MM-DD'))) {
            this.leave.from = this.minFromDate;
        }
        if (new Date(this.leave.from) > new Date(this.leave.to)) {
            this.leave.to = this.leave.from;
        }
        if (new Date(__WEBPACK_IMPORTED_MODULE_1_moment__(this.leave.from).format('YYYY-MM-DD')) >= new Date(__WEBPACK_IMPORTED_MODULE_1_moment__(this.PlnFrmDate).add(2, 'days').format('YYYY-MM-DD'))) {
            this.leave.lveType = "Planned";
            this.LveType = true;
        }
        else {
            if (this.leave.lveType == "Sick") {
                this.leave.lveType = "Sick";
            }
            else {
                this.leave.lveType = "Un-Planned";
            }
            this.LveType = false;
        }
    };
    NewLeavePage.prototype.onHlfDayChange = function () {
        this.leave.to = this.leave.from;
    };
    NewLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-leave',template:/*ion-inline-start:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\new-leave\new-leave.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>New Leave</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card text-center>\n\n    <ion-card-content>\n\n      <ion-list no-line>\n\n        <ion-item class="ionitems">\n\n          <ion-label>Half Day</ion-label>\n\n          <ion-toggle [(ngModel)]="leave.isHalfDay" (ionChange)="onHlfDayChange()"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item class="ionitems" style="margin-top: 10px;">\n\n          <ion-label>{{ leave.isHalfDay ? "On" : "From" }}</ion-label>\n\n          <ion-datetime displayFormat="MMM DD, YYYY" [min]="minFromDate" [max]="maxToDate" [(ngModel)]="leave.from" (ionChange)="onDateChange()"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item class="ionitems" style="margin-top: 10px;" [hidden]="leave.isHalfDay">\n\n          <ion-label>To</ion-label>\n\n          <ion-datetime displayFormat="MMM DD, YYYY" [min]="getMinToDate(fromDate)" [max]="maxToDate" [(ngModel)]="leave.to" (ionChange)="onDateChange()"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item  class="ionitems"  style="margin-top: 10px;">\n\n          <ion-label>Type</ion-label>\n\n          <ion-select [(ngModel)]="leave.lveType">\n\n            <ion-option  value="Planned" *ngIf="LveType">Planned</ion-option>\n\n            <ion-option value="Un-Planned" *ngIf="!LveType">Un-Planned</ion-option>\n\n            <ion-option value="Sick" *ngIf="!LveType">Sick</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="ionitems" style="margin-top: 10px;">\n\n          <ion-label>Approver : {{ appContext?.myProfileObject?.manager?.name }}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item class="ionitems" style="margin-top: 10px;">\n\n          <ion-textarea placeholder="Reason for leave" maxlength="50" [(ngModel)]="leave.reason"></ion-textarea>\n\n        </ion-item>\n\n        <button class="btnlogin" ion-button type="submit" [disabled]="!leave.reason" full (click)="createLeave()">Apply</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\new-leave\new-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_context_app_context__["a" /* AppContextProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__helper_common_methods__["a" /* commonMethods */]])
    ], NewLeavePage);
    return NewLeavePage;
}());

//# sourceMappingURL=new-leave.js.map

/***/ })

});
//# sourceMappingURL=7.js.map