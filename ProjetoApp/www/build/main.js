webpackJsonp([14],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_user__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(76);
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



let SignupPage = class SignupPage {
    constructor(navCtrl, navParams, 
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
    createAccount() {
        if (this.form.form.valid) {
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then((user) => {
                user.sendEmailVerification();
                toast.setMessage('Usuário criado com sucesso.');
                toast.present();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            })
                .catch((error) => {
                if (error.code == 'auth/email-already-in-use') {
                    toast.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast.setMessage('A senha digitada é muito fraca.');
                }
                toast.present();
            });
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
], SignupPage.prototype, "form", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Criar nova conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="secondary" [disabled]="!form.form.valid" (click)="createAccount()">\n      Criar conta\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/signup/signup.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ResetpasswordPage = class ResetpasswordPage {
    constructor(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userEmail = '';
    }
    resetPassword() {
        if (this.form.form.valid) {
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(() => {
                toast.setMessage('Solicitação foi enviada para o seu e-mail.');
                toast.present();
                this.navCtrl.pop();
            })
                .catch((error) => {
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                toast.present();
            });
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], ResetpasswordPage.prototype, "form", void 0);
ResetpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resetpassword',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/resetpassword/resetpassword.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Resetar minha senha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="secondary" [disabled]="!form.form.valid" (click)="resetPassword()">\n      Resetar minha senha\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/resetpassword/resetpassword.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(76);
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



//import { TouchID } from '@ionic-native/touch-id';
// import {LoginProvider} from "../../providers/login";





let SigninPage = class SigninPage {
    constructor(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__providers_auth_user__["a" /* User */]();
    }
    //   VerificaTouch(){
    //   this.touchId.isAvailable()
    // .then(
    //     res => console.log('TouchID is available!'),
    //   err => console.error('TouchID is not available', err)
    // );
    // }
    //   ScanTouch(){
    //   this.touchId.verifyFingerprint('Scan your fingerprint please')
    // .then(
    //     res => console.log('Ok', res),
    //   err => console.error('Error', err)
    // );
    //  }
    createAccount() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    }
    resetPassword() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    }
    signIn() {
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(() => {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            })
                .catch((error) => {
                let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
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
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
], SigninPage.prototype, "form", void 0);
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form #form ="ngForm">\n    <ion-list>\n\n    <ion-item>\n      <ion-label stacked> E-mail </ion-label>\n      <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" color="secondary" required></ion-input>\n    </ion-item>\n    <ion-item  class="text-danger">\n      O campo e obrigatorio\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked> Senha </ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="user.password" #email="ngModel" color="secondary" required></ion-input>\n    </ion-item>\n\n    <ion-item  class="text-danger">\n      O campo e obrigatorio\n    </ion-item>\n\n    </ion-list>\n\n      <button ion-button block color="secondary" (click)="signIn()">\n        Entrar\n      </button>\n  </form>\n\n    <button ion-button block clear color="secondary" margin-top (click)="resetPassword()">\n      Esqueci minha senha\n    </button>\n\n    <button ion-button block clear color="secondary" (click)="createAccount()">\n      Criar conta\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/signin/signin.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_brightness__ = __webpack_require__(237);
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
let SobrePage = class SobrePage {
    constructor(navCtrl, navParams, barcodeScanner, brightness) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.brightness = brightness;
        this.isOn = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SobrePage');
    }
    LeitorCod() {
        this.barcodeScanner.scan().then((barcodeData) => {
            // Success! Barcode data is here
        }, (err) => {
            // An error occurred
        });
    }
    brilhoMais() {
        let brightnessValue = 1;
        this.brightness.setBrightness(brightnessValue);
    }
    brilhoMenos() {
        let brightnessValue = 0;
        this.brightness.setBrightness(brightnessValue);
    }
};
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/sobre/sobre.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <br><div>\n  <div style="font-size: 20px; "><strong>Nome:</strong> Semeando Conhecimento</div><br>\n  <div style="font-size: 18px;"><strong>Autores:</strong> Rafael Martin Alves Ferreira<br>\n    Diego Cury Astolphi</div><br>\n  <div style="font-size: 16px;"><strong>Versão:</strong> 1.0.5 beta </div>\n</div><br><br>\n  <div style="font-size: 16px;"> Este aplicativo foi desenvolvido para simuluar uma biblioteca virtual, onde o usuário é cadastrado, o autor é cadastrado e o livro é cadastrado.<br>\n  Onde é possivel alterar os dados dos usuário, autores e livros. Esta é uma versão beta para teste.</div>\n\n  <button ion-button color="secondary" (click)="LeitorCod()"> Leitor </button>\n  <button ion-button color="secondary" (click)="brilhoMais()"> brilho mais</button>\n  <button ion-button color="secondary" (click)="brilhoMenos()"> brilho menos</button>\n\n  <ion-footer style="font-size: 14px;"> Desenvolvido em Setembro de 2017</ion-footer>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/sobre/sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_brightness__["a" /* Brightness */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let UsuarioDetailsPage = class UsuarioDetailsPage {
    constructor(navCtrl, navParams, alertCtrl, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuarioProvider = usuarioProvider;
        this.usuario = navParams.get('item');
    }
    editarItem(event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {
            item: this.usuario
        });
    }
    removerItem(event) {
        let confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        this.usuarioProvider.removerUsuario(this.usuario);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad UsuarioDetailsPage');
    }
};
UsuarioDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-details/usuario-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{usuario.nome}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{usuario.img}}">\n\n    <ion-item>\n      <ion-icon name="person" item-start large></ion-icon>\n      <h2>Nome: {{usuario.nome}}</h2>\n      <p>CPF: {{usuario.cpf}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-details/usuario-details.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_details_usuario_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_add_usuario_add__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let UsuarioListPage = class UsuarioListPage {
    constructor(navCtrl, navParams, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    ionViewWillEnter() {
        this.items = this.usuarioProvider.getUsuario();
        this.itemsFilter = this.items;
    }
    itemTapped(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_details_usuario_details__["a" /* UsuarioDetailsPage */], {
            item: item
        });
    }
    novoItem(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_add_usuario_add__["a" /* UsuarioAddPage */], {});
    }
    abrirPesquisa(event) {
        this.visibilidade = true;
    }
    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.nome.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
};
UsuarioListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-list/usuario-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Usuario</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="ios-person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let item of itemsFilter" >\n\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.nome}}</h2>\n        <p>{{item.cpf}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button>\n      </ion-item>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-list/usuario-list.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AutorDetailsPage = class AutorDetailsPage {
    constructor(navCtrl, navParams, alertCtrl, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.autorProvider = autorProvider;
        this.autor = navParams.get('item');
    }
    editarItem(event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__autor_add_autor_add__["a" /* AutorAddPage */], {
            item: this.autor
        });
    }
    removerItem(event) {
        let confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        this.autorProvider.removerAutor(this.autor);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad autorDetailsPage');
    }
};
AutorDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-details/autor-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{autor.nome}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{autor.img}}">\n\n    <ion-item>\n      <ion-icon name="person" item-start large></ion-icon>\n      <h2>Nome: {{autor.nome}}</h2>\n      <p>Sobrenome: {{autor.sobrenome}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-details/autor-details.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autor_details_autor_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autor_add_autor_add__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AutorListPage = class AutorListPage {
    constructor(navCtrl, navParams, autorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autorProvider = autorProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    ionViewWillEnter() {
        this.items = this.autorProvider.getAutor();
        this.itemsFilter = this.items;
    }
    itemTapped(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__autor_details_autor_details__["a" /* AutorDetailsPage */], {
            item: item
        });
    }
    novoItem(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__autor_add_autor_add__["a" /* AutorAddPage */], {});
    }
    abrirPesquisa(event) {
        this.visibilidade = true;
    }
    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.nome.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
};
AutorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-list/autor-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Autor</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="ios-person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let item of itemsFilter" >\n\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.nome}}</h2>\n        <p>{{item.sobrenome}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button>\n      </ion-item>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-list/autor-list.html"*/,
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
		511,
		13
	],
	"../pages/Autor/autor-details/autor-details.module": [
		512,
		12
	],
	"../pages/Autor/autor-list/autor-list.module": [
		513,
		11
	],
	"../pages/Livro/livro-add/livro-add.module": [
		502,
		10
	],
	"../pages/Livro/livro-details/livro-details.module": [
		503,
		9
	],
	"../pages/Usuario/usuario-add/usuario-add.module": [
		508,
		8
	],
	"../pages/Usuario/usuario-details/usuario-details.module": [
		509,
		7
	],
	"../pages/Usuario/usuario-list/usuario-list.module": [
		510,
		6
	],
	"../pages/logout/logout.module": [
		514,
		5
	],
	"../pages/resetpassword/resetpassword.module": [
		505,
		4
	],
	"../pages/sair-login/sair-login.module": [
		515,
		0
	],
	"../pages/signin/signin.module": [
		506,
		3
	],
	"../pages/signup/signup.module": [
		504,
		2
	],
	"../pages/sobre/sobre.module": [
		507,
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

let LivroAutorProvider = class LivroAutorProvider {
    constructor() {
        this.livroAutores = [];
    }
    getInstancia() {
        return {
            livroId: null,
            autorId: null
        };
    }
    getLivrosAutores(livro) {
        let itemsFilter = this.livroAutores.filter((i) => {
            if (i.livroId == livro.id) {
                return true;
            }
            return false;
        });
        return itemsFilter;
    }
    adicionarLivroAutor(livro, autores) {
        this.removerLivroAutor(livro);
        for (let x = 0; x < autores.length; x++) {
            let novoItem = this.getInstancia();
            novoItem.livroId = livro.id;
            novoItem.autorId = parseInt(autores[x]);
            this.livroAutores.push(novoItem);
        }
    }
    removerLivroAutor(livro) {
        let itemsFilter = this.livroAutores.filter((i) => {
            if (i.livroId != livro.id) {
                return true;
            }
            return false;
        });
        this.livroAutores = itemsFilter;
    }
};
LivroAutorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroAutorProvider);

