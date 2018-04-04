webpackJsonp([19],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveServicev2Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_service_email_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_message_toast_message__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaveServicev2Provider = (function () {
    function LeaveServicev2Provider(store, appContext, emailSP, toastMP) {
        var _this = this;
        this.store = store;
        this.appContext = appContext;
        this.emailSP = emailSP;
        this.toastMP = toastMP;
        this.appContext.myAccount.subscribe(function (account) {
            if (account) {
                _this.initHome();
            }
        });
        this.initHome();
    }
    LeaveServicev2Provider.prototype.initHome = function () {
        //console.log('Hello');
        console.log(this.appContext.myProfileObject);
        this.getTodaysLeaves();
        this.getTomorrowsLeaves();
        this.appContext.searchedLeaves.next([]);
    };
    LeaveServicev2Provider.prototype.getTeams = function () {
        return this.store.collection('eTeam', function (ref) { return ref; })
            .valueChanges();
    };
    LeaveServicev2Provider.prototype.getDateRange = function (date) {
        return {
            start: new Date(new Date(date).setHours(0, 0, 0, 0)),
            end: new Date(new Date(date).setHours(23, 59, 59, 0))
        };
    };
    LeaveServicev2Provider.prototype.getTodaysLeaves = function () {
        var _this = this;
        var today = new Date();
        var range = this.getDateRange(today);
        this.getApprovedLeaves(range.start)
            .subscribe(function (leaves) {
            _this.appContext.todaysLeaves.next([]);
            _this.updateSubject(leaves, range, _this.appContext.todaysLeaves);
        });
    };
    LeaveServicev2Provider.prototype.updateSubject = function (leaves, range, subject) {
        if (leaves && leaves.length > 0) {
            var results = [];
            leaves.forEach(function (leave, lIndex, lArray) {
                if (leave.from <= range.end) {
                    results.push(leave);
                }
                if (lIndex == lArray.length - 1) {
                    subject.next(results);
                }
            });
        }
    };
    LeaveServicev2Provider.prototype.getTomorrowsLeaves = function () {
        var _this = this;
        var tomorrow = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date()).add(1, 'days');
        var range = this.getDateRange(tomorrow);
        this.getApprovedLeaves(range.start)
            .subscribe(function (leaves) {
            _this.appContext.tomorrowsLeaves.next([]);
            _this.updateSubject(leaves, range, _this.appContext.tomorrowsLeaves);
        });
    };
    LeaveServicev2Provider.prototype.getApprovedLeaves = function (from, status) {
        if (status === void 0) { status = 1; }
        return this.store.collection('eLeaves', function (ref) { return ref
            .where('to', ">=", from)
            .where("status", "==", status); })
            .valueChanges();
    };
    LeaveServicev2Provider.prototype.getLeaves = function (from) {
        return this.store.collection('eLeaves', function (ref) { return ref
            .where('to', ">=", from); })
            .snapshotChanges();
    };
    LeaveServicev2Provider.prototype.getUnReadNotification = function (from) {
        return this.store.collection('eLeaves', function (ref) {
            return ref.where('to', ">=", from)
                .where('isRead', '==', false);
            //.orderBy('createdAt', 'asc')
        })
            .snapshotChanges();
    };
    LeaveServicev2Provider.prototype.getMyLeaves = function (from) {
        var _this = this;
        return this.store.collection('eLeaves', function (ref) { return ref
            .where('to', ">=", from)
            .where('owner', "==", _this.store.doc('eUsers/' + _this.appContext.myProfileObject.email).ref); })
            .snapshotChanges();
    };
    LeaveServicev2Provider.prototype.searchLeavesByDateRange = function (from, to, currsubject) {
        this.appContext.searchDateRange = {
            start: from,
            end: to
        };
        this.updateSearchResults(this.getLeaves(this.appContext.searchDateRange.start), currsubject);
    };
    LeaveServicev2Provider.prototype.updateSearchResults = function (source, InvokeSubject) {
        var _this = this;
        source.subscribe(function (results) {
            //this.appContext.searchedLeaves.next([]);
            InvokeSubject.next([]);
            if (results && results.length > 0) {
                var resultitems = [];
                results.forEach(function (leave, lIndex, lArray) {
                    var leaveItem = leave.payload.doc.data();
                    leaveItem.leaveId = leave.payload.doc.id;
                    resultitems.push(leaveItem);
                    if (lIndex == lArray.length - 1) {
                        //this.updateSubject(resultitems, this.appContext.searchDateRange, this.appContext.searchedLeaves);
                        _this.updateSubject(resultitems, _this.appContext.searchDateRange, InvokeSubject);
                    }
                });
            }
        });
    };
    LeaveServicev2Provider.prototype.searchMyLeavesByDateRange = function (from, to) {
        this.appContext.searchDateRange = {
            start: from,
            end: to
        };
        this.updateSearchResults(this.getMyLeaves(this.appContext.searchDateRange.start), this.appContext.myLeaves);
    };
    LeaveServicev2Provider.prototype.getMyLeavesByMonth = function (month) {
        var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(month).startOf('month').toDate();
        var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(month).endOf('month').toDate();
        this.searchMyLeavesByDateRange(startDate, endDate);
    };
    LeaveServicev2Provider.prototype.updateLeaveStatus = function (Id, newStatus, comments) {
        var _this = this;
        this.store.doc('eLeaves/' + Id).update({ status: newStatus, isRead: true, modifiedAt: new Date(), managerComments: comments })
            .then(function (status) {
            if (newStatus === 1) {
                _this.toastMP.showToast("Leave request accepted successfully!", false);
            }
            else if (newStatus === 2) {
                _this.toastMP.showToast("Leave request rejected successfully!", true);
            }
            _this.emailSP.trigger(Id, newStatus);
        }).catch(function (err) { _this.toastMP.showToast(err, true); });
    };
    LeaveServicev2Provider.prototype.addLeave = function (leave) {
        var _this = this;
        this.store.collection('eLeaves').add(leave)
            .then(function (result) {
            _this.emailSP.trigger(result.id, 0);
            _this.toastMP.showToast("Leave request submitted...", false);
        }).catch(function (err) { console.log(err); });
    };
    LeaveServicev2Provider.prototype.createLeave = function (leave) {
        var _this = this;
        if (!(this.appContext.myProfileObject && this.appContext.myProfileObject.email)) {
            this.toastMP.showToast("User context is empty...", true);
            return;
        }
        leave.from = __WEBPACK_IMPORTED_MODULE_5_moment__(leave.from).startOf('day').toDate();
        leave.to = __WEBPACK_IMPORTED_MODULE_5_moment__(leave.to).endOf('day').toDate();
        leave.createdAt = new Date();
        leave.isRead = false;
        leave.owner = this.store.doc('eUsers/' + this.appContext.myProfileObject.email).ref;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var sub = _this.store.collection('eLeaves', function (ref) { return ref
                .where('owner', "==", leave.owner)
                .where('to', ">=", leave.from); })
                .valueChanges()
                .subscribe(function (results) {
                sub.unsubscribe();
                var overlap = results.filter(function (item) { return item.from <= leave.to && (item.status == 0 || item.status == 1); });
                console.log(overlap);
                if (overlap && overlap.length > 0) {
                    _this.toastMP.showToast("This leave request is overlapping with other request...", true);
                }
                else {
                    _this.addLeave(leave);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    LeaveServicev2Provider.prototype.markAsRead = function (leaveId) {
        var _this = this;
        this.store.doc('eLeaves/' + leaveId).update({ isRead: true, modifiedAt: new Date() })
            .then(function (status) {
            console.log("Marked as read...");
        }).catch(function (err) { _this.toastMP.showToast(err, true); });
    };
    /*****************NOTIFICATION*******************/
    LeaveServicev2Provider.prototype.getNotifications = function (from, to, currsubject) {
        this.appContext.searchDateRange = {
            start: from,
            end: to
        };
        this.updateNotificationResult(this.getUnReadNotification(this.appContext.searchDateRange.start), currsubject);
    };
    LeaveServicev2Provider.prototype.updateNotificationResult = function (source, InvokeSubject) {
        var _this = this;
        source.subscribe(function (results) {
            InvokeSubject.next([]);
            if (results && results.length > 0) {
                var resultitems = [];
                results.forEach(function (leave, lIndex, lArray) {
                    var leaveItem = leave.payload.doc.data();
                    leaveItem.leaveId = leave.payload.doc.id;
                    resultitems.push(leaveItem);
                    if (lIndex == lArray.length - 1) {
                        _this.updateSubject(resultitems, _this.appContext.searchDateRange, InvokeSubject);
                    }
                });
            }
        });
    };
    LeaveServicev2Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__["a" /* AppContextProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__email_service_email_service__["a" /* EmailServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__email_service_email_service__["a" /* EmailServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__toast_message_toast_message__["a" /* ToastMessageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__toast_message_toast_message__["a" /* ToastMessageProvider */]) === "function" && _d || Object])
    ], LeaveServicev2Provider);
    return LeaveServicev2Provider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=leave-servicev2.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthServiceProvider = (function () {
    function AuthServiceProvider(afAuth, toastCtrl, db, appContext, userService) {
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.appContext = appContext;
        this.userService = userService;
        this.user = this.afAuth.authState;
    }
    AuthServiceProvider.prototype.signIn = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.userid, credentials.password);
    };
    AuthServiceProvider.prototype.forgotPassword = function (credentials) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().sendPasswordResetEmail(credentials.userid);
    };
    AuthServiceProvider.prototype.signOut = function () {
        localStorage.removeItem('myProfileObject');
        localStorage.clear();
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    AuthServiceProvider.prototype.signUp = function (credentials) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .catch(function (err) { _this.presentToast(err); return err; })
            .then(function (data) {
            return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.updateProfile({
                "displayName": credentials.name,
                "photoURL": "https://u.o0bc.com/avatars/stock/_no-user-image.gif"
            })
                .then(function () {
                return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.sendEmailVerification().then(function () {
                    var user = {
                        //uid: firebase.auth().currentUser.uid,
                        name: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.displayName,
                        email: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.email,
                        photoUrl: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.photoURL,
                        phoneNumber: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.phoneNumber,
                        manager: null,
                        team: null,
                        isManager: false
                    };
                    _this.userService.createUser(user);
                    _this.presentToast("Verfication email sent... Please check your inbox...");
                    return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
                })
                    .catch(function (err) { _this.presentToast(err); return err; });
            })
                .catch(function (err) { _this.presentToast(err); return err; });
        });
    };
    AuthServiceProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_context_app_context__["a" /* AppContextProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _e || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceProvider = (function () {
    function UserServiceProvider(afs) {
        this.afs = afs;
        this.userCollection = null;
        this.mgrCollection = null;
    }
    UserServiceProvider.prototype.getUsers = function () {
        this.userCollection = this.afs.collection('eUsers', function (ref) {
            return ref.orderBy('name', 'asc');
        });
        return this.userCollection.valueChanges();
    };
    /***GET all manager Object for DDL bind***/
    UserServiceProvider.prototype.getManagers = function () {
        this.mgrCollection = this.afs.collection('eUsers', function (ref) {
            return ref.where('isManager', '==', true)
                .orderBy('name', 'asc');
        });
        return this.mgrCollection.snapshotChanges()
            .map(function (action) {
            return action.map(function (snap) {
                var data = snap.payload.doc.data();
                var id = snap.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    /***CREATE User Object***/
    UserServiceProvider.prototype.createUser = function (user) {
        this.afs.collection('eUsers/').doc(user.email).set({
            "name": user.name,
            "email": user.email,
            "phoneNumber": user.phoneNumber,
            "isManager": user.isManager,
            "photoUrl": user.photoUrl,
            "team": null,
            "manager": null
        });
    };
    /***GET User Context details***/
    UserServiceProvider.prototype.getUserById = function (userId) {
        this.userDocument = this.afs.doc('eUsers/' + userId);
        return this.userDocument.snapshotChanges()
            .map(function (snap) {
            var userContext = snap.payload.data();
            if (snap.payload.data().manager != "" && snap.payload.data().manager != null) {
                snap.payload.data().manager.get().then(function (mgrRef) {
                    localStorage.setItem('mgrName', mgrRef.data().name);
                    localStorage.setItem('mgrEmail', mgrRef.data().email);
                });
            }
            if (snap.payload.data().team != "" && snap.payload.data().team != null) {
                snap.payload.data().team.get().then(function (tmRef) {
                    localStorage.setItem('teamName', tmRef.data().name);
                    localStorage.setItem('teamId', tmRef.data().id);
                });
            }
            return userContext;
        });
    };
    /***UPDATE User Object By Id***/
    UserServiceProvider.prototype.updateUserById = function (userId, userObj) {
        // let mgrRef = this.afs.collection("eUsers").doc(userObj.manager).ref;
        //let teamRef = this.afs.collection("eTeam").doc(userObj.team).ref
        this.userDocument = this.afs.doc('eUsers/' + userId);
        this.userDocument.update({ name: userObj.name, phoneNumber: userObj.phoneNumber });
    };
    UserServiceProvider.prototype.updatePhotoUrl = function (userId, photoUrl) {
        this.userDocument = this.afs.doc('eUsers/' + userId);
        var user = {};
        user.photoUrl = photoUrl;
        this.userDocument.update(user);
    };
    UserServiceProvider.prototype.getLoggedInUsersMetaInfo = function (userId) {
        this.userCollection = this.afs.collection('users', function (ref) {
            return ref.where("uid", "==", userId);
        });
        return this.userCollection.snapshotChanges()
            .map(function (action) {
            return action.map(function (snap) {
                var data = snap.payload.doc.data();
                var id = snap.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    UserServiceProvider.prototype.getUserByKey = function (key) {
        this.userDocument = this.afs.doc('users/' + key);
        return this.userDocument.valueChanges();
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], UserServiceProvider);
    return UserServiceProvider;
    var _a;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_v2_user_service_v2__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, appContext, leaveV2Svc, userV2Svc, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appContext = appContext;
        this.leaveV2Svc = leaveV2Svc;
        this.userV2Svc = userV2Svc;
        this.authService = authService;
        this.rootPage = "SigninPage";
        this.initializeApp();
        //debugger;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: "HomePage" },
            { title: 'Profile', component: "UserProfilePage" },
            { title: 'Leaves', component: "MyLeavesPage" },
            // { title: 'Reports', component: "ReportPage" },
            { title: 'Feedback', component: "FeedbackPage" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        if (page.component == "HomePage") {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.appContext.clearAppState();
            _this.nav.setRoot("SigninPage");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <div class="UserHeader">\n\n      <ion-title>\n\n        <ion-item class="Itemheader">\n\n          <ion-avatar item-start>\n\n            <!-- <img [src]="photoURL ? photoURL : \'assets/imgs/defaults/user.jpg\'" style="width:80px;height:80px;border-radius:50%"> -->\n\n            <img style="width: 65px;height: 65px;" [src]="(appContext.myProfileObject?.photoUrl) || \'assets/imgs/defaults/user.jpg\' ">\n\n          </ion-avatar>\n\n        </ion-item>\n\n      </ion-title>\n\n      <h2 class="UserName"> {{ (appContext.myProfileObject?.name) || "Guest" }}</h2>\n\n      <p class="UserEmail"> {{ (appContext.myProfileObject?.email)}}</p>\n\n    </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content style="background-color: #f5f5f5 !important">\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="home" item-left *ngIf="p.title == \'Home\'"></ion-icon>\n\n        <ion-icon name="contact" item-left *ngIf="p.title == \'Profile\'"></ion-icon>\n\n        <ion-icon name="card" item-start *ngIf="p.title == \'Leaves\'"></ion-icon>\n\n        <!-- <ion-icon name="stats" item-left *ngIf="p.title == \'Reports\'"></ion-icon> -->\n\n        <ion-icon name="logo-rss" item-left *ngIf="p.title == \'Feedback\'"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="signOut()">\n\n          <ion-icon name="log-out" md="md-log-out" item-start></ion-icon>\n\n          Sign Out\n\n        </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\app\app.html"*/,
            styles: ["\n  \n  @-webkit-keyframes animate {\n      from  {background-position: 0 0 }\n      to  {background-position: 100% 0  }\n\n      }\n\n\n  @keyframes animate {\n      from  {background-position: 0 0 }\n      to  {background-position: 100% 0  }\n\n      }\n\n  .UserHeader\n  {\n    height: 120px;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('assets/imgs/bg1.png') !important;\n    animation:animate 45s infinite;\n    background-color: #039be5 !important;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_context_app_context__["a" /* AppContextProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_service_v2_user_service_v2__["a" /* UserServiceV2Provider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ionic_pro_config__ = __webpack_require__(1142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppErrorHandlerProvider = (function () {
    function AppErrorHandlerProvider(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicErrorHandler */]);
        }
        catch (e) {
            console.log(e);
            // Unable to get the IonicErrorHandler provider, ensure 
            // IonicErrorHandler has been added to the providers list below
        }
    }
    AppErrorHandlerProvider.prototype.handleError = function (err) {
        __WEBPACK_IMPORTED_MODULE_2__app_ionic_pro_config__["a" /* IonicProConfig */].monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    AppErrorHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
    ], AppErrorHandlerProvider);
    return AppErrorHandlerProvider;
    var _a;
}());

//# sourceMappingURL=app-error-handler.js.map

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicProConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_pro__);

var IonicProConfig = __WEBPACK_IMPORTED_MODULE_0__ionic_pro__["Pro"].init('d215c909', {
    appVersion: "0.0.1"
});
//# sourceMappingURL=ionic.pro.config.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service_email_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(afs, emailSvc) {
        this.afs = afs;
        this.emailSvc = emailSvc;
        this.leaveCollection = null;
    }
    NotificationService.prototype.acceptleave = function (leaveId, isManager, mgrId) {
        var _this = this;
        this.leaveDocument = this.afs.doc('eLeaves/' + leaveId);
        if (isManager) {
            this.leaveDocument.update({ status: 1, modifiedAt: new Date() })
                .then(function (result) {
                _this.emailSvc.trigger(leaveId, 1);
            }).catch(function (err) { console.log(err); });
            console.log('status-1');
        }
        else {
            this.leaveDocument.update({ isRead: true });
            console.log('archieved');
        }
    };
    NotificationService.prototype.declineLeave = function (leaveId, isManager, comments) {
        var _this = this;
        this.leaveDocument = this.afs.doc('eLeaves/' + leaveId);
        if (isManager) {
            this.leaveDocument.update({ status: 2, modifiedAt: new Date(), managerComments: comments })
                .then(function (result) {
                _this.emailSvc.trigger(leaveId, 2);
            }).catch(function (err) { console.log(err); });
            console.log('status-2');
        }
        else {
            this.leaveDocument.update({ isRead: true });
            console.log('archieved');
        }
    };
    NotificationService.prototype.archieveLeave = function (leaveId) {
        this.leaveDocument = this.afs.doc('eLeaves/' + leaveId);
        this.leaveDocument.update({ isRead: true });
        console.log('archieved');
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__email_service_email_service__["a" /* EmailServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service_email_service__["a" /* EmailServiceProvider */]) === "function" && _b || Object])
    ], NotificationService);
    return NotificationService;
    var _a, _b;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
// AF2 Settings
var FirebaseConfig = {
    apiKey: "AIzaSyA9t3RPOQndRBcyB0xXmceaVOxTh0eDwKQ",
    authDomain: "ee-lms.firebaseapp.com",
    databaseURL: "https://ee-lms.firebaseio.com",
    projectId: "ee-lms",
    storageBucket: "ee-lms.appspot.com",
    messagingSenderId: "750036322505"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = "https://elms-admin.herokuapp.com/";
var EmailServiceProvider = (function () {
    function EmailServiceProvider(http) {
        this.http = http;
    }
    EmailServiceProvider.prototype.trigger = function (leaveId, status) {
        var _this = this;
        var url = BASE_URL + "email/trigger/";
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.getIdToken(true).then(function (token) {
            switch (status) {
                case 0: {
                    url += "requested";
                    break;
                }
                case 1: {
                    url += "approved";
                    break;
                }
                case 2: {
                    url += "declined";
                    break;
                }
                case 3: {
                    url += "cancelled";
                    break;
                }
                default: break;
            }
            url += "?leaveId=" + leaveId;
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("fb-user-token", token);
            console.log(token);
            _this.http.post(url, null, { headers: headers }).subscribe(function (res) {
                console.log(res);
            }, function (err) { console.log(err); });
        });
    };
    EmailServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], EmailServiceProvider);
    return EmailServiceProvider;
    var _a;
}());

