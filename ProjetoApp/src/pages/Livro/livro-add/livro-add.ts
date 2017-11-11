import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {LivroProvider} from "../../../providers/livro";
import {ILivro} from "../../../interfaces/ILivro";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {AutorProvider} from "../../../providers/autor";
import {LivroAutorProvider} from "../../../providers/livro-autor";


@IonicPage()
@Component({
  selector: 'page-livro-add',
  templateUrl: 'livro-add.html',
})
export class LivroAddPage {

  livro:ILivro;

  modoEdicao : boolean;

  imagemUploaded : boolean;

  constructor(public navCtrl: NavController, public navParams:
    NavParams, public livroProvider:LivroProvider, private camera: Camera,
              public alertCtrl: AlertController, public autorProvider:AutorProvider,
              public livroAutorProvider:LivroAutorProvider) {
    this.livro = navParams.get("item");

    if (this.livro == null) {
      this.modoEdicao = false;
      this.livro = this.livroProvider.getInstancia();
    }
    else this.modoEdicao = true;

this.imagemUploaded = (this.livro.img != "" && this.livro.img != null);
  }

  salvar($event){
    if (!this.modoEdicao)
    this.livroProvider.adicionarLivro(this.livro);
    else
      this.livroProvider.alterarLivro(this.livro);

    this.navCtrl.pop();
  }

  cancelar() {
    this.navCtrl.pop();
  }

tirarFoto()
{ const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
  let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.livro.img = base64Image;
  this.imagemUploaded = true;
  }, (err) => {

});
}

escolherImagem() {
    const options: CameraOptions = {
      quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: false
    }

      this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.livro.img = base64Image; this.imagemUploaded = true;
      }, (err) => {

      });
  }

cancelarImagem()
{ this.livro.img = "";
this.imagemUploaded = false;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroAddPage');
  }

  gerenciarAutores() {
    let autores = this.autorProvider.getAutor();
    let livrosAutores =
      this.livroAutorProvider.getLivrosAutores(this.livro);
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os Autores:');
    for (let i=0; i < autores.length; i++) {
//livrosAutores
      let possuiAutor:boolean = livrosAutores.some((a) => {
        if (a.autorId == autores[i].id) {
          return true;
        }
        return false;
      });

      alert.addInput({
        type: 'checkbox',
        label: autores[i].nome,
        value: autores[i].id.toString(),
        checked: possuiAutor
      });
    }
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        this.livroAutorProvider.adicionarLivroAutor(this.livro, data);
      }
    });
    alert.present();
  }

}
