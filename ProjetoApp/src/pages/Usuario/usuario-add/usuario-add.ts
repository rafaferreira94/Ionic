import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IUsuario} from "../../../interfaces/IUsuario";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {UsuarioProvider} from "../../../providers/usuario";

@IonicPage()
@Component({
  selector: 'page-usuario-add',
  templateUrl: 'usuario-add.html',
})
export class UsuarioAddPage {

  usuario:IUsuario;

  modoEdicao : boolean;

  imagemUploaded : boolean;

  constructor(public navCtrl: NavController, public navParams:
    NavParams, public usuarioProvider:UsuarioProvider, private camera: Camera) {
    this.usuario = navParams.get("item");

    if (this.usuario == null) {
      this.modoEdicao = false;
      this.usuario = this.usuarioProvider.getInstancia();
    }
    else this.modoEdicao = true;

    this.imagemUploaded = (this.usuario.img != "" && this.usuario.img != null);
  }

  salvar(evento){
    if (!this.modoEdicao)
      this.usuarioProvider.adicionarUsuario(this.usuario);
    else
      this.usuarioProvider.alterarUsuario(this.usuario);

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
      this.usuario.img = base64Image;
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
      this.usuario.img = base64Image; this.imagemUploaded = true;
    }, (err) => {

    });
  }

  cancelarImagem()
  { this.usuario.img = "";
    this.imagemUploaded = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroAddPage');
  }

}
