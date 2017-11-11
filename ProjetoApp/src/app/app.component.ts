import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import {LoginProvider} from "../providers/login";
import {LivroListPage} from "../pages/Livro/livro-list/Livro-list";
import {SigninPage} from "../pages/signin/signin";
import {SobrePage} from "../pages/sobre/sobre";
import {UsuarioListPage} from "../pages/Usuario/usuario-list/usuario-list";
import {AutorListPage} from "../pages/Autor/autor-list/autor-list";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  signinPage : any = SigninPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public loginProvider: LoginProvider,afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = SigninPage;
      }
    });

    platform.ready().then(() => {
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

    firebase.auth().onAuthStateChanged(user => {
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
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Livros', component: LivroListPage },
      { title: 'Sair', component: null },
    ];
  }

  getMenuAnonimo() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Livro', component: LivroListPage },
      { title: 'Autor', component: AutorListPage },
      { title: 'Usuario', component: UsuarioListPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'SignIn', component: SigninPage },
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
}
