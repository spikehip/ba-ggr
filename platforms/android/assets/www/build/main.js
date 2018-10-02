webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rechner_rechner__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guthaben_guthaben__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stats_stats__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__einstellungen_einstellungen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__rechner_rechner__["a" /* RechnerPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__guthaben_guthaben__["a" /* GuthabenPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__stats_stats__["a" /* StatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__einstellungen_einstellungen__["a" /* EinstellungenPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Rechner" tabIcon="cafe"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Guthaben" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Stats" tabIcon="ios-pulse"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Einstellungen" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drinks__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RechnerPage = /** @class */ (function () {
    function RechnerPage(navCtrl, _drinkService, sqlStorage, keyValueStore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._drinkService = _drinkService;
        this.sqlStorage = sqlStorage;
        this.keyValueStore = keyValueStore;
        this.calculating = false;
        this.balance = 0;
        this.drinks = [];
        this.sql = sqlStorage;
        this.store = keyValueStore;
        this.drinkService = _drinkService;
        _drinkService.getDrinks().then(function (result) {
            _this.drinks = result;
        });
        this.refresh();
    }
    RechnerPage.prototype.refresh = function () {
        var _this = this;
        this.calculating = true;
        this.store.get('balance').then(function (value) {
            _this.balance = value;
            _this.calculating = false;
        });
    };
    RechnerPage.prototype.remove = function (drink) {
        var _this = this;
        if (drink.consumed > 0) {
            this.calculating = true;
            this.store.get('balance').then(function (value) {
                _this.balance = value;
                var newBalance = Number(_this.balance + drink.price).toFixed(2);
                drink.consumed = drink.consumed - 1;
                _this.balance = Number(newBalance);
                _this.store.set('balance', _this.balance);
                _this.drinkService.saveDrinks(_this.drinks).then(function () {
                    _this.calculating = false;
                });
            });
        }
    };
    RechnerPage.prototype.add = function (drink) {
        var _this = this;
        this.calculating = true;
        this.store.get('balance').then(function (value) {
            _this.balance = value;
            var newBalance = Number(_this.balance - drink.price).toFixed(2);
            drink.consumed = drink.consumed + 1;
            _this.balance = Number(newBalance);
            _this.store.set('balance', _this.balance);
            _this.drinkService.saveDrinks(_this.drinks).then(function () {
                _this.calculating = false;
            });
        });
    };
    RechnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rechner',template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/rechner/rechner.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Getränkguthabenrechner</ion-title>\n  </ion-navbar>\n  <ion-toolbar position="top">\n      <ion-title>{{balance}} &euro;</ion-title>\n      <ion-buttons end>\n      <button ion-button outline large (click)="refresh()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="page-rechner">\n  <ion-card template="ngFor let drink of drinks;">\n    <ion-item>\n      <ion-avatar item-left><img src="assets/{{drink.image}}"/></ion-avatar>\n      <h2 class="card-title">\n        {{drink.title}}\n      </h2>\n      <p>{{drink.description}} - {{drink.price}} €</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>\n        {{drink.consumed}} getrunken\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n        <button ion-button [disabled]="drink.consumed < 1 || calculating" clear large primary item-left (click)="remove(drink)">\n          <ion-icon name="remove"></ion-icon>\n        </button>\n        <button ion-button [disabled]="calculating" clear large primary item-right (click)="add(drink)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/rechner/rechner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_drinks__["a" /* DrinkService */], __WEBPACK_IMPORTED_MODULE_3__services_storage__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* Storage */]])
    ], RechnerPage);
    return RechnerPage;
}());

//# sourceMappingURL=rechner.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drink; });
var Drink = /** @class */ (function () {
    function Drink(obj) {
        this.obj = obj;
        this.id = obj.id;
        this.image = obj.image;
        this.title = obj.title;
        this.description = obj.description;
        this.price = Number(obj.price);
        this.consumed = Number(obj.consumed);
    }
    return Drink;
}());

