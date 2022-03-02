import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestComponentPageRoutingModule } from './test-component-routing.module';

import { TestComponentPage } from './test-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestComponentPageRoutingModule
  ],
  declarations: [TestComponentPage]
})
export class TestComponentPageModule {}
