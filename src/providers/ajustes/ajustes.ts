import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Platform} from 'ionic-angular';
@Injectable()
export class AjustesProvider {

  record : {
    marca : 0
  }

  constructor(private storage: Storage,
              private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage_record(){
    let promesa  = new Promise((resolve, reject) => {

      if(this.platform.is("cordova")){
        //Dispositivo
        this.storage.ready().then(()=>{
          this.storage.get("record")
          .then(record=>{
              this.record = record;
            resolve();
          });



        });

      }
      else{
      //Escritorio
      if(localStorage.getItem("record")){
        this.record = JSON.parse(localStorage.getItem("record"));
      }
      resolve();
      }

    });

    return promesa;

  }

  guardar_storage_record(){
    if(this.platform.is("cordova")){
      //Dispositivo

      this.storage.ready().then(()=>{

      this.storage.set("record", this.record);

  });
    }
    else{
    //Escritorio
    localStorage.setItem("record", JSON.stringify(this.record));
    }
  }


}
