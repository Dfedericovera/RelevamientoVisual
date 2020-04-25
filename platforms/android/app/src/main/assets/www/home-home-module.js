(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Relevamiento Visual\r\n      <!-- <ion-button size=\"small\" float-right (click)=\"go('/login')\">LOGIN</ion-button> -->\r\n      <!-- <ion-button [routerLink]=\"['/login']\">ROUTERLINK</ion-button> -->\r\n      <ion-button size=\"small\" float-right (click)=\"onlogout()\">DESCONECTARSE</ion-button>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"grande\">\r\n    <ion-grid class=\"grande\">\r\n      <ion-row class=\"grande\">\r\n        <ion-col size=\"6\">\r\n            <!-- <ion-img class=\"grande\" src=\"./assets/imagenes/cosasLindas.jpg\"></ion-img> -->\r\n          <input type=\"image\" routerLink=\"/cosas-lindas\" class=\"grande img\" src=\"./assets/imagenes/cosasLindas.jpg\" />\r\n<!--           <ion-button color=\"dark\" class=\"grande\"><img src=\"./assets/imagenes/cosasLindas.jpg\"/></ion-button>\r\n -->        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-img class=\"grande\" src=\"./assets/imagenes/cosasFeas.jpg\"></ion-img> -->\r\n          <input type=\"image\" routerLink=\"/cosas-feas\" class=\"grande img\" src=\"./assets/imagenes/cosasFeas.jpg\" />\r\n<!--           <ion-button color=\"dark\" class=\"grande\"><img src=\"./assets/imagenes/cosasFeas.jpg\"/></ion-button>\r\n -->        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  position: relative; }\n\n.grande {\n  height: 100%;\n  width: 100%; }\n\n.img:hover {\n  box-shadow: 0px 0px 66px -11px rgba(0, 0, 0, 0.67); }\n\n.img:active {\n  box-shadow: 0px 2px 8px 8px #3b8f51; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcRmVkZVxcRmFjdVxcNHRvXFxBcGxpY2FjaW9uZXNcXFBQU1xcQXBsaWNhY2lvbmVzVFBcXFJlbGV2YW1pZW50b1Zpc3VhbC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBR0ksa0RBQStDLEVBQUE7O0FBR25EO0VBR0ksbUNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbi5ncmFuZGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDY2cHggLTExcHggcmdiYSgwLDAsMCwwLjY3KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA2NnB4IC0xMXB4IHJnYmEoMCwwLDAsMC42Nyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDY2cHggLTExcHggcmdiYSgwLDAsMCwwLjY3KTtcclxufVxyXG5cclxuLmltZzphY3RpdmV7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggOHB4IDhweCByZ2JhKDU5LDE0Myw4MSwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA4cHggOHB4IHJnYmEoNTksMTQzLDgxLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggOHB4IHJnYmEoNTksMTQzLDgxLDEpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var HomePage = /** @class */ (function () {
    function HomePage(platform, router, authservice, usuariosService, alertController) {
        this.platform = platform;
        this.router = router;
        this.authservice = authservice;
        this.usuariosService = usuariosService;
        this.alertController = alertController;
    }
    HomePage.prototype.ngOnInit = function () {
        this.backButtonEvent();
    };
    HomePage.prototype.go = function (ruta, valor) {
        //ruta=ruta+'/'+this.valor; y modificar el routingModule par agregarle el parametro o this.router.navigate(['/ruta',this.valor]);
        this.router.navigateByUrl(ruta); //o aca ('/login/${this.valor}');
    };
    HomePage.prototype.onlogout = function () {
        var _this = this;
        this.authservice.logout().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    HomePage.prototype.backButtonEvent = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            _this.presentAlertConfirm();
        });
    };
    HomePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Decea salir de la aplicacion?',
                            message: 'Hasta luego <strong>!</strong>!!!',
                            buttons: [
                                {
                                    text: 'NO',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'SI',
                                    handler: function () {
                                        navigator["app"].exitApp();
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/servicios/usuarios.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/usuarios.service.ts ***!
  \***********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UsuariosService = /** @class */ (function () {
    function UsuariosService(db) {
        this.db = db;
    }
    UsuariosService.prototype.getUsuarios = function () {
        return this.db.collection('usuarios').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            return users.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    UsuariosService.prototype.getImagenesLindas = function () {
        return this.db.collection('imagenes').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            return users.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        }));
    };
    UsuariosService.prototype.getImagenesFeas = function () {
        return this.db.collection('imagenesFeas').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            return users.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        }));
    };
    UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map