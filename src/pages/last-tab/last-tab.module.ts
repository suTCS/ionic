import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastTabPage } from './last-tab';

@NgModule({
  declarations: [
    LastTabPage,
  ],
  imports: [
    IonicPageModule.forChild(LastTabPage),
  ],
})
export class LastTabPageModule {}
