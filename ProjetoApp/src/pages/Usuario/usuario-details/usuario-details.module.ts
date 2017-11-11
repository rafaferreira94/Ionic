import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioDetailsPage } from './usuario-details';

@NgModule({
  declarations: [
    UsuarioDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioDetailsPage),
  ],
})
export class UsuarioDetailsPageModule {}
