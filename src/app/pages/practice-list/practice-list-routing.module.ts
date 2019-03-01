import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeListPage } from './practice-list';
const routes: Routes = [
  {
    path: '',
    component: PracticeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeListPageRoutingModule {}