//# sourceMappingURL=drink.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(sqlite) {
        // this.db = new SQLite();
        // this.db.openDatabase({
        //   name: 'baggr.db',
        //   location: 'default' // the location field is required
        //   }).then(() => {
        //     this.db.executeSql('CREATE TABLE IF NOT EXISTS statistics (id,date)', {}).then(() => {
        //       console.log("table statistics created");
        //     }, (err) => {
        //       console.error('Unable to execute sql: ', err);
        //     });
        //   }, (err) => {
        //     console.error('Unable to open database: ', err);
        //   });
        var _this = this;
        this.sqlite = sqlite;
        this.sqlite.create({
            'name': 'baggr.db',
            location: 'default'
        }).then(function (db) {
            _this.db = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS statistics (id,date)', []).then(function () {
                console.log("table statistics created");
            }, function (err) {
                console.error('Unable to execute sql: ', err);
            });
        }).catch(function (e) { return console.log(e); });
    }
    StorageService.prototype.insertStatistic = function (drink_id, date) {
        console.log("inserting statistics drink_id: " + drink_id + " date: " + date);
        this.db.executeSql('INSERT INTO statistics VALUES ("' + drink_id + '", date("now") )', []).then(function () {
            console.log("Statistic inserted");
        }, function (err) {
            console.error('Unable to insert statistic: ', err);
        });
    };
    StorageService.prototype.pad = function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    };
    StorageService.prototype.getDrinkStatistics = function () {
        var now = new Date();
        var day = now.getDay(), diff = now.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        var monday = new Date(now.setDate(diff));
        var mondaySQL = monday.getFullYear() + "-" + this.pad(monday.getMonth() + 1, 2) + "-" + this.pad(monday.getDate(), 2);
        var SQL = 'SELECT id, count(id) as consumed,date FROM statistics WHERE date(date) >= date("' + mondaySQL + '") GROUP BY id,date';
        return this.db.executeSql(SQL, []);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuthabenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_drinks__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuthabenPage = /** @class */ (function () {
    function GuthabenPage(navCtrl, keyValueStore, _drinkService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.keyValueStore = keyValueStore;
        this._drinkService = _drinkService;
        this.store = keyValueStore;
        this.newBalance = 0;
        this.drinkService = _drinkService;
        this.store.get('balance').then(function (value) {
            _this.balance = value;
        });
    }
    GuthabenPage.prototype.refresh = function () {
        var _this = this;
        this.store.get('balance').then(function (value) {
            _this.balance = value;
        });
    };
    GuthabenPage.prototype.addExtra = function () {
        var _this = this;
        this.store.get('balance').then(function (value) {
            _this.balance = value;
            var oldBalanceString = Number(_this.balance).toFixed(2);
            var oldBalanceNumber = Number(oldBalanceString);
            var newBalanceString = Number(_this.newBalance).toFixed(2);
            var newBalanceNumber = Number(newBalanceString);
            _this.balance = oldBalanceNumber + newBalanceNumber;
            _this.store.set('balance', _this.balance);
        });
    };
    GuthabenPage.prototype.setBalance = function () {
        this.balance = this.newBalance;
        this.store.set('balance', this.balance);
    };
    GuthabenPage.prototype.reset = function () {
        var _this = this;
        this.balance = 0;
        this.store.set('balance', this.balance);
        this.drinkService.getDrinks().then(function (drinks) {
            for (var i = 0; i < drinks.length; i++) {
                drinks[i].consumed = 0;
            }
            _this.drinkService.saveDrinks(drinks);
        });
    };
    GuthabenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guthaben',template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/guthaben/guthaben.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Guthaben</ion-title>\n  </ion-navbar>\n  <ion-toolbar position="top">\n    <ion-title>{{balance}} &euro;</ion-title>\n    <ion-buttons end>\n    <button ion-button outline large (click)="refresh()">\n      <ion-icon name="refresh"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Summe, &euro;</ion-label>\n      <ion-input type="number" [(ngModel)]="newBalance"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button outline (click)="addExtra()">Extra Guthaben einzahlen</button>\n    <button ion-button outline (click)="setBalance()">Guthaben auf der Summe setzen</button>\n    <button ion-button outline (click)="reset()">Counter reset</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/guthaben/guthaben.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__services_drinks__["a" /* DrinkService */]])
    ], GuthabenPage);
    return GuthabenPage;
}());

