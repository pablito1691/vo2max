import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WodPage } from './wod';

@NgModule({
  declarations: [
    WodPage,
  ],
  imports: [
    IonicPageModule.forChild(WodPage),
  ],
})
export class WodPageModule {}
