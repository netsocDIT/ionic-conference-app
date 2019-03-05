import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeDetailPage } from './practice-detail';
import { PracticeDetailPageRoutingModule } from './practice-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PracticeDetailPageRoutingModule
  ],
  declarations: [
    PracticeDetailPage,
  ]
})
export class PracticeDetailModule { }
