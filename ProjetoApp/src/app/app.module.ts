import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivroProvider } from "../providers/livro";
import {Camera} from "@ionic-native/camera";
import { CategoriaProvider } from '../providers/categoria';
import { HttpModule } from "@angular/http";
import { AutorProvider } from '../providers/autor';
import { LivroAutorProvider } from '../providers/livro-autor';
import {SignupPage} from "../pages/signup/signup";
import {SigninPage} from "../pages/signin/signin";
import {LogoutPage} from "../pages/logout/logout";
import { LoginProvider } from '../providers/login';
import {UsuarioListPage} from "../pages/Usuario/usuario-list/usuario-list";
import {UsuarioAddPage} from "../pages/Usuario/usuario-add/usuario-add";
import {UsuarioDetailsPage} from "../pages/Usuario/usuario-details/usuario-details";
import {AutorListPage} from "../pages/Autor/autor-list/autor-list";
import {AutorAddPage} from "../pages/Autor/autor-add/autor-add";
import {AutorDetailsPage} from "../pages/Autor/autor-details/autor-details";
import {SobrePage} from "../pages/sobre/sobre";
import {LivroListPage} from "../pages/Livro/livro-list/Livro-list";
import {LivroAddPage} from "../pages/Livro/livro-add/livro-add";
import {LivroDetailsPage} from "../pages/Livro/livro-details/livro-details";
import {UsuarioProvider} from "../providers/usuario";
import {ResetpasswordPage} from "../pages/resetpassword/resetpassword";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "../providers/auth/auth-service";
import { AngularFireModule } from 'angularfire2';
import {FormsModule} from "@angular/forms";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Brightness } from '@ionic-native/brightness';


const firebaseConfig = {
  apiKey: "AIzaSyCUPDh1uZH8aYxWg8eO07W8Tnbq77KcmpM",
  authDomain: "projetoapp-3dd62.firebaseapp.com",
  databaseURL: "https://projetoapp-3dd62.firebaseio.com",
  projectId: "projetoapp-3dd62",
  storageBucket: "projetoapp-3dd62.appspot.com",
  messagingSenderId: "673889262735"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    LivroListPage,
    UsuarioListPage,
    UsuarioAddPage,
    UsuarioDetailsPage,
    UsuarioListPage,
    AutorListPage,
    AutorAddPage,
    AutorDetailsPage,
    AutorListPage,
    SobrePage,
    SignupPage,
    SigninPage,
    ResetpasswordPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    LivroListPage,
    UsuarioListPage,
    UsuarioAddPage,
    UsuarioDetailsPage,
    UsuarioListPage,
    AutorListPage,
    AutorAddPage,
    AutorDetailsPage,
    AutorListPage,
    SobrePage,
    SignupPage,
    SigninPage,
    ResetpasswordPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    Camera,
    CategoriaProvider,
    AutorProvider,
    LivroAutorProvider,
    UsuarioProvider,
    LoginProvider,
    AuthService,
    BarcodeScanner,
    Brightness
  ]
})
export class AppModule {}
