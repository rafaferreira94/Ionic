import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ILivro} from "../../interfaces/ILivro";
import {LivroProvider} from "../../providers/livro";
import {LivroDetailsPage} from "../Livro/livro-details/livro-details";
import {LivroAddPage} from "../Livro/livro-add/livro-add";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  pesquisar(event){
    this.itemsFilter = this.items.filter((i) => {
      if (i.destaque) {
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
  abrirPesquisa (event){
    this.visibilidade = true;
  }

  novoItem(event, item) {
    this.navCtrl.push(LivroAddPage, { });
  }
  itemTapped(event, item) {
    this.navCtrl.push(LivroDetailsPage, {
      item : item
    });


  }

  ionViewWillEnter() {
    this.items = this.livroProvider.getLivros();
    this.itemsFilter = this.items;

    this.pesquisar("");
  }




}
