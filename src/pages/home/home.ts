import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {IngresarPage} from '../ingresar/ingresar';
import {WodPage} from '../wod/wod';
import {ReservaPage} from '../reserva/reserva';
import {PuntajesPage} from '../puntajes/puntajes';
import {FotodiaPage} from '../fotodia/fotodia';
import {FotoatletaPage} from '../fotoatleta/fotoatleta';
import {AjustesProvider} from '../../providers/ajustes/ajustes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ingresar : any = IngresarPage;
  wod: any = WodPage;
  reserva : any = ReservaPage;
  puntaje : any = PuntajesPage;
  fotoatleta : any = FotoatletaPage;
  fotodia : any = FotodiaPage;
  ba : boolean = true;
  constructor(public navCtrl: NavController,
              private modal: ModalController,
              private ap: AjustesProvider) {
                this.ap.cargar_storage_ingresar();
                this.ba = this.ap.ingresar.b;
                this.ap.cargar_storage_usuario();
  }

  irmod(pagina : any){
    let modal = this.modal.create(pagina).present();
}
  ir(pagina : any){
    this.navCtrl.push(pagina);
  }

}
