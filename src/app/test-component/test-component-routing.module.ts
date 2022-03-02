import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponentPage } from './test-component.page';

const routes: Routes = [
  {
    path: '',
    component: TestComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestComponentPageRoutingModule {}
