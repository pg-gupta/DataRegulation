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

/***/ "./src/app/add-list/add-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\n\tmargin-top: 5%;\n}\n\n#search {\n\twidth:30%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n          <input [(ngModel)]=\"searchText\"  name=\"searchDoc\" type=\"text\" id=\"search\" aria-describedby=\"searchDoc\" placeholder=\"Search\">\n          <span><i  class=\"fa fa-search search-icon\"></i></span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <angular4-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\"\n      (onDeSelect)=\"OnItemDeSelect($event)\"\n      (onSelectAll)=\"onSelectAll($event)\"\n      (onDeSelectAll)=\"onDeSelectAll($event)\"\n      >\n      <c-item>\n        <ng-template let-item=\"item\">\n          <label style=\"color: #333;min-width: 150px;\">{{item.name}}</label>\n        </ng-template>\n      </c-item>\n    </angular4-multiselect>\n</div>\n<div class=\"col-md-9\">\n  <div class=\"list-group\" *ngFor=\"let item of lists | filter: searchText\">\n\n    <!-- <div class=\"list-group\" *ngFor=\"let item of lists | myfilter: peopleFilter;\"> -->\n    <a [routerLink]=\"['/details', item._id]\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{item.title}}</h5>\n        <!-- <a [routerLink]=\"['/details', item._id]\">{{item.title}}</a> -->\n      </div>\n      <p class=\"mb-1\">{{item.description}}</p>\n      <small>{{item.content}}</small>\n    </a>\n  </div>\n</div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__("./src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @Pipe({
//   name: 'myfilter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: List[], filter: {[key: string]: any }): List[] {
//     if(items==null) return null;
//     return items.filter(item => {
//       let notMatchingField = Object.keys(filter)
//       .find(key => item[key] !== filter[key]);
//       return !notMatchingField;
//     });
//   }
// }
var AddListComponent = (function () {
    function AddListComponent(listServ, authorService, router) {
        this.listServ = listServ;
        this.authorService = authorService;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.authorsSelected = [];
        this.query = "";
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    // ngOnInit() {
    //   this.getList();
    //   this.getAuthors();
    //
    // }
    AddListComponent.prototype.getList = function () {
        var _this = this;
        this.listServ.getAllLists().subscribe(function (result) {
            _this.lists = result;
            //  this.peopleFilter = {title:'Stand Up for Learning' , doctype: 'Newspaper'};
            _this.peopleFilter = {};
        }, function (error) { return console.error(error); });
    };
    AddListComponent.prototype.getAuthors = function (callback) {
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
    AddListComponent.prototype.toggleSelection = function (authorname) {
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
    // public createQuery(){
    //   var queryObj=[];
    //   if(this.authorsSelected!=[]){
    //     this.authorsSelected.forEach(function (value) {
    //       queryObj.push({title:value});
    //     });
    //   }
    //   else{
    //
    //   }
    //   this.fetchData(queryObj);
    // }
    // public fetchData(){
    //   this.listServ.query(this.query).subscribe(response=>{
    //     this.lists=response;
    //   },error=>console.error(error))
    // }
    AddListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newList.category);
        this.listServ.addList(this.newList).subscribe(function (response) {
            if (response.success == true)
                _this.addList.emit(_this.newList);
        });
    };
    AddListComponent.prototype.onClick = function () {
        this.router.navigate(['app-doc-details', '456']);
    };
    AddListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getList();
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
                classes: "myclass custom-class",
                labelKey: 'name',
                primaryKey: '_id',
            };
        }, function (error) {
            console.error(error);
        });
    };
    AddListComponent.prototype.createQuery = function () {
        var selected = this.selectedItems.map(function (obj) {
            return { 'title': obj.name };
        });
        console.log("selected items: " + selected);
        this.fetchData(selected);
    };
    AddListComponent.prototype.fetchData = function (queryObj) {
        var _this = this;
        if (queryObj.length != 0) {
            this.listServ.query(queryObj).subscribe(function (response) {
                _this.lists = response;
            }, function (error) { return console.error(error); });
        }
        else {
            this.getList();
        }
    };
    AddListComponent.prototype.onItemSelect = function (item) {
        // console.log(item);
        // console.log(this.selectedItems);
        this.createQuery();
    };
    AddListComponent.prototype.OnItemDeSelect = function (item) {
        // console.log(item);
        // console.log(this.selectedItems);
        this.createQuery();
    };
    AddListComponent.prototype.onSelectAll = function (items) {
        //console.log(items);
        this.createQuery();
    };
    AddListComponent.prototype.onDeSelectAll = function (items) {
        //console.log(items);
        this.createQuery();
    };
    return AddListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], AddListComponent.prototype, "addList", void 0);
AddListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-add-list',
        template: __webpack_require__("./src/app/add-list/add-list.component.html"),
        styles: [__webpack_require__("./src/app/add-list/add-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], AddListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-list.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div style=\"text-align:left\">\n  <div class=\"container\">\n  <!--Navbar-->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">IIT OneStop</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <br>\n  <!-- <app-add-list></app-add-list> -->\n  <router-outlet></router-outlet>\n  <!--<app-view-list> </app-view-list>-->\n\n</div>\n</div>\n"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'IIT One Stop';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_list_add_list_component__ = __webpack_require__("./src/app/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__ = __webpack_require__("./src/app/doc-details/doc-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_author_service__ = __webpack_require__("./src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular4_multiselect_dropdown_angular4_multiselect_dropdown__ = __webpack_require__("./node_modules/angular4-multiselect-dropdown/angular4-multiselect-dropdown.ts");
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
            __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular4_multiselect_dropdown_angular4_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__add_list_add_list_component__["a" /* AddListComponent */], },
                { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__["a" /* DocDetailsComponent */] },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                { path: '**', redirectTo: 'home' }
            ]),
        ],
        //Components are added here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__add_list_add_list_component__["a" /* AddListComponent */],
            //FilterPipe,
            __WEBPACK_IMPORTED_MODULE_7__doc_details_doc_details_component__["a" /* DocDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        //All the modules are declared as imports
        //All the services go here.
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_10__services_author_service__["a" /* AuthorService */]],
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
exports.push([module.i, ".btn-danger {\n\tcolor: #eeeeee;\n\n}\n\n.align-center {\n\ttext-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/doc-details/doc-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Document Details</h3>\n  <b>ID:</b>  {{item._id}} <br>\n  <b>TITLE:</b> {{item.title}} <br>\n  <b>DESCRIPTION:</b> {{item.description}} <br>\n  <b>URL:</b> {{item.url}} <br>\n  <b>CONTENT:</b> {{item.content}} <br>\n  <b>TYPE OF DOCUMENT:</b> {{item.doctype}} <br>\n</div>\n"

/***/ }),

/***/ "./src/app/doc-details/doc-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
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
    //private listServ;
    function DocDetailsComponent(route, listServ) {
        this.route = route;
        this.listServ = listServ;
    }
    DocDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params.id; // (+) converts string 'id' to a number
            _this.listServ.get(_this.id).subscribe(function (result) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]) === "function" && _b || Object])
], DocDetailsComponent);

var _a, _b;
//# sourceMappingURL=doc-details.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h3>Data Regulation </h3>\n  <h5>This is one place to find the summary of all data regulation documents</h5>\n  <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/search']\">SEARCH</button>\n</div>\n"

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
        this.serverApi = 'http://localhost:3000';
    }
    //private serverApi= 'http://dataregulation.azurewebsites.net/';
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

/***/ "./src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(http) {
        this.http = http;
        //private serverApi= 'http://localhost:3000';
        this.serverApi = 'http://dataregulation.azurewebsites.net/';
    }
    ListService.prototype.getAllLists = function () {
        var URI = this.serverApi + "/iitsummaries/";
        //let URI = `/iitsummaries/`;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.lists; });
    };
    ListService.prototype.deleteList = function (listId) {
        var URI = this.serverApi + "/iitsummaries/" + listId;
        //let URI = `/iitsummaries/${listId}`;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.get = function (listId) {
        var URI = this.serverApi + "/iitsummaries/" + listId;
        //let URI = `/iitsummaries/${listId}`;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.item; });
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/iitsummaries/";
        // let URI = `/iitsummaries/`;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.query = function (querystr) {
        var URI = this.serverApi + "/iitsummaries/query";
        var body = JSON.stringify({ querystr: querystr });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.lists; });
    };
    return ListService;
}());
ListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ListService);

var _a;
//# sourceMappingURL=list.service.js.map

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