//# sourceMappingURL=email-service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastMessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastMessageProvider = (function () {
    function ToastMessageProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastMessageProvider Provider');
    }
    ToastMessageProvider.prototype.showToast = function (msg, err) {
        var Class;
        if (err)
            Class = "toast-error";
        else
            Class = "toast-success";
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom',
            cssClass: Class
        });
        toast.present(toast);
    };
    ToastMessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]) === "function" && _a || Object])
    ], ToastMessageProvider);
    return ToastMessageProvider;
    var _a;
}());

//# sourceMappingURL=toast-message.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceV2Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserServiceV2Provider = (function () {
    function UserServiceV2Provider(auth, store, appContext) {
        var _this = this;
        this.auth = auth;
        this.store = store;
        this.appContext = appContext;
        this.appContext.myAccount.subscribe(function (account) {
            _this.getUserProfileByEmailID(account.email).subscribe(function (profile) {
                if (profile != null) {
                    _this.getUserProfileByEmailID(profile.manager.id).subscribe(function (manager) {
                        profile.manager = manager;
                        var teamId = profile.team.id;
                        _this.getTeamByTeamID(teamId).subscribe(function (team) {
                            profile.team = team;
                            _this.appContext.myProfile.next(profile);
                            _this.getUsersByTeamID(teamId).subscribe(function (teamMembers) {
                                teamMembers.forEach(function (teamMember, i, arr) {
                                    teamMember.manager = profile.manager;
                                    teamMember.team = profile.team;
                                    if (i == arr.length - 1) {
                                        _this.appContext.myTeamMembers.next(teamMembers);
                                    }
                                });
                            });
                        });
                    });
                }
                if (profile != null && profile.isManager) {
                    _this.getReporteesByManagerEmailID(profile.email).subscribe(function (reportees) {
                        if (reportees || reportees.length == 0) {
                            _this.appContext.myReportees.next([]);
                        }
                        reportees.forEach(function (reportee, i, arr) {
                            reportee.manager = profile;
                            reportee.team.get().then(function (team) {
                                reportee.team = team.data();
                                if (i == arr.length - 1) {
                                    _this.appContext.myReportees.next(reportees);
                                }
                            });
                        });
                    });
                }
            });
        });
    }
    UserServiceV2Provider.prototype.getUserProfileByEmailID = function (emailId) {
        return this.store.doc('eUsers/' + emailId).valueChanges();
    };
    UserServiceV2Provider.prototype.getUsersByTeamID = function (teamId) {
        var _this = this;
        return this.store.collection('eUsers', function (ref) { return ref.where('team', "==", _this.store.doc('eTeam/' + teamId).ref); }).valueChanges();
    };
    UserServiceV2Provider.prototype.getTeamByTeamID = function (teamId) {
        return this.store.doc("eTeam/" + teamId).valueChanges();
    };
    UserServiceV2Provider.prototype.getReporteesByManagerEmailID = function (emailId) {
        var _this = this;
        return this.store.collection('eUsers', function (ref) { return ref.where('manager', "==", _this.store.doc('eUsers/' + emailId).ref); }).valueChanges();
    };
    UserServiceV2Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_context_app_context__["a" /* AppContextProvider */]) === "function" && _c || Object])
    ], UserServiceV2Provider);
    return UserServiceV2Provider;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-service-v2.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 269;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-leave-request/create-leave-request.module": [
		1148,
		17
	],
	"../pages/detailsview/detailsview.module": [
		1149,
		18
	],
	"../pages/edit-user-profile/edit-user-profile.module": [
		1150,
		16
	],
	"../pages/feedback/feedback.module": [
		1151,
		8
	],
	"../pages/forgot-password/forgot-password.module": [
		1162,
		15
	],
	"../pages/home/home.module": [
		1152,
		14
	],
	"../pages/my-leaves/my-leaves.module": [
		1153,
		0
	],
	"../pages/new-leave/new-leave.module": [
		1154,
		7
	],
	"../pages/notifications/notifications.module": [
		1155,
		2
	],
	"../pages/report-annual/report-annual.module": [
		1156,
		13
	],
	"../pages/report-reportee/report-reportee.module": [
		1157,
		12
	],
	"../pages/report-team/report-team.module": [
		1158,
		11
	],
	"../pages/report/report.module": [
		1159,
		1
	],
	"../pages/search-leaves/search-leaves.module": [
		1160,
		6
	],
	"../pages/seeall-tdy/seeall-tdy.module": [
		1161,
		5
	],
	"../pages/seeall-tmrw/seeall-tmrw.module": [
		1163,
		4
	],
	"../pages/signin/signin.module": [
		1164,
		3
	],
	"../pages/signup/signup.module": [
		1165,
		10
	],
	"../pages/user-profile/user-profile.module": [
		1166,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 312;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trim_text_trim_text__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_custom_pipe__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_name_pipe__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_name_trim__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_by_email_id_filter_by_email_id__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_by_is_manager_flag_filter_by_is_manager_flag__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_notification_filter_notification__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_by_search_filter_by_search__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__trim_text_trim_text__["a" /* TrimTextPipe */],
                __WEBPACK_IMPORTED_MODULE_2__helper_custom_pipe__["a" /* SummaryPipe */],
                __WEBPACK_IMPORTED_MODULE_3__helper_name_pipe__["a" /* NamePipe */],
                __WEBPACK_IMPORTED_MODULE_4__helper_name_trim__["a" /* NametrimPipe */],
                __WEBPACK_IMPORTED_MODULE_5__filter_by_email_id_filter_by_email_id__["a" /* FilterByEmailIdPipe */],
                __WEBPACK_IMPORTED_MODULE_6__filter_by_is_manager_flag_filter_by_is_manager_flag__["a" /* FilterByIsManagerFlagPipe */],
                __WEBPACK_IMPORTED_MODULE_7__filter_notification_filter_notification__["a" /* FilterNotificationPipe */],
                __WEBPACK_IMPORTED_MODULE_8__filter_by_search_filter_by_search__["a" /* filterBySearchPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__trim_text_trim_text__["a" /* TrimTextPipe */],
                __WEBPACK_IMPORTED_MODULE_2__helper_custom_pipe__["a" /* SummaryPipe */],
                __WEBPACK_IMPORTED_MODULE_3__helper_name_pipe__["a" /* NamePipe */],
                __WEBPACK_IMPORTED_MODULE_4__helper_name_trim__["a" /* NametrimPipe */],
                __WEBPACK_IMPORTED_MODULE_5__filter_by_email_id_filter_by_email_id__["a" /* FilterByEmailIdPipe */],
                __WEBPACK_IMPORTED_MODULE_6__filter_by_is_manager_flag_filter_by_is_manager_flag__["a" /* FilterByIsManagerFlagPipe */],
                __WEBPACK_IMPORTED_MODULE_7__filter_notification_filter_notification__["a" /* FilterNotificationPipe */],
                __WEBPACK_IMPORTED_MODULE_8__filter_by_search_filter_by_search__["a" /* filterBySearchPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsviewPage = (function () {
    function DetailsviewPage(navCtrl, navParams, appContext, leavesSvc, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appContext = appContext;
        this.leavesSvc = leavesSvc;
        this.viewCtrl = viewCtrl;
        this.name = this.navParams.get('name');
        this.from = this.navParams.get('from');
        this.to = this.navParams.get('to');
        this.reason = this.navParams.get('reason');
        this.photoUrl = this.navParams.get('photoUrl');
        this.getOverlappedLeaves(this.from, this.to);
    }
    DetailsviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsviewPage');
    };
    DetailsviewPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DetailsviewPage.prototype.getOverlappedLeaves = function (frDate, toDate) {
        if (frDate != "" && toDate != "") {
            this.leavesSvc.searchLeavesByDateRange(frDate, toDate, this.appContext.duringthistimeleaves);
        }
    };
    DetailsviewPage.prototype.getColor = function (status) {
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
    DetailsviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailsview',template:/*ion-inline-start:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\detailsview\detailsview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n            <ion-icon (click)="closeModal()" name="md-arrow-round-back"></ion-icon> &nbsp;\n\n            View\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card class="cardBorder" [ngStyle]="{\'border-left-color\':getColor(status)}">\n\n    <div class="itemStyle">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="photoUrl ? photoUrl : \'assets/imgs/defaults/user.jpg\'">\n\n        </ion-avatar>\n\n        <h2>{{name }}</h2>\n\n        <p>{{createdAt | date : "MMM d, y" }}</p>\n\n      </ion-item>\n\n    </div>\n\n    <hr>\n\n    <ion-card-content>\n\n      <div class="contentStyle">\n\n        <p> Hey!!! I will be on leave from\n\n          <span class="FontAvatar">{{from | date : "MMM d, y"}}</span> to\n\n          <span class="FontAvatar">{{to | date : "MMM d, y"}}</span> due to\n\n          <span class="FontAvatar">{{reason }}</span>\n\n        </p>\n\n      </div>\n\n    </ion-card-content>\n\n    <hr>\n\n  </ion-card>\n\n\n\n<div *ngIf="appContext.duringthisTimeCollection">\n\n  <h3 style="position: relative;left: 6px;">During This Time</h3>\n\n\n\n  <ion-list>\n\n    <ion-item  *ngFor="let res of appContext.duringthisTimeCollection | filterByIsManagerFlag: appContext.myTeamMembersCollection: appContext.myReporteesCollection: appContext.myProfileObject">\n\n      <ion-thumbnail item-start>\n\n        <img [src]="res.owner.photoUrl ? res.owner.photoUrl : \'assets/imgs/defaults/user.jpg\'">\n\n      </ion-thumbnail>\n\n      <h2 class="itemStyle">{{res?.owner?.name }}</h2>\n\n      <p class="contentStyle"> {{res?.owner?.team?.name }}</p>\n\n\n\n      <p>{{res?.from | date : "MMM d, y"}}&nbsp;\n\n        <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;\n\n        {{res?.to | date : "MMM d, y"}}\n\n      </p>\n\n      <hr>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\xakhan271\Documents\GitHub\elms\src\pages\detailsview\detailsview.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_app_context_app_context__["a" /* AppContextProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */]) === "function" && _e || Object])
    ], DetailsviewPage);
    return DetailsviewPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=detailsview.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveStatus; });
