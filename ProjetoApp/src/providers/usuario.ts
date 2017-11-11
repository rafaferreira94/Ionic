import { Injectable } from '@angular/core';
import {IUsuario} from "../interfaces/IUsuario";

@Injectable()
export class UsuarioProvider {
  pesquisa: any;
  items: any;
  private usuarios: IUsuario[] = [];
  constructor() {
    if (this.usuarios.length == 0)
      this.popularUsuario();
  }
  popularUsuario() {
    this.usuarios.push({id : 1, nome:"Rafael", cpf : "435.615.388-00", img :
      "assets/capa/rafael.jpg" });
    this.usuarios.push({id : 2, nome:"Diego", cpf : "", img :
      "assets/capa/diego.jpg" });
    this.usuarios.push({id : 3, nome:"Victor", cpf : "", img :
      "assets/capa/victor.jpg" });
  }

  getInstancia() : IUsuario {
    return { id : 0,
      nome : "",
      cpf : "",
      img : ""
    };
  }

  private getNextID() : number{
    let nextId = 0;
    if (this.usuarios.length > 0)
    {
      nextId = Math.max.apply(
        Math,this.usuarios.map(function(o){return o.id;})
      );
    }
    return ++nextId;
  }

  getUsuario() : IUsuario[] {
    return this.usuarios;
  }
  adicionarUsuario(usuario:IUsuario) {
    if (usuario.id == 0)
      usuario.id = this.getNextID();

    this.usuarios.push(usuario);
  }
  removerUsuario(usuario:IUsuario) {
    let position = this.usuarios.findIndex((l:IUsuario) => {
      return l.id == usuario.id;
    });
    this.usuarios.splice(position, 1);
  }

  alterarUsuario(usuario:IUsuario){
    let position = this.usuarios.findIndex((l:IUsuario) => {
      return l.id == usuario.id;
    })
    this.usuarios[position].nome = usuario.nome;
    this.usuarios[position].cpf = usuario.cpf;
    this.usuarios[position].img = usuario.img;
  }

  filtrar (pesquisa:string) {
    return this.items.filter((i) => {
      if (i.nome.toUpperCase().indexOf(this.pesquisa.toUpperCase()) >= 0) {
        return true;
      }
      return false;
    })
  }
}

