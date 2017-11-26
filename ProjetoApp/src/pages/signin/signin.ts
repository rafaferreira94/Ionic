import {Component, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavController, NavParams, ToastController, IonicPage} from "ionic-angular";
//import { TouchID } from '@ionic-native/touch-id';

// import {LoginProvider} from "../../providers/login";
import {HomePage} from "../home/home";
import {SignupPage} from "../signup/signup";
import {AuthService} from "../../providers/auth/auth-service";
import {User} from "../../providers/auth/user";
import {ResetpasswordPage} from "../resetpassword/resetpassword";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private authService: AuthService,
              //private touchId: TouchID
  ){

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
    this.navCtrl.push(SignupPage);
  }

  resetPassword(){
    this.navCtrl.push(ResetpasswordPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code  == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é válido');
          } else if (error.code  == 'auth/user-disable') {
            toast.setMessage('O usuário está desabilitado');
          } else if (error.code  == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado');
          } else if (error.code  == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é válida.');
          }
          toast.present();
        });
    }
  }
}