//# sourceMappingURL=livro-autor.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class User {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let LoginProvider = class LoginProvider {
    signup(email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    }
    signin(email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    }
    logout() {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    }
};
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_details_livro_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_add_livro_add__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LivroListPage = class LivroListPage {
    constructor(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    ionViewWillEnter() {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
    }
    itemTapped(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    }
    novoItem(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livro_add_livro_add__["a" /* LivroAddPage */], {});
    }
    abrirPesquisa(event) {
        this.visibilidade = true;
    }
    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.titulo.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
};
LivroListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-list',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-list/livro-list.html"*/'<ion-header>\n  <ion-navbar color="secondary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Livros</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionCancel)="cancelarPesquisa()"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide *ngFor="let item of itemsFilter" >\n      <ion-item ion-item (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.titulo}}</h2>\n        <p>{{item.ano}}</p>\n        <button color="secondary" ion-button clear item-end>Ver</button><br>\n      </ion-item>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-list/livro-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], LivroListPage);

//# sourceMappingURL=Livro-list.js.map

/***/ }),

/***/ 326:
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
let LogoutPage = class LogoutPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LogoutPage');
    }
};
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logout',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/logout/logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_categoria__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_autor__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_livro_autor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_login__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Usuario_usuario_list_usuario_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Usuario_usuario_add_usuario_add__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Usuario_usuario_details_usuario_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Autor_autor_list_autor_list__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Autor_autor_add_autor_add__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Autor_autor_details_autor_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Livro_livro_list_Livro_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_Livro_livro_add_livro_add__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_Livro_livro_details_livro_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_usuario__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_resetpassword_resetpassword__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_barcode_scanner__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_brightness__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































