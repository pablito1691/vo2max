import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  constructor(public navCtrl: NavController, private view: ViewController) {
  }

salir(){
  this.view.dismiss();
}

}
