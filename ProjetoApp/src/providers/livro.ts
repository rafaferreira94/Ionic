import { Injectable } from '@angular/core';
import {ILivro} from "../interfaces/ILivro";

@Injectable()
export class LivroProvider {
  pesquisa: any;
  items: any;
  private livros: ILivro[] = [];
  constructor() {
    if (this.livros.length == 0)
      this.popularLivros();
  }
  popularLivros() {
    this.livros.push({id : 1, titulo : "Sustentabilidade - O que é - o que não é", destaque: true, ano : 2017, img :
      "assets/capa/livro1.jpg" });
    this.livros.push({id : 2, titulo : "Educação ambiental e Sustentabilidade", destaque: false, ano : 2016, img :
      "assets/capa/livro2.jpg" });
    this.livros.push({id : 3, titulo : "Sustentabilidade urbana & ecossistema", destaque: false, ano : 2015, img :
      "assets/capa/livro3.jpg" });
    this.livros.push({id : 4, titulo : "Meio ambiente e sustentabilidade", destaque: false, ano : 2016, img :
      "assets/capa/livro4.jpg" });
    this.livros.push({id : 5, titulo : "Sustentabilidade em questão", destaque: true, ano : 2016, img :
      "assets/capa/livro5.jpg" });
    this.livros.push({id : 6, titulo : "A sustentabilidade ambiental em suas multiplas faces", destaque: false, ano : 2013, img :
      "assets/capa/livro6.jpg" });
    this.livros.push({id : 7, titulo : "Ecologia e sustentabilidade", destaque: false, ano : 2010, img :
      "assets/capa/livro7.jpg" });
    this.livros.push({id : 8, titulo : "Turismo, sustentabilidade e meio ambiente", destaque: false, ano : 2017, img :
      "assets/capa/livro8.jpg" });
    this.livros.push({id : 9, titulo : "Sustentabilidade, responsabilidade social e meio ambiente", destaque: false, ano : 2012, img :
      "assets/capa/livro9.jpg" });
    this.livros.push({id : 10, titulo : "Meio ambiente - Guia prático e didático", destaque: true, ano : 2015, img :
      "assets/capa/livro10.jpg" });
  }

  getInstancia() : ILivro {
    return { id : 0,
      titulo : "",
      ano : null,
      img : "",
      destaque: false
    };
  }

  private getNextID() : number{
    let nextId = 0;
    if (this.livros.length > 0)
    {
      nextId = Math.max.apply(
        Math,this.livros.map(function(o){return o.id;})
      );
    }
    return ++nextId;
  }

  getLivros() : ILivro[] {
    return this.livros;
  }
  adicionarLivro(livro:ILivro) {
    if (livro.id == 0)
      livro.id = this.getNextID();

    this.livros.push(livro);
  }
  removerLivro(livro:ILivro) {
    let position = this.livros.findIndex((l:ILivro) => {
      return l.id == livro.id;
    });
    this.livros.splice(position, 1);
  }

  alterarLivro(livro:ILivro){
    let position = this.livros.findIndex((l:ILivro) => {
      return l.id == livro.id;
    })
    this.livros[position].titulo = livro.titulo;
    this.livros[position].ano = livro.ano;
    this.livros[position].img = livro.img;
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

