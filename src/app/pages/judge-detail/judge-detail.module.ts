import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JudgeDetailPage } from './judge-detail';
import { JudgeDetailPageRoutingModule } from './judge-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    JudgeDetailPageRoutingModule
  ],
  declarations: [
    JudgeDetailPage,
  ]
})
export class JudgeDetailModule { }
