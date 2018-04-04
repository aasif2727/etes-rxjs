webpackJsonp([11],{

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTeamPageModule", function() { return ReportTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_team__ = __webpack_require__(1171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportTeamPageModule = (function () {
    function ReportTeamPageModule() {
    }
    ReportTeamPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_team__["a" /* ReportTeamPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report_team__["a" /* ReportTeamPage */]),
            ],
        })
    ], ReportTeamPageModule);
    return ReportTeamPageModule;
}());

//# sourceMappingURL=report-team.module.js.map

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

/***/ })

});
//# sourceMappingURL=11.js.map