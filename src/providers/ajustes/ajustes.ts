import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Platform} from 'ionic-angular';
@Injectable()
export class AjustesProvider {

  usuario = {
    nombre : ''
  }
  ingresar ={
    b: true
  }


  bs = {
    marca : 0
  }
  fs = {
    marca : 0
  }
  ohs = {
    marca : 0
  }
  benchp = {
    marca : 0
  }
  dl ={
    marca: 0
  }
  pullup = {
    marca : 0
  }
  pushp = {
    marca : 0
  }
  snatch = {
    marca : 0
  }
  clean = {
    marca : 0
  }
  cleanj = {
    marca : 0
  }
  sjerk = {
    marca : 0
  }
  pjerk = {
    marca : 0
  }
  adambrown = {
    marca : 0
  }
  adrian = {
    marca : 0
  }
  alexander = {
    marca : 0
  }
  amanda = {
    marca : 0
  }
  angie = {
    marca : 0
  }
  annie = {
    marca : 0
  }
  arnie = {
    marca : 0
  }
  barbara = {
    marca : 0
  }
  blake = {
    marca : 0
  }



  constructor(private storage: Storage,
              private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage_bs(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("bs")
          .then(bs=>{
              this.bs = bs;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("bs")){
        this.bs = JSON.parse(localStorage.getItem("bs"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_bs(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("bs", this.bs);
  });
    }
    else{
    localStorage.setItem("bs", JSON.stringify(this.bs));
    }
  }



  cargar_storage_fs(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("fs")
          .then(fs=>{
              this.fs = fs;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("fs")){
        this.fs = JSON.parse(localStorage.getItem("fs"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_fs(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("fs", this.fs);
  });
    }
    else{
    localStorage.setItem("fs", JSON.stringify(this.fs));
    }
  }



  cargar_storage_ohs(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("ohs")
          .then(ohs=>{
              this.ohs = ohs;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("ohs")){
        this.ohs = JSON.parse(localStorage.getItem("ohs"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_ohs(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("ohs", this.ohs);
  });
    }
    else{
    localStorage.setItem("ohs", JSON.stringify(this.ohs));
    }
  }



  cargar_storage_benchp(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("benchp")
          .then(benchp=>{
              this.benchp = benchp;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("benchp")){
        this.benchp = JSON.parse(localStorage.getItem("benchp"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_benchp(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("benchp", this.benchp);
  });
    }
    else{
    localStorage.setItem("benchp", JSON.stringify(this.benchp));
    }
  }



  cargar_storage_dl(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("dl")
          .then(dl=>{
              this.dl = dl;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("dl")){
        this.dl = JSON.parse(localStorage.getItem("dl"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_dl(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("dl", this.dl);
  });
    }
    else{
    localStorage.setItem("dl", JSON.stringify(this.dl));
    }
  }

  cargar_storage_pullup(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("pullup")
          .then(pullup=>{
              this.pullup = pullup;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("pullup")){
        this.pullup = JSON.parse(localStorage.getItem("pullup"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_pullup(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("bs", this.pullup);
  });
    }
    else{
    localStorage.setItem("pullup", JSON.stringify(this.pullup));
    }
  }


  cargar_storage_pushp(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("pushp")
          .then(pushp=>{
              this.pushp = pushp;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("pushp")){
        this.pushp = JSON.parse(localStorage.getItem("pushp"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_pushp(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("pushp", this.pushp);
  });
    }
    else{
    localStorage.setItem("pushp", JSON.stringify(this.pushp));
    }
  }


  cargar_storage_snatch(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("snatch")
          .then(snatch=>{
              this.snatch = snatch;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("snatch")){
        this.snatch = JSON.parse(localStorage.getItem("snatch"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_snatch(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("snatch", this.snatch);
  });
    }
    else{
    localStorage.setItem("snatch", JSON.stringify(this.snatch));
    }
  }



  cargar_storage_clean(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("clean")
          .then(clean=>{
              this.clean = clean;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("clean")){
        this.clean = JSON.parse(localStorage.getItem("clean"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_clean(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("clean", this.clean);
  });
    }
    else{
    localStorage.setItem("clean", JSON.stringify(this.clean));
    }
  }


  cargar_storage_cleanj(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("cleanj")
          .then(cleanj=>{
              this.cleanj = cleanj;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("cleanj")){
        this.cleanj = JSON.parse(localStorage.getItem("cleanj"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_cleanj(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("cleanj", this.cleanj);
  });
    }
    else{
    localStorage.setItem("cleanj", JSON.stringify(this.cleanj));
    }
  }



  cargar_storage_sjerk(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("sjerk")
          .then(sjerk=>{
              this.sjerk = sjerk;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("sjerk")){
        this.sjerk = JSON.parse(localStorage.getItem("sjerk"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_sjerk(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("sjerk", this.sjerk);
  });
    }
    else{
    localStorage.setItem("sjerk", JSON.stringify(this.sjerk));
    }
  }



  cargar_storage_pjerk(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("pjerk")
          .then(pjerk=>{
              this.pjerk = pjerk;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("pjerk")){
        this.pjerk = JSON.parse(localStorage.getItem("pjerk"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_pjerk(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("pjerk", this.pjerk);
  });
    }
    else{
    localStorage.setItem("pjerk", JSON.stringify(this.pjerk));
    }
  }


  cargar_storage_adambrown(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("adambrown")
          .then(adambrown=>{
              this.adambrown = adambrown;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("adambrown")){
        this.adambrown = JSON.parse(localStorage.getItem("adambrown"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_adambrown(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("adambrown", this.adambrown);
  });
    }
    else{
    localStorage.setItem("adambrown", JSON.stringify(this.adambrown));
    }
  }

  cargar_storage_adrian(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("adrian")
          .then(adrian=>{
              this.adrian = adrian;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("adrian")){
        this.adrian = JSON.parse(localStorage.getItem("adrian"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_adrian(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("adrian", this.adrian);
  });
    }
    else{
    localStorage.setItem("adrian", JSON.stringify(this.adrian));
    }
  }

  cargar_storage_alexander(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("alexander")
          .then(alexander=>{
              this.alexander = alexander;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("alexander")){
        this.alexander = JSON.parse(localStorage.getItem("alexander"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_alexander(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("alexander", this.alexander);
  });
    }
    else{
    localStorage.setItem("alexander", JSON.stringify(this.alexander));
    }
  }


  cargar_storage_amanda(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("amanda")
          .then(amanda=>{
              this.amanda = amanda;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("amanda")){
        this.amanda = JSON.parse(localStorage.getItem("amanda"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_amanda(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("amanda", this.amanda);
  });
    }
    else{
    localStorage.setItem("amanda", JSON.stringify(this.amanda));
    }
  }


  cargar_storage_angie(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("angie")
          .then(angie=>{
              this.angie = angie;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("angie")){
        this.angie = JSON.parse(localStorage.getItem("angie"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_angie(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("angie", this.angie);
  });
    }
    else{
    localStorage.setItem("angie", JSON.stringify(this.angie));
    }
  }


  cargar_storage_annie(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("annie")
          .then(annie=>{
              this.annie = annie;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("annie")){
        this.annie = JSON.parse(localStorage.getItem("annie"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_annie(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("annie", this.annie);
  });
    }
    else{
    localStorage.setItem("annie", JSON.stringify(this.annie));
    }
  }

  cargar_storage_arnie(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("arnie")
          .then(arnie=>{
              this.arnie = arnie;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("arnie")){
        this.arnie = JSON.parse(localStorage.getItem("arnie"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_arnie(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("arnie", this.arnie);
  });
    }
    else{
    localStorage.setItem("arnie", JSON.stringify(this.arnie));
    }
  }

  cargar_storage_barbara(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("barbara")
          .then(barbara=>{
              this.barbara = barbara;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("barbara")){
        this.barbara = JSON.parse(localStorage.getItem("barbara"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_barbara(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("barbara", this.barbara);
  });
    }
    else{
    localStorage.setItem("barbara", JSON.stringify(this.barbara));
    }
  }

  cargar_storage_blake(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("blake")
          .then(blake=>{
              this.blake = blake;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("blake")){
        this.blake = JSON.parse(localStorage.getItem("blake"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_blake(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("blake", this.blake);
  });
    }
    else{
    localStorage.setItem("blake", JSON.stringify(this.blake));
    }
  }





  cargar_storage_usuario(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("usuario")
          .then(usuario=>{
              this.usuario = usuario;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("usuario")){
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_usuario(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("usuario", this.usuario);
  });
    }
    else{
    localStorage.setItem("usuario", JSON.stringify(this.usuario));
    }
  }

  cargar_storage_ingresar(){
    let promesa  = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("ingresar")
          .then(ingresar=>{
              this.ingresar = ingresar;
            resolve();
          });
        });
      }
      else{
      if(localStorage.getItem("ingresar")){
        this.ingresar = JSON.parse(localStorage.getItem("ingresar"));
      }
      resolve();
      }
    });
    return promesa;
  }

  guardar_storage_ingresar(){
    if(this.platform.is("cordova")){
      this.storage.ready().then(()=>{
      this.storage.set("ingresar", this.ingresar);
  });
    }
    else{
    localStorage.setItem("ingresar", JSON.stringify(this.ingresar));
    }
  }


}