const firebaseConfig = {
    apiKey: "AIzaSyCUPDh1uZH8aYxWg8eO07W8Tnbq77KcmpM",
    authDomain: "projetoapp-3dd62.firebaseapp.com",
    databaseURL: "https://projetoapp-3dd62.firebaseio.com",
    projectId: "projetoapp-3dd62",
    storageBucket: "projetoapp-3dd62.appspot.com",
    messagingSenderId: "673889262735"
};
let AppModule = class AppModule {
};
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
            __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_33__angular_forms__["a" /* FormsModule */]
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
            __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_brightness__["a" /* Brightness */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Livro_livro_list_Livro_list__ = __webpack_require__(315);
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













let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen, loginProvider, afAuth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loginProvider = loginProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */];
        afAuth.authState.subscribe(user => {
            if (user) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(user => {
            if (user) {
                this.getMenuLogado();
                this.nav.setRoot(this.rootPage);
            }
            else {
                this.getMenuAnonimo();
                this.nav.setRoot(this.signinPage);
            }
        });
        this.initializeApp();
    }
    getMenuLogado() {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Livro', component: __WEBPACK_IMPORTED_MODULE_7__pages_Livro_livro_list_Livro_list__["a" /* LivroListPage */] },
            { title: 'Autor', component: __WEBPACK_IMPORTED_MODULE_11__pages_Autor_autor_list_autor_list__["a" /* AutorListPage */] },
            { title: 'Usuario', component: __WEBPACK_IMPORTED_MODULE_10__pages_Usuario_usuario_list_usuario_list__["a" /* UsuarioListPage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__["a" /* SobrePage */] },
            { title: 'Sair', component: null },
        ];
    }
    getMenuAnonimo() {
        this.pages = [
            { title: 'SignIn', component: __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */] },
        ];
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "Sair") {
            this.loginProvider.logout();
            return;
        }
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(92);
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



