import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AjustesProvider} from '../../providers/ajustes/ajustes';

@IonicPage()
@Component({
  selector: 'page-puntajes',
  templateUrl: 'puntajes.html',
})

export class PuntajesPage {
power: boolean = false;
weight: boolean = false;
wod: boolean = false;
nombre: string = "";
bs : any = 0;
fs : any = 0;
ohs : any = 0;
benchp : any = 0;
dl : any = 0;
pullup : any = 0;
pushp : any = 0;
snatch : any = 0;
clean : any = 0;
cleanj : any = 0;
sjerk : any = 0;
pjerk : any = 0;
adambrown : any = 0;
adrian : any = 0;
alexander : any = 0;
amanda : any = 0;
angie : any = 0;
annie : any = 0;
arnie : any = 0;
barbara : any = 0;
blake : any = 0;



  constructor(public navCtrl: NavController,
              public al: AlertController,
              private ap : AjustesProvider) {
                this.ap.cargar_storage_bs();
                this.ap.cargar_storage_fs();
                this.ap.cargar_storage_ohs();
                this.ap.cargar_storage_benchp();
                this.ap.cargar_storage_dl();
                this.ap.cargar_storage_pullup();
                this.ap.cargar_storage_pushp();
                this.ap.cargar_storage_snatch();
                this.ap.cargar_storage_clean();
                this.ap.cargar_storage_cleanj();
                this.ap.cargar_storage_sjerk();
                this.ap.cargar_storage_pjerk();
                this.ap.cargar_storage_adambrown();
                this.ap.cargar_storage_adrian();
                this.ap.cargar_storage_alexander();
                this.ap.cargar_storage_amanda();
                this.ap.cargar_storage_angie();
                this.ap.cargar_storage_annie();
                this.ap.cargar_storage_arnie();
                this.ap.cargar_storage_barbara();
                this.ap.cargar_storage_blake();
                this.bs = this.ap.bs.marca;
                this.fs = this.ap.fs.marca;
                this.ohs = this.ap.ohs.marca;
                this.benchp = this.ap.benchp.marca;
                this.dl = this.ap.dl.marca;
                this.pullup = this.ap.pullup.marca;
                this.pushp = this.ap.pushp.marca;
                this.snatch = this.ap.snatch.marca;
                this.clean = this.ap.clean.marca;
                this.cleanj = this.ap.cleanj.marca;
                this.sjerk = this.ap.sjerk.marca;
                this.pjerk = this.ap.pjerk.marca;
                this.adambrown = this.ap.adambrown.marca;
                this.adrian = this.ap.adrian.marca;
                this.alexander = this.ap.alexander.marca;
                this.amanda = this.ap.amanda.marca;
                this.angie = this.ap.angie.marca;
                this.annie = this.ap.annie.marca;
                this.arnie = this.ap.arnie.marca;
                this.barbara = this.ap.barbara.marca;
                this.blake = this.ap.blake.marca;
}



  cambiar(tipo : string){
    if(tipo == "po"){
      if(this.power == false){
        this.power = true;
      }else {
        this.power = false;
      }

    }
    if(tipo == "we"){
      if(this.weight == false){
        this.weight = true;
      }else {
        this.weight = false;
      }

    }
    if(tipo == "wo"){
      if(this.wod == false){
        this.wod = true;
      }else {
        this.wod = false;
      }

    }
  }
alert(titulo : string, nombre : string){
  let alert = this.al.create();
  alert.setTitle(titulo);
  alert.setMessage("Ingresar el nuevo Record");
  alert.addInput(
        {
          name: 'record',
          placeholder: 'record',

        }
      )
  alert.addButton({
    text: 'Cancel',
    handler: data => {
            console.log('Aprete Cancel');
          }
});
  alert.addButton({
    text: 'OK',
    handler: data => {
            switch (nombre){
              case 'bs':
                this.ap.bs.marca = data.record;
                this.ap.guardar_storage_bs();
                break;
              case 'fs':
                this.ap.fs.marca = data.record;
                this.ap.guardar_storage_fs();
                break;
              case 'ohs':
                this.ap.ohs.marca = data.record;
                this.ap.guardar_storage_ohs();
                break;
              case 'benchp':
                this.ap.benchp.marca = data.record;
                this.ap.guardar_storage_benchp();
                break;
              case 'pushp':
                this.ap.pushp.marca = data.record;
                this.ap.guardar_storage_pushp();
                break;
              case 'dl':
                this.ap.dl.marca = data.record;
                this.ap.guardar_storage_dl();
                break;
              case 'pullup':
                this.ap.pullup.marca = data.record;
                this.ap.guardar_storage_pullup();
                break;
              case 'snatch':
                this.ap.snatch.marca = data.record;
                this.ap.guardar_storage_snatch();
                break;
              case 'clean':
                this.ap.clean.marca = data.record;
                this.ap.guardar_storage_clean();
                break;
              case 'cleanj':
                this.ap.cleanj.marca = data.record;
                this.ap.guardar_storage_cleanj();
                break;
              case 'sjerk':
                this.ap.sjerk.marca = data.record;
                this.ap.guardar_storage_sjerk();
                break;
              case 'pjerk':
                this.ap.pjerk.marca = data.record;
                this.ap.guardar_storage_pjerk();
                break;
              case 'adambrown':
                this.ap.adambrown.marca = data.record;
                this.ap.guardar_storage_adambrown();
                break;
              case 'adrian':
                this.ap.adrian.marca = data.record;
                this.ap.guardar_storage_adrian();
                break;
              case 'alexander':
                this.ap.alexander.marca = data.record;
                this.ap.guardar_storage_alexander();
                break;
              case 'amanda':
                this.ap.amanda.marca = data.record;
                this.ap.guardar_storage_amanda();
                break;
              case 'angie':
                this.ap.angie.marca = data.record;
                this.ap.guardar_storage_angie();
                break;
              case 'annie':
                this.ap.annie.marca = data.record;
                this.ap.guardar_storage_annie();
                break;
              case 'arnie':
                this.ap.arnie.marca = data.record;
                this.ap.guardar_storage_arnie();
                break;
              case 'barbara':
                this.ap.barbara.marca = data.record;
                this.ap.guardar_storage_barbara();
                break;
              case 'blake':
                this.ap.blake.marca = data.record;
                this.ap.guardar_storage_blake();
                break;
            }
        }
});
  alert.present();
}
}
