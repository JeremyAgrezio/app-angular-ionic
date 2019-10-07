import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanPage } from './plan.page';

const routes: Routes = [
  {
    path: '',
    component: PlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'MAPS API KEY HERE'
    })
  ],
  declarations: [PlanPage]
})
export class PlanPageModule {}
