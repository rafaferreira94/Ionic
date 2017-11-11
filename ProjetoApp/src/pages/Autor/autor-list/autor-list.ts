import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IAutor} from "../../../interfaces/IAutor";
import {AutorProvider} from "../../../providers/autor";
import {AutorDetailsPage} from "../autor-details/autor-details";
import {AutorAddPage} from "../autor-add/autor-add";

@IonicPage()
@Component({
  selector: 'page-autor-list',
  templateUrl: 'autor-list.html',
})
export class AutorListPage {
  selectedItem: any;
  icons: string[];
  items: Array<IAutor>;
  pesquisa : string;
  itemsFilter : Array<IAutor>;
  visibilidade: boolean;

  constructor(public navCtrl: NavController, public navParams:
    NavParams, public autorProvider:AutorProvider) {
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  ionViewWillEnter() {
    this.items = this.autorProvider.getAutor();
    this.itemsFilter = this.items;
  }

  itemTapped(event, item) {
    this.navCtrl.push(AutorDetailsPage, {
      item : item
    });
  }
  novoItem(event, item) {
    this.navCtrl.push(AutorAddPage, { });
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
