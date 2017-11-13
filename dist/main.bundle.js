webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/\">POS</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a  routerLink = \"/category\">Add Category</a></li>\n        <li routerLinkActive=\"active\"><a  routerLink = \"/product\">Add Product</a></li>\n        <li routerLinkActive=\"active\"><a  routerLink = \"/upload\">Upload Data</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!userService.checkLoginStatus()\" routerLinkActive=\"active\"><a  routerLink = \"/register\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\n        <li  *ngIf=\"!userService.checkLoginStatus()\" routerLinkActive=\"active\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li  *ngIf=\"userService.checkLoginStatus()\" ><a style=\"cursor: pointer\" (click)=\"userService.logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
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
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interceptors_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/interceptors/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_service__ = __webpack_require__("../../../../../src/app/service/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_app__ = __webpack_require__("../../../../../src/app/material.app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_upload_upload_component__ = __webpack_require__("../../../../../src/app/components/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__material_app__["a" /* Material */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_11__app_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__service_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */], {
                    'provide': __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    'useClass': __WEBPACK_IMPORTED_MODULE_0__interceptors_auth_interceptor_service__["a" /* AuthInterceptor */],
                    'multi': true,
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\r\n  text-align:center;\r\n  margin-top: 100px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n  min-height: 100px;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Saira Semi Condensed', sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\" col-md-offset-1 col-md-4\" id=\"main\">\n  <h3>Add Category</h3>\n    <form (ngSubmit)=\"addCategory()\" [formGroup]=\"categoryForm\">\n      <mat-form-field class=\"col-md-offset-1 col-md-9\">\n          <input formControlName=\"name\"  matInput placeholder=\"Category\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-offset-1 col-md-9\">\n            <mat-select formControlName=\"status\" placeholder=\"Status\" required>\n              <mat-option  [value]=\"true\">True</mat-option>\n              <mat-option  [value]=\"false\">False</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"col-md-offset-1 col-md-9\">\n            <textarea formControlName=\"description\" matInput placeholder=\"Description\" required></textarea>\n        </mat-form-field>\n  \n        <button  mat-raised-button color=\"primary\">Add</button>\n        <br><br>\n    </form>\n\n</div>\n\n<div *ngIf=\"allCategories.length>0\" class=\" col-md-offset-1 col-md-5\" id=\"main\">\n    <h3>Categories</h3>\n    <br>\n    <div class=\"container col-md-offset-1 col-md-10\">\n        <table  class=\"table table-bordered table-striped table-hover \">\n          <tr>\n              <th style=\"text-align: center\">No</th>\n              <th style=\"text-align: center\">Category Name</th>\n              <th style=\"text-align: center\">Status</th>\n\n          </tr>\n          <tr *ngFor=\"let category of allCategories; let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{category.name}}</td>\n              <td>{{category.status}}</td>\n          </tr>\n          </table>\n          </div>\n          <br><br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(categoryService, snackBar) {
        this.categoryService = categoryService;
        this.snackBar = snackBar;
        this.allCategories = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCategories = this.categoryService.getCategories().subscribe(function (res) {
            _this.allCategories = res[0]['category'];
        }, function (err) {
            console.log('Something went wrong!');
        });
        this.categoryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required)
        });
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        this.categoryService.addCategories(this.categoryForm.value).subscribe(function (response) {
            _this.allCategories = response[0]['category'];
            _this.snackBar.open('Category Added Successfully', 'Ok', {
                duration: 5000,
            });
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\r\n    text-align:center;\r\n    margin-top: 100px;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    min-height: 100px;\r\n  }\r\n\r\n  h3 {\r\n    font-family: 'Saira Semi Condensed', sans-serif;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"col-md-offset-4 col-md-4\" >\n    <h3 style=\"text-align: center\">Login</h3>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <mat-form-field class=\"col-md-offset-2 col-md-8\">\n          <input formControlName=\"email\" matInput placeholder=\"Name\">\n          <mat-error *ngIf=\"loginForm.controls.email.invalid\">\n              Please Enter a Email\n          </mat-error>\n      </mat-form-field>\n  \n    <mat-form-field class=\"col-md-offset-2 col-md-8\">\n      <input type=\"password\" formControlName=\"password\" matInput placeholder=\"Password\">\n      <mat-error *ngIf=\"loginForm.controls.password.invalid\">\n          Please enter a valid Password\n      </mat-error>\n    </mat-form-field>\n  \n  \n    <button [disabled]=\"!loginForm.valid\" mat-raised-button color=\"primary\">Login</button>\n  </form>\n  <br>\n  \n  \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required)
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.loginForm.value).subscribe(function (response) {
            console.log(response);
            if (response.status) {
                _this.userService.setLoginStatus(response.token);
                _this.router.navigateByUrl('/');
            }
            else {
                var snackbarRef = _this.snackBar.open('nvalid Username/Password', 'Try Again', {
                    duration: 5000,
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\r\n  text-align:center;\r\n  margin-top: 100px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n  min-height: 100px;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Saira Semi Condensed', sans-serif;\r\n}\r\n\r\n\r\n.inputForm {\r\n  width: 70%;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allCategories.length >0\"  class=\" col-md-offset-1 col-md-4\" id=\"main\">\n  <h3>Add Product</h3>\n\n  <form [formGroup]=\"productForm\">\n      <mat-form-field class=\"inputForm\">\n        <input matInput formControlName=\"name\" placeholder=\"Enter Name\">\n      </mat-form-field>\n\n      <mat-form-field class=\"inputForm\">\n          <input matInput formControlName=\"price\"  placeholder=\"Enter Price\">\n      </mat-form-field>\n\n\n      <mat-form-field class=\"inputForm\">\n          <mat-select [(ngModel)]=\"selectedCategory\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Category\">\n            <mat-option *ngFor=\"let item of allCategories\" [value]=\"item.name\">\n              {{ item.name }}\n            </mat-option>\n          </mat-select>\n      </mat-form-field>\n\n      <button (click)=\"addProduct()\" mat-raised-button color=\"primary\">Add</button>\n      <br><br>\n\n    </form>\n\n\n\n\n\n\n\n\n\n\n\n</div>\n\n<div *ngIf=\"allCategories.length >0\" class=\" col-md-offset-1 col-md-5\" id=\"main\">\n    <h3>View Products</h3>\n    <br>\n    <div class=\"col-md-offset-1 col-md-10\">\n    <mat-form-field class=\"inputForn\">\n        <mat-select [(ngModel)]=\"viewCategory\" (change)=\"getProductsOfCategory()\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Category\">\n          <mat-option *ngFor=\"let item of allCategories\" [value]=\"item.name\">\n            {{ item.name }}\n          </mat-option>\n        </mat-select>\n    </mat-form-field>\n    </div>\n\n    <br><br>\n    <div *ngIf=\"viewCategory && product.length>0\" class=\"container col-md-offset-1 col-md-10\">\n        <table  class=\"table table-bordered table-striped table-hover \">\n          <tr>\n              <th style=\"text-align: center\">No</th>\n              <th style=\"text-align: center\">Name</th>\n              <th style=\"text-align: center\">Price</th>\n\n          </tr>\n          <tr *ngFor=\"let prod of product; let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{prod.name}}</td>\n              <td>{{prod.price}}</td>\n          </tr>\n          </table>\n      </div>\n\n      <div *ngIf=\"viewCategory && product.length==0\" class=\"container col-md-offset-1 col-md-10\">\n        <br>\n          No Products Found\n          <br><br>\n        </div>\n\n          <br><br>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = (function () {
    function ProductComponent(categoryService, productService, snackBar) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.snackBar = snackBar;
        this.allCategories = [];
        this.product = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllData().subscribe(function (response) {
            _this.allData = response;
            _this.allCategories = response[0]['category'];
        });
        this.productForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required),
            'price': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required)
        });
        this.allCategories = this.categoryService.getCategories().subscribe(function (response) {
            _this.allCategories = response.json()[0]['category'];
        });
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        this.productService.addProduct(this.selectedCategory, this.productForm.value).subscribe(function (response) {
            _this.allData = response.json();
            _this.allCategories = response.json()[0]['category'];
            _this.getProductsOfCategory();
            _this.snackBar.open('Product Added Successfully', 'Ok', {
                duration: 5000,
            });
        });
    };
    ProductComponent.prototype.getProductsOfCategory = function () {
        var _this = this;
        this.product = [];
        console.log(this.allData);
        this.allData.forEach(function (element) {
            if (element.categoryName === _this.viewCategory) {
                _this.product = element.products;
            }
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\r\n    text-align:center;\r\n    margin-top: 100px;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    min-height: 100px;\r\n  }\r\n\r\n  h3 {\r\n    font-family: 'Saira Semi Condensed', sans-serif;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"col-md-offset-4 col-md-4\" >\n  <h3 style=\"text-align: center\">Register User</h3>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n    <mat-form-field class=\"col-md-offset-2 col-md-8\">\n        <input formControlName=\"name\" matInput placeholder=\"Name\">\n        <mat-error *ngIf=\"registerForm.controls.name.invalid\">\n            Please Enter a Name\n        </mat-error>\n    </mat-form-field>\n\n  <mat-form-field class=\"col-md-offset-2 col-md-8\">\n    <input formControlName=\"email\" matInput placeholder=\"Email\">\n    <mat-error *ngIf=\"registerForm.controls.email.invalid\">\n        Please enter a valid email address\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"col-md-offset-2 col-md-8\">\n    <input matInput formControlName= \"password\" placeholder=\"Password\" type=\"password\" >\n    <mat-error *ngIf=\"registerForm.controls.password.invalid\">\n        Enter a Password of min 6 characters\n    </mat-error>\n  </mat-form-field>\n\n  <button [disabled]=\"!registerForm.valid\" mat-raised-button color=\"primary\">Register</button>\n</form>\n<br>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)])
        });
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this.userService.registerUser(this.registerForm.value).subscribe(function (response) {
            if (response.status === true) {
                var snackbarRef = _this.snackBar.open(response.message, 'Login', {
                    duration: 5000,
                });
                snackbarRef.onAction().subscribe(function () {
                    _this.router.navigateByUrl('/');
                });
                snackbarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/');
                });
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\r\n    text-align:center;\r\n    margin-top: 100px;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    min-height: 100px;\r\n  }\r\n  \r\n  h3 {\r\n    font-family: 'Saira Semi Condensed', sans-serif;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\" col-md-offset-1 col-md-4\" id=\"main\">\n  <h3>Add Category</h3>\n      <form [formGroup]=\"uploadForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-md-offset-1 col-md-9 form-group\">\n          <input class=\"form-control\" type=\"file\" formControlName=\"file\" name=\"fileUpload\" #fileInput>\n        </div>\n\n        <button  [disabled]=\"uploadForm.invalid\" mat-raised-button color=\"primary\">Upload</button>\n        <br><br>\n        </form>\n</div>\n\n<div *ngIf=\"data\"  class=\" col-md-offset-1 col-md-5\" id=\"main\">\n  <h3>Categories</h3>\n  <br>\n  <div class=\"container col-md-offset-1 col-md-10\">\n      <table  class=\"table table-bordered table-striped table-hover \">\n        <tr>\n            <th style=\"text-align: center\">No</th>\n            <th style=\"text-align: center\">Category Name</th>\n            <th style=\"text-align: center\">Status</th>\n\n        </tr>\n        <tr *ngFor=\"let category of data; let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{category.name}}</td>\n            <td>{{category.status}}</td>\n        </tr>\n        </table>\n        </div>\n        <br><br>\n\n        <button (click)=\"addCategories()\"   mat-raised-button color=\"primary\">Add Categories</button>\n        <br><br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_upload_service__ = __webpack_require__("../../../../../src/app/service/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = (function () {
    function UploadComponent(uploadService, categoryService) {
        this.uploadService = uploadService;
        this.categoryService = categoryService;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.uploadForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'file': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]()
        });
    };
    UploadComponent.prototype.onSubmit = function () {
        var _this = this;
        var uploadFile = this.user_image.nativeElement;
        if (uploadFile.files && uploadFile.files[0]) {
            this.userImage = uploadFile.files[0];
        }
        var finalUploadFile = this.userImage;
        var formData = new FormData();
        formData.append('uploadedFile', finalUploadFile, finalUploadFile.name);
        this.uploadService.upload(formData).subscribe(function (response) {
            _this.data = response;
            _this.data.forEach(function (element) {
                if (element.status === 1) {
                    element.status = true;
                }
                else {
                    element.status = false;
                }
            });
        });
    };
    UploadComponent.prototype.addCategories = function () {
        this.data.forEach(function (cat) {
            delete cat['sno'];
        });
        this.uploadService.addCategory(this.data)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "user_image", void 0);
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_0__service_category_service__["a" /* CategoryService */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            this.snackBar.open('Please Login to Continue');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["y" /* MatSnackBar */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptor = (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth header from the service.
        var authHeader = sessionStorage.getItem('token');
        // Clone the request to add the new header.
        if (authHeader) {
            var authReq = req.clone({ headers: req.headers.set('token', authHeader) });
            return next.handle(authReq);
        }
        else {
            var authReq = req.clone();
            return next.handle(authReq);
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/material.app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Material = (function () {
    function Material() {
    }
    Material = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], Material);
    return Material;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_upload_upload_component__ = __webpack_require__("../../../../../src/app/components/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");






var appRoutes = [
    {
        path: 'category',
        component: __WEBPACK_IMPORTED_MODULE_5__components_category_category_component__["a" /* CategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'product',
        component: __WEBPACK_IMPORTED_MODULE_4__components_product_product_component__["a" /* ProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'upload',
        component: __WEBPACK_IMPORTED_MODULE_3__components_upload_upload_component__["a" /* UploadComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components_registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/service/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get('https://sathya-pos.herokuapp.com/protected/getcategory');
    };
    CategoryService.prototype.addCategories = function (category) {
        return this.http.post('https://sathya-pos.herokuapp.com/protected/addcategory', category);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/service/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductsofCategory = function (category) {
        return this.http.get('https://sathya-pos.herokuapp.com/protected/getproducts/' + category);
    };
    ProductService.prototype.addProduct = function (category, product) {
        return this.http.post('https://sathya-pos.herokuapp.com/protected/addproduct/' + category, product);
    };
    ProductService.prototype.getAllData = function () {
        return this.http.get('https://sathya-pos.herokuapp.com/protected/data');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/service/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (data) {
        return this.http.post('https://sathya-pos.herokuapp.com/protected/csvupload', data);
    };
    UploadService.prototype.addCategory = function (data) {
        return this.http.post('https://sathya-pos.herokuapp.com/protected/addcategories', data);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, router, matbar) {
        this.http = http;
        this.router = router;
        this.matbar = matbar;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
    }
    UserService.prototype.registerUser = function (user) {
        return this.http.post('https://sathya-pos.herokuapp.com/register', user);
    };
    UserService.prototype.login = function (user) {
        return this.http.post('https://sathya-pos.herokuapp.com/login', user);
    };
    UserService.prototype.setLoginStatus = function (token) {
        sessionStorage.setItem('token', token);
        this.matbar.open('You have been Logged In !', 'Home', {
            duration: 5000
        });
    };
    UserService.prototype.checkLoginStatus = function () {
        var token = sessionStorage.getItem('token');
        if (token) {
            return !this.jwtHelper.isTokenExpired(token);
        }
        else {
            return false;
        }
    };
    UserService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigateByUrl('/');
        this.matbar.open('You have been Logged Out !', 'OK', {
            duration: 5000
        });
    };
    UserService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["y" /* MatSnackBar */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map