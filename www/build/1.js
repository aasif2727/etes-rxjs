webpackJsonp([1],{

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report__ = __webpack_require__(1192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportPageModule = (function () {
    function ReportPageModule() {
    }
    ReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */]),
            ],
        })
    ], ReportPageModule);
    return ReportPageModule;
}());

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAnnualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportAnnualPage = (function () {
    function ReportAnnualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportAnnualPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                datasets: [{
                        label: 'Leave Count',
                        data: [12, 19, 3, 5, 2, 3, 11, 23, 15, 12, 11, 13],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(169, 159, 64, 0.2)',
                            'rgba(235, 99, 132, 0.2)',
                            'rgba(209, 162, 235, 0.2)',
                            'rgba(215, 206, 86, 0.2)',
                            'rgba(85, 192, 192, 0.2)',
                            'rgba(53, 102, 255, 0.2)',
                            'rgba(55, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(169, 159, 64, 1)',
                            'rgba(235, 99, 132, 1)',
                            'rgba(209, 162, 235, 1)',
                            'rgba(215, 206, 86, 1)',
                            'rgba(85, 192, 192, 1)',
                            'rgba(53, 102, 255, 1)',
                            'rgba(55, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], ReportAnnualPage.prototype, "barCanvas", void 0);
    ReportAnnualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-annual',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-annual\report-annual.html"*/'<ion-content padding>\n  <ion-card class="report-card">\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-annual\report-annual.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object])
    ], ReportAnnualPage);
    return ReportAnnualPage;
    var _a, _b;
}());

//# sourceMappingURL=report-annual.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportReporteePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportReporteePage = (function () {
    function ReportReporteePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportReporteePage.prototype.ionViewDidLoad = function () {
        var temp = {
            type: 'doughnut',
            data: {
                labels: ["EL", "CL", "Others"],
                datasets: [{
                        label: 'Leave Count',
                        data: [12, 19, 3],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            // "#FFCE56",
                            // "#FF6384",
                            // "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.5)'
                        ]
                    }]
            }
        };
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, temp);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ReportReporteePage.prototype, "doughnutCanvas", void 0);
    ReportReporteePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-reportee',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-reportee\report-reportee.html"*/'<ion-content padding>\n  <ion-card class="report-card">\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-reportee\report-reportee.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object])
    ], ReportReporteePage);
    return ReportReporteePage;
    var _a, _b;
}());

//# sourceMappingURL=report-reportee.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportTeamPage = (function () {
    function ReportTeamPage(navCtrl, navParams, _fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fireStore = _fireStore;
        this.doughnutChartType = 'doughnut';
    }
    ReportTeamPage.prototype.groupByMonth = function (data) {
        var res = data.reduce(function (total, item) {
            // Get No.of Days 'from' $ 'to'
            var noOfdays = [];
            for (var date = item.from; date <= item.to; date.setDate(date.getDate() + 1)) {
                noOfdays.push(new Date(date));
            }
            //Group No of Leaves Based on Month
            var monthData = noOfdays.reduce(function (monthTotal, dateItem) {
                var monthID = dateItem.getMonth();
                var year = dateItem.getFullYear();
                var key = monthID.toString() + '-' + year.toString();
                monthTotal[key] = monthTotal[key] || [];
                monthTotal[key].push(dateItem);
                return monthTotal;
            }, {});
            var monthKey = Object.keys(monthData);
            for (var i = 0; i < monthKey.length; i++) {
                total[monthKey[i]] = total[monthKey[i]] || 0;
                total[monthKey[i]] = total[monthKey[i]] + monthData[monthKey[i]].length;
            }
            return total;
        }, {});
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var labels = Object.keys(res);
        var monthLabel = labels.map(function (t) {
            var arrIndex = t.split('-');
            var index = arrIndex[0];
            var year = arrIndex[1];
            return months[index] + '-' + year;
        });
        var monthData = labels.map(function (y) {
            return res[y];
        });
        var dataSet = {};
        dataSet['label'] = monthLabel;
        dataSet['data'] = monthData;
        return dataSet;
    };
    ReportTeamPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var leavesCollectionRef = this._fireStore.collection('eLeaves', function (ref) { return ref
            .where("from", ">=", new Date())
            .orderBy("from", "asc"); }).valueChanges();
        leavesCollectionRef.subscribe(function (arr) {
            var data = _this.groupByMonth(arr);
            _this.doughnutChartData = data['data'];
            _this.doughnutChartLabels = data['label'];
        });
    };
    ReportTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-team',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-team\report-team.html"*/'<ion-content padding>\n\n  <ion-card class="report-card">\n\n    <ion-card-header>\n\n      Line Chart\n\n    </ion-card-header>\n\n    <ion-card-content *ngIf="doughnutChartData">\n\n        <div style="display: block">\n\n<!--            <canvas baseChart-->\n\n<!--            [data]="doughnutChartData"-->\n\n<!--            [labels]="doughnutChartLabels"-->\n\n<!--            [chartType]="doughnutChartType"-->\n\n<!--></canvas>-->\n\n          </div>\n\n\n\n    </ion-card-content>\n\n \n\n\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report-team\report-team.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object])
    ], ReportTeamPage);
    return ReportTeamPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=report-team.js.map

/***/ }),

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_annual_report_annual__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_team_report_team__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_reportee_report_reportee__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_leave_service_leave_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_date_formatter__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_context_app_context__ = __webpack_require__(66);
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








var ReportPage = (function () {
    function ReportPage(navCtrl, leaveService, appContext, navParams) {
        this.navCtrl = navCtrl;
        this.leaveService = leaveService;
        this.appContext = appContext;
        this.navParams = navParams;
        this.userContext = JSON.parse(localStorage.getItem('userContext'));
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__report_annual_report_annual__["a" /* ReportAnnualPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__report_team_report_team__["a" /* ReportTeamPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__report_reportee_report_reportee__["a" /* ReportReporteePage */];
        this.user = {};
        this.annualCount = [];
        this.user = this.appContext.myProfileObject;
        this.userId = this.user.email;
        this.isManager = this.user.isManager;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
    };
    ReportPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isManager == "true")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.leaveService
                                .getLeavesByUser(this.userId, true)
                                .subscribe(function (result) {
                                Object(__WEBPACK_IMPORTED_MODULE_6__helper_date_formatter__["a" /* buildChartData */])(result);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.leaveService
                            .getLeavesByUser(this.userId, false)
                            .subscribe(function (result) {
                            Object(__WEBPACK_IMPORTED_MODULE_6__helper_date_formatter__["a" /* buildChartData */])(result);
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Reports</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n          <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Annual" tabIcon="chat"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Team" tabIcon="chat"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Individual" tabIcon="chat"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_leave_service_leave_service__["a" /* LeaveServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_leave_service_leave_service__["a" /* LeaveServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _d || Object])
    ], ReportPage);
    return ReportPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=report.js.map

/***/ })

});
//# sourceMappingURL=1.js.map