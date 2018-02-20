import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddingDetailPage } from './adding-detail';

@NgModule({
  declarations: [
    AddingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AddingDetailPage),
  ],
})
export class AddingDetailPageModule {}
