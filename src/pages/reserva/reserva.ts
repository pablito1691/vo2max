import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {


  numeros :any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i<100; i++){
      this.numeros.push(i*3);
    }



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaPage');
    console.log(this.numeros);
  }

}
