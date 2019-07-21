import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwipeSplitPage } from './swipe-split.page';

const routes: Routes = [
  {
    path: '',
    component: SwipeSplitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwipeSplitPage]
})
export class SwipeSplitPageModule {}
