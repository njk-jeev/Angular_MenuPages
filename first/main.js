(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'first';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _delivery_order_delivery_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delivery-order/delivery-order.component */ "./src/app/delivery-order/delivery-order.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"],
                _delivery_order_delivery_order_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryOrderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: "Customer", component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"] },
                    { path: "Login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: "Delivery", component: _delivery_order_delivery_order_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryOrderComponent"] },
                    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div role=\"main\" class=\"main\">\n  <section class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Task2 : Customer Details</h1>\n        </div>\n      </div>\n    \n    </div>\n  </section>\n    <div id=\"wrapper\">\n  <table align=\"center\" cellspacing=2 cellpadding=5 id=\"data_table\" border=\"1\">\n  <tr>\n  <th>Name</th>\n  <th>email</th>\n  <th>phone number</th>\n  </tr>\n  \n  <tr id=\"row1\">\n  <td id=\"name_row1\">Ankit</td>\n  <td id=\"country_row1\">ankit123@hotmail.com</td>\n  <td id=\"age_row1\">9658741245</td>\n  <td>\n  <input type=\"button\"class=\"btn btn-primary\"id=\"edit_button1\" value=\"Edit\" class=\"edit\" onclick=\"edit_row('1')\">\n  <input type=\"button\" class=\"btn btn-primary\"id=\"save_button1\" value=\"Save\" class=\"save\" onclick=\"save_row('1')\">\n  <input type=\"button\" class=\"btn btn-primary\"value=\"Delete\" class=\"delete\" onclick=\"delete_row('1')\">\n  </td>\n  </tr>\n  \n  <tr id=\"row2\">\n  <td id=\"name_row2\">Shawn</td>\n  <td id=\"country_row2\">shaw@gmail.com</td>\n  <td id=\"age_row2\">6589741237</td>\n  <td>\n  <input type=\"button\"class=\"btn btn-primary\" id=\"edit_button2\" value=\"Edit\" class=\"edit\" onclick=\"edit_row('2')\">\n  <input type=\"button\" class=\"btn btn-primary\"id=\"save_button2\" value=\"Save\" class=\"save\" onclick=\"save_row('2')\">\n  <input type=\"button\" class=\"btn btn-primary\"value=\"Delete\" class=\"delete\" onclick=\"delete_row('2')\">\n  </td>\n  </tr>\n  \n  <tr id=\"row3\">\n  <td id=\"name_row3\">Rahul</td>\n  <td id=\"country_row3\">raw@yahoo@gmail.com</td>\n  <td id=\"age_row3\">9254847619</td>\n  <td >\n  <input type=\"button\" class=\"btn btn-primary\"id=\"edit_button3\" value=\"Edit\" class=\"edit\" onclick=\"edit_row('3')\">\n  <input type=\"button\" class=\"btn btn-primary\"id=\"save_button3\" value=\"Save\" class=\"save\" onclick=\"save_row('3')\">\n  <input type=\"button\" class=\"btn btn-primary\"value=\"Delete\" class=\"delete\" onclick=\"delete_row('3')\">\n  </td>\n  </tr>\n  \n  <tr>\n  <td><input type=\"text\" id=\"new_name\"></td>\n  <td><input type=\"text\" id=\"new_country\"></td>\n  <td><input type=\"text\" id=\"new_age\"></td>\n  <td><button id=\"addToTable\" class=\"btn btn-primary\"onclick=\"add_row();\" value=\"Add Row\">Add <i class=\"fa fa-plus\"></i></button></td>\n  \n  </tr>\n  \n  </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/delivery-order/delivery-order.component.css":
