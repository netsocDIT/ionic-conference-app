import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeDetailPage } from './practice-detail';

const routes: Routes = [
  {
    path: '',
    component: PracticeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeDetailPageRoutingModule { }
