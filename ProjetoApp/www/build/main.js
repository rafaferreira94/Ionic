webpackJsonp([14],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_user__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {LoginProvider} from "../../providers/login";



var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, 
        // private loginProvider: LoginProvider,
        // private loadingCtrl: LoadingController,
        // private alertCtrl: AlertController,
        toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__providers_auth_user__["a" /* User */]();
    }
    // onSignup(form: NgForm) {
    //   console.log(form.value);
    //
    //   const loading = this.loadingCtrl.create({
    //     content: 'Criando Usuário...'
    //   });
    //
    //   loading.present();
    //
    //   this.loginProvider.signup(form.value.email, form.value.password)
    //     .then(data => {
    //       loading.dismiss();
    //       this.navCtrl.push(HomePage, {});
    //     })
    //     .catch(error => {
    //       loading.dismiss();
    //
    //       console.log(error);
    //
    //       const alert = this.alertCtrl.create({
    //         title: 'Autenticação falhou!',
    //         message: error.message,
    //         buttons: ['Ok']
    //       });
    //       alert.present();
    //     });
    // }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                toast_1.present();
            });
        }
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
], SignupPage.prototype, "form", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Criar nova conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="createAccount()">\n      Criar conta\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpasswordPage = (function () {
    function ResetpasswordPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userEmail = '';
    }
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(function () {
                toast_1.setMessage('Solicitação foi enviada para o seu e-mail.');
                toast_1.present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast_1.setMessage('O usuário não foi encontrado.');
                }
                toast_1.present();
            });
        }
    };
    return ResetpasswordPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], ResetpasswordPage.prototype, "form", void 0);
ResetpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resetpassword',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/resetpassword/resetpassword.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Resetar minha senha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="resetPassword()">\n      Resetar minha senha\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/resetpassword/resetpassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */]])
], ResetpasswordPage);

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_user__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {LoginProvider} from "../../providers/login";





var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, 
        // private loginProvider: LoginProvider,
        // private loadingCtrl: LoadingController,
        // private alertCtrl: AlertController,
        toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__providers_auth_user__["a" /* User */]();
    }
    // onSignin(form: NgForm) {
    //   const loading = this.loadingCtrl.create({
    //     content: 'Autenticando...'
    //   });
    //
    //   loading.present();
    //     this.loginProvider.signin(form.value.email, form.value.password)
    //     .then(data => {
    //       loading.dismiss();
    //       this.navCtrl.push(HomePage, {});
    //     })
    //     .catch(error => {
    //       loading.dismiss();
    //
    //       console.log(error);
    //
    //       const alert = this.alertCtrl.create({
    //         title: 'Login falhou!',
    //         message: error.message,
    //         buttons: ['Ok']
    //       });
    //       alert.present();
    //     });
    // }
    //
    // novoUsuario() {
    //   this.navCtrl.push(SignupPage, {});
    // }
    SigninPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.resetePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é válido');
                }
                else if (error.code == 'auth/user-disable') {
                    toast.setMessage('O usuário está desabilitado');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é válida.');
                }
                toast.present();
            });
        }
    };
    return SigninPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
], SigninPage.prototype, "form", void 0);
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form #form ="nfForm">\n    <ion-list>\n\n    <ion-item>\n      <ion-label stacked> E-mail </ion-label>\n      <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n    </ion-item>\n    <ion-item  class="text-danger">\n      O campo e obrigatorio\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked> Senha </ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="user.password" #email="ngModel" required></ion-input>\n    </ion-item>\n\n    <ion-item  class="text-danger">\n      O campo e obrigatorio\n    </ion-item>\n\n    </ion-list>\n\n      <button ion-button block color="primary" (click)="signIn()">\n        Entrar\n      </button>\n  </form>\n\n    <button ion-button block clear margin-top (click)="resetPassword()">\n      Esqueci minha senha\n    </button>\n\n    <button ion-button block clear (click)="createAccount()">\n      Criar conta\n    </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/signin/signin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/sobre/sobre.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <br><div>\n  <div style="font-size: 20px; "><strong>Nome:</strong> Semeando Conhecimento</div><br>\n  <div style="font-size: 18px;"><strong>Autores:</strong> Rafael Martin Alves Ferreira<br>\n    Diego Cury Astolphi</div><br>\n  <div style="font-size: 16px;"><strong>Versão:</strong> 1.0.5 beta </div>\n</div><br><br>\n  <div style="font-size: 16px;"> Este aplicativo foi desenvolvido para simuluar uma biblioteca virtual, onde o usuário é cadastrado, o autor é cadastrado e o livro é cadastrado.<br>\n  Onde é possivel alterar os dados dos usuário, autores e livros. Esta é uma versão beta para teste.</div>\n\n  <ion-footer style="font-size: 14px;"> Desenvolvido em Setembro de 2017</ion-footer>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/sobre/sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioDetailsPage = (function () {
    function UsuarioDetailsPage(navCtrl, navParams, alertCtrl, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuarioProvider = usuarioProvider;
        this.usuario = navParams.get('item');
    }
    UsuarioDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {
            item: this.usuario
        });
    };
    UsuarioDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.usuarioProvider.removerUsuario(_this.usuario);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    UsuarioDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioDetailsPage');
    };
    return UsuarioDetailsPage;
}());
UsuarioDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-details/usuario-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{usuario.nome}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{usuario.img}}">\n\n    <ion-item>\n      <ion-icon name="person" item-start large></ion-icon>\n      <h2>Nome: {{usuario.nome}}</h2>\n      <p>CPF: {{usuario.cpf}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-details/usuario-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario__["a" /* UsuarioProvider */]])
], UsuarioDetailsPage);

