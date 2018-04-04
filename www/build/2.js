webpackJsonp([2],{

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_ago_pipe_index__ = __webpack_require__(1192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_ago_pipe_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_time_ago_pipe_index__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4_time_ago_pipe_index__["TimeAgoPipeModule"]
            ],
            exports: []
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var TimeAgoPipe = (function () {
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            return years + ' years ago';
        }
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            return 2;
        }
        else if (seconds < hr) {
            return 30;
        }
        else if (seconds < day) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe = __decorate([
    core_1.Pipe({
        name: 'timeAgo',
        pure: false
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
], TimeAgoPipe);
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago-pipe.js.map

/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailsview_detailsview__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_message_toast_message__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_controllers_comments_controller__ = __webpack_require__(636);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationsPage = (function () {
    function NotificationsPage(leavesSvc, toastMP, modalCtrl, alertCtrl, appContext) {
        this.leavesSvc = leavesSvc;
        this.toastMP = toastMP;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appContext = appContext;
        var from = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date()).startOf('day').toDate();
        var to = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date()).add(90, 'days').endOf('day').toDate();
        //this.leavesSvc.searchLeavesByDateRange(from, to,this.appContext.searchedLeaves);
        this.leavesSvc.getNotifications(from, to, this.appContext.notificationLeaves);
    }
    NotificationsPage.prototype.ionViewWillLeave = function () {
        this.appContext.searchedLeaves.next([]);
    };
    NotificationsPage.prototype.approveLeave = function (leaveId) {
        this.leavesSvc.updateLeaveStatus(leaveId, 1, "Approved");
    };
    NotificationsPage.prototype.declineLeave = function (leaveId) {
        var Modaltitle = "Reject Leave";
        var Modalmsg = "Do you wish to reject this leave request?";
        this.alertCtrl.presentPrompt(leaveId, Modaltitle, Modalmsg, 2);
    };
    NotificationsPage.prototype.markAsRead = function (leaveId) {
        this.leavesSvc.markAsRead(leaveId);
    };
    NotificationsPage.prototype.onSwipe = function (leave) {
        if (this.canShowClear(leave)) {
            this.markAsRead(leave.leaveId);
        }
        else {
            this.approveLeave(leave.leaveId);
        }
    };
    NotificationsPage.prototype.canShowClear = function (leave) {
        return leave.isMyLeave && !leave.isRead && !this.canShowApproveDecline(leave);
    };
    NotificationsPage.prototype.canShowApproveDecline = function (leave) {
        return !leave.isMyLeave && (leave.owner.manager.email == this.appContext.myProfileObject.email);
    };
    NotificationsPage.prototype.openModal = function (leave) {
        console.log(leave);
        var leaveObj = {
            name: leave.owner.name,
            from: leave.from,
            to: leave.to,
            reason: leave.reason,
            photoUrl: leave.owner.photoUrl
        };
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__detailsview_detailsview__["a" /* DetailsviewPage */], leaveObj);
        myModal.present();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\notifications\notifications.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Notifications</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let leave of appContext.notificationLeavesCollection| filterNotification: appContext.myReporteesCollection: appContext.myProfileObject">\n\n            <ion-item (click)="openModal(leave)">\n\n                <ion-avatar item-start>\n\n                    <img [src]="leave.owner.photoUrl ? leave.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'">\n\n                </ion-avatar>\n\n                <div class="info1">\n\n                    <h2>{{ leave?.owner?.name }}</h2>\n\n                    <span style="clear:both"></span>\n\n                    <p>\n\n                        <ion-icon name="alarm"></ion-icon> {{leave?.from | date : "MMM/dd"}} - {{leave?.to | date:"MMM/dd"}}, {{leave?.to | date:"yyyy"}}\n\n                    </p>\n\n                </div>\n\n                <div class="info2">\n\n                    <p item-content item-end class="ts-globe">{{leave?.createdAt | timeAgo }}\n\n                        <ion-icon name="md-globe"></ion-icon>\n\n                    </p>\n\n                </div>\n\n                <div class="info3" *ngIf="leave.status == 1 || leave.status == 2">\n\n                    <ion-icon name="md-checkmark-circle-outline" item-end [color]="leave.status == 1 ? \'primary\' : \'danger\'" style="margin-bottom:-10px;font-size:15px;"></ion-icon>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item-options side="left" (ionSwipe)="onSwipe(leave)">\n\n                <button ion-button color="primary" *ngIf="canShowClear(leave)" expandable (click)="markAsRead(leave.leaveId)">Clear</button>\n\n                <button ion-button color="secondary" *ngIf="canShowApproveDecline(leave) && leave.status == 0" expandable (click)="approveLeave(leave.leaveId)">Approve</button>\n\n            </ion-item-options>\n\n            <ion-item-options side="right">\n\n                    <button ion-button color="primary" *ngIf="canShowClear(leave)" expandable (click)="markAsRead(leave.leaveId)">Clear</button>\n\n                <button ion-button color="danger" *ngIf="canShowApproveDecline(leave) && leave.status == 0" expandable (click)="declineLeave(leave.leaveId)">Decline</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PITU\Documents\GitHub\etes-rxjs\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_message_toast_message__["a" /* ToastMessageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__components_controllers_comments_controller__["a" /* commentsController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__["a" /* AppContextProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(1);
var time_ago_pipe_1 = __webpack_require__(1172);
var TimeAgoPipeModule = (function () {
    function TimeAgoPipeModule() {
    }
    return TimeAgoPipeModule;
}());
TimeAgoPipeModule = __decorate([
    core_1.NgModule({
        declarations: [time_ago_pipe_1.TimeAgoPipe],
        exports: [time_ago_pipe_1.TimeAgoPipe],
    })
], TimeAgoPipeModule);
exports.TimeAgoPipeModule = TimeAgoPipeModule;
__export(__webpack_require__(1172));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=2.js.map