let CategoriaProvider = class CategoriaProvider {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3014/api/v1';
        //console.log('Hello CategoriaProvider Provider');
    }
    getCategorias() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + 'v1/categorias')
                .map(res => res.json())
                .subscribe(dados => {
                resolve(dados);
            }, erro => {
                console.log("Deu erro" + erro);
            });
        });
    }
};
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

let LivroProvider = class LivroProvider {
    constructor() {
        this.livros = [];
        if (this.livros.length == 0)
            this.popularLivros();
    }
    popularLivros() {
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
    }
    getInstancia() {
        return { id: 0,
            titulo: "",
            ano: null,
            img: "",
            destaque: false
        };
    }
    getNextID() {
        let nextId = 0;
        if (this.livros.length > 0) {
            nextId = Math.max.apply(Math, this.livros.map(function (o) { return o.id; }));
        }
        return ++nextId;
    }
    getLivros() {
        return this.livros;
    }
    adicionarLivro(livro) {
        if (livro.id == 0)
            livro.id = this.getNextID();
        this.livros.push(livro);
    }
    removerLivro(livro) {
        let position = this.livros.findIndex((l) => {
            return l.id == livro.id;
        });
        this.livros.splice(position, 1);
    }
    alterarLivro(livro) {
        let position = this.livros.findIndex((l) => {
            return l.id == livro.id;
        });
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    }
    filtrar(pesquisa) {
        return this.items.filter((i) => {
            if (i.titulo.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
};
LivroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroProvider);

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 59:
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

let AutorProvider = class AutorProvider {
    constructor() {
        this.autores = [];
        if (this.autores.length == 0)
            this.popularAutor();
    }
    popularAutor() {
        this.autores.push({ id: 1, nome: "Robson", sobrenome: "Fernandes", img: "assets/capa/robson.jpg" });
    }
    getInstancia() {
        return { id: 0,
            nome: "",
            sobrenome: "",
            img: ""
        };
    }
    getNextID() {
        let nextId = 0;
        if (this.autores.length > 0) {
            nextId = Math.max.apply(Math, this.autores.map(function (o) { return o.id; }));
        }
        return ++nextId;
    }
    getAutor() {
        return this.autores;
    }
    adicionarAutor(autor) {
        if (autor.id == 0)
            autor.id = this.getNextID();
        this.autores.push(autor);
    }
    removerAutor(autor) {
        let position = this.autores.findIndex((l) => {
            return l.id == autor.id;
        });
        this.autores.splice(position, 1);
    }
    alterarAutor(autor) {
        let position = this.autores.findIndex((l) => {
            return l.id == autor.id;
        });
        this.autores[position].nome = autor.nome;
        this.autores[position].sobrenome = autor.sobrenome;
        this.autores[position].img = autor.img;
    }
    filtrar(pesquisa) {
        return this.items.filter((i) => {
            if (i.titulo.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
};
AutorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AutorProvider);

//# sourceMappingURL=autor.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_autor__ = __webpack_require__(59);
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






let LivroAddPage = class LivroAddPage {
    constructor(navCtrl, navParams, livroProvider, camera, alertCtrl, autorProvider, livroAutorProvider) {
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
    salvar($event) {
        if (!this.modoEdicao)
            this.livroProvider.adicionarLivro(this.livro);
        else
            this.livroProvider.alterarLivro(this.livro);
        this.navCtrl.pop();
    }
    cancelar() {
        this.navCtrl.pop();
    }
    tirarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.livro.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    escolherImagem() {
        const options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.livro.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    cancelarImagem() {
        this.livro.img = "";
        this.imagemUploaded = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LivroAddPage');
    }
    gerenciarAutores() {
        let autores = this.autorProvider.getAutor();
        let livrosAutores = this.livroAutorProvider.getLivrosAutores(this.livro);
        let alert = this.alertCtrl.create();
        alert.setTitle('Selecione os Autores:');
        for (let i = 0; i < autores.length; i++) {
            //livrosAutores
            let possuiAutor = livrosAutores.some((a) => {
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
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Salvar',
            handler: data => {
                this.livroAutorProvider.adicionarLivroAutor(this.livro, data);
            }
        });
        alert.present();
    }
};
LivroAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-add/livro-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="livro.titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Ano</ion-label>\n      <ion-input type="number" [(ngModel)]="livro.ano"></ion-input>\n    </ion-item>\n\n    <br>\n    <p>Livro em destaque</p>\n    <ion-item>\n    <ion-checkbox color="secondary" [(ngModel)]="livro.destaque"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{livro.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Autores</ion-label>\n      <button ion-button item-right color="positive"\n              (click)="gerenciarAutores()">\n        <ion-icon name="add"></ion-icon>&nbsp;Gerenciar\n      </button>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar(evento)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-add/livro-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_autor__["a" /* AutorProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_livro_autor__["a" /* LivroAutorProvider */]])
], LivroAddPage);

//# sourceMappingURL=livro-add.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Livro_livro_details_livro_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Livro_livro_add_livro_add__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomePage = class HomePage {
    constructor(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.destaque) {
                return true;
            }
            return false;
        });
    }
    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
    abrirPesquisa(event) {
        this.visibilidade = true;
    }
    novoItem(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Livro_livro_add_livro_add__["a" /* LivroAddPage */], {});
    }
    itemTapped(event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Livro_livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    }
    ionViewWillEnter() {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
        this.pesquisar("");
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <h3 align="center" >Semeando Conhecimento</h3><br>\n\n  <div align="center" style="font-size: 15px;">\n    Podemos dizer que sustentabilidade e meio ambiente sempre “andam de mãos dadas”.<br>\n    A sustentabilidade é basicamente a capacidade que o ser humano possui de usufruir<br>\n    dos recursos naturais presentes no planeta sem compromete-los para as gerações futuras.<br>\n    Quando falamos de recursos naturais, estamos nos referindo basicamente ao meio ambiente,<br>\n    pois tudo que utilizamos no nosso dia-dia depende diretamente ou indiretamente dele.<br>\n    Preservar o meio ambiente, dessa forma, se torna um dos principais princípios da sustentabilidade. <br>\n    O significado de sustentabilidade é complexo e envolve uma série de variáveis independentes entre si.<br>\n    Porém, todos os processos e aspectos sociais, energéticos, econômicos e ambientais estão diretamente envolvidos nesse conceito.<br><br>\n  </div>\n\n  <ion-content>\n    <ion-slides pager>\n      <ion-slide *ngFor="let item of itemsFilter" >\n        <h3> Livro em destaque</h3>\n        <ion-item ion-item (click)="itemTapped($event, item)">\n          <ion-thumbnail item-start>\n            <img src="{{item.img}}">\n          </ion-thumbnail>\n          <h2>{{item.titulo}}</h2>\n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n\n\n    <div align="center">\n  <button ion-button color="secondary" menuToggle>Abrir menu</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 76:
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


let AuthService = class AuthService {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    createUser(user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    signIn(user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    signOut() {
        return this.signOutFirebase();
    }
    signOutFirebase() {
        return this.angularFireAuth.auth.signOut();
    }
    resetPassword(email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 77:
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

let UsuarioProvider = class UsuarioProvider {
    constructor() {
        this.usuarios = [];
        if (this.usuarios.length == 0)
            this.popularUsuario();
    }
    popularUsuario() {
        this.usuarios.push({ id: 1, nome: "Rafael", cpf: "435.615.388-00", img: "assets/capa/rafael.jpg" });
        this.usuarios.push({ id: 2, nome: "Diego", cpf: "", img: "assets/capa/diego.jpg" });
        this.usuarios.push({ id: 3, nome: "Victor", cpf: "", img: "assets/capa/victor.jpg" });
    }
    getInstancia() {
        return { id: 0,
            nome: "",
            cpf: "",
            img: ""
        };
    }
    getNextID() {
        let nextId = 0;
        if (this.usuarios.length > 0) {
            nextId = Math.max.apply(Math, this.usuarios.map(function (o) { return o.id; }));
        }
        return ++nextId;
    }
    getUsuario() {
        return this.usuarios;
    }
    adicionarUsuario(usuario) {
        if (usuario.id == 0)
            usuario.id = this.getNextID();
        this.usuarios.push(usuario);
    }
    removerUsuario(usuario) {
        let position = this.usuarios.findIndex((l) => {
            return l.id == usuario.id;
        });
        this.usuarios.splice(position, 1);
    }
    alterarUsuario(usuario) {
        let position = this.usuarios.findIndex((l) => {
            return l.id == usuario.id;
        });
        this.usuarios[position].nome = usuario.nome;
        this.usuarios[position].cpf = usuario.cpf;
        this.usuarios[position].img = usuario.img;
    }
    filtrar(pesquisa) {
        return this.items.filter((i) => {
            if (i.nome.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });
    }
};
UsuarioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsuarioProvider);

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__ = __webpack_require__(66);
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




let LivroDetailsPage = class LivroDetailsPage {
    constructor(navCtrl, navParams, alertCtrl, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.livroProvider = livroProvider;
        this.livro = navParams.get('item');
    }
    editarItem(event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__["a" /* LivroAddPage */], {
            item: this.livro
        });
    }
    removerItem(event) {
        let confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        this.livroProvider.removerLivro(this.livro);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LivroDetailsPage');
    }
};
LivroDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-details',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-details/livro-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{livro.titulo}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{livro.img}}">\n\n    <ion-item>\n      <ion-icon name="book" item-start large></ion-icon>\n      <h2>{{livro.titulo}}</h2>\n      <p>Ano: {{livro.ano}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n      <p>Qtde:</p>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Livro/livro-details/livro-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_livro__["a" /* LivroProvider */]])
], LivroDetailsPage);

//# sourceMappingURL=livro-details.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let UsuarioAddPage = class UsuarioAddPage {
    constructor(navCtrl, navParams, usuarioProvider, camera) {
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
    salvar(evento) {
        if (!this.modoEdicao)
            this.usuarioProvider.adicionarUsuario(this.usuario);
        else
            this.usuarioProvider.alterarUsuario(this.usuario);
        this.navCtrl.pop();
    }
    cancelar() {
        this.navCtrl.pop();
    }
    tirarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.usuario.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    escolherImagem() {
        const options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.usuario.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    cancelarImagem() {
        this.usuario.img = "";
        this.imagemUploaded = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LivroAddPage');
    }
};
UsuarioAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-add/usuario-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="usuario.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input type="text" [(ngModel)]="usuario.cpf"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{usuario.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n               *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar($event)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Usuario/usuario-add/usuario-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], UsuarioAddPage);

//# sourceMappingURL=usuario-add.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autor__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AutorAddPage = class AutorAddPage {
    constructor(navCtrl, navParams, autorProvider, camera) {
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
    salvar(evento) {
        if (!this.modoEdicao)
            this.autorProvider.adicionarAutor(this.autor);
        else
            this.autorProvider.alterarAutor(this.autor);
        this.navCtrl.pop();
    }
    cancelar() {
        this.navCtrl.pop();
    }
    tirarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.autor.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    escolherImagem() {
        const options = {
            quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.autor.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
    cancelarImagem() {
        this.autor.img = "";
        this.imagemUploaded = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AutorAddPage');
    }
};
AutorAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autor-add',template:/*ion-inline-start:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-add/autor-add.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Cadastro Autor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="autor.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Sobrenome</ion-label>\n      <ion-input type="text" [(ngModel)]="autor.sobrenome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Imagem</ion-label>\n\n      <ion-thumbnail item-start *ngIf="imagemUploaded">\n        <img src="{{autor.img}}">\n      </ion-thumbnail>\n\n      <button ion-button item-right color="danger"\n              *ngIf="imagemUploaded" (click)="cancelarImagem()" >\n        <ion-icon name="camera"></ion-icon>Alterar </button>\n\n      <button ion-button item-right color="secondary"\n              *ngIf="!imagemUploaded" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Camera </button>\n\n      <button  ion-button item-right color="secondary"\n               *ngIf="!imagemUploaded" (click)="escolherImagem()">\n        <ion-icon name="images"></ion-icon>&nbsp;Galeria </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary"\n            (click)="salvar($event)">Salvar</button>\n    <button ion-button color="light"\n            (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/home/rafael/Downloads/ProjetoApp projeto com verificao email/ProjetoApp/src/pages/Autor/autor-add/autor-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_autor__["a" /* AutorProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], AutorAddPage);

//# sourceMappingURL=autor-add.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map