//# sourceMappingURL=usuario-details.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_details_usuario_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_add_usuario_add__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioListPage = (function () {
    function UsuarioListPage(navCtrl, navParams, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    UsuarioListPage.prototype.ionViewWillEnter = function () {
        this.items = this.usuarioProvider.getUsuario();
        this.itemsFilter = this.items;
    };
    UsuarioListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_details_usuario_details__["a" /* UsuarioDetailsPage */], {
            item: item
        });
    };
    UsuarioListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {});
    };
    UsuarioListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    UsuarioListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.nome.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    UsuarioListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    return UsuarioListPage;
}());
UsuarioListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-list/usuario-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Usuario</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="ios-person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let item of itemsFilter" >\n\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.nome}}</h2>\n        <p>{{item.cpf}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button>\n      </ion-item>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-list/usuario-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario__["a" /* UsuarioProvider */]])
], UsuarioListPage);

//# sourceMappingURL=usuario-list.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutorDetailsPage = (function () {
    function AutorDetailsPage(navCtrl, navParams, alertCtrl, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.autorProvider = autorProvider;
        this.autor = navParams.get('item');
    }
    AutorDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__["a" /* AutorAddPage */], {
            item: this.autor
        });
    };
    AutorDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.autorProvider.removerAutor(_this.autor);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    AutorDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad autorDetailsPage');
    };
    return AutorDetailsPage;
}());
AutorDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-details/autor-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{autor.nome}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{autor.img}}">\n\n    <ion-item>\n      <ion-icon name="person" item-start large></ion-icon>\n      <h2>Nome: {{autor.nome}}</h2>\n      <p>Sobrenome: {{autor.sobrenome}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-details/autor-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */]])
], AutorDetailsPage);

//# sourceMappingURL=autor-details.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autor_details_autor_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autor_add_autor_add__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutorListPage = (function () {
    function AutorListPage(navCtrl, navParams, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autorProvider = autorProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    AutorListPage.prototype.ionViewWillEnter = function () {
        this.items = this.autorProvider.getAutor();
        this.itemsFilter = this.items;
    };
    AutorListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__autor_details_autor_details__["a" /* AutorDetailsPage */], {
            item: item
        });
    };
    AutorListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__autor_add_autor_add__["a" /* AutorAddPage */], {});
    };
    AutorListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    AutorListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.nome.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    AutorListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    return AutorListPage;
}());
AutorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-list/autor-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Autor</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="ios-person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let item of itemsFilter" >\n\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.nome}}</h2>\n        <p>{{item.sobrenome}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button>\n      </ion-item>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-list/autor-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */]])
], AutorListPage);

