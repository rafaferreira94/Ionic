import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Brightness } from '@ionic-native/brightness';

/**
 * Generated class for the SobrePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  isOn: boolean = false;

  constructor( public navCtrl: NavController, public navParams: NavParams,
               private barcodeScanner: BarcodeScanner,
               private brightness: Brightness) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }
  LeitorCod(){
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
    }, (err) => {
      // An error occurred
    });
  }
  brilhoMais(){
    let brightnessValue: number = 1;
    this.brightness.setBrightness(brightnessValue);
  }

  brilhoMenos(){
    let brightnessValue: number = 0;
    this.brightness.setBrightness(brightnessValue);
  }
}
