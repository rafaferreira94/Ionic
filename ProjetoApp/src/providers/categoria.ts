import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaProvider {

  apiUrl = 'http://localhost:3014/api/v1';

  constructor(public http: Http) {
    //console.log('Hello CategoriaProvider Provider');
  }

  getCategorias() {

    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'v1/categorias')
        .map(res => res.json())
        .subscribe(dados => {
          resolve(dados);
        }, erro => {
          console.log("Deu erro" + erro);

        });
    });
  }
}
