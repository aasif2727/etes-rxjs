webpackJsonp([14],{

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, leavesSvc, appContext) {
        this.navCtrl = navCtrl;
        this.leavesSvc = leavesSvc;
        this.appContext = appContext;
        this.slides = [
            "assets/imgs/slides/1.jpg",
            "assets/imgs/slides/2.jpg",
            "assets/imgs/slides/3.jpg",
            "assets/imgs/slides/4.jpg",
            "assets/imgs/slides/5.jpg",
            "assets/imgs/slides/6.jpg",
            "assets/imgs/slides/7.jpg"
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var from = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date()).startOf('day').toDate();
        var to = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date()).add(90, 'days').endOf('day').toDate();
        this.leavesSvc.searchLeavesByDateRange(from, to, this.appContext.searchedLeaves);
    };
    HomePage.prototype.goToPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="fontbolder">WhosOff</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="goToPage(\'SearchLeavesPage\')">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <!-- <button ion-button (click)="goToPage(\'ReportPage\')">\n\n        <ion-icon name="stats"></ion-icon>\n\n      </button> -->\n\n      <button ion-button (click)="goToPage(\'NotificationsPage\')">\n\n        <ion-icon name="notifications"></ion-icon>\n\n        <ion-badge item-top class="badge-custom">{{appContext.notificationLeavesCollection?.length}}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header">\n\n  <ion-slides pager="true" loop="true" id="cover" slidesPerView=1 autoplay="5000" loop="true" style="height: 200px;">\n\n    <ion-slide style="height: 200px;" *ngFor="let img of slides">\n\n      <img [src]="img" />\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid class="gridStyle">\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <p class="itemStyleSubheaders">Today</p>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <p class="itemStyle" style="color:#0a72dc;" (click)="goToPage(\'SeeAllTdyPage\')">View Details</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-slides pager="false" id="today" slidesPerView=3 style="height: 130px;" *ngIf="(appContext.todaysLeavesCollection  | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject).length > 0">\n\n    <ion-slide *ngFor="let leave of appContext.todaysLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject">\n\n      <ion-card>\n\n        <img style="width: 103px;height: 86px;" [src]="leave.owner.photoUrl ? leave.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'"\n\n        />\n\n        <ion-card-content>\n\n          <p style="font-weight:800; white-space: nowrap;overflow: hidden;">{{ leave?.owner?.name }}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-slides pager="false" id="tomorrow" slidesPerView=1 style="height:130px;" *ngIf="(appContext.todaysLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject).length == 0">\n\n    <ion-slide>\n\n      <!-- <p align="center" style="color:#0a72dc;font-weight:bold;font-size:14px">No Events :)</p> -->\n\n      <img style="margin-left: auto;margin-right: auto;display: block;" [src]="\'assets/imgs/defaults/noresults.jpg\'">\n\n      <br/>\n\n      <div style="text-align: center;">\n\n        <span class="itemStyle">No Events Found </span>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid class="gridStyle">\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <p class="itemStyleSubheaders">Tomorrow</p>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <p class="itemStyle" style="color:#0a72dc;" (click)="goToPage(\'SeeAllTmrwPage\')">View Details</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-slides pager="false" id="tomorrow" slidesPerView=3 style="height: 160px;" *ngIf="(appContext.tomorrowsLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject).length > 0">\n\n    <ion-slide *ngFor="let leave of appContext.tomorrowsLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject">\n\n      <ion-card>\n\n        <img style="width: 103px;height: 86px;" [src]="leave.owner.photoUrl ? leave.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'"\n\n        />\n\n        <ion-card-content>\n\n            <p style="font-weight:800; white-space: nowrap;overflow: hidden;">{{ leave?.owner?.name }}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-slide>\n\n  </ion-slides>\n\n <ion-slides pager="false" id="tomorrow" slidesPerView=1 style="height:130px;" *ngIf="(appContext.tomorrowsLeavesCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject).length == 0">\n\n    <ion-slide>\n\n      <!-- <p align="center" style="color:#0a72dc;font-weight:bold;font-size:14px">No Events :)</p> -->\n\n      <img style="margin-left: auto;margin-right: auto;display: block;" [src]="\'assets/imgs/defaults/noresults.jpg\'">\n\n      <br/>\n\n      <div style="text-align: center;">\n\n        <span class="itemStyle">No Events Found </span>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-fab right bottom>\n\n    <button style="background-color:#039be5" ion-fab mini (click)="goToPage(\'NewLeavePage\')">\n\n      <ion-icon style="color:white;" name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_context_app_context__["a" /* AppContextProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=14.js.map