/*!*************************************************************!*\
  !*** ./src/app/delivery-order/delivery-order.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5LW9yZGVyL2RlbGl2ZXJ5LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/delivery-order/delivery-order.component.html":
/*!**************************************************************!*\
  !*** ./src/app/delivery-order/delivery-order.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div role=\"main\" class=\"main\">\n  <section class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Task3 : Order Details</h1>\n        </div>\n      </div>\n    </div>\n  </section><div class=\"table1\">\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <h4>Date from</h4>\n        <input type=\"date\" class=\"form-control\" id=\"datefilterfrom\" data-date-split-input=\"true\">\n    </div>\n    <div class=\"col-md-3\">\n        <h4>Date to</h4>\n        <input type=\"date\"  class=\"form-control\" id=\"datefilterto\" data-date-split-input=\"true\">\n    </div>\n    <div class=\"col-md-2\">\n        <h4>DELIVERY</h4>\n       <select id=\"projectfilter\" name=\"projectfilter\" class=\"form-control\"><option value=\"1\">completed</option><option value=\"2\">upcoming</option></select>\n    </div>\n \n         <table id=\"testTable\" class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Empid</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">Delivery</th>\n               <th scope=\"col\">Order Number</th>\n           \n            </tr>\n        </thead>\n        <tbody id=\"report\">\n          <tr style=\"background-color:#f2f2f2;\">\n            <td class=\"proposalId\">9</td>\n            <td> 17/07/2018</td> \n            <td> completed</td>\n          <td> ORD12</td>\n          </tr>\n          <tr style=\"background-color:#f2f2f2;\">\n              <td class=\"proposalId\">8</td><td> 18/07/2018</td><td> completed</td><td> ORD13</td></tr>\n          <tr style=\"background-color:#f2f2f2;\">\n              <td class=\"proposalId\">7</td><td> 17/07/2018</td><td> upcoming</td><td> ORD14</td></tr>\n         <tr style=\"background-color:#f2f2f2;\"><td class=\"proposalId\">3</td><td> 19/07/2018</td><td> upcoming</td><td>ORD15</td></tr>\n         </tbody>\n      </table>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/delivery-order/delivery-order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/delivery-order/delivery-order.component.ts ***!
  \************************************************************/
