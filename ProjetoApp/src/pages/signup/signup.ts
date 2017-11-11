import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IonicPage, NavController, NavParams, ToastController} from "ionic-angular";
// import {LoginProvider} from "../../providers/login";
import {HomePage} from "../home/home";
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // private loginProvider: LoginProvider,
              // private loadingCtrl: LoadingController,
              // private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private authService: AuthService) {
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
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage('Usuário criado com sucesso.');
          toast.present();

          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          if (error.code  == 'auth/email-already-in-use') {
            toast.setMessage('O e-mail digitado já está em uso.');
          } else if (error.code  == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code  == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários.');
          } else if (error.code  == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca.');
          }
          toast.present();
        });
    }
  }
}
