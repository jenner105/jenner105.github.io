function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/particles */
    "./src/app/components/particles.ts");
    /* harmony import */


    var _components_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/theme/theme.service */
    "./src/app/components/theme/theme.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(themeService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.themeService = themeService;
        this.title = 'MChau105';
        this.isDark = false;

        this.particlesLoad = function () {
          particlesJS('particles-js', _components_particles__WEBPACK_IMPORTED_MODULE_1__["particles_bg"], function () {});
        };

        this.toggleTheme = function () {
          if (_this.themeService.isDarkTheme()) {
            _this.themeService.setLightTheme();

            _this.isDark = !_this.isDark;
          } else {
            _this.themeService.setDarkTheme();

            _this.isDark = !_this.isDark;
          }
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.particlesLoad();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [[1, "wrap"], [1, "toggle-theme"], [3, "click"], ["id", "particles-js"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_3_listener() {
            return ctx.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDark ? "dark" : "toggler");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["#particles-js[_ngcontent-%COMP%] {\r\n  background-color: var(--background-color);\r\n  transition: 0.3s;\r\n  height: 100vh;\r\n}\r\n\r\n.toggle-theme[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 65px;\r\n  bottom: 0;\r\n}\r\n\r\n.toggler[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 45px;\r\n  height: 45px;\r\n  border: none;\r\n  background-color: grey;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  z-index: 100;\r\n  box-shadow: 0 2px 10px black;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.toggler[_ngcontent-%COMP%]:hover {\r\n  background-color: #545454;\r\n}\r\n\r\n.toggler[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  top: 15px;\r\n  left: 15px;\r\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/626120/moon_copy.svg)\r\n    no-repeat;\r\n  transition: background 1s;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: fixed;\r\n  border: none;\r\n  width: 45px;\r\n  height: 45px;\r\n  background-color: #ffffff61;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  z-index: 100;\r\n  box-shadow: 0px 2px 10px rgb(120, 120, 120);\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffffffcc;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  top: 15px;\r\n  left: 15px;\r\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/626120/sun.svg)\r\n    no-repeat;\r\n  transition: background 1s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVjthQUNXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWO2FBQ1c7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFydGljbGVzLWpzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi50b2dnbGUtdGhlbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDY1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4udG9nZ2xlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuLnRvZ2dsZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbn1cclxuXHJcbi50b2dnbGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzYyNjEyMC9tb29uX2NvcHkuc3ZnKVxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXM7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYigxMjAsIDEyMCwgMTIwKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5kYXJrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2M7XHJcbn1cclxuXHJcbi5kYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzYyNjEyMC9zdW4uc3ZnKVxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _components_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_nav_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nav/app-routing.module */
    "./src/app/components/nav/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/item/item.component */
    "./src/app/components/item/item.component.ts");
    /* harmony import */


    var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/page404/page404.component */
    "./src/app/components/page404/page404.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/theme/theme.module */
    "./src/app/components/theme/theme.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _components_nav_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _components_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__["ThemeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"], _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _components_nav_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _components_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__["ThemeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"], _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _components_nav_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _components_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__["ThemeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/components/item/item.component.ts");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.colorBtn = '#0000002e';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 14,
      vars: 0,
      consts: [[1, "about-page"], [1, "container"], [1, "text"], [1, "mat-headline"], [1, "route"], ["isBorder2", "true"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi, I am Minh Chau. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I started learning programming when I was 18. I am intersted in Javascript and hope to become a full-stack such as Angular, React, NodeJS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Here, I write a page about programming and daily life activities. Check out my social media below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_2__["ItemComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n  width: 100%;\r\n}\r\n\r\n.about-page[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  text-align: justify;\r\n  color: var(--text-color);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 375px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .about-page[_ngcontent-%COMP%] {\r\n    top: 53%;\r\n  }\r\n\r\n  .mat-headline[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) and (max-width: 1024px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n\r\n  .about-page[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) and (max-width: 1400px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n\r\n  .about-page[_ngcontent-%COMP%] {\r\n    top: 35%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBR0EsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUdBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJjb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSAudGV4dCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuXHJcbi8qIG1vYmlsZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1wYWdlIHtcclxuICAgIHRvcDogNTMlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkbGluZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogdGFibGV0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXBhZ2Uge1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtcGFnZSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/components/item/item.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 0,
      consts: [[1, "home-page"], [1, "mat-display-2"], [1, "progress-bar"], ["color", "primary", "mode", "indeterminate", "value", "100"], [1, "route"], ["isBorder", "true"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nice to meet you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-progress-bar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]],
      styles: [".home-page[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.mat-display-2[_ngcontent-%COMP%]{\r\n  color: var(--text-color);\r\n  transition: 2s;\r\n  text-align: center;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n  .mat-progress-bar-fill::after {\r\n  background-color: #8080ff;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\r\n  .home-page[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1hdC1kaXNwbGF5LTJ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDJzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwZmY7XHJcbn1cclxuXHJcbi8qIHRhYmxldCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhvbWUtcGFnZSB7XHJcbiAgICB0b3A6IDQwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/item/item.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/item/item.component.ts ***!
    \***************************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppComponentsItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ItemComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx_r0.colorBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent() {
        _classCallCheck(this, ItemComponent);

        this.items = [{
          link: 'https://www.facebook.com/mchau105',
          img: 'assets/img/facebook.svg'
        }, {
          link: 'https://github.com/BDMChau',
          img: 'assets/img/github.svg'
        }, {
          link: 'https://stackoverflow.com/users/13441094/mchau105',
          img: 'assets/img/stackoverflow.svg'
        }];
        this.colorBtn = '#0000002b';
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)();
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      decls: 2,
      vars: 1,
      consts: [[1, "items"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["matRipple", "", 3, "matRippleColor"], ["target", "_blank", 3, "href"], ["alt", "", 3, "src"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_div_1_Template, 4, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
      styles: [".items[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-radius: 50%;\r\n  margin: 0 10px;\r\n  padding: 7px 9px;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   button.mat-ripple[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: none;\r\n  background: transparent;\r\n  height: 46px;\r\n  width: 45px;\r\n  padding: 0;\r\n  transition: 0.3s;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   button.mat-ripple[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   button.mat-ripple[_ngcontent-%COMP%]:hover {\r\n  background: var(--hover-color);\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztBQUNYIiwiZmlsZSI6ImNvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uaXRlbXMgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaXRlbXMgLml0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBwYWRkaW5nOiA3cHggOXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4uaXRlbXMgYnV0dG9uLm1hdC1yaXBwbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLml0ZW1zIGJ1dHRvbi5tYXQtcmlwcGxlOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaXRlbXMgYnV0dG9uLm1hdC1yaXBwbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLml0ZW1zIGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav/app-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/nav/app-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppComponentsNavAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../page404/page404.component */
    "./src/app/components/page404/page404.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.colorBtn = '#0000002e';
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      inputs: {
        isBorder: "isBorder",
        isBorder2: "isBorder2"
      },
      decls: 7,
      vars: 8,
      consts: [[1, "route"], ["matRipple", "", 3, "ngClass", "matRippleColor"], ["routerLink", "/home"], ["routerLink", "/about"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isBorder))("matRippleColor", ctx.colorBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isBorder2))("matRippleColor", ctx.colorBtn);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".route[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.route[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n  background-color: transparent;\r\n  width: 100%;\r\n\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n\r\n  margin: 0;\r\n  padding: 15px 17px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.route[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: var(--hover-color);\r\n}\r\n\r\nbutton.mat-ripple[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 0;\r\n  padding: 11px 0;\r\n  margin: 0 11px;\r\n}\r\n\r\nbutton.mat-ripple.active[_ngcontent-%COMP%] {\r\n  border-bottom: 4px solid var(--border-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsV0FBVzs7RUFFWCxlQUFlO0VBQ2YsZ0JBQWdCOztFQUVoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5QyIsImZpbGUiOiJjb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3V0ZSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMTdweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4ucm91dGUgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG5idXR0b24ubWF0LXJpcHBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAxMXB4IDA7XHJcbiAgbWFyZ2luOiAwIDExcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5tYXQtcmlwcGxlLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [];
      }, {
        isBorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isBorder2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page404/page404.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/page404/page404.component.ts ***!
    \*********************************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppComponentsPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page404Component = /*#__PURE__*/function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component.ɵfac = function Page404Component_Factory(t) {
      return new (t || Page404Component)();
    };

    Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page404Component,
      selectors: [["app-page404"]],
      decls: 6,
      vars: 0,
      consts: [[1, "page-not-found"], [1, "mat-display-1"], [1, "mat-title"], ["src", "../../../assets/img/notfound.svg", "alt", ""]],
      template: function Page404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NOT FOUND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You just hit a route that doesn't exist... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page-not-found[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.page-not-found[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5vdC1mb3VuZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1ub3QtZm91bmQgaW1ne1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page404',
          templateUrl: './page404.component.html',
          styleUrls: ['./page404.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/particles.ts":
  /*!*****************************************!*\
    !*** ./src/app/components/particles.ts ***!
    \*****************************************/

  /*! exports provided: particles_bg */

  /***/
  function srcAppComponentsParticlesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "particles_bg", function () {
      return particles_bg;
    });

    var particles_bg = {
      particles: {
        number: {
          value: window.innerWidth / 10,
          density: {
            enable: false
          }
        },
        color: {
          value: ["#9e9e9e", "#757575", "#616161"]
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 5,
          random: true,
          anim: {
            speed: 6,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          random: true,
          speed: "random",
          direction: "top",
          out_mode: "out"
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 1,
            opacity: 0.2
          },
          repulse: {
            distance: 150,
            duration: 1
          }
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/components/theme/theme.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/theme/theme.model.ts ***!
    \*************************************************/

  /*! exports provided: light, dark */

  /***/
  function srcAppComponentsThemeThemeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "light", function () {
      return light;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dark", function () {
      return dark;
    });

    var light = {
      name: "light",
      properties: {
        "--background-color": "#fff",
        "--text-color": "black",
        "--hover-color": "#00000028",
        "--background-secondary": "#00000021",
        "--border-color": "grey"
      }
    };
    var dark = {
      name: "dark",
      properties: {
        "--background-color": "#252525",
        "--text-color": "#fff",
        "--hover-color": "#ffffff0d",
        "--background-secondary": "white",
        "--border-color": "#fff"
      }
    };
    /***/
  },

  /***/
  "./src/app/components/theme/theme.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/theme/theme.module.ts ***!
    \**************************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppComponentsThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme.service */
    "./src/app/components/theme/theme.service.ts");

    var ThemeModule = function ThemeModule() {
      _classCallCheck(this, ThemeModule);
    };

    ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThemeModule
    });
    ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThemeModule_Factory(t) {
        return new (t || ThemeModule)();
      },
      providers: [_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/theme/theme.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/theme/theme.service.ts ***!
    \***************************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppComponentsThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.model */
    "./src/app/components/theme/theme.model.ts");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.current = _theme_model__WEBPACK_IMPORTED_MODULE_1__["light"];
      }

      _createClass(ThemeService, [{
        key: "isDarkTheme",
        value: function isDarkTheme() {
          return this.current.name === _theme_model__WEBPACK_IMPORTED_MODULE_1__["dark"].name;
        }
      }, {
        key: "setDarkTheme",
        value: function setDarkTheme() {
          this.setCurrentTheme(_theme_model__WEBPACK_IMPORTED_MODULE_1__["dark"]);
        }
      }, {
        key: "setLightTheme",
        value: function setLightTheme() {
          this.setCurrentTheme(_theme_model__WEBPACK_IMPORTED_MODULE_1__["light"]);
        }
      }, {
        key: "setCurrentTheme",
        value: function setCurrentTheme(theme) {
          var _this2 = this;

          this.current = theme;
          Object.keys(this.current.properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this2.current.properties[property]);
          });
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Web\Angular\CV\mycv\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map