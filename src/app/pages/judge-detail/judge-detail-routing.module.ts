import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JudgeDetailPage } from './judge-detail';

const routes: Routes = [
  {
    path: '',
    component: JudgeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JudgeDetailPageRoutingModule { }