//# sourceMappingURL=autor-list.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Autor/autor-add/autor-add.module": [
		509,
		13
	],
	"../pages/Autor/autor-details/autor-details.module": [
		510,
		12
	],
	"../pages/Autor/autor-list/autor-list.module": [
		511,
		11
	],
	"../pages/Livro/livro-add/livro-add.module": [
		500,
		10
	],
	"../pages/Livro/livro-details/livro-details.module": [
		501,
		9
	],
	"../pages/Usuario/usuario-add/usuario-add.module": [
		506,
		8
	],
	"../pages/Usuario/usuario-details/usuario-details.module": [
		507,
		7
	],
	"../pages/Usuario/usuario-list/usuario-list.module": [
		508,
		6
	],
	"../pages/logout/logout.module": [
		512,
		5
	],
	"../pages/resetpassword/resetpassword.module": [
		503,
		4
	],
	"../pages/sair-login/sair-login.module": [
		513,
		0
	],
	"../pages/signin/signin.module": [
		504,
		3
	],
	"../pages/signup/signup.module": [
		502,
		2
	],
	"../pages/sobre/sobre.module": [
		505,
		1
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroAutorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivroAutorProvider = (function () {
    function LivroAutorProvider() {
        this.livroAutores = [];
    }
    LivroAutorProvider.prototype.getInstancia = function () {
        return {
            livroId: null,
            autorId: null
        };
    };
    LivroAutorProvider.prototype.getLivrosAutores = function (livro) {
        var itemsFilter = this.livroAutores.filter(function (i) {
            if (i.livroId == livro.id) {
                return true;
            }
            return false;
        });
        return itemsFilter;
    };
    LivroAutorProvider.prototype.adicionarLivroAutor = function (livro, autores) {
        this.removerLivroAutor(livro);
        for (var x = 0; x < autores.length; x++) {
            var novoItem = this.getInstancia();
            novoItem.livroId = livro.id;
            novoItem.autorId = parseInt(autores[x]);
            this.livroAutores.push(novoItem);
        }
    };
    LivroAutorProvider.prototype.removerLivroAutor = function (livro) {
        var itemsFilter = this.livroAutores.filter(function (i) {
            if (i.livroId != livro.id) {
                return true;
            }
            return false;
        });
        this.livroAutores = itemsFilter;
    };
    return LivroAutorProvider;
}());
LivroAutorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroAutorProvider);

//# sourceMappingURL=livro-autor.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginProvider = (function () {
    function LoginProvider() {
    }
    LoginProvider.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    LoginProvider.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    LoginProvider.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_details_livro_details__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_add_livro_add__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LivroListPage = (function () {
    function LivroListPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    LivroListPage.prototype.ionViewWillEnter = function () {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
    };
    LivroListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    };
    LivroListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livro_add_livro_add__["a" /* LivroAddPage */], {});
    };
    LivroListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    LivroListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.titulo.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    LivroListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    return LivroListPage;
}());
LivroListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-list/livro-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Livros</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide *ngFor="let item of itemsFilter" >\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.titulo}}</h2>\n        <p>{{item.ano}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button><br>\n      </ion-item>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-list/livro-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], LivroListPage);

