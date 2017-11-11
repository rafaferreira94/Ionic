import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IUsuario} from "../../../interfaces/IUsuario";
import {UsuarioProvider} from "../../../providers/usuario";
import {UsuarioDetailsPage} from "../usuario-details/usuario-details";
import {UsuarioAddPage} from "../usuario-add/usuario-add";


@IonicPage()
@Component({
  selector: 'page-usuario-list',
  templateUrl: 'usuario-list.html',
})
export class UsuarioListPage {
  selectedItem: any;
  icons: string[];
  items: Array<IUsuario>;
  pesquisa : string;
  itemsFilter : Array<IUsuario>;
  visibilidade: boolean;

  constructor(public navCtrl: NavController, public navParams:
    NavParams, public usuarioProvider:UsuarioProvider) {
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  ionViewWillEnter() {
    this.items = this.usuarioProvider.getUsuario();
    this.itemsFilter = this.items;
  }

  itemTapped(event, item) {
    this.navCtrl.push(UsuarioDetailsPage, {
      item : item
    });
  }
  novoItem(event, item) {
    this.navCtrl.push(UsuarioAddPage, { });
  }
  abrirPesquisa (event){
    this.visibilidade = true;
  }
  pesquisar(event){
    this.itemsFilter = this.items.filter((i) => {
      if (i.nome.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
        return true;
      }
      return false;
    })
  }
  cancelarPesquisa(){
    this.visibilidade = false;
    this.pesquisa = "";
    this.pesquisar(null);
  }
}
