import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishMetaPage } from './publish-meta';

@NgModule({
  declarations: [
    PublishMetaPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishMetaPage),
  ],
})
export class PublishMetaPageModule {}