/*! exports provided: DeliveryOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOrderComponent", function() { return DeliveryOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryOrderComponent = /** @class */ (function () {
    function DeliveryOrderComponent() {
    }
    DeliveryOrderComponent.prototype.ngOnInit = function () {
    };
    DeliveryOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-order',
            template: __webpack_require__(/*! ./delivery-order.component.html */ "./src/app/delivery-order/delivery-order.component.html"),
            styles: [__webpack_require__(/*! ./delivery-order.component.css */ "./src/app/delivery-order/delivery-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryOrderComponent);
    return DeliveryOrderComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"footer-ribbon\">\n\t\t\t\t\t\t\t<span>Get in Touch</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<div class=\"newsletter\">\n\t\t\t\t\t\t\t\t<h4>Newsletter</h4>\n\t\t\t\t\t\t\t\t<p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"alert alert-success hidden\" id=\"newsletterSuccess\">\n\t\t\t\t\t\t\t\t\t<strong>Success!</strong> You've been added to our email list.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger hidden\" id=\"newsletterError\"></div>\n\t\t\t\n\t\t\t\t\t\t\t\t<form id=\"newsletterForm\" action=\"php/newsletter-subscribe.php\" method=\"POST\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"Email Address\" name=\"newsletterEmail\" id=\"newsletterEmail\" type=\"text\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"submit\">Go!</button>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<h4>Latest Tweets</h4>\n\t\t\t\t\t\t\t<div id=\"tweet\" class=\"twitter\" data-plugin-tweets data-plugin-options=\"{'username': '', 'count': 2}\">\n\t\t\t\t\t\t\t\t<p>Please wait...</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"contact-details\">\n\t\t\t\t\t\t\t\t<h4>Contact Us</h4>\n\t\t\t\t\t\t\t\t<ul class=\"contact\">\n\t\t\t\t\t\t\t\t\t<li><p><i class=\"fa fa-map-marker\"></i> <strong>Address:</strong> 1234 Street Name, City Name, United States</p></li>\n\t\t\t\t\t\t\t\t\t<li><p><i class=\"fa fa-phone\"></i> <strong>Phone:</strong> (123) 456-789</p></li>\n\t\t\t\t\t\t\t\t\t<li><p><i class=\"fa fa-envelope\"></i> <strong>Email:</strong> <a href=\"mailto:mail@example.com\">mail@example.com</a></p></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h4>Follow Us</h4>\n\t\t\t\t\t\t\t<ul class=\"social-icons\">\n\t\t\t\t\t\t\t\t<li class=\"social-icons-facebook\"><a href=\"http://www.facebook.com/\" target=\"_blank\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"social-icons-twitter\"><a href=\"http://www.twitter.com/\" target=\"_blank\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"social-icons-linkedin\"><a href=\"http://www.linkedin.com/\" target=\"_blank\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"footer-copyright\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t<p>© Copyright 2017. All Rights Reserved.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<nav id=\"sub-menu\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"page-faq.html\">FAQ's</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"sitemap.html\">Sitemap</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"contact-us.html\">Contact</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <header id=\"header\" data-plugin-options=\"{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 57, 'stickySetTop': '-57px', 'stickyChangeLogo': true}\">\n      <div class=\"header-container container\">\n        <div class=\"header-row\">\n          <div class=\"header-column\">\n           \n          </div>\n          <div class=\"header-column\">\n            <div class=\"header-row\">\n              <div class=\"header-search hidden-xs\">\n                <form id=\"searchForm\" action=\"page-search-results.html\" method=\"get\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"q\" id=\"q\" placeholder=\"Search...\" required>\n                    <span class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n                    </span>\n                  </div>\n                </form>\n              </div>\n              <nav class=\"header-nav-top\">\n                <ul class=\"nav nav-pills\">\n                  <li class=\"hidden-xs\">\n                    <a href=\"about-us.html\"><i class=\"fa fa-angle-right\"></i> About Us</a>\n                  </li>\n                  <li class=\"hidden-xs\">\n                    <a href=\"contact-us.html\"><i class=\"fa fa-angle-right\"></i> Contact Us</a>\n                  </li>\n                  <li>\n                    <span class=\"ws-nowrap\"><i class=\"fa fa-phone\"></i> (123) 456-789</span>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n                          <div class=\"header-row\">\n              <div class=\"header-nav\">\n                <button class=\"btn header-btn-collapse-nav\" data-toggle=\"collapse\" data-target=\".header-nav-main\">\n                  <i class=\"fa fa-bars\"></i>\n                </button>\n                <ul class=\"header-social-icons social-icons hidden-xs\">\n                  <li class=\"social-icons-facebook\"><a href=\"http://www.facebook.com/\" target=\"_blank\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li class=\"social-icons-twitter\"><a href=\"http://www.twitter.com/\" target=\"_blank\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li class=\"social-icons-linkedin\"><a href=\"http://www.linkedin.com/\" target=\"_blank\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                </ul>\n                <div class=\"header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse\">\n                  <nav>\n                    <ul class=\"nav nav-pills\" id=\"mainNav\">\n                      <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\"  routerLink=\"/Customer\">\n                        Customer Details\n                        </a> \n                      </li>\n                      <li class=\"dropdown dropdown-mega\">\n                        <a  routerLink=\"/Login\">\n                         Login\n\n                        </a>\n                      </li>\n                      <li class=\"dropdown\">\n                        <a  routerLink=\"/Delivery\">\n                        Delivery Details\n\n\n                        </a>\n                      </li>\n                    </ul>\n                  </nav>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </header>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"main\" class=\"main\">\n  <section class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Task2 : DeliveryBoy Login</h1>\n        </div>\n      </div>\n    </div>\n  </section>\n  <body style = \"background-color:#fff\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"featured-boxes\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"featured-box featured-box-primary align-left mt-xlg\">\n                <div class=\"box-content\">\n                  <h4 class=\"heading-primary text-uppercase mb-md\">Exiting Candidate</h4>\n                  <form action=\"/\" id=\"frmSignIn\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"form-group\">\n                          <div class=\"col-md-12\">\n                              <i class=\"fa fa-id-badge\"></i>\n                            <label>Employee ID</label>\n                            <input type=\"text\" value=\"\" class=\"form-control input-lg\" style=\"border-color:#000\">\n                          </div>\n                        </div>\n                      </div>\n                    \n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <div class=\"col-md-12\">\n                          \n                          <i class=\"fa fa-lock\"></i>\n                          <label>Password</label>\n                          <input type=\"password\" value=\"\" class=\"form-control input-lg\" style=\"border-color:#000\">\n                        </div>\n                      </div>\n                    </div>\n                    <a class=\"pull-left\" href=\"forgot.html\">Forgot Password?</a> \n                    <br>\n                    <div class=\"row\">\n                      \n                      <div class=\"col-md-6\">\n                        <input type=\"submit\" value=\"Login\" class=\"btn btn-primary pull-right mb-xl\" data-loading-text=\"Loading...\" style=\"border-color:#000\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n               \n            </div>\n            \n            <div class=\"col-sm-6\">\n              <div class=\"featured-box featured-box-primary align-left mt-xlg\">\n                <div class=\"box-content\">\n                  <h4 class=\"heading-primary text-uppercase mb-md\">New Candidate</h4>\n                  <form action=\"/\" id=\"frmSignUp\" method=\"post\">\n                            <div class=\"row\">\n                              <div class=\"col-sm-6 col-md-6\">\n                                <div class=\"form-group\">\n                                  <i class=\"fa fa-user\"></i> \n                                  <label class=\"font-weight-normal\">First Name <span class=\"required\">*</span></label>\t\t\t\t\t\t\t\t\t\n                                  <input type=\"text\" class=\"form-control\" style=\"border-color:#000\" required>\n                                </div>\n                              </div>\n                              \n                              <div class=\"col-sm-6 col-md-6\">\n                                <div class=\"form-group\">\n                                    <i class=\"fa fa-user\"></i> \n                                  <label class=\"font-weight-normal\">Last Name <span class=\"required\">*</span></label>\n                                  <input type=\"text\" class=\"form-control\" style=\"border-color:#000\" required>\n                                </div>\n                              </div>\n                            </div>\n            \n                            <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <i class=\"fa fa-id-badge\"></i>\n                                  <label class=\"font-weight-normal\">Employee ID <span class=\"required\">*</span></label>\n                                  <input type=\"text\" class=\"form-control\" style=\"border-color:#000\" required>\n                                </div>\n                              </div>\n                            </div>\n                          \n                              \n                            <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <i class=\"fa fa-phone-square\"></i>\n                                  <label class=\"font-weight-normal\">Phone Number <span class=\"required\">*</span></label>\n                                  <input type=\"number\" class=\"form-control\" style=\"border-color:#000\"required>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-11\">\n                                  <div class=\"form-group\">\n                                      <i class=\"fa fa-envelope\"></i>\n                                    <label class=\"font-weight-normal\">Email Address <span class=\"required\">*</span></label>\n                                    <input type=\"email\" class=\"form-control\" style=\"border-color:#000\" required>\n                                  </div>\n                   \n                     \n                                \n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"form-group\">\n                            <br>\n                            <i class=\"fa fa-address-card\"></i>\n                            <label class=\"font-weight-normal\">Address <span class=\"required\">*</span></label>\n                            <textarea input type=\"text\" class=\"form-control\"  textarea rows=\"4\" cols=\"50\" name=\"comment\" form=\"usrform\" style=\"border-color:#000\">\n                            </textarea> \n                          </div>\n                        </div>\n                      </div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <div class=\"col-md-6\">\n                            <i class=\"fa fa-lock\"></i>\n                          <label>Password</label>\n                          <input type=\"password\" value=\"\" class=\"form-control input-lg\" style=\"border-color:#000\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <i class=\"fa fa-lock\"></i>\n                          <label>Confirm Password</label>\n                          <input type=\"password\" value=\"\" class=\"form-control input-lg\" style=\"border-color:#000\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <input type=\"submit\" value=\"Register\" class=\"btn btn-primary pull-right mb-xl\" data-loading-text=\"Loading...\" style=\"border-color:#000\">\n                      </div>\n                    </div>\n                </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeevannimmagadda/Documents/biteme/team_code/jk_dashboard_gh/Angular_MenuPages/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map