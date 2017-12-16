import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IngresarPage, WodPage, ReservaPage, PuntajesPage} from '../pages/index.paginas';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngresarPage,
    WodPage,
    ReservaPage,
    PuntajesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngresarPage,
    WodPage,
    ReservaPage,
    PuntajesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider,
  ]
})
export class AppModule {}
