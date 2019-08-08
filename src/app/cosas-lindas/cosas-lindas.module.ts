import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CosasLindasPage } from './cosas-lindas.page';

const routes: Routes = [
  {
    path: '',
    component: CosasLindasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CosasLindasPage]
})
export class CosasLindasPageModule {}