//# sourceMappingURL=guthaben.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drinks__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsPage = /** @class */ (function () {
    function StatsPage(navCtrl, _drinkService) {
        this.navCtrl = navCtrl;
        this._drinkService = _drinkService;
        this.drinks = [];
        this.drinkService = _drinkService;
        this.statsAvailable = false;
        this.stats2Available = false;
        this.notEnoughChartData = false;
    }
    StatsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.drinkService.getDrinks().then(function (result) {
            _this.drinks = result.slice();
            _this.drinks.sort(function (a, b) {
                if (a.consumed > b.consumed)
                    return -1;
                if (a.consumed < b.consumed)
                    return 1;
                return 0;
            });
            if (_this.drinks[0].consumed > 0) {
                _this.statsAvailable = true;
            }
        });
    };
    StatsPage.prototype.refresh = function () {
    };
    StatsPage.prototype.weeklyOn = function () {
    };
    StatsPage.prototype.weeklyOff = function () {
    };
    var _a, _b;
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/stats/stats.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Statistiken\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button outline large (click)="refresh()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n		<ion-slide>\n			<h2>Top 3 aktuell</h2>\n      <div *ngIf="statsAvailable">\n  			<div [hidden]="!statsAvailable">\n  				<ion-item *ngIf="drinks?.length > 0">\n  				  <ion-icon name="podium" item-left></ion-icon>\n  				  {{drinks[0].title}}\n  	  			  <ion-badge item-right danger>{{drinks[0].consumed}}</ion-badge>\n  				</ion-item>\n  				<ion-item *ngIf="drinks?.length > 1">\n  				  <ion-icon name="podium" item-left></ion-icon>\n  				  {{drinks[1].title}}\n  	  			  <ion-badge item-right secondary>{{drinks[1].consumed}}</ion-badge>\n  				</ion-item>\n  				<ion-item *ngIf="drinks?.length > 2">\n  				  <ion-icon name="podium" item-left></ion-icon>\n  				  {{drinks[2].title}}\n  	  			  <ion-badge item-right >{{drinks[2].consumed}}</ion-badge>\n  				</ion-item>\n  			</div>\n      </div>\n			<div [hidden]="statsAvailable">\n				<small>Leider stehen ungenügende Daten zu Verfügung.</small>\n			</div>\n		</ion-slide>\n		<ion-slide>\n			<h2>Übersicht Woche</h2>\n			<div [hidden]="!stats2Available">\n				<ion-row [hidden]="notEnoughChartData">\n					<ion-col width-100>\n						<canvas id="myChart" style="width: 100%; height: 100%;"></canvas>\n					</ion-col>\n				</ion-row>\n        <ion-row [hidden]="!notEnoughChartData">\n            <ion-col width-100>\n              <small>Leider stehen diese Woche keine Daten zur Verfügung.</small>\n            </ion-col>\n        </ion-row>\n				<button ion-button outline (click)="weeklyOff()">Statistik ausschalten</button>\n			</div>\n			<div [hidden]="stats2Available">\n				<small>Es werden Statistiken über dein Verbrauchsverhältniss lokal auf deinem Handy gesammelt und durch Charts dargestellt.</small>\n        <br/>\n        <button ion-button outline disabled (click)="weeklyOn()">Statistik einschalten</button>\n			</div>\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/stats/stats.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_drinks__["a" /* DrinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_drinks__["a" /* DrinkService */]) === "function" && _b || Object])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EinstellungenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drinks__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EinstellungenPage = /** @class */ (function () {
    function EinstellungenPage(navCtrl, _drinkService, toastCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._drinkService = _drinkService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.nav = navCtrl;
        this.toastController = toastCtrl;
        this.modalController = modalCtrl;
        this.drinks = [];
        this.drinkService = _drinkService;
        _drinkService.getDrinks().then(function (result) {
            _this.drinks = result;
        });
    }
    EinstellungenPage.prototype.add = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddDrinkPage */], { drink: null });
        modal.onDidDismiss(function (data) {
            if (data.success && data.drink.id == null && data.drink.price > 0) {
                var id = "drink_" + _this.drinks.length + 1;
                data.drink.id = id;
                data.drink.consumed = 0;
                _this.drinks.push(data.drink);
                _this.drinkService.saveDrinks(_this.drinks).then(function () {
                    var toast = _this.toastController.create({
                        message: (data.drink.description) + ' wurde hinzugefügt',
                        duration: 3000
                    });
                    toast.present();
                });
            }
        });
        modal.present();
    };
    EinstellungenPage.prototype.edit = function (drink, item) {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddDrinkPage */], { drink: drink });
        modal.onDidDismiss(function (data) {
            if (data.success && data.drink.id != null) {
                for (var i = 0; i < _this.drinks.length; i++) {
                    if (_this.drinks[i].id == data.drink.id) {
                        _this.drinks[i].image = data.drink.image;
                        _this.drinks[i].title = data.drink.title;
                        _this.drinks[i].price = data.drink.price;
                        _this.drinks[i].description = data.drink.description;
                        _this.drinkService.saveDrinks(_this.drinks).then(function () {
                            var toast = _this.toastController.create({
                                message: (data.drink.description) + ' wurde bearbeitet',
                                duration: 3000
                            });
                            toast.present();
                        });
                        break;
                    }
                }
            }
        });
        modal.present();
        item.close();
    };
    EinstellungenPage.prototype.remove = function (drink, item) {
        var _this = this;
        //this.drinksProvider.removeDrink(drink);
        var index = this.drinks.indexOf(drink);
        if (index > -1) {
            this.drinks.splice(index, 1);
            this.drinkService.saveDrinks(this.drinks).then(function () {
                var toast = _this.toastController.create({
                    message: (drink.description) + ' wurde erfolgreich entfernt',
                    duration: 3000
                });
                toast.present();
            });
        }
        item.close();
    };
    EinstellungenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-einstellungen',template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/einstellungen/einstellungen.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Einstellungen\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button outline large (click)="add()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list #list>\n\n    <ion-item-sliding #item template="ngFor let drink of drinks;">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/{{drink.image}}" />\n        </ion-avatar>\n        <h2>{{drink.title}}</h2>\n        <small>{{drink.price}} &euro;</small>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="edit(drink, item)">\n          <ion-icon name=\'ios-more\'></ion-icon>\n          Bearbeiten\n        </button>\n        <button ion-button color="danger" (click)="remove(drink, item)">\n          <ion-icon name=\'close\'></ion-icon>\n          Entfernen\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/einstellungen/einstellungen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_drinks__["a" /* DrinkService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], EinstellungenPage);
    return EinstellungenPage;
}());

