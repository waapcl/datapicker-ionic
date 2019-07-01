import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { DataPickerPage } from './data-picker.page';

const routes: Routes = [
  {
    path: '',
    component: DataPickerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ionic4DatepickerModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DataPickerPage]
})
export class DataPickerPageModule {}