//# sourceMappingURL=Livro-list.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LogoutPage = (function () {
    function LogoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoutPage');
    };
    return LogoutPage;
}());
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logout',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/logout/logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(341);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_categoria__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_autor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_livro_autor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_login__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Usuario_usuario_add_usuario_add__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Usuario_usuario_details_usuario_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Autor_autor_add_autor_add__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Autor_autor_details_autor_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_Livro_livro_add_livro_add__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_Livro_livro_details_livro_details__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_usuario__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_resetpassword_resetpassword__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var firebaseConfig = {
    apiKey: "AIzaSyCUPDh1uZH8aYxWg8eO07W8Tnbq77KcmpM",
    authDomain: "projetoapp-3dd62.firebaseapp.com",
    databaseURL: "https://projetoapp-3dd62.firebaseio.com",
    projectId: "projetoapp-3dd62",
    storageBucket: "projetoapp-3dd62.appspot.com",
    messagingSenderId: "673889262735"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_Livro_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_Livro_livro_details_livro_details__["a" /* LivroDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Usuario_usuario_add_usuario_add__["a" /* UsuarioAddPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_Usuario_usuario_details_usuario_details__["a" /* UsuarioDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_Autor_autor_add_autor_add__["a" /* AutorAddPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_Autor_autor_details_autor_details__["a" /* AutorDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout__["a" /* LogoutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/Livro/livro-add/livro-add.module#LivroAddPageModule', name: 'LivroAddPage', segment: 'livro-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Livro/livro-details/livro-details.module#LivroDetailsPageModule', name: 'LivroDetailsPage', segment: 'livro-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Usuario/usuario-add/usuario-add.module#UsuarioAddPageModule', name: 'UsuarioAddPage', segment: 'usuario-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Usuario/usuario-details/usuario-details.module#UsuarioDetailsPageModule', name: 'UsuarioDetailsPage', segment: 'usuario-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Usuario/usuario-list/usuario-list.module#UsuarioListPageModule', name: 'UsuarioListPage', segment: 'usuario-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Autor/autor-add/autor-add.module#AutorAddPageModule', name: 'AutorAddPage', segment: 'autor-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Autor/autor-details/autor-details.module#AutorDetailsPageModule', name: 'AutorDetailsPage', segment: 'autor-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Autor/autor-list/autor-list.module#AutorListPageModule', name: 'AutorListPage', segment: 'autor-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sair-login/sair-login.module#SairLoginPageModule', name: 'SairLoginPage', segment: 'sair-login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_Livro_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_Livro_livro_details_livro_details__["a" /* LivroDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Usuario_usuario_add_usuario_add__["a" /* UsuarioAddPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_Usuario_usuario_details_usuario_details__["a" /* UsuarioDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_Autor_autor_add_autor_add__["a" /* AutorAddPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_Autor_autor_details_autor_details__["a" /* AutorDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout__["a" /* LogoutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_livro__["a" /* LivroProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__providers_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_autor__["a" /* AutorProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_livro_autor__["a" /* LivroAutorProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth_service__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Livro_livro_list_Livro_list__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Usuario_usuario_list_usuario_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Autor_autor_list_autor_list__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(122);
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
    function MyApp(platform, statusBar, splashScreen, loginProvider, afAuth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loginProvider = loginProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */];
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // firebase.initializeApp({
        //   apiKey: "AIzaSyCUPDh1uZH8aYxWg8eO07W8Tnbq77KcmpM",
        //   authDomain: "projetoapp-3dd62.firebaseapp.com",
        //   databaseURL: "https://projetoapp-3dd62.firebaseio.com",
        //   projectId: "projetoapp-3dd62",
        //   storageBucket: "projetoapp-3dd62.appspot.com",
        //   messagingSenderId: "673889262735"
        // });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.getMenuLogado();
                _this.nav.setRoot(_this.rootPage);
            }
            else {
                _this.getMenuAnonimo();
                _this.nav.setRoot(_this.signinPage);
            }
        });
        this.initializeApp();
    }
    MyApp.prototype.getMenuLogado = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            //{ title: 'List', component: ListPage },
            { title: 'Livros', component: __WEBPACK_IMPORTED_MODULE_7__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */] },
            { title: 'Sair', component: null },
        ];
    };
    MyApp.prototype.getMenuAnonimo = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Livro', component: __WEBPACK_IMPORTED_MODULE_7__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */] },
            { title: 'Autor', component: __WEBPACK_IMPORTED_MODULE_11__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */] },
            { title: 'Usuario', component: __WEBPACK_IMPORTED_MODULE_10__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__["a" /* SobrePage */] },
            { title: 'SignIn', component: __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */] },
        ];
    };
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
        if (page.title == "Sair") {
            this.loginProvider.logout();
            return;
        }
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_login__["a" /* LoginProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
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



var CategoriaProvider = (function () {
    function CategoriaProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3014/api/v1';
        //console.log('Hello CategoriaProvider Provider');
    }
    CategoriaProvider.prototype.getCategorias = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'v1/categorias')
                .map(function (res) { return res.json(); })
                .subscribe(function (dados) {
                resolve(dados);
            }, function (erro) {
                console.log("Deu erro" + erro);
            });
        });
    };
    return CategoriaProvider;
}());
CategoriaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CategoriaProvider);

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivroProvider = (function () {
    function LivroProvider() {
        this.livros = [];
        if (this.livros.length == 0)
            this.popularLivros();
    }
    LivroProvider.prototype.popularLivros = function () {
        this.livros.push({ id: 1, titulo: "Sustentabilidade - O que é - o que não é", destaque: true, ano: 2017, img: "assets/capa/livro1.jpg" });
        this.livros.push({ id: 2, titulo: "Educação ambiental e Sustentabilidade", destaque: false, ano: 2016, img: "assets/capa/livro2.jpg" });
        this.livros.push({ id: 3, titulo: "Sustentabilidade urbana & ecossistema", destaque: false, ano: 2015, img: "assets/capa/livro3.jpg" });
        this.livros.push({ id: 4, titulo: "Meio ambiente e sustentabilidade", destaque: false, ano: 2016, img: "assets/capa/livro4.jpg" });
        this.livros.push({ id: 5, titulo: "Sustentabilidade em questão", destaque: true, ano: 2016, img: "assets/capa/livro5.jpg" });
        this.livros.push({ id: 6, titulo: "A sustentabilidade ambiental em suas multiplas faces", destaque: false, ano: 2013, img: "assets/capa/livro6.jpg" });
        this.livros.push({ id: 7, titulo: "Ecologia e sustentabilidade", destaque: false, ano: 2010, img: "assets/capa/livro7.jpg" });
        this.livros.push({ id: 8, titulo: "Turismo, sustentabilidade e meio ambiente", destaque: false, ano: 2017, img: "assets/capa/livro8.jpg" });
        this.livros.push({ id: 9, titulo: "Sustentabilidade, responsabilidade social e meio ambiente", destaque: false, ano: 2012, img: "assets/capa/livro9.jpg" });
        this.livros.push({ id: 10, titulo: "Meio ambiente - Guia prático e didático", destaque: true, ano: 2015, img: "assets/capa/livro10.jpg" });
    };
    LivroProvider.prototype.getInstancia = function () {
        return { id: 0,
            titulo: "",
            ano: null,
            img: "",
            destaque: false
        };
    };
    LivroProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.livros.length > 0) {
            nextId = Math.max.apply(Math, this.livros.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    LivroProvider.prototype.getLivros = function () {
        return this.livros;
    };
    LivroProvider.prototype.adicionarLivro = function (livro) {
        if (livro.id == 0)
            livro.id = this.getNextID();
        this.livros.push(livro);
    };
    LivroProvider.prototype.removerLivro = function (livro) {
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        this.livros.splice(position, 1);
    };
    LivroProvider.prototype.alterarLivro = function (livro) {
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    };
    LivroProvider.prototype.filtrar = function (pesquisa) {
        var _this = this;
        return this.items.filter(function (i) {
            if (i.titulo.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    return LivroProvider;
}());
LivroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroProvider);

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutorProvider = (function () {
    function AutorProvider() {
        this.autores = [];
        if (this.autores.length == 0)
            this.popularAutor();
    }
    AutorProvider.prototype.popularAutor = function () {
        this.autores.push({ id: 1, nome: "Robson", sobrenome: "Fernandes", img: "assets/capa/robson.jpg" });
    };
    AutorProvider.prototype.getInstancia = function () {
        return { id: 0,
            nome: "",
            sobrenome: "",
            img: ""
        };
    };
    AutorProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.autores.length > 0) {
            nextId = Math.max.apply(Math, this.autores.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    AutorProvider.prototype.getAutor = function () {
        return this.autores;
    };
    AutorProvider.prototype.adicionarAutor = function (autor) {
        if (autor.id == 0)
            autor.id = this.getNextID();
        this.autores.push(autor);
    };
    AutorProvider.prototype.removerAutor = function (autor) {
        var position = this.autores.findIndex(function (l) {
            return l.id == autor.id;
        });
        this.autores.splice(position, 1);
    };
    AutorProvider.prototype.alterarAutor = function (autor) {
        var position = this.autores.findIndex(function (l) {
            return l.id == autor.id;
        });
        this.autores[position].nome = autor.nome;
        this.autores[position].sobrenome = autor.sobrenome;
        this.autores[position].img = autor.img;
    };
    AutorProvider.prototype.filtrar = function (pesquisa) {
        var _this = this;
        return this.items.filter(function (i) {
            if (i.titulo.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    return AutorProvider;
}());
AutorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AutorProvider);

//# sourceMappingURL=autor.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_autor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_livro_autor__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LivroAddPage = (function () {
    function LivroAddPage(navCtrl, navParams, livroProvider, camera, alertCtrl, autorProvider, livroAutorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.autorProvider = autorProvider;
        this.livroAutorProvider = livroAutorProvider;
        this.livro = navParams.get("item");
        if (this.livro == null) {
            this.modoEdicao = false;
            this.livro = this.livroProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
        this.imagemUploaded = (this.livro.img != "" && this.livro.img != null);
    }
    LivroAddPage.prototype.salvar = function ($event) {
        if (!this.modoEdicao)
            this.livroProvider.adicionarLivro(this.livro);
        else
            this.livroProvider.alterarLivro(this.livro);
        this.navCtrl.pop();
    };
    LivroAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    LivroAddPage.prototype.tirarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.livro.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    LivroAddPage.prototype.escolherImagem = function () {
        var _this = this;
        var options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.livro.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    LivroAddPage.prototype.cancelarImagem = function () {
        this.livro.img = "";
        this.imagemUploaded = false;
    };
    LivroAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroAddPage');
    };
    LivroAddPage.prototype.gerenciarAutores = function () {
        var _this = this;
        var autores = this.autorProvider.getAutor();
        var livrosAutores = this.livroAutorProvider.getLivrosAutores(this.livro);
        var alert = this.alertCtrl.create();
        alert.setTitle('Selecione os Autores:');
        var _loop_1 = function (i) {
            //livrosAutores
            var possuiAutor = livrosAutores.some(function (a) {
                if (a.autorId == autores[i].id) {
                    return true;
                }
                return false;
            });
            alert.addInput({
                type: 'checkbox',
                label: autores[i].nome,
                value: autores[i].id.toString(),
                checked: possuiAutor
            });
        };
        for (var i = 0; i < autores.length; i++) {
            _loop_1(i);
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Salvar',
            handler: function (data) {
                _this.livroAutorProvider.adicionarLivroAutor(_this.livro, data);
            }
        });
        alert.present();
    };
    return LivroAddPage;
}());
LivroAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-add/livro-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="livro.titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Ano</ion-label>\n      <ion-input type="number" [(ngModel)]="livro.ano"></ion-input>\n    </ion-item>\n\n    <br>\n    <p>Livro em destaque</p>\n    <ion-item>\n    <ion-checkbox color="secondary" [(ngModel)]="livro.destaque"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{livro.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Autores</ion-label>\n      <button ion-button item-right color="positive"\n              (click)="gerenciarAutores()">\n        <ion-icon name="add"></ion-icon>&nbsp;Gerenciar\n      </button>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar(evento)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-add/livro-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_autor__["a" /* AutorProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_livro_autor__["a" /* LivroAutorProvider */]])
], LivroAddPage);

//# sourceMappingURL=livro-add.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Livro_livro_details_livro_details__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Livro_livro_add_livro_add__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    HomePage.prototype.pesquisar = function (event) {
        this.itemsFilter = this.items.filter(function (i) {
            if (i.destaque) {
                return true;
            }
            return false;
        });
    };
    HomePage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    HomePage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    HomePage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Livro_livro_add_livro_add__["a" /* LivroAddPage */], {});
    };
    HomePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Livro_livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
        this.pesquisar("");
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <h3 align="center" >Semeando Conhecimento</h3><br>\n\n  <div align="center" style="font-size: 15px;">\n    Podemos dizer que sustentabilidade e meio ambiente sempre “andam de mãos dadas”.<br>\n    A sustentabilidade é basicamente a capacidade que o ser humano possui de usufruir<br>\n    dos recursos naturais presentes no planeta sem compromete-los para as gerações futuras.<br>\n    Quando falamos de recursos naturais, estamos nos referindo basicamente ao meio ambiente,<br>\n    pois tudo que utilizamos no nosso dia-dia depende diretamente ou indiretamente dele.<br>\n    Preservar o meio ambiente, dessa forma, se torna um dos principais princípios da sustentabilidade. <br>\n    O significado de sustentabilidade é complexo e envolve uma série de variáveis independentes entre si.<br>\n    Porém, todos os processos e aspectos sociais, energéticos, econômicos e ambientais estão diretamente envolvidos nesse conceito.<br><br>\n  </div>\n\n  <ion-content>\n    <ion-slides pager>\n      <ion-slide *ngFor="let item of itemsFilter" >\n        <h3> Livro em destaque</h3>\n        <ion-item ion-item (click)="itemTapped($event, item)">\n          <ion-thumbnail item-start>\n            <img src="{{item.img}}">\n          </ion-thumbnail>\n          <h2>{{item.titulo}}</h2>\n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n\n\n    <div align="center">\n  <button ion-button color="secondary" menuToggle>Abrir menu</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthService.prototype.createUser = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signOut = function () {
        return this.signOutFirebase();
    };
    AuthService.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioProvider = (function () {
    function UsuarioProvider() {
        this.usuarios = [];
        if (this.usuarios.length == 0)
            this.popularUsuario();
    }
    UsuarioProvider.prototype.popularUsuario = function () {
        this.usuarios.push({ id: 1, nome: "Rafael", cpf: "435.615.388-00", img: "assets/capa/rafael.jpg" });
        this.usuarios.push({ id: 2, nome: "Diego", cpf: "", img: "assets/capa/diego.jpg" });
        this.usuarios.push({ id: 3, nome: "Victor", cpf: "", img: "assets/capa/victor.jpg" });
    };
    UsuarioProvider.prototype.getInstancia = function () {
        return { id: 0,
            nome: "",
            cpf: "",
            img: ""
        };
    };
    UsuarioProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.usuarios.length > 0) {
            nextId = Math.max.apply(Math, this.usuarios.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    UsuarioProvider.prototype.getUsuario = function () {
        return this.usuarios;
    };
    UsuarioProvider.prototype.adicionarUsuario = function (usuario) {
        if (usuario.id == 0)
            usuario.id = this.getNextID();
        this.usuarios.push(usuario);
    };
    UsuarioProvider.prototype.removerUsuario = function (usuario) {
        var position = this.usuarios.findIndex(function (l) {
            return l.id == usuario.id;
        });
        this.usuarios.splice(position, 1);
    };
    UsuarioProvider.prototype.alterarUsuario = function (usuario) {
        var position = this.usuarios.findIndex(function (l) {
            return l.id == usuario.id;
        });
        this.usuarios[position].nome = usuario.nome;
        this.usuarios[position].cpf = usuario.cpf;
        this.usuarios[position].img = usuario.img;
    };
    UsuarioProvider.prototype.filtrar = function (pesquisa) {
        var _this = this;
        return this.items.filter(function (i) {
            if (i.nome.toUpperCase().indexOf(_this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    };
    return UsuarioProvider;
}());
UsuarioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsuarioProvider);

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_livro__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LivroDetailsPage = (function () {
    function LivroDetailsPage(navCtrl, navParams, alertCtrl, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.livroProvider = livroProvider;
        this.livro = navParams.get('item');
    }
    LivroDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__["a" /* LivroAddPage */], {
            item: this.livro
        });
    };
    LivroDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.livroProvider.removerLivro(_this.livro);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    LivroDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroDetailsPage');
    };
    return LivroDetailsPage;
}());
LivroDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-details/livro-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{livro.titulo}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{livro.img}}">\n\n    <ion-item>\n      <ion-icon name="book" item-start large></ion-icon>\n      <h2>{{livro.titulo}}</h2>\n      <p>Ano: {{livro.ano}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n      <p>Qtde:</p>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Livro/livro-details/livro-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_livro__["a" /* LivroProvider */]])
], LivroDetailsPage);

//# sourceMappingURL=livro-details.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioAddPage = (function () {
    function UsuarioAddPage(navCtrl, navParams, usuarioProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.camera = camera;
        this.usuario = navParams.get("item");
        if (this.usuario == null) {
            this.modoEdicao = false;
            this.usuario = this.usuarioProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
        this.imagemUploaded = (this.usuario.img != "" && this.usuario.img != null);
    }
    UsuarioAddPage.prototype.salvar = function (evento) {
        if (!this.modoEdicao)
            this.usuarioProvider.adicionarUsuario(this.usuario);
        else
            this.usuarioProvider.alterarUsuario(this.usuario);
        this.navCtrl.pop();
    };
    UsuarioAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    UsuarioAddPage.prototype.tirarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.usuario.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    UsuarioAddPage.prototype.escolherImagem = function () {
        var _this = this;
        var options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.usuario.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    UsuarioAddPage.prototype.cancelarImagem = function () {
        this.usuario.img = "";
        this.imagemUploaded = false;
    };
    UsuarioAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroAddPage');
    };
    return UsuarioAddPage;
}());
UsuarioAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-add/usuario-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="usuario.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input type="text" [(ngModel)]="usuario.cpf"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{usuario.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n               *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar($event)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Usuario/usuario-add/usuario-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], UsuarioAddPage);

