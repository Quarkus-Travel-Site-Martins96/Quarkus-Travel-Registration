(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\quarkus\registration-quarkus-travel-simple-site\src\main\angular\registration-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-decode-vo */ "BW7C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Edit user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_div_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.jwt.name);
} }
class ToolbarComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"].getLoginHost() + "/validate";
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"].getHomeHost();
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"].getLoginHost();
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"].getUserManagerHost();
        this.jwt = new _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__["JWT"]();
        this.cookieJWT = this.cookieMng.getCookie('user.jwt');
    }
    ngOnInit() {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.cookieJWT) {
            //JWT found, check if is valid
            this.sub = this.rest.sendPost(this.validateUrl, this.cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'content-type': 'text/plain'
            }))
                .subscribe((resp) => {
                //JWT correct, move to Home Page
                this.jwt = resp.body;
            }, error => {
                //JWT non correct or service not available
                if (error.status === 401) {
                    console.error('The token JWT is not valid, relogin required', error);
                    this.logout();
                }
                else {
                    console.error('The call is not end correct', error);
                    this.jwt = null;
                }
            });
        }
    }
    ngAfterViewInit() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            }
            else {
                document.getElementById("navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        };
    }
    logout() {
        this.cookieMng.deleteCookie('user.jwt');
        window.top.location.href = this.homeUrl;
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_4__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 9, vars: 3, consts: [["id", "navbar", 1, "u-clearfix", "header"], [1, "container"], [1, "logo"], [3, "href"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [1, "user-mngmnt"], [3, "href", "click"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ToolbarComponent_div_8_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\tfont-size: 1.5em;\r\n\ttext-shadow: 0 0 2px black;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: 5px 10px;\r\n\talign-self: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tmargin-left: auto;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: table;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after {\r\n\tclear: both;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tz-index: 100;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\ttransition: top 0.3s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: auto;\r\n\tmax-height: 50px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.75);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%] {\r\n\tpadding: 10px 20px;\r\n\tbackground-color: rgba(200,200,200,0.8);\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n\t\r\n\tposition: absolute;\r\n\tright: 10px;\r\n   \ttop  : 50px;\r\n\topacity: 0;\r\n\ttransition: linear 0.5s;\r\n\t\r\n\tdisplay: block;\r\n\tfont-variant: small-caps;\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tmargin: 5px 0;\r\n\tcolor: black;\r\n\tfont-size: 0.6em;\r\n\tfloat: left;\r\n    clear: left;\r\n}\r\n\r\n.logged[_ngcontent-%COMP%]:hover   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:active   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:focus   .user-mngmnt[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop  : 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFdBQVc7Q0FDWCxNQUFNO0NBQ04sb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix1Q0FBdUM7Q0FDdkMsc0JBQXNCO0NBQ3RCLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0NBQ2xCLFdBQVc7SUFDUixXQUFXO0NBQ2QsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsY0FBYztDQUNkLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFdBQVc7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7OztDQUdDLFVBQVU7Q0FDVixXQUFXO0FBQ1oiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRmb250LXNpemU6IDEuNWVtO1xyXG5cdHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xyXG59XHJcblxyXG5uYXYgZGl2IHtcclxuXHRtYXJnaW46IDVweCAxMHB4O1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IGRpdjpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnUtY2xlYXJmaXg6YWZ0ZXIsIC51LWNsZWFyZml4OmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi51LWNsZWFyZml4OmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0ei1pbmRleDogMTAwO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0b3A6IDA7XHJcblx0dHJhbnNpdGlvbjogdG9wIDAuM3M7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1heC1oZWlnaHQ6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4udXNlci1tbmdtbnQge1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuOCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMTBweDtcclxuICAgXHR0b3AgIDogNTBweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zaXRpb246IGxpbmVhciAwLjVzO1xyXG5cdFxyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxufVxyXG5cclxuLnVzZXItbW5nbW50IGEge1xyXG5cdG1hcmdpbjogNXB4IDA7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG5cclxuLmxvZ2dlZDpob3ZlciAudXNlci1tbmdtbnQsXHJcbi5sb2dnZWQ6YWN0aXZlIC51c2VyLW1uZ21udCxcclxuLmxvZ2dlZDpmb2N1cyAudXNlci1tbmdtbnQge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dG9wICA6IDcwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "5n4n":
/*!********************************************!*\
  !*** ./src/app/typage/typage.component.ts ***!
  \********************************************/
/*! exports provided: TypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypageComponent", function() { return TypageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TypageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypageComponent.ɵfac = function TypageComponent_Factory(t) { return new (t || TypageComponent)(); };
TypageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypageComponent, selectors: [["app-typage"]], decls: 2, vars: 0, template: function TypageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "typage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "A8sk":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const COOKIE_CONSENT = 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS = 180;
class CookieManager {
    constructor() {
        this.isConsented = false;
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(isConsent, e) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}
CookieManager.ɵfac = function CookieManager_Factory(t) { return new (t || CookieManager)(); };
CookieManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieManager, factory: CookieManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const environment = {
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
class Environment {
    constructor() { }
    static getHomeHost() {
        return 'http://localhost:8080';
    }
    static getHotelHost() {
        return 'http://localhost:8081';
    }
    static getLoginHost() {
        return 'http://localhost:7070';
    }
    static getUserManagerHost() {
        return "http://localhost:7071";
    }
}
Environment.ɵfac = function Environment_Factory(t) { return new (t || Environment)(); };
Environment.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Environment, factory: Environment.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BW7C":
/*!******************************************!*\
  !*** ./src/app/toolbar/jwt-decode-vo.ts ***!
  \******************************************/
/*! exports provided: JWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT", function() { return JWT; });
class JWT {
}


/***/ }),

/***/ "C78I":
/*!******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/app-date-adapter */ "Q0wc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");







class RegistrationFormComponent {
    constructor() {
        this.maxDate = _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["maxDate"];
    }
    ngOnInit() {
    }
    OnDateChange(date) {
        this.birthdate = _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateUtils"].format(date);
    }
    update() {
    }
}
RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) { return new (t || RegistrationFormComponent)(); };
RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistrationFormComponent, selectors: [["app-registration-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["DateAdapter"], useClass: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["AppDateAdapter"] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MAT_DATE_FORMATS"], useClass: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["AppDateAdapter"], useValue: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["APP_DATE_FORMATS"] }
        ])], decls: 28, vars: 7, consts: [[1, "form-data"], [3, "ngSubmit"], [1, "usermanager-form"], [1, "form-element", "input-section"], ["for", "name-input"], ["type", "text", "id", "name", "name", "name", 1, "usermanager-input-text", 3, "ngModel", "ngModelChange"], ["for", "surname-input"], ["type", "text", "id", "surname", "name", "surname", 1, "usermanager-input-text", 3, "ngModel", "ngModelChange"], ["for", "country-input"], ["type", "text", "id", "country", "name", "country", 1, "usermanager-input-text", 3, "ngModel", "ngModelChange"], [1, "data-birth-input"], ["matInput", "", "placeholder", "Birthdate", 3, "matDatepicker", "max", "dateInput"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "email-input"], ["type", "email", "id", "email", "name", "email", 1, "usermanager-input-text", 3, "ngModel", "ngModelChange"], [1, "form-element", "button-section"], ["type", "submit", "id", "user-update-button", 1, "usermanager-btn"], [1, "bg"], ["id", "user-update-button-span"]], template: function RegistrationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_1_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationFormComponent_Template_input_ngModelChange_12_listener($event) { return ctx.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Birthdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateInput", function RegistrationFormComponent_Template_input_dateInput_16_listener($event) { return ctx.OnDateChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "mat-datepicker-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationFormComponent_Template_input_ngModelChange_22_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Submit new fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"]], styles: ["html[_ngcontent-%COMP%] {\r\n\tmin-width: 300px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tbackground: #ddd;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tmax-width: 1000px;\r\n\tmargin: 0 auto;\r\n\tpadding: 25px 0;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.form-image[_ngcontent-%COMP%], .form-data[_ngcontent-%COMP%]{\r\n\tdisplay: inline-block;\r\n\tmargin: 0 5% 25px 5%;\r\n\tvertical-align: top;\r\n\twidth: 300px;\r\n}\r\n\r\n.form-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 300px;\r\n}\r\n\r\n.user-manager-content[_ngcontent-%COMP%] {\r\n\tmargin: 10px 2%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.form-element.input-section[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.input-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child {\r\n\tmargin-top: 0;\r\n}\r\n\r\n.input-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.image-error[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n\tdisplay: none;\r\n}\r\n\r\n.image-upload-info[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #666;\r\n\tmargin: 10px 0;\r\n\tpadding: 10px;\r\n\tfont-size: 0.75em;\r\n}\r\n\r\n.data-birth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\twidth: 75%;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n\tvertical-align: middle;\r\n\tbackground-color: #eee;\r\n\tpadding: 10px;\r\n\tborder: 2px solid #666;\r\n\tborder-radius: 5px;\r\n\tcolor: black;\r\n\ttransition: linear 2s;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n\twidth: calc(100% - 20px);\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n\tanimation:         border-animation 3s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes border-animation {\r\n  0%   { border-left-color: #3593d7; }\r\n  50%  { border-left-color: #3593d7; border-top-color: #3593d7; border-bottom-color: #3593d7; }\r\n  100% { border-color: #3593d7; }\r\n}\r\n\r\n\r\n\r\n.form-element.button-section[_ngcontent-%COMP%] {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tmargin-left: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50px;\r\n\tborder: none;\r\n\tbackground-color: #666;\r\n\ttransition: 2s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-image: url('v.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: contain;\r\n\tbackground-position: left;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\tmargin: auto 0;\r\n\twhite-space: nowrap;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n\twidth: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\tline-height: 30px;\r\n\topacity: 1;\r\n\tpadding-left: 30px;\r\n\tfont-weight: bold;\r\n\tcolor: #eee;\r\n\ttransition: 1s;\r\n}\r\n\r\n.courtesy-page[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tmin-height: 250px;\r\n\twidth: 100%;\r\n    background: #ddd;\r\n}\r\n\r\n.err-msg[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tfont-size: 1em;\r\n\tfont-weight: bold;\r\n\tmargin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFHQSxtQkFBbUI7O0FBRW5CO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxhQUFhO0NBRWIsc0NBQXNDO0NBQ3RDLDZCQUE2QjtDQUM3QixxQ0FBcUM7QUFDdEM7O0FBR0E7RUFDRSxPQUFPLDBCQUEwQixFQUFFO0VBQ25DLE9BQU8sMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUU7RUFDNUYsT0FBTyxxQkFBcUIsRUFBRTtBQUNoQzs7QUFTQSxtQkFBbUI7O0FBQ25CO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsY0FBYztBQUNmOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLDhCQUFnRDtDQUNoRCw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFHQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGlCQUFpQjtDQUNqQixXQUFXO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2RkZDtcclxufVxyXG4uY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRtYXgtd2lkdGg6IDEwMDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nOiAyNXB4IDA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZm9ybS1pbWFnZSxcclxuLmZvcm0tZGF0YXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAwIDUlIDI1cHggNSU7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWltYWdlIGltZyB7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4udXNlci1tYW5hZ2VyLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTBweCAyJTtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQuaW5wdXQtc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zZWN0aW9uIGxhYmVsOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5pbnB1dC1zZWN0aW9uIGxhYmVsIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZXJyb3Ige1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZC1pbmZvIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG5cdG1hcmdpbjogMTBweCAwO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuXHJcbi5kYXRhLWJpcnRoLWlucHV0IGlucHV0IHtcclxuXHR3aWR0aDogNzUlO1xyXG59XHJcblxyXG5cclxuLyoqIElOUFVUIFNFQ1RJT04gKi9cclxuXHJcbmlucHV0IHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0dHJhbnNpdGlvbjogbGluZWFyIDJzO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0OmFjdGl2ZSxcclxuaW5wdXQ6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGJvcmRlci1hbmltYXRpb24gM3M7XHJcblx0YW5pbWF0aW9uOiAgICAgICAgIGJvcmRlci1hbmltYXRpb24gM3M7XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblx0LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYm9yZGVyLWFuaW1hdGlvbiB7XHJcbiAgMCUgICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgNTAlICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItdG9wLWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItYm90dG9tLWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgMTAwJSB7IGJvcmRlci1jb2xvcjogIzM1OTNkNzsgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyLWFuaW1hdGlvbiB7XHJcbiAgMCUgICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgNTAlICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItdG9wLWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItYm90dG9tLWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgMTAwJSB7IGJvcmRlci1jb2xvcjogIzM1OTNkNzsgfVxyXG59XHJcblxyXG5cclxuLyogQlVUVE9OIFNFQ1RJT04gKi9cclxuLmZvcm0tZWxlbWVudC5idXR0b24tc2VjdGlvbiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuXHR0cmFuc2l0aW9uOiAycztcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSxcclxuYnV0dG9uIC5iZzphY3RpdmUsXHJcbmJ1dHRvbiBzcGFuOmFjdGl2ZSxcclxuYnV0dG9uOmZvY3VzLFxyXG5idXR0b24gLmJnOmZvY3VzLFxyXG5idXR0b24gc3Bhbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIC5iZyB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3YucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG59XHJcbmJ1dHRvbiBzcGFuIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG1hcmdpbjogYXV0byAwO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcbmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogI2VlZTtcclxuXHR0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuXHJcbi5jb3VydGVzeS1wYWdlIHtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0bWluLWhlaWdodDogMjUwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcblxyXG4uZXJyLW1zZyB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "E9uI":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostGetRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPostWithString(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Gdra":
/*!**********************************************************!*\
  !*** ./src/app/reg-container/reg-container.component.ts ***!
  \**********************************************************/
/*! exports provided: RegContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegContainerComponent", function() { return RegContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration-form/registration-form.component */ "C78I");


class RegContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegContainerComponent.ɵfac = function RegContainerComponent_Factory(t) { return new (t || RegContainerComponent)(); };
RegContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegContainerComponent, selectors: [["app-reg-container"]], decls: 10, vars: 0, consts: [[1, "container-form"], [1, "reg-description"], [1, "reg-form"], [1, "container-footer"], [1, "description"]], template: function RegContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plan your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " adventure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-registration-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationFormComponent"]], styles: [".container-form[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tmax-height: 80%;\r\n\tpadding: 2%;\r\n\tbackground-image: url(\"/assets/images/reg-bg.jpg\");\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.reg-description[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\ttext-shadow: 0 0 2px rgba(255,255,255,0.5);\r\n\tfont-family: stanberry-comics, Helvetica, sans-serif;\r\n\tfont-size: 5em;\r\n\ttext-align: center;\r\n}\r\n.reg-form[_ngcontent-%COMP%] {\r\n\tmax-width: 30%;\r\n\tbackground-color: rgba(255,255,255,0.6);\r\n\tborder-radius: 20px;\r\n\tpadding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsV0FBVztDQUNYLGtEQUFrRDtDQUNsRCwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFVBQVU7Q0FDViwwQ0FBMEM7Q0FDMUMsb0RBQW9EO0NBQ3BELGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCx1Q0FBdUM7Q0FDdkMsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZCIsImZpbGUiOiJyZWctY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZvcm0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC1oZWlnaHQ6IDgwJTtcclxuXHRwYWRkaW5nOiAyJTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9yZWctYmcuanBnXCIpO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmVnLWRlc2NyaXB0aW9uIHtcclxuXHR3aWR0aDogNjAlO1xyXG5cdHRleHQtc2hhZG93OiAwIDAgMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHRmb250LWZhbWlseTogc3RhbmJlcnJ5LWNvbWljcywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogNWVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVnLWZvcm0ge1xyXG5cdG1heC13aWR0aDogMzAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Q0wc":
/*!****************************************************************!*\
  !*** ./src/app/registration-form/material/app-date-adapter.ts ***!
  \****************************************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS, maxDate, DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

class AppDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"] {
    format(date) {
        return DateUtils.format(date);
    }
}
const APP_DATE_FORMATS = {
    parse: {
        dateInput: {
            dateInput: 'YYYY-MM-DD'
        },
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};
const maxDate = new Date();
class DateUtils {
    static format(date) {
        let day = date.getDate().toString();
        day = +day < 10 ? '0' + day : day;
        let month = (date.getMonth() + 1).toString();
        month = +month < 10 ? '0' + month : month;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _reg_container_reg_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reg-container/reg-container.component */ "Gdra");



class AppComponent {
    constructor() {
        this.title = 'registration-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "toolbar"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-reg-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _reg_container_reg_container_component__WEBPACK_IMPORTED_MODULE_2__["RegContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "C78I");
/* harmony import */ var _typage_typage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typage/typage.component */ "5n4n");
/* harmony import */ var _reg_container_reg_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg-container/reg-container.component */ "Gdra");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _registration_form_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-form/material/material.module */ "e0nt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _registration_form_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationFormComponent"],
        _typage_typage_component__WEBPACK_IMPORTED_MODULE_3__["TypageComponent"],
        _reg_container_reg_container_component__WEBPACK_IMPORTED_MODULE_4__["RegContainerComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _registration_form_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]] }); })();


/***/ }),

/***/ "e0nt":
/*!***************************************************************!*\
  !*** ./src/app/registration-form/material/material.module.ts ***!
  \***************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"]], imports: [[
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map