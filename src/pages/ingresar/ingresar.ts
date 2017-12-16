import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {AjustesProvider} from '../../providers/ajustes/ajustes';

@IonicPage()
@Component({
  selector: 'page-ingresar',
  templateUrl: 'ingresar.html',
})
export class IngresarPage {
  us : string = "";
  ing : boolean = false;
  user: string = "";

  constructor(public navCtrl: NavController, public view: ViewController, private ap : AjustesProvider) {
  }


ingresar(){
  this.ing = false;
  this.ap.ingresar.b = this.ing;
  this.ap.guardar_storage_ingresar();
  this.ap.usuario.nombre = this.user;
  this.ap.guardar_storage_usuario();
  this.view.dismiss();
}
}
