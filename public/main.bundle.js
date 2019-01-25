webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-blue{\n  background-color: #0081C6 !important;\n}\n\n.nav-tab{\n  font-size: 1.10em;\n}\n\n.nav-title{\n  font-size: 1.35em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div style=\"text-align:left\">\n  <div class=\"container\">\n    <!--Navbar-->\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-blue\">\n      <span class=\"navbar-brand nav-title\">Data Regulation</span>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-tab\" [ngClass]=\"{'active': researchTab.isClicked}\" (click)=researchActive() [routerLink]=\"['/search']\">Research & News</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-tab\" [ngClass]=\"{'active': eventsTab.isClicked}\" (click)=EventsAndConferenceActive() [routerLink]=\"['/eventsconf']\">Events & Conferences</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <br>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'IIT One Stop';
        this.researchTab = { 'isClicked': true };
        this.eventsTab = { 'isClicked': false };
    }
    AppComponent.prototype.researchActive = function () {
        if (!this.researchTab.isClicked) {
            this.researchTab.isClicked = true;
            this.eventsTab.isClicked = false;
        }
    };
    ;
    AppComponent.prototype.EventsAndConferenceActive = function () {
        if (!this.eventsTab.isClicked) {
            this.eventsTab.isClicked = true;
            this.researchTab.isClicked = false;
        }
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_doc_search_doc_component__ = __webpack_require__("./src/app/search-doc/search-doc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__ = __webpack_require__("./src/app/doc-details/doc-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_doc_service__ = __webpack_require__("./src/app/services/doc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_author_service__ = __webpack_require__("./src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_multiselect_dropdown_angular4_multiselect_dropdown__ = __webpack_require__("./node_modules/angular4-multiselect-dropdown/angular4-multiselect-dropdown.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import {} from './'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular4_multiselect_dropdown_angular4_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'search', pathMatch: 'full' },
                { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__search_doc_search_doc_component__["a" /* SearchDocComponent */], },
                { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__["a" /* DocDetailsComponent */] },
                //{ path: 'home',component:HomeComponent},
                { path: 'eventsconf', component: __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */] },
                { path: '**', redirectTo: 'home' }
            ]),
        ],
        //Components are added here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__search_doc_search_doc_component__["a" /* SearchDocComponent */],
            __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__["a" /* DocDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */]
        ],
        //All the modules are declared as imports
        //All the services go here.
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_doc_service__["a" /* DocService */], __WEBPACK_IMPORTED_MODULE_11__services_author_service__["a" /* AuthorService */], __WEBPACK_IMPORTED_MODULE_12__services_event_service__["a" /* EventService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/doc-details/doc-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger {\n\tcolor: #eeeeee;\n\n}\n.align-center {\n\ttext-align: center;\n}\n.article-title{\n\tcolor: #0081C6\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/doc-details/doc-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-9\">\n    <h4 class=\"article-title\">{{item.title}}</h4>\n      <span class=\"fa fa-user\" aria-hidden=\"true\"></span> <small *ngFor=\"let author of item.authors; let i=index\">{{author}} <span *ngIf=\"i!==item.authors.length-1\">,</span>&nbsp;</small>\n    <br>   <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span> <small>{{item.version_date | date}}</small>\n    <br><small>{{item.type_of_article}}</small>\n    <br><small>{{item.research_status}}</small>\n    <hr>\n    <h6>Abstract</h6>\n    {{item.abstract}}\n    <hr>\n    <h6>Keywords</h6>\n    <small *ngFor=\"let keyword of item.keywords;let i=index\">{{keyword}} <span *ngIf=\"i!==item.keywords.length-1\">,</span> &nbsp;</small>\n    <hr>\n    <a href=\"{{item.link}}\" target=\"_blank\"><u><h6>View Article</h6></u></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/doc-details/doc-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doc_service__ = __webpack_require__("./src/app/services/doc.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocDetailsComponent = (function () {
    function DocDetailsComponent(route, docServ) {
        this.route = route;
        this.docServ = docServ;
    }
    DocDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params.id; // (+) converts string 'id' to a number
            _this.docServ.get(_this.id).subscribe(function (result) {
                _this.item = result;
            }, function (error) { return console.error(error); });
        });
    };
    DocDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return DocDetailsComponent;
}());
DocDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-doc-details',
        template: __webpack_require__("./src/app/doc-details/doc-details.component.html"),
        styles: [__webpack_require__("./src/app/doc-details/doc-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_doc_service__["a" /* DocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_doc_service__["a" /* DocService */]) === "function" && _b || Object])
], DocDetailsComponent);

