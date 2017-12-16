import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ToastController } from 'ionic-angular';
import {SubirPage} from '../subir/subir';
import {AjustesProvider} from '../../providers/ajustes/ajustes';



@IonicPage()
@Component({
  selector: 'page-fotodia',
  templateUrl: 'fotodia.html',
})
export class FotodiaPage {
  userIs: boolean;

  constructor(public navCtrl: NavController, public modal: ModalController,
              private ap: AjustesProvider,
              private toast: ToastController) {
}


subirfoto(){
  this.ap.cargar_storage_usuario();
  if(this.ap.usuario.nombre.indexOf('agus')>=0 ){
    this.userIs = true;
  }
  if(this.userIs == true){
    let m = this.modal.create(SubirPage);
    m.present();
    console.log("Si podes entrar");
  }else{
    let t = this.toast.create({
    duration: 3000,
    closeButtonText: 'cerrar',
    showCloseButton: true,
    message: 'Ni a gancho papa'
    });
    t.present();
    console.log("No podes entrar por ura")
  }
}
}