var LeaveStatus;
(function (LeaveStatus) {
    LeaveStatus[LeaveStatus["Requested"] = 0] = "Requested";
    LeaveStatus[LeaveStatus["Accepted"] = 1] = "Accepted";
    LeaveStatus[LeaveStatus["Declined"] = 2] = "Declined";
    LeaveStatus[LeaveStatus["Cancelled"] = 3] = "Cancelled";
})(LeaveStatus || (LeaveStatus = {}));
//# sourceMappingURL=leavestatus.enum.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commentsController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var commentsController = (function () {
    function commentsController(_commentsPopup, _leaveService) {
        this._commentsPopup = _commentsPopup;
        this._leaveService = _leaveService;
    }
    commentsController.prototype.presentPrompt = function (LeaveID, title, alertMsg, leaveStatus) {
        var _this = this;
        var alert = this._commentsPopup.create({
            title: title,
            message: alertMsg,
            inputs: [
                {
                    name: 'comments',
                    placeholder: 'Comments'
                }
            ],
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this._leaveService.updateLeaveStatus(LeaveID, leaveStatus, data.comments);
                    }
                }
            ]
        });
        alert.present();
    };
    commentsController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */]) === "function" && _b || Object])
    ], commentsController);
    return commentsController;
    var _a, _b;
}());

