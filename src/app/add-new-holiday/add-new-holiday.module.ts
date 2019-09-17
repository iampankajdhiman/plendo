import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddNewHolidayPage } from './add-new-holiday.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewHolidayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewHolidayPage]
})
export class AddNewHolidayPageModule {}
