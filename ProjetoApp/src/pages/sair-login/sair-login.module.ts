import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SairLoginPage } from './sair-login';

@NgModule({
  declarations: [
    SairLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(SairLoginPage),
  ],
})
export class SairLoginPageModule {}
