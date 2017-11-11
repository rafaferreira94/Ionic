import { Injectable } from '@angular/core';
import {IAutor} from "../interfaces/IAutor";

@Injectable()
export class AutorProvider {
  pesquisa: any;
  items: any;
  private autores: IAutor[] = [];
  constructor() {
    if (this.autores.length == 0)
      this.popularAutor();
  }
  popularAutor() {
    this.autores.push({id : 1, nome:"Robson", sobrenome : "Fernandes", img :
      "assets/capa/robson.jpg" });

  }

  getInstancia() : IAutor {
    return { id : 0,
      nome : "",
      sobrenome : "",
      img : ""
    };
  }

  private getNextID() : number{
    let nextId = 0;
    if (this.autores.length > 0)
    {
      nextId = Math.max.apply(
        Math,this.autores.map(function(o){return o.id;})
      );
    }
    return ++nextId;
  }

  getAutor() : IAutor[] {
    return this.autores;
  }
  adicionarAutor(autor:IAutor) {
    if (autor.id == 0)
      autor.id = this.getNextID();

    this.autores.push(autor);
  }
  removerAutor(autor:IAutor) {
    let position = this.autores.findIndex((l:IAutor) => {
      return l.id == autor.id;
    });
    this.autores.splice(position, 1);
  }

  alterarAutor(autor:IAutor){
    let position = this.autores.findIndex((l:IAutor) => {
      return l.id == autor.id;
    })
    this.autores[position].nome = autor.nome;
    this.autores[position].sobrenome = autor.sobrenome;
    this.autores[position].img = autor.img;
  }

  filtrar (pesquisa:string) {
    return this.items.filter((i) => {
      if (i.titulo.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
        return true;
      }
      return false;
    })
  }
}