//# sourceMappingURL=usuario-add.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutorAddPage = (function () {
    function AutorAddPage(navCtrl, navParams, autorProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autorProvider = autorProvider;
        this.camera = camera;
        this.autor = navParams.get("item");
        if (this.autor == null) {
            this.modoEdicao = false;
            this.autor = this.autorProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
        this.imagemUploaded = (this.autor.img != "" && this.autor.img != null);
    }
    AutorAddPage.prototype.salvar = function (evento) {
        if (!this.modoEdicao)
            this.autorProvider.adicionarAutor(this.autor);
        else
            this.autorProvider.alterarAutor(this.autor);
        this.navCtrl.pop();
    };
    AutorAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    AutorAddPage.prototype.tirarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.autor.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    AutorAddPage.prototype.escolherImagem = function () {
        var _this = this;
        var options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.autor.img = base64Image;
            _this.imagemUploaded = true;
        }, function (err) {
        });
    };
    AutorAddPage.prototype.cancelarImagem = function () {
        this.autor.img = "";
        this.imagemUploaded = false;
    };
    AutorAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutorAddPage');
    };
    return AutorAddPage;
}());
AutorAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-add/autor-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Autor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="autor.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Sobrenome</ion-label>\n      <ion-input type="text" [(ngModel)]="autor.sobrenome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{autor.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n               *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar($event)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp/ProjetoApp/src/pages/Autor/autor-add/autor-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], AutorAddPage);

//# sourceMappingURL=autor-add.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map