//# sourceMappingURL=einstellungen.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDrinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drink__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDrinkPage = /** @class */ (function () {
    function AddDrinkPage(params, _viewCtrl) {
        this.params = params;
        this._viewCtrl = _viewCtrl;
        this.modalTitle = "Getränk hinzufügen";
        this.viewCtrl = _viewCtrl;
        this.drink = new __WEBPACK_IMPORTED_MODULE_2__services_drink__["a" /* Drink */]({});
        var item = params.get('drink');
        if (item != null) {
            this.modalTitle = item.title + ' bearbeiten';
            this.drink.id = item.id;
            this.drink.image = item.image;
            this.drink.title = item.title;
            this.drink.description = item.description;
            this.drink.price = item.price;
        }
    }
    AddDrinkPage.prototype.save = function () {
        this.viewCtrl.dismiss({ success: true, drink: this.drink });
    };
    AddDrinkPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ success: false, drink: this.drink });
    };
    AddDrinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/einstellungen/add/add.html"*/'<ion-header>\n  <ion-toolbar position="top">\n    <ion-title>{{modalTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Titel</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="drink.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Beschreibung</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="drink.description"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Preis</ion-label>\n      <ion-input type="number" [(ngModel)]="drink.price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Bild</ion-label>\n        <ion-select [(ngModel)]="drink.image">\n          <ion-option value="img/coffee.jpg">Tasse</ion-option>\n          <ion-option value="img/doublecoffee.jpg">Zwei Tassen</ion-option>\n          <ion-option value="img/water.jpg">Flasche</ion-option>\n          <ion-option value="img/coke.jpg">Colaflasche</ion-option>\n          <ion-option value="img/redbull.jpg">Redbull-Dose</ion-option>\n        </ion-select>\n      </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col width-50 style="text-align: center;">\n        <button ion-button round outline color="secondary" (click)="save()">Speichern</button>\n      </ion-col>\n      <ion-col width-50 style="text-align: center;">\n        <button ion-button round outline color="danger" (click)="dismiss()">Verwerfen</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/pages/einstellungen/add/add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AddDrinkPage);
    return AddDrinkPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_rechner_rechner__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_guthaben_guthaben__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_stats_stats__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_einstellungen_einstellungen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_einstellungen_add_add__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_balance__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_drinks__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_rechner_rechner__["a" /* RechnerPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_guthaben_guthaben__["a" /* GuthabenPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_einstellungen_einstellungen__["a" /* EinstellungenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_einstellungen_add_add__["a" /* AddDrinkPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_rechner_rechner__["a" /* RechnerPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_guthaben_guthaben__["a" /* GuthabenPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_einstellungen_einstellungen__["a" /* EinstellungenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_einstellungen_add_add__["a" /* AddDrinkPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_balance__["a" /* BalanceService */],
                __WEBPACK_IMPORTED_MODULE_11__services_drinks__["a" /* DrinkService */],
                __WEBPACK_IMPORTED_MODULE_12__services_storage__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* Storage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
    function MyApp(platform, splashScreen, statusBar) {
        var _this = this;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrasbekesi/workspace/ba-ggr/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/andrasbekesi/workspace/ba-ggr/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialDrinks; });
