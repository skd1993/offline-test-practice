webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.pageTitle = 'Offline Test Practice';
    }
    HomePage.prototype.ngOnInit = function () {
        this.settingsForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            questions: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('10', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].min(2)]),
            options: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('4', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].min(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].max(10)]),
            positive: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('1', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].min(1)]),
            negative: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('1', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].min(0)]),
        });
    };
    HomePage.prototype.startTest = function () {
        if (this.settingsForm.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */], {
                settings: this.settingsForm.value
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'There is some error in the form',
                duration: 1500
            });
            toast.present();
        }
    };
    HomePage.prototype.appInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'About this app',
            subTitle: "<p>This app is to help you keep track of questions and calculate marks while practicing for a MCQ test/exam from an offline source.</p>\n\t\t\t<p>Made with &#128150; by <a href=\"https://www.github.com/skd1993\">Shobhit</a>\n\t\t\t<p><a href=\"https://twitter.com/shobhit_kumar31\">@shobhit_kumar31</a>",
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/skd/Projects/offline-test-practice/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            {{pageTitle}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="appInfo()">\n                <ion-icon name="information-circle"></ion-icon>\n            </button>\n            </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form novalidate [formGroup]="settingsForm" (ngSubmit)="startTest()">\n        <ion-item>\n            <ion-label floating text-wrap>Enter no. of questions (min=2)</ion-label>\n            <ion-input type="number" [clearInput]="true" formControlName="questions"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating text-wrap>Enter no. of options (default=4, min=2, max=10)</ion-label>\n            <ion-input type="number"  [clearInput]="true"  formControlName="options"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating text-wrap>Marks for correct response (min=1)</ion-label>\n            <ion-input type="number"  [clearInput]="true"  formControlName="positive"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating text-wrap>Negative marks for wrong response (subtracted from total, min=0)</ion-label>\n            <ion-input type="number"  [clearInput]="true"  formControlName="negative"></ion-input>\n        </ion-item>\n        <br />\n        <button ion-button full [disabled]="!settingsForm.valid" type="submit">Start Test</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/skd/Projects/offline-test-practice/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate_calculate__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, alertCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.pageTitle = 'Offline Test Practice';
        this.o = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.answers = {};
        this.settings = this.navParams.get('settings');
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    TestPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            return _this.showConfirm();
        };
    };
    TestPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Exit test?',
            message: 'What do you want to do?',
            buttons: [
                {
                    text: 'Go home (progress will be lost)',
                    handler: function () {
                        _this.answers = {};
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: 'Finish test and calculate marks',
                    handler: function () {
                        if (Object.keys(_this.answers).length !== 0) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculate_calculate__["a" /* CalculatePage */], {
                                responseData: _this.answers,
                                questions: _this.settings.questions,
                                positive: _this.settings.positive,
                                negative: _this.settings.negative,
                                answered: Object.keys(_this.answers).length
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'You have not answered any question',
                                duration: 1500
                            });
                            toast.present();
                        }
                    }
                }
            ]
        });
        confirm.addButton({
            text: 'Resume test',
            role: 'cancel',
            handler: function () {
            }
        });
        confirm.present();
    };
    TestPage.prototype.mcqAnswer = function (x, i) {
        this.answers[x] = { 'res': i };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], TestPage.prototype, "navBar", void 0);
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/home/skd/Projects/offline-test-practice/src/pages/test/test.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            {{pageTitle}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list radio-group *ngFor="let q of \' \'.repeat(settings.questions).split(\'\'), let x=index" >\n\n        <ion-list-header>\n          Question no. {{x+1}}\n        </ion-list-header>\n      \n        <ion-item *ngFor="let i of o.slice(0, settings.options)">\n          <ion-label>{{i}}</ion-label>\n          <ion-radio value="{{i}}" (ionSelect)="mcqAnswer(x+1,i)"></ion-radio>\n        </ion-item>\n\n    </ion-list>     \n\n    <ion-fab right bottom>\n        <button ion-fab color="danger" (click)="showConfirm()"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/skd/Projects/offline-test-practice/src/pages/test/test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatePage = /** @class */ (function () {
    function CalculatePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.objectKeys = Object.keys;
        this.responseData = this.navParams.get('responseData');
        this.questions = this.navParams.get('questions');
        this.answered = this.navParams.get('answered');
        this.positive = this.navParams.get('positive');
        this.negative = this.navParams.get('negative');
        this.right = 0;
        this.wrong = this.answered;
        this.total = (-1) * this.wrong * this.negative;
    }
    CalculatePage.prototype.ngOnInit = function () {
    };
    CalculatePage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    CalculatePage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            return _this.showConfirm();
        };
    };
    CalculatePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Go back to home?',
            message: 'You will be returned to home page, all data will be lost',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.total = 0;
                        _this.right = 0;
                        _this.wrong = _this.answered;
                        _this.responseData = {};
                        _this.navCtrl.popToRoot();
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    CalculatePage.prototype.toggle = function (key) {
        if (this.responseData[key].score === undefined || this.responseData[key].score === false) {
            this.responseData[key].score = true;
            this.right++;
            if (this.wrong > 0)
                this.wrong--;
        }
        else {
            this.responseData[key].score = false;
            this.wrong++;
            this.right--;
        }
        this.total = this.positive * this.right - this.negative * this.wrong;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], CalculatePage.prototype, "navBar", void 0);
    CalculatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculate',template:/*ion-inline-start:"/home/skd/Projects/offline-test-practice/src/pages/calculate/calculate.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Calculate Score\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item text-wrap>\n        <strong>Note:</strong> Unticked items means it is incorrect (score will show in negative on start)\n    </ion-item>\n    <ion-item *ngFor="let key of objectKeys(responseData)">\n        <ion-label>{{key}}. {{responseData[key].res}}</ion-label>\n        <ion-checkbox color="primary" checked="false" (ionChange)="toggle(key)"></ion-checkbox>\n    </ion-item>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-item>\n            <ion-icon name="help" item-start ></ion-icon>\n            Questions unanswered\n            <ion-badge item-end>{{questions - answered}}</ion-badge>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="checkmark" item-start color="secondary"></ion-icon>\n            Answered correct\n            <ion-badge color="secondary" item-end>{{right}}</ion-badge>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="close" item-start color="danger"></ion-icon>\n            Answered incorrect\n            <ion-badge color="danger" item-end>{{wrong}}</ion-badge>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="done-all" item-start color="dark"></ion-icon>\n            Total Score out of {{positive*questions}}\n            <ion-badge color="dark" item-end>{{total}}</ion-badge>\n        </ion-item>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/skd/Projects/offline-test-practice/src/pages/calculate/calculate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CalculatePage);
    return CalculatePage;
}());

//# sourceMappingURL=calculate.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_test_test__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calculate_calculate__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calculate_calculate__["a" /* CalculatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calculate_calculate__["a" /* CalculatePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/skd/Projects/offline-test-practice/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/skd/Projects/offline-test-practice/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map