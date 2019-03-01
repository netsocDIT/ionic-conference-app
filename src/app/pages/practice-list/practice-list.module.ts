import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PracticeListPage } from './practice-list';
import { PracticeListPageRoutingModule } from './practice-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PracticeListPageRoutingModule
  ],
  declarations: [PracticeListPage],
})
export class PracticeListModule {}