var InitialDrinks = /** @class */ (function () {
    function InitialDrinks() {
    }
    InitialDrinks.prototype.getList = function () {
        return [
            {
                id: 'coffee',
                image: 'img/coffee.jpg',
                title: 'Kaffee',
                description: 'Creme / Espresso',
                price: 0.50,
                consumed: 0
            },
            {
                id: 'water',
                image: 'img/water.jpg',
                title: 'Wasser',
                description: 'Eine Flasche Wasser',
                price: 0.80,
                consumed: 0
            }
        ];
    };
    return InitialDrinks;
}());

//# sourceMappingURL=initial_drinks.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BalanceService = /** @class */ (function () {
    function BalanceService(_storage) {
        this._storage = _storage;
        this.storage = _storage;
    }
    BalanceService.prototype.getWallet = function () {
        return this.storage.get('balance').then(function (value) {
            return new __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* Wallet */](value);
        });
    };
    BalanceService.prototype.setBalance = function (newBalance) {
        return this.storage.set('balance', newBalance);
    };
    BalanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], BalanceService);
    return BalanceService;
}());

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
var Wallet = /** @class */ (function () {
    function Wallet(_balance) {
        this._balance = _balance;
        this.balance = _balance;
    }
    Wallet.prototype.setBalance = function (_balance) {
        this.balance = _balance;
    };
    Wallet.prototype.getBalance = function () {
        return this.balance;
    };
    return Wallet;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drink__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial_drinks__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrinkService = /** @class */ (function () {
    function DrinkService(_storage) {
        var _this = this;
        this._storage = _storage;
        this.drinks = [];
        this.storage = _storage;
        this.storage.get('drinks').then(function (json) {
            var data = JSON.parse(json);
            console.log("Loading drinks from storage: ", json);
            if (data == null || (data != null && data.length <= 0)) {
                data = new __WEBPACK_IMPORTED_MODULE_2__initial_drinks__["a" /* InitialDrinks */]().getList();
            }
            for (var i = 0; i < data.length; i++) {
                var drink = new __WEBPACK_IMPORTED_MODULE_1__drink__["a" /* Drink */](data[i]);
                _this.drinks.push(drink);
            }
            console.log("finished initializing drinks provider");
        });
    }
    DrinkService.prototype.getDrinks = function () {
        return Promise.resolve(this.drinks);
    };
    DrinkService.prototype.saveDrinks = function (drinks) {
        return this.storage.set('drinks', JSON.stringify(drinks));
    };
    DrinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]])
    ], DrinkService);
    return DrinkService;
}());

//# sourceMappingURL=drinks.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map