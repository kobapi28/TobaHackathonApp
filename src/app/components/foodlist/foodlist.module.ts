import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FoodlistComponent } from './foodlist.component';

@NgModule({
  declarations: [
    FoodlistComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FoodlistComponent
  ]
})
export class FoodlistModule { }