//# sourceMappingURL=comments-controller.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamServiceProvider = (function () {
    function TeamServiceProvider(afs) {
        this.afs = afs;
        this.teamCollection = null;
    }
    TeamServiceProvider.prototype.getTeams = function () {
        this.teamCollection = this.afs.collection('eTeam');
        return this.teamCollection.valueChanges();
    };
    TeamServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], TeamServiceProvider);
    return TeamServiceProvider;
    var _a;
}());

//# sourceMappingURL=team-service.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_leavestatus_enum__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_date_formatter__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_service_email_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Observable } from 'rxjs/Observable';
//import { mergeMap } from 'rxjs/operators';
//import { forkJoin } from "rxjs/observable/forkJoin";
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/mergeMap';
var LeaveServiceProvider = (function () {
    function LeaveServiceProvider(afs, auth, emailSvc, db) {
        this.afs = afs;
        this.auth = auth;
        this.emailSvc = emailSvc;
        this.db = db;
        this.ukey = localStorage.getItem('myId');
        this.leaveCollection = null;
        this.filteredLeaveCollection = null;
        this.LeaveReq = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
    }
    LeaveServiceProvider.prototype.createNewLeave = function (leave) {
        var _this = this;
        var userId = "madhithya@csc.com";
        leave.status = __WEBPACK_IMPORTED_MODULE_2__models_leavestatus_enum__["a" /* LeaveStatus */].Requested;
        leave.createdAt = new Date();
        leave.from = new Date(leave.from);
        leave.to = new Date(leave.to);
        leave.isRead = false;
        leave.owner = this.afs.collection("eUsers").doc(userId).ref;
        this.afs.collection('eLeaves').add(leave).then(function (newLeave) {
            if (newLeave && newLeave.id) {
                _this.emailSvc.trigger(newLeave.id, 0);
            }
        });
    };
    LeaveServiceProvider.prototype.getLeavesByUser = function (ukey, isManager) {
        if (isManager) {
            this.leaveCollection = this.afs.collection('eLeaves', function (ref) {
                return ref.where('status', '==', 0);
            });
        }
        else {
            this.leaveCollection = this.afs.collection('eLeaves', function (ref) {
                return ref.where('isRead', '==', false).orderBy("from", "asc");
            });
        }
        return this.leaveCollection.snapshotChanges()
            .map(function (action) {
            return action.map(function (snap) {
                var data = snap.payload.doc.data();
                var id = snap.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    LeaveServiceProvider.prototype.getLeavesByStatusForUser = function (userId, status) {
        this.leaveCollection = this.afs.collection('leaves', function (ref) {
            return ref.where('userId', '==', userId)
                .where('status', '==', status)
                .orderBy('from', 'desc');
        });
        return this.leaveCollection.valueChanges();
    };
    LeaveServiceProvider.prototype.getBadgeCount = function (isManager, emailId) {
        if (isManager == "true")
            return this.getLeavesByUser(emailId, true);
        else
            return this.getLeavesByUser(emailId, false);
    };
    LeaveServiceProvider.prototype.getMyLeaveHistory = function (ukey) {
        this.leaveCollection = this.afs.collection('leaves', function (ref) {
            return ref.where('userId', '==', ukey);
        });
        return this.leaveCollection.valueChanges();
    };
    LeaveServiceProvider.prototype.getMyLeaveHistory_mylvs = function (ukey) {
        var leavesCollectionRef = this.db.collection('eLeaves').snapshotChanges();
        return leavesCollectionRef;
    };
    LeaveServiceProvider.prototype.CancelLeave = function (leaveId, comments) {
        var _this = this;
        console.log(leaveId);
        console.log(comments);
        this.leaveDocument = this.afs.doc('eLeaves/' + leaveId);
        this.leaveDocument.update({ status: 3, cancellationComments: comments, CancelledAt: new Date() })
            .then(function (result) {
            _this.emailSvc.trigger(leaveId, 3);
        }).catch(function (err) { console.log(err); });
    };
    LeaveServiceProvider.prototype.getLeaveByDuration = function (isManager, teamId, startDate, endDate, userId) {
        var _this = this;
        if (isManager == 'true') {
            if (startDate != "" && endDate == "") {
                var unixFrmDt_1 = Object(__WEBPACK_IMPORTED_MODULE_4__helper_date_formatter__["b" /* formatDateUsingMoment */])(startDate, 'U');
                this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                    return ref.where('unixFrDate', '>=', unixFrmDt_1)
                        .where('managerId', '==', _this.ukey)
                        .orderBy('unixFrDate', 'asc');
                });
            }
            else {
                this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                    return ref.where('managerId', '==', _this.ukey).orderBy('unixFrDate', 'asc');
                });
            }
            return this.filteredLeaveCollection.valueChanges();
        }
        else {
            if (startDate != "" && endDate == "") {
                var unixFrmDt_2 = Object(__WEBPACK_IMPORTED_MODULE_4__helper_date_formatter__["b" /* formatDateUsingMoment */])(startDate, 'U');
                this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                    return ref.where('unixFrDate', '>=', unixFrmDt_2)
                        .where('teamId', '==', teamId)
                        .orderBy('unixFrDate', 'asc');
                });
            }
            else {
                this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                    return ref.where('teamId', '==', teamId).orderBy('unixFrDate', 'asc');
                });
            }
            return this.filteredLeaveCollection.valueChanges();
        }
    };
    LeaveServiceProvider.prototype.getLeaveByDateRange = function (isManager, teamId, startDate, endDate, userId) {
        if (isManager && startDate != null && endDate != null) {
            this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                return ref.where('from', '>=', startDate)
                    .orderBy('from', 'asc');
            });
        }
        else {
            this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                return ref.where('from', '>=', startDate)
                    .orderBy('from', 'asc');
            });
        }
        return this.filteredLeaveCollection.snapshotChanges()
            .map(function (action) {
            return action.map(function (snap) {
                var data = snap.payload.doc.data();
                var id = snap.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    LeaveServiceProvider.prototype.getLeavelstByDateRange = function (isManager, teamId, startDate, endDate, userId) {
        if (isManager == 'true' && startDate != null && endDate != null) {
            this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                return ref.where('from', '<=', startDate)
                    .where('managerId', '==', userId)
                    .where('status', '==', 1);
            });
        }
        else {
            this.filteredLeaveCollection = this.afs.collection('leaves', function (ref) {
                return ref.where('from', '<=', startDate)
                    .where('teamId', '==', teamId)
                    .where('status', '==', 1);
            });
        }
        return this.filteredLeaveCollection.valueChanges();
    };
    LeaveServiceProvider.prototype.getTdyandTmrwleavelist = function (isManager, teamId, startDate, userId) {
        var usersCollectionRef = this.db.collection('eUsers').valueChanges();
        usersCollectionRef.subscribe(function (dd) {
        });
        var fromDTTM = new Date(startDate);
        var leavesCollectionRef = this.db.collection('eLeaves', function (ref) { return ref
            .where("to", ">=", fromDTTM)
            .where("status", "==", 1); }).valueChanges();
        return leavesCollectionRef;
    };
    LeaveServiceProvider.prototype.getExistingleavelist = function (isManager, teamId, startDate, userId, todate) {
        var _this = this;
        var usersCollectionRef = this.db.collection('eUsers').valueChanges();
        usersCollectionRef.subscribe(function (dd) {
        });
        var fromDTTM = new Date(startDate);
        var leavesCollectionRef = this.db.collection('eLeaves', function (ref) { return ref
            .where("to", ">=", fromDTTM); }).snapshotChanges();
        this.subscribe = leavesCollectionRef.subscribe(function (leaves) {
            _this.lent = 0;
            leaves.forEach(function (leaveItem) {
                var leavesArray = leaveItem.payload.doc.data();
                leavesArray.leaveId = leaveItem.payload.doc.id;
                if (leavesArray.from <= todate && leavesArray.owner.id == userId && leavesArray.status <= 1) {
                    _this.lent = _this.lent + 1;
                }
            });
            _this.LeaveReq.next(_this.lent);
        });
        // return leavesCollectionRef;
    };
    LeaveServiceProvider.prototype.CreateNewleave = function () {
        return this.LeaveReq.asObservable();
    };
    LeaveServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__email_service_email_service__["a" /* EmailServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__email_service_email_service__["a" /* EmailServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _d || Object])
    ], LeaveServiceProvider);
    return LeaveServiceProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=leave-service.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateDays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateUsingMoment; });
/* unused harmony export diffOfDaysOfDateRange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

function calculateDays(startDate, endDate) {
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var start_ms = __WEBPACK_IMPORTED_MODULE_0_moment__(startDate, 'MM/DD/YYYY').milliseconds();
    var end_ms = __WEBPACK_IMPORTED_MODULE_0_moment__(endDate, 'MM/DD/YYYY').milliseconds();
    var difference_ms = Math.abs(end_ms - start_ms);
    return Math.round(difference_ms / ONE_DAY);
}
function buildChartData(result) {
    var annualData = [];
    if (result.length > 0) {
        result.forEach(function (lv) {
            var days = calculateDays(lv.from, lv.to);
            annualData.push(days);
        });
    }
}
function formatDateUsingMoment(dateVal, formatSig) {
    var result;
    switch (formatSig) {
        case 'L':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).format("L"); //09/04/1986
            break;
        case 'LL':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).format("LL"); //September 4, 1986
            break;
        case 'll':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).format("ll"); //Sep 4, 1986
            break;
        case 'MM/DD/YYYY':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).format("MM/DD/YYYY"); //09/04/1986
            break;
        case 'X':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).format("X"); //Unix format ~3212312
            break;
        case 'U':
            result = __WEBPACK_IMPORTED_MODULE_0_moment__(dateVal).unix(); //Unix format ~3212312
            break;
    }
    return result;
}
function diffOfDaysOfDateRange(startdDate, endDate) {
    var startDtObject = __WEBPACK_IMPORTED_MODULE_0_moment__(startdDate).toObject();
    var endDtObject = __WEBPACK_IMPORTED_MODULE_0_moment__(endDate).toObject();
    var endArr = __WEBPACK_IMPORTED_MODULE_0_moment__([endDtObject.years, endDtObject.months, endDtObject.date]);
    var startArr = __WEBPACK_IMPORTED_MODULE_0_moment__([startDtObject.years, startDtObject.months, startDtObject.date]);
    return endArr.diff(startArr, 'days');
}

//# sourceMappingURL=date-formatter.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_context_app_context__ = __webpack_require__(66);
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






var ImageProvider = (function () {
    function ImageProvider(camera, appContext, userService) {
        this.camera = camera;
        this.appContext = appContext;
        this.userService = userService;
        this.basePath = '/avatarPicture';
        this.objectToSave = new Array;
        this.user = {};
        this.takePictureOptions = {
            quality: 50,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.galleryOptions = {
            quality: 50,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true
        };
        this.user = this.appContext.myProfileObject;
    }
    //Take a picture and return a promise with the image data
    ImageProvider.prototype.uploadFromCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, image, uploadTask, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.camera.getPicture(this.takePictureOptions)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg:base64," + result;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref().child('photos/' + this.user.email + '.jpg').put(this.dataURItoBlob(image))];
                    case 2:
                        uploadTask = _a.sent();
                        this.userService.updatePhotoUrl(this.user.email, uploadTask.downloadURL);
                        return [2 /*return*/, uploadTask.downloadURL];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //open the gallery and Return a promise with the image data
    ImageProvider.prototype.uploadFromGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, image, uploadTask, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.camera.getPicture(this.galleryOptions)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg:base64," + result;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref().child('photos/' + this.user.email + '.jpg').put(this.dataURItoBlob(image))];
                    case 2:
                        uploadTask = _a.sent();
                        this.userService.updatePhotoUrl(this.user.email, uploadTask.downloadURL);
                        return [2 /*return*/, uploadTask.downloadURL];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImageProvider.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__app_context_app_context__["a" /* AppContextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_context_app_context__["a" /* AppContextProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _c || Object])
    ], ImageProvider);
    return ImageProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=image-service.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(648);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_leave_service_leave_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_app_error_handler_app_error_handler__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_notification_service_notification_service__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_team_service_team_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detailsview_detailsview__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_firebase_config__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_image_service_image_service__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_email_service_email_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_leave_servicev2_leave_servicev2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_app_context_app_context__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_toast_message_toast_message__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_service_v2_user_service_v2__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_controllers_comments_controller__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_pipes_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_img_viewer__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Import the AF2 Module























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ReportTeamPage,
                // ReportAnnualPage,
                // ReportReporteePage,
                __WEBPACK_IMPORTED_MODULE_15__pages_detailsview_detailsview__["a" /* DetailsviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                // BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-leave-request/create-leave-request.module#CreateLeaveRequestPageModule', name: 'CreateLeaveRequestPage', segment: 'create-leave-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailsview/detailsview.module#DetailsviewPageModule', name: 'DetailsviewPage', segment: 'detailsview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user-profile/edit-user-profile.module#EditUserProfilePageModule', name: 'EditUserProfilePage', segment: 'edit-user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-leaves/my-leaves.module#MyLeavesPageModule', name: 'MyLeavesPage', segment: 'my-leaves', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-leave/new-leave.module#NewLeavePageModule', name: 'NewLeavePage', segment: 'new-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-annual/report-annual.module#ReportAnnualPageModule', name: 'ReportAnnualPage', segment: 'report-annual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-reportee/report-reportee.module#ReportReporteePageModule', name: 'ReportReporteePage', segment: 'report-reportee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-team/report-team.module#ReportTeamPageModule', name: 'ReportTeamPage', segment: 'report-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-leaves/search-leaves.module#SearchLeavesPageModule', name: 'SearchLeavesPage', segment: 'search-leaves', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seeall-tdy/seeall-tdy.module#SeeAllTdyPageModule', name: 'SeeAllTdyPage', segment: 'seeall-tdy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seeall-tmrw/seeall-tmrw.module#SeeAllTmrwPageModule', name: 'SeeAllTmrwPage', segment: 'seeall-tmrw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__app_firebase_config__["a" /* FirebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_27__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_28_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ReportTeamPage,
                // ReportAnnualPage,
                // ReportReporteePage,
                __WEBPACK_IMPORTED_MODULE_15__pages_detailsview_detailsview__["a" /* DetailsviewPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_leave_service_leave_service__["a" /* LeaveServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_notification_service_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_team_service_team_service__["a" /* TeamServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__providers_image_service_image_service__["a" /* ImageProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_email_service_email_service__["a" /* EmailServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_leave_servicev2_leave_servicev2__["a" /* LeaveServicev2Provider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_user_service_v2_user_service_v2__["a" /* UserServiceV2Provider */],
                __WEBPACK_IMPORTED_MODULE_26__components_controllers_comments_controller__["a" /* commentsController */],
                __WEBPACK_IMPORTED_MODULE_23__providers_app_context_app_context__["a" /* AppContextProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_toast_message_toast_message__["a" /* ToastMessageProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */],
                [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_12__providers_app_error_handler_app_error_handler__["a" /* AppErrorHandlerProvider */] }],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContextProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppContextProvider = (function () {
    function AppContextProvider() {
        var _this = this;
        this.myAccountObject = {};
        this.myProfileObject = {};
        this.myTeamMembersCollection = [];
        this.myReporteesCollection = [];
        this.todaysLeavesCollection = [];
        this.tomorrowsLeavesCollection = [];
        this.searchedLeavesCollection = [];
        this.duringthisTimeCollection = [];
        this.notificationLeavesCollection = [];
        this.myLeavesCollection = [];
        this.getAllTeamsCollection = [];
        this.myAccount = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.myProfile = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.myTeamMembers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.myReportees = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.todaysLeaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.tomorrowsLeaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.searchedLeaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notificationLeaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.duringthistimeleaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.myLeaves = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.getAllTeams = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.searchDateRange = {};
        debugger;
        // if(!this.myProfileObject){
        //   this.myProfileObject = localStorage.getItem('myProfileObject');
        // }
        // else{
        //   this.myProfile.subscribe(profile => {
        //     this.myProfileObject = profile;
        //     localStorage.setItem('myProfileObject',profile);
        //   })
        // }
        this.myProfile.subscribe(function (profile) {
            _this.myProfileObject = profile;
            localStorage.setItem('myProfileObject', profile);
            console.log(profile);
            var jsonObj = {
                'email': profile.email,
                'empId': profile.empId,
                'isManager': profile.isManager,
                'name': profile.name,
                'phoneNumber': profile.phoneNumber,
                'photoUrl': profile.photoUrl,
                'team': profile.team,
                'manager': profile.manager
            };
            console.log(jsonObj);
        });
        this.myTeamMembers.subscribe(function (teamMates) {
            _this.myTeamMembersCollection = teamMates;
        });
        this.myReportees.subscribe(function (reportees) {
            _this.myReporteesCollection = reportees;
        });
        this.todaysLeaves.subscribe(function (leaves) {
            _this.todaysLeavesCollection = leaves;
        });
        this.tomorrowsLeaves.subscribe(function (leaves) {
            _this.tomorrowsLeavesCollection = leaves;
        });
        this.searchedLeaves.subscribe(function (leaves) {
            _this.searchedLeavesCollection = leaves;
        });
        this.duringthistimeleaves.subscribe(function (leaves) {
            _this.duringthisTimeCollection = leaves;
        });
        this.notificationLeaves.subscribe(function (leaves) {
            _this.notificationLeavesCollection = leaves;
        });
        this.getAllTeams.subscribe(function (teamslist) {
            _this.getAllTeamsCollection = teamslist;
        });
        this.myLeaves.subscribe(function (leaves) {
            leaves.forEach(function (leave) {
                leave.owner = _this.myProfileObject;
            });
            _this.myLeavesCollection = leaves;
        });
        this.clearAppState();
    }
    AppContextProvider.prototype.clearAppState = function () {
        this.myAccount.next({});
        this.myProfile.next({});
        this.myTeamMembers.next([]);
        this.myReportees.next([]);
        this.todaysLeaves.next([]);
        this.tomorrowsLeaves.next([]);
        this.searchedLeaves.next([]);
        this.duringthistimeleaves.next([]);
        this.notificationLeaves.next([]);
        this.myLeaves.next([]);
        this.getAllTeams.next([]);
    };
    AppContextProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppContextProvider);
    return AppContextProvider;
}());

