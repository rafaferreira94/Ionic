import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from "../../../providers/livro";
import {ILivro} from "../../../interfaces/ILivro";
import {LivroDetailsPage} from "../livro-details/livro-details";
import {LivroAddPage} from "../livro-add/livro-add";


@Component({
  selector: 'page-livro-list',
  templateUrl: 'livro-list.html'
})

export class LivroListPage {
  selectedItem: any;
  icons: string[];
  items: Array<ILivro>;
  pesquisa : string;
  itemsFilter : Array<ILivro>;
  visibilidade: boolean;

  constructor(public navCtrl: NavController, public navParams:
    NavParams, public livroProvider:LivroProvider) {
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  ionViewWillEnter() {
    this.items = this.livroProvider.getLivros();
    this.itemsFilter = this.items;
  }

  itemTapped(event, item) {
    this.navCtrl.push(LivroDetailsPage, {
      item : item
    });
  }
  novoItem(event, item) {
    this.navCtrl.push(LivroAddPage, { });
  }
  abrirPesquisa (event){
    this.visibilidade = true;
  }
  pesquisar(event){
    this.itemsFilter = this.items.filter((i) => {
      if (i.titulo.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
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
