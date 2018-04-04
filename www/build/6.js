webpackJsonp([6],{

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLeavesPageModule", function() { return SearchLeavesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_leaves__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_common_methods__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchLeavesPageModule = (function () {
    function SearchLeavesPageModule() {
    }
    SearchLeavesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_leaves__["a" /* SearchLeavesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_leaves__["a" /* SearchLeavesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_4__helper_common_methods__["a" /* commonMethods */]]
        })
    ], SearchLeavesPageModule);
    return SearchLeavesPageModule;
}());

//# sourceMappingURL=search-leaves.module.js.map

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

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLeavesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_controllers_comments_controller__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service_v2_user_service_v2__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_leavestatus_enum__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detailsview_detailsview__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchLeavesPage = (function () {
    function SearchLeavesPage(appContext, leavesSvc, _userV2, alertCtrl, modalCtrl) {
        var _this = this;
        this.appContext = appContext;
        this.leavesSvc = leavesSvc;
        this._userV2 = _userV2;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.fromDate = new Date().toISOString();
        this.maxToDate = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date()).add(90, 'days').format('YYYY-MM-DD');
        this.toDate = this.maxToDate;
        this.minFromDate = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date()).add(-90, 'days').format('YYYY-MM-DD');
        this.responseteam = [];
        this.appContext.searchedLeaves.subscribe(function (leaves) { console.log(leaves); });
        this.leavesSvc.getTeams().subscribe(function (teamsList) {
            _this.responseteam = teamsList;
        });
        if (this.appContext.myProfileObject.isManager) {
            this.disableSelector = this.appContext.myProfileObject.isManager;
            this.Myteam = "All";
        }
        else {
            this.disableSelector = this.appContext.myProfileObject.isManager;
            this.Myteam = this.appContext.myProfileObject.team.id;
        }
    }
    SearchLeavesPage.prototype.getMaxFromDate = function (toDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(toDate).format('YYYY-MM-DD');
    };
    SearchLeavesPage.prototype.getMinToDate = function (fromDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(fromDate).format('YYYY-MM-DD');
    };
    SearchLeavesPage.prototype.validatedate = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_moment__(this.fromDate).format('YYYY-MM-DD') > __WEBPACK_IMPORTED_MODULE_3_moment__(this.toDate).format('YYYY-MM-DD')) {
            //this.SearchResults=false;
        }
        //else
        //this.SearchResults=true;
    };
    SearchLeavesPage.prototype.searchLeave = function (fromDate, toDate, value) {
        var _this = this;
        var from = this.leavesSvc.getDateRange(fromDate);
        var to = this.leavesSvc.getDateRange(toDate);
        this._userV2.getUsersByTeamID(value.trim()).subscribe(function (UsersbyTeam) {
            _this.appContext.getAllTeams.next(UsersbyTeam);
            _this.appContext.searchedLeaves.next([]);
            _this.leavesSvc.searchLeavesByDateRange(from.start, to.end, _this.appContext.searchedLeaves);
        });
    };
    SearchLeavesPage.prototype.isSearchResultsAvailable = function () {
        return this.appContext.searchedLeavesCollection && this.appContext.searchedLeavesCollection.length > 0;
    };
    SearchLeavesPage.prototype.acceptLeave = function (leaveID) {
        this.leavesSvc.updateLeaveStatus(leaveID, __WEBPACK_IMPORTED_MODULE_7__models_leavestatus_enum__["a" /* LeaveStatus */].Accepted, "Approved");
    };
    SearchLeavesPage.prototype.getColor = function (status) {
        switch (status) {
            case 0:
                return 'gray';
            case 1:
                return 'green';
            case 2:
                return 'red';
            default:
                return 'orange';
        }
    };
    SearchLeavesPage.prototype.ionViewWillEnter = function () {
        this.appContext.searchedLeaves.next([]);
    };
    SearchLeavesPage.prototype.ionViewWillLeave = function () {
        this.appContext.searchedLeaves.next([]);
    };
    SearchLeavesPage.prototype.CallPrompt = function (keyObj) {
        var Modaltitle = "Reject Leave";
        var Modalmsg = "Do you wish to reject this leave request?";
        this.alertCtrl.presentPrompt(keyObj, Modaltitle, Modalmsg, __WEBPACK_IMPORTED_MODULE_7__models_leavestatus_enum__["a" /* LeaveStatus */].Declined);
    };
    SearchLeavesPage.prototype.MoreInfo = function (obj) {
        var leaveObj = {
            name: obj.owner.name,
            from: obj.from,
            to: obj.to,
            reason: obj.reason,
            photoUrl: obj.owner.photoUrl
        };
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__detailsview_detailsview__["a" /* DetailsviewPage */], leaveObj);
        myModal.present();
    };
    SearchLeavesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-leaves',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\search-leaves\search-leaves.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Search Leave </ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card style="width: 95vw;margin-left: -8px;">\n\n    <ion-card-content>\n\n      <ion-list no-line>\n\n        <ion-item>\n\n          <ion-label>From</ion-label>\n\n          <ion-datetime displayFormat="MMM DD, YYYY" [min]="minFromDate" (ionChange)="validatedate()" [max]="getMaxFromDate(toDate)" [(ngModel)]="fromDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>To</ion-label>\n\n          <ion-datetime displayFormat="MMM DD, YYYY" [min]="getMinToDate(fromDate)" (ionChange)="validatedate()" [max]="maxToDate" [(ngModel)]="toDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item *ngIf="!disableSelector">\n\n          <ion-label>Team</ion-label>\n\n          <ion-select [(ngModel)]="Myteam">\n\n            <ion-option [value]="res.name" *ngFor="let res of responseteam">\n\n              {{res.name}}\n\n            </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <button ion-button round full [disabled]="!SearchResults" (click)="searchLeave(fromDate, toDate,Myteam)">Search</button>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <br/>\n\n\n\n  <div *ngIf="appContext.searchedLeavesCollection | filterBySearch: appContext.getAllTeamsCollection: appContext.myReporteesCollection: appContext.myProfileObject: Myteam; else loading">\n\n    <!-- <ion-card class="cardBorder" [ngStyle]="{\'border-left-color\':getColor(res.status)}" *ngFor="let res of appContext.searchedLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject"> -->\n\n    <ion-card class="cardBorder" [ngStyle]="{\'border-left-color\':getColor(res.status)}" *ngFor="let res of appContext.searchedLeavesCollection | filterBySearch: appContext.getAllTeamsCollection: appContext.myReporteesCollection: appContext.myProfileObject: Myteam;">\n\n\n\n      <div class="itemStyle">\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img [src]="res.owner.photoUrl ? res.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'">\n\n          </ion-avatar>\n\n          <h2 class="itemStyle">{{res?.owner?.name }}</h2>\n\n          <p>{{res?.owner?.team?.id}}</p>\n\n          <!-- <h6 class="contentStyle" style="font-size:12px">&bull;&nbsp;{{res?.createdAt | date : "MMM d, y" }} &nbsp;&nbsp;&bull; {{res?.lveType}} </h6> -->\n\n          <p>Requested on: {{res?.createdAt | date : "MMM d, y" }}</p>\n\n        </ion-item>\n\n      </div>\n\n      <hr>\n\n      <ion-card-content>\n\n        <div class="contentStyle">\n\n          <p> Hey!!! I will be on&nbsp;{{res?.lveType}} leave from\n\n            <span class="FontAvatar">{{res?.from | date : "MMM d, y"}}</span> to\n\n            <span class="FontAvatar">{{res?.to | date : "MMM d, y"}}</span> due to\n\n            <span class="FontAvatar">{{res?.reason }}</span>\n\n          </p>\n\n        </div>\n\n      </ion-card-content>\n\n\n\n      <ng-container *ngIf="res?.status==\'0\' && res?.owner.manager.email == appContext.myProfileObject.email">\n\n        <hr>\n\n        <ion-row>\n\n          <ion-col (click)=acceptLeave(res?.leaveId) item-start style="text-align: center;">\n\n            <div>\n\n              <button class="child" ion-button icon-left clear small>\n\n                <!-- <img src="assets/imgs/happy.png" /> -->\n\n                <ion-icon style="font-size:2em; color:#238527;" name="checkmark"></ion-icon>\n\n              </button>\n\n            </div>\n\n            <div>\n\n              <button ion-button icon-left clear small>\n\n                <div class="actionAavatar">Approve</div>\n\n              </button>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col (click)=CallPrompt(res?.leaveId) item-end style="text-align: center;">\n\n            <div>\n\n              <button ion-button icon-left clear small>\n\n                <!-- <img src="assets/imgs/angryblack.png" /> -->\n\n                <ion-icon style="font-size:2em; color:#E57373;" name="close"></ion-icon>\n\n              </button>\n\n            </div>\n\n            <div>\n\n              <button ion-button icon-left clear small>\n\n                <div class="actionRavatar">Reject</div>\n\n              </button>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col (click)=MoreInfo(res) item-end style="text-align: center;">\n\n            <div>\n\n              <button ion-button icon-left clear small>\n\n                <ion-icon style="font-size:2em;" name="information-circle"></ion-icon>\n\n              </button>\n\n            </div>\n\n            <div>\n\n              <button ion-button icon-left clear small>\n\n                <div class="actionIavatar">More Info</div>\n\n              </button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ng-container>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n\n\n\n\n  <ng-template #loading>\n\n    <img style="margin-left: auto;margin-right: auto;display: block;" [src]="\'assets/imgs/defaults/noresults.jpg\'">\n\n    <br/>\n\n    <div style="text-align: center;">\n\n      <span class="contentStyle">Whoops!!! &nbsp;</span>\n\n      <span class="itemStyle">No Results Found </span>\n\n    </div>\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\search-leaves\search-leaves.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_user_service_v2_user_service_v2__["a" /* UserServiceV2Provider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_user_service_v2_user_service_v2__["a" /* UserServiceV2Provider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__components_controllers_comments_controller__["a" /* commentsController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_controllers_comments_controller__["a" /* commentsController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]) === "function" && _e || Object])
    ], SearchLeavesPage);
    return SearchLeavesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=search-leaves.js.map

/***/ })

});
//# sourceMappingURL=6.js.map