//# sourceMappingURL=app-context.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimTextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TrimTextPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TrimTextPipe = (function () {
    function TrimTextPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TrimTextPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    TrimTextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'trimText',
        })
    ], TrimTextPipe);
    return TrimTextPipe;
}());

//# sourceMappingURL=trim-text.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        var actualLimit = (limit) ? limit : 50;
        if (value.length > 50) {
            return value.substr(0, actualLimit) + '...';
        }
        else {
            return value;
        }
    };
    SummaryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());

//# sourceMappingURL=custom-pipe.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__ = __webpack_require__(112);
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


var NamePipe = (function () {
    function NamePipe(userService) {
        this.userService = userService;
    }
    NamePipe.prototype.transform = function (value) {
        // debugger;
        if (!value) {
            return "NA";
        }
        if (value) {
            this.getName(value);
            if (this.name$)
                return this.name$;
            else
                return "NA";
        }
    };
    NamePipe.prototype.getName = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserByKey(key).subscribe(function (u) {
                            _this.name$ = u.name;
                            _this.photoUrl$ = u.photoUrl;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fetchname'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _a || Object])
    ], NamePipe);
    return NamePipe;
    var _a;
}());

//# sourceMappingURL=name-pipe.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NametrimPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NametrimPipe = (function () {
    function NametrimPipe() {
    }
    NametrimPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        var actVal = value.split(' ')[0];
        if (actVal.length > limit) {
            return actVal.substr(0, limit);
        }
        else {
            return actVal;
        }
    };
    NametrimPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nametrim'
        })
    ], NametrimPipe);
    return NametrimPipe;
}());

