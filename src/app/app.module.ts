import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IngresarPage, WodPage, ReservaPage, PuntajesPage, FotoatletaPage, FotodiaPage, SubirPage} from '../pages/index.paginas';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyArMatdFZOt2pTtATri-iRyXhU8caoJ3go",
  authDomain: "vo2max-152ca.firebaseapp.com",
  databaseURL: "https://vo2max-152ca.firebaseio.com",
  projectId: "vo2max-152ca",
  storageBucket: "vo2max-152ca.appspot.com",
  messagingSenderId: "974806729642"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngresarPage,
    WodPage,
    ReservaPage,
    PuntajesPage,
    FotoatletaPage,
    FotodiaPage,
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngresarPage,
    WodPage,
    ReservaPage,
    PuntajesPage,
    FotoatletaPage,
    FotodiaPage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