var _a, _b;
//# sourceMappingURL=doc-details.component.js.map

/***/ }),

/***/ "./src/app/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\n\tmargin-top: 5%;\n}\n\n/* #search {\nwidth: 40%;\nmargin-left: 90%;\n} */\n\n#custom-search-input {\n\tmargin:0;\n\tmargin-top: 10px;\n\tpadding: 0;\n\t/* margin-left: 277px; */\n}\n\n#custom-search-input .search-query {\n\twidth:100%;\n\tpadding-right: 3px;\n\tpadding-left: 15px;\n\t/* IE7-8 doesn't have border-radius, so don't indent the padding */\n\tmargin-bottom: 0;\n\tborder-radius: 0;\n}\n\n#custom-search-input button {\n\tborder: 0;\n\tbackground: none;\n\t/** belows styles are working good */\n\tpadding: 2px 5px;\n\tmargin-top: 2px;\n\tposition: absolute;\n\tright:0;\n\t/* IE7-8 doesn't have border-radius, so don't indent the padding */\n\tmargin-bottom: 0;\n\tborder-radius: 3px;\n\tcolor:#D9230F;\n\tcursor: unset;\n\tz-index: 2;\n}\n\n.search-query:focus{\n\tz-index: 0;\n}\n\n.bg-blue{\n  background-color: #0081C6 !important;\n}\n\n.article-title{\n\tcolor: #0081C6\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div id=\"custom-search-input\">\n        <div class=\"input-group\">\n          <input [(ngModel)]=\"searchText\"  name=\"searchDoc\" type=\"text\" id=\"search\" type=\"text\" class=\"search-query form-control\" placeholder=\"Search\" />\n          <span class=\"input-group-btn\">\n            <button type=\"button\" disabled>\n              <span class=\"fa fa-search\"></span>\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"list-group\" *ngFor=\"let item of events | filter: searchText\">\n        <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1\" class=\"article-title\">{{item.title}}</h5>\n          </div>\n          <p class=\"mb-1\">{{item.abstract}}</p>\n          <a href=\"{{item.link}}\" target=\"_blank\"><u><h6>{{item.link}}</h6></u></a>\n          <p class=\"mb-1\"> <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span> {{item.geographic_scope}}</p>\n          <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span> <small>{{item.start_date | date}}</small> - <small>{{item.end_date | date}}</small>\n\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(eventServ, router) {
        this.eventServ = eventServ;
        this.router = router;
    }
    EventComponent.prototype.getList = function () {
        var _this = this;
        this.eventServ.getAll().subscribe(function (result) {
            _this.events = result.sort(function (a, b) {
                return new Date(b.end_date).getTime() - new Date(a.end_date).getTime();
            });
        }, function (error) { return console.error(error); });
    };
    EventComponent.prototype.onSubmit = function () {
    };
    EventComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    return EventComponent;
}());
EventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-event',
        template: __webpack_require__("./src/app/event/event.component.html"),
        styles: [__webpack_require__("./src/app/event/event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EventComponent);

var _a, _b;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchbtn{\n  background-color: #0081C6;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h3>Data Regulation </h3>\n  <h5>This is one place to find the summary of all data regulation documents</h5>\n  <button type=\"button\" class=\"btn btn-default\" id=\"searchbtn\" [routerLink]=\"['/search']\">SEARCH</button>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/search-doc/search-doc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\n\tmargin-top: 5%;\n}\n\n/* #search {\nwidth: 40%;\nmargin-left: 90%;\n} */\n\n#custom-search-input {\n\tmargin:0;\n\tmargin-top: 10px;\n\tpadding: 0;\n\tmargin-left: 277px;\n}\n\n#custom-search-input .search-query {\n\twidth:100%;\n\tpadding-right: 3px;\n\tpadding-left: 15px;\n\t/* IE7-8 doesn't have border-radius, so don't indent the padding */\n\tmargin-bottom: 0;\n\tborder-radius: 0;\n}\n\n#custom-search-input button {\n\tborder: 0;\n\tbackground: none;\n\t/** belows styles are working good */\n\tpadding: 2px 5px;\n\tmargin-top: 2px;\n\tposition: absolute;\n\tright:0;\n\t/* IE7-8 doesn't have border-radius, so don't indent the padding */\n\tmargin-bottom: 0;\n\tborder-radius: 3px;\n\tcolor:#D9230F;\n\tcursor: unset;\n\tz-index: 2;\n}\n\n.search-query:focus{\n\tz-index: 0;\n}\n\n.bg-blue{\n\tbackground-color: #0081C6 !important;\n}\n\n.article-title{\n\tcolor: #0081C6\n}\n\n.btn-outline-primary {\n\tcolor:#0081C6 !important;\n\tborder-color:#0081C6;\n\tfont-family: sans-serif;\n\tfont-size: medium;\n\tmargin-left: -27px !important;\n\tborder-radius: 4px !important;\n}\n\n\n.btn-outline-primary:hover {\n\tbackground-color: #0081C6 !important;\n\tcolor: white !important;\n}\n\n.dr-dropdown{\n\tmargin-left: -11px;\n}\n\n.btn-pressed {\n\tbackground-color: #0081C6 !important;\n\tcolor: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/search-doc/search-doc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div id=\"custom-search-input\">\n        <div class=\"input-group\">\n          <input [(ngModel)]=\"searchText\"  name=\"searchDoc\" type=\"text\" id=\"search\" type=\"text\" class=\"search-query form-control\" placeholder=\"Search\" />\n          <span class=\"input-group-btn\">\n            <button type=\"button\" disabled>\n              <span class=\"fa fa-search\"></span>\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"btn-group-vertical container\">\n        <button type=\"button\" #AcademicBtn class=\"btn btn-outline-primary\" [ngClass]=\"{'btn-pressed':isAcademicPressed==true}\" (click)=\"showAcademicResearchDocs(true,false,false)\" name=\"AcademicResearch\">Academic Research</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"{'btn-pressed':isNewsArticlePressed==true}\" (click)=\"showAcademicResearchDocs(false,true,false)\" name=\"NewsArticles\">News Articles</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"{'btn-pressed':isReportsPressed==true}\" (click)=\"showAcademicResearchDocs(false,false,true)\" name=\"ReportsWhitepapers\">Reports & White Papers</button>\n      </div>\n      <br>\n      <br>\n      <div class=\"dr-dropdown\">\n        <angular4-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\"\n        (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\"\n        (onSelectAll)=\"onSelectAll($event)\"\n        (onDeSelectAll)=\"onDeSelectAll($event)\"\n        >\n        <c-item >\n          <ng-template let-item=\"item\">\n            <label style=\"color: #333;min-width: 150px;\">{{item.name}}</label>\n          </ng-template>\n        </c-item>\n      </angular4-multiselect>\n    </div>\n    <br>\n    <div class=\"dr-dropdown\">\n      <angular4-multiselect [data]=\"dropdownListTypeOfDoc\" *ngIf=\"isAcademicChecked\" [(ngModel)]=\"selectedTypeOfDoc\" [settings]=\"dropdownSettingsTypeOfDoc\"\n      (onSelect)=\"onItemSelect($event)\"\n      (onDeSelect)=\"OnItemDeSelect($event)\"\n      (onSelectAll)=\"onSelectAll($event)\"\n      (onDeSelectAll)=\"onDeSelectAll($event)\"\n      >\n      <c-item>\n        <ng-template let-item=\"item\">\n          <label style=\"color: #333;min-width: 150px;\">{{item.name}}</label>\n        </ng-template>\n      </c-item>\n    </angular4-multiselect>\n  </div>\n  <br>\n</div>\n<div class=\"col-md-9\">\n  <div class=\"list-group\" *ngFor=\"let item of docs | filter: searchText\">\n\n    <a [routerLink]=\"['/details', item._id]\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\" class=\"article-title\">{{item.title}}</h5>\n      </div>\n      <p class=\"mb-1\">{{item.abstract}}</p>\n      <p class=\"mb-1\"><span class=\"fa fa-calendar\" aria-hidden=\"true\"></span> {{item.version_date | date}}</p>\n\n      <div class=\"\" *ngFor=\"let author of item.authors\">\n        <span class=\"fa fa-user\" aria-hidden=\"true\"></span> <small>{{author}}</small>\n      </div>\n    </a>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-doc/search-doc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_doc_service__ = __webpack_require__("./src/app/services/doc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__("./src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDocComponent = (function () {
    function SearchDocComponent(docServ, authorService, router) {
        this.docServ = docServ;
        this.authorService = authorService;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownListTypeOfDoc = [];
        this.selectedTypeOfDoc = [];
        this.dropdownSettingsTypeOfDoc = {};
        this.dropdownListResearchScope = [];
        this.selectedResearchScope = [];
        this.dropdownSettingsResearchScope = {};
        this.authorsSelected = [];
        this.query = [];
        this.isAcademicChecked = false;
        this.isAcademicPressed = false;
        this.isNewsArticlePressed = false;
        this.isReportsPressed = false;
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SearchDocComponent.prototype.getList = function () {
        var _this = this;
        this.docServ.getAll().subscribe(function (result) {
            _this.docs = result.sort(function (a, b) {
                return new Date(b.version_date).getTime() - new Date(a.version_date).getTime();
            });
            //  this.peopleFilter = {title:'Stand Up for Learning' , doctype: 'Newspaper'};
            _this.peopleFilter = {};
        }, function (error) { return console.error(error); });
    };
    SearchDocComponent.prototype.getAuthors = function (callback) {
        var _this = this;
        this.authorService.getAll().subscribe(function (result) {
            _this.authors = result;
            console.log(_this.authors);
            callback(_this.authors);
        }, function (error) {
            console.error(error);
            callback(false);
        });
    };
    SearchDocComponent.prototype.toggleSelection = function (authorname) {
        var index = this.authorsSelected.indexOf(authorname);
        if (index > -1) {
            this.authorsSelected.splice(index, 1);
        }
        else {
            this.authorsSelected.push(authorname);
        }
        this.createQuery();
        console.log(this.authorsSelected);
    };
    SearchDocComponent.prototype.onSubmit = function () {
        var _this = this;
        this.docServ.add(this.newDoc).subscribe(function (response) {
            if (response.success == true)
                _this.addList.emit(_this.newDoc);
        });
    };
    SearchDocComponent.prototype.onClick = function () {
        this.router.navigate(['app-doc-details', '456']);
    };
    SearchDocComponent.prototype.ngOnInit = function () {
        var _this = this;
        var el = this.AcademicBtn.nativeElement;
        el.click();
        //this.getList();
        this.authorService.getAll().subscribe(function (result) {
            _this.authors = result;
            _this.dropdownList = _this.authors;
            _this.selectedItems = [];
            _this.dropdownSettings = {
                singleSelection: false,
                text: "Select Author",
                showCheckbox: true,
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                classes: "",
                labelKey: 'name',
                primaryKey: '_id',
            };
        }, function (error) {
            console.error(error);
        });
        this.bindType();
        this.bindResearchScope();
    };
    SearchDocComponent.prototype.bindType = function () {
        this.dropdownListTypeOfDoc = [
            { "id": 1, "name": "Empirical" },
            { "id": 2, "name": "Theoretical" }
        ];
        this.selectedTypeOfDoc = [];
        this.dropdownSettingsTypeOfDoc = {
            singleSelection: false,
            text: "Select Type",
            showCheckbox: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            labelKey: 'name',
            primaryKey: 'id',
        };
    };
    SearchDocComponent.prototype.showAcademicResearchDocs = function (isAcademicChecked, isNewsChecked, isReportChecked) {
        this.selectedResearchScope = [];
        if (isAcademicChecked) {
            this.selectedResearchScope.push({ 'research_scope': 'Academic' });
            this.isAcademicChecked = true;
            this.isAcademicPressed = true;
            this.isNewsArticlePressed = false;
            this.isReportsPressed = false;
        }
        else if (isNewsChecked) {
            this.selectedResearchScope.push({ 'research_scope': 'News' });
            this.isNewsArticlePressed = true;
            this.isAcademicPressed = false;
            this.isReportsPressed = false;
        }
        else if (isReportChecked) {
            this.selectedResearchScope.push({ 'research_scope': 'Report' });
            this.isNewsArticlePressed = false;
            this.isAcademicPressed = false;
            this.isReportsPressed = true;
        }
        if (isAcademicChecked == undefined || isAcademicChecked == false) {
            this.isAcademicChecked = false;
            this.selectedTypeOfDoc = [];
        }
        this.createQuery();
    };
    SearchDocComponent.prototype.bindResearchScope = function () {
        this.dropdownListResearchScope = [
            { "id": 1, "name": "Academic Research", "value": "Academic" },
            { "id": 2, "name": "News Articles", "value": "News" },
            { "id": 3, "name": "Report & White Papers", "value": "Report" }
        ];
        this.selectedResearchScope = [];
        this.dropdownSettingsResearchScope = {
            singleSelection: false,
            text: "Select Research Scope",
            showCheckbox: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            labelKey: 'name',
            primaryKey: 'id',
        };
    };
    SearchDocComponent.prototype.createQuery = function () {
        var selectedAuthors = this.selectedItems.map(function (obj) {
            return { 'authors': obj.name };
        });
        var selectedType = this.selectedTypeOfDoc.map(function (obj) {
            return { 'type_of_article': obj.name };
        });
        // var selectedResearchScopeItem= this.selectedResearchScope.map(function(obj){
        //   return {'research_scope':obj.value};
        // });
        var selectedResearchScopeItem = this.selectedResearchScope;
        this.query = [];
        if (selectedAuthors.length != 0) {
            this.query.push({ $or: selectedAuthors });
        }
        if (selectedType.length != 0) {
            this.query.push({ $or: selectedType });
        }
        if (selectedResearchScopeItem.length != 0) {
            this.query.push({ $or: selectedResearchScopeItem });
        }
        console.log("selected items: " + JSON.stringify(selectedAuthors) + " ** " + JSON.stringify(selectedType) + "***" + JSON.stringify(this.query));
        this.fetchData(this.query);
    };
    SearchDocComponent.prototype.fetchData = function (queryObj) {
        var _this = this;
        if (queryObj.length != 0) {
            this.docServ.query(queryObj).subscribe(function (response) {
                _this.docs = response.sort(function (a, b) {
                    return new Date(b.version_date).getTime() - new Date(a.version_date).getTime();
                });
            }, function (error) { return console.error(error); });
        }
        else {
            this.getList();
        }
    };
    SearchDocComponent.prototype.onItemSelect = function (item) {
        // console.log(item);
        // console.log(this.selectedItems);
        this.createQuery();
    };
    SearchDocComponent.prototype.OnItemDeSelect = function (item) {
        // console.log(item);
        // console.log(this.selectedItems);
        this.createQuery();
    };
    SearchDocComponent.prototype.onSelectAll = function (items) {
        //console.log(items);
        this.createQuery();
    };
    SearchDocComponent.prototype.onDeSelectAll = function (items) {
        //console.log(items);
        this.createQuery();
    };
    return SearchDocComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('AcademicBtn'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], SearchDocComponent.prototype, "AcademicBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], SearchDocComponent.prototype, "addList", void 0);
SearchDocComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-search-doc',
        template: __webpack_require__("./src/app/search-doc/search-doc.component.html"),
        styles: [__webpack_require__("./src/app/search-doc/search-doc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_doc_service__["a" /* DocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_doc_service__["a" /* DocService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], SearchDocComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search-doc.component.js.map

/***/ }),

/***/ "./src/app/services/author.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorService = (function () {
    function AuthorService(http) {
        this.http = http;
        //private serverApi= 'http://localhost:3000';
        this.serverApi = 'http://dataregulation.azurewebsites.net/';
    }
    AuthorService.prototype.getAll = function () {
        var URI = this.serverApi + "/authors/";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.authors; });
    };
    AuthorService.prototype.delete = function (id) {
        var URI = this.serverApi + "/authors/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthorService.prototype.get = function (id) {
        var URI = this.serverApi + "/authors/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.item; });
    };
    AuthorService.prototype.add = function (author) {
        var URI = this.serverApi + "/authors/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ name: author.name, age: author.age });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthorService;
}());
AuthorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthorService);