//# sourceMappingURL=name-trim.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByEmailIdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByEmailIdPipe = (function () {
    function FilterByEmailIdPipe() {
    }
    FilterByEmailIdPipe.prototype.transform = function (array, emailId) {
        if (array) {
            var results = array.filter(function (a) { return a.email == emailId; });
            if (results && results.length == 1 && results[0]) {
                return results[0].name;
            }
            return "N/A";
        }
    };
    FilterByEmailIdPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByEmailId',
        })
    ], FilterByEmailIdPipe);
    return FilterByEmailIdPipe;
}());

//# sourceMappingURL=filter-by-email-id.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByIsManagerFlagPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByIsManagerFlagPipe = (function () {
    function FilterByIsManagerFlagPipe() {
    }
    FilterByIsManagerFlagPipe.prototype.transform = function (leaves, teamCollection, reporteesCollection, myProfile) {
        var results = [];
        if (leaves && leaves.length > 0) {
            if (myProfile) {
                leaves.forEach(function (leave, i, arr) {
                    var owner = teamCollection.filter(function (t) { return (t.email == leave.owner.id || t.email == leave.owner.email); })[0];
                    if (owner) {
                        leave.owner = owner;
                    }
                    if (myProfile.isManager) {
                        var owner = reporteesCollection.filter(function (t) { return (t.email == leave.owner.id || t.email == leave.owner.email); })[0];
                        if (owner) {
                            leave.owner = owner;
                        }
                    }
                });
            }
        }
        return leaves.filter(function (leave) { return leave.owner.email; });
        ;
    };
    FilterByIsManagerFlagPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByIsManagerFlag',
        })
    ], FilterByIsManagerFlagPipe);
    return FilterByIsManagerFlagPipe;
}());

//# sourceMappingURL=filter-by-is-manager-flag.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterNotificationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNotificationPipe = (function () {
    function FilterNotificationPipe() {
    }
    FilterNotificationPipe.prototype.transform = function (leaves, reporteesCollection, myProfile) {
        var results = [];
        if (leaves && leaves.length > 0) {
            if (myProfile) {
                leaves.forEach(function (leave, i, arr) {
                    if (leave.owner.id == myProfile.email) {
                        leave.owner = myProfile;
                        leave.isMyLeave = true;
                    }
                    if (myProfile.isManager) {
                        var owner = reporteesCollection.filter(function (t) { return (t.email == leave.owner.id || t.email == leave.owner.email); })[0];
                        if (owner) {
                            leave.owner = owner;
                        }
                    }
                    if (!(leave.isMyLeave && leave.isRead) && leave.owner.email) {
                        results.push(leave);
                    }
                });
            }
        }
        return results;
    };
    FilterNotificationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterNotification',
        })
    ], FilterNotificationPipe);
    return FilterNotificationPipe;
}());

//# sourceMappingURL=filter-notification.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterBySearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var filterBySearchPipe = (function () {
    function filterBySearchPipe() {
    }
    filterBySearchPipe.prototype.transform = function (leaves, usersByteamCollection, reporteesCollection, myProfile, selectedTeam) {
        var results = [];
        if (leaves && leaves.length > 0) {
            if (myProfile) {
                leaves.forEach(function (leave, i, arr) {
                    var owner = usersByteamCollection.filter(function (t) {
                        return (t.email == leave.owner.id || t.email == leave.owner.email);
                    })[0];
                    if (owner) {
                        leave.owner = owner;
                    }
                    if (myProfile.isManager) {
                        var owner = reporteesCollection.filter(function (t) { return (t.email == leave.owner.id || t.email == leave.owner.email); })[0];
                        if (owner) {
                            leave.owner = owner;
                        }
                    }
                });
            }
        }
        var resultColl = [];
        resultColl = leaves.filter(function (leave) { return leave.owner.email; });
        if (resultColl.length > 0)
            return resultColl;
        else
            return null;
    };
    filterBySearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterBySearch',
        })
    ], filterBySearchPipe);
    return filterBySearchPipe;
}());

//# sourceMappingURL=filter-by-search.js.map

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 369,
	"./af.js": 369,
	"./ar": 370,
	"./ar-dz": 371,
	"./ar-dz.js": 371,
	"./ar-kw": 372,
	"./ar-kw.js": 372,
	"./ar-ly": 373,
	"./ar-ly.js": 373,
	"./ar-ma": 374,
	"./ar-ma.js": 374,
	"./ar-sa": 375,
	"./ar-sa.js": 375,
	"./ar-tn": 376,
	"./ar-tn.js": 376,
	"./ar.js": 370,
	"./az": 377,
	"./az.js": 377,
	"./be": 378,
	"./be.js": 378,
	"./bg": 379,
	"./bg.js": 379,
	"./bm": 380,
	"./bm.js": 380,
	"./bn": 381,
	"./bn.js": 381,
	"./bo": 382,
	"./bo.js": 382,
	"./br": 383,
	"./br.js": 383,
	"./bs": 384,
	"./bs.js": 384,
	"./ca": 385,
	"./ca.js": 385,
	"./cs": 386,
	"./cs.js": 386,
	"./cv": 387,
	"./cv.js": 387,
	"./cy": 388,
	"./cy.js": 388,
	"./da": 389,
	"./da.js": 389,
	"./de": 390,
	"./de-at": 391,
	"./de-at.js": 391,
	"./de-ch": 392,
	"./de-ch.js": 392,
	"./de.js": 390,
	"./dv": 393,
	"./dv.js": 393,
	"./el": 394,
	"./el.js": 394,
	"./en-au": 395,
	"./en-au.js": 395,
	"./en-ca": 396,
	"./en-ca.js": 396,
	"./en-gb": 397,
	"./en-gb.js": 397,
	"./en-ie": 398,
	"./en-ie.js": 398,
	"./en-nz": 399,
	"./en-nz.js": 399,
	"./eo": 400,
	"./eo.js": 400,
	"./es": 401,
	"./es-do": 402,
	"./es-do.js": 402,
	"./es-us": 403,
	"./es-us.js": 403,
	"./es.js": 401,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fo": 408,
	"./fo.js": 408,
	"./fr": 409,
	"./fr-ca": 410,
	"./fr-ca.js": 410,
	"./fr-ch": 411,
	"./fr-ch.js": 411,
	"./fr.js": 409,
	"./fy": 412,
	"./fy.js": 412,
	"./gd": 413,
	"./gd.js": 413,
	"./gl": 414,
	"./gl.js": 414,
	"./gom-latn": 415,
	"./gom-latn.js": 415,
	"./gu": 416,
	"./gu.js": 416,
	"./he": 417,
	"./he.js": 417,
	"./hi": 418,
	"./hi.js": 418,
	"./hr": 419,
	"./hr.js": 419,
	"./hu": 420,
	"./hu.js": 420,
	"./hy-am": 421,
	"./hy-am.js": 421,
	"./id": 422,
	"./id.js": 422,
	"./is": 423,
	"./is.js": 423,
	"./it": 424,
	"./it.js": 424,
	"./ja": 425,
	"./ja.js": 425,
	"./jv": 426,
	"./jv.js": 426,
	"./ka": 427,
	"./ka.js": 427,
	"./kk": 428,
	"./kk.js": 428,
	"./km": 429,
	"./km.js": 429,
	"./kn": 430,
	"./kn.js": 430,
	"./ko": 431,
	"./ko.js": 431,
	"./ky": 432,
	"./ky.js": 432,
	"./lb": 433,
	"./lb.js": 433,
	"./lo": 434,
	"./lo.js": 434,
	"./lt": 435,
	"./lt.js": 435,
	"./lv": 436,
	"./lv.js": 436,
	"./me": 437,
	"./me.js": 437,
	"./mi": 438,
	"./mi.js": 438,
	"./mk": 439,
	"./mk.js": 439,
	"./ml": 440,
	"./ml.js": 440,
	"./mr": 441,
	"./mr.js": 441,
	"./ms": 442,
	"./ms-my": 443,
	"./ms-my.js": 443,
	"./ms.js": 442,
	"./mt": 444,
	"./mt.js": 444,
	"./my": 445,
	"./my.js": 445,
	"./nb": 446,
	"./nb.js": 446,
	"./ne": 447,
	"./ne.js": 447,
	"./nl": 448,
	"./nl-be": 449,
	"./nl-be.js": 449,
	"./nl.js": 448,
	"./nn": 450,
	"./nn.js": 450,
	"./pa-in": 451,
	"./pa-in.js": 451,
	"./pl": 452,
	"./pl.js": 452,
	"./pt": 453,
	"./pt-br": 454,
	"./pt-br.js": 454,
	"./pt.js": 453,
	"./ro": 455,
	"./ro.js": 455,
	"./ru": 456,
	"./ru.js": 456,
	"./sd": 457,
	"./sd.js": 457,
	"./se": 458,
	"./se.js": 458,
	"./si": 459,
	"./si.js": 459,
	"./sk": 460,
	"./sk.js": 460,
	"./sl": 461,
	"./sl.js": 461,
	"./sq": 462,
	"./sq.js": 462,
	"./sr": 463,
	"./sr-cyrl": 464,
	"./sr-cyrl.js": 464,
	"./sr.js": 463,
	"./ss": 465,
	"./ss.js": 465,
	"./sv": 466,
	"./sv.js": 466,
	"./sw": 467,
	"./sw.js": 467,
	"./ta": 468,
	"./ta.js": 468,
	"./te": 469,
	"./te.js": 469,
	"./tet": 470,
	"./tet.js": 470,
	"./th": 471,
	"./th.js": 471,
	"./tl-ph": 472,
	"./tl-ph.js": 472,
	"./tlh": 473,
	"./tlh.js": 473,
	"./tr": 474,
	"./tr.js": 474,
	"./tzl": 475,
	"./tzl.js": 475,
	"./tzm": 476,
	"./tzm-latn": 477,
	"./tzm-latn.js": 477,
	"./tzm.js": 476,
	"./uk": 478,
	"./uk.js": 478,
	"./ur": 479,
	"./ur.js": 479,
	"./uz": 480,
	"./uz-latn": 481,
	"./uz-latn.js": 481,
	"./uz.js": 480,
	"./vi": 482,
	"./vi.js": 482,
	"./x-pseudo": 483,
	"./x-pseudo.js": 483,
	"./yo": 484,
	"./yo.js": 484,
	"./zh-cn": 485,
	"./zh-cn.js": 485,
	"./zh-hk": 486,
	"./zh-hk.js": 486,
	"./zh-tw": 487,
	"./zh-tw.js": 487
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 803;

/***/ })

},[643]);
//# sourceMappingURL=main.js.map