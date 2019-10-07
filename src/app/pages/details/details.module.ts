import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';

import {SlidesModule} from '../../components/slides/slides.module'

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SlidesModule,
    AgmCoreModule.forRoot({
      apiKey: 'MAPS API KEY HERE'
    })
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