var _a;
//# sourceMappingURL=author.service.js.map

/***/ }),

/***/ "./src/app/services/doc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocService = (function () {
    function DocService(http) {
        this.http = http;
        //private serverApi= 'http://localhost:3000';
        this.serverApi = 'http://dataregulation.azurewebsites.net/';
    }
    DocService.prototype.getAll = function () {
        var URI = this.serverApi + "/documents/";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.docs; });
    };
    DocService.prototype.delete = function (listId) {
        var URI = this.serverApi + "/documents/" + listId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DocService.prototype.get = function (listId) {
        var URI = this.serverApi + "/documents/" + listId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.doc; });
    };
    DocService.prototype.add = function (list) {
        var URI = this.serverApi + "/documents/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ title: list.title, abstract: list.abstract });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DocService.prototype.query = function (querystr) {
        var URI = this.serverApi + "/documents/query";
        var body = JSON.stringify({ querystr: querystr });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.docs; });
    };
    return DocService;
}());
DocService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DocService);

var _a;
//# sourceMappingURL=doc.service.js.map

/***/ }),

/***/ "./src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService(http) {
        this.http = http;
        //private serverApi= 'http://localhost:3000';
        this.serverApi = 'http://dataregulation.azurewebsites.net/';
    }
    EventService.prototype.getAll = function () {
        var URI = this.serverApi + "/events/";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.events; });
    };
    EventService.prototype.delete = function (id) {
        var URI = this.serverApi + "/events/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.get = function (id) {
        var URI = this.serverApi + "/events/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.item; });
    };
    EventService.prototype.add = function (event) {
        var URI = this.serverApi + "/events/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ name: event.title, age: event.abstract });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map