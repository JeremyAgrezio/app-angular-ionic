import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'apparts', loadChildren: '../pages/apparts/apparts.module#AppartsPageModule' },
  { path: 'plan', loadChildren: '../pages/plan/plan.module#PlanPageModule' },
  { path: 'compte', loadChildren: '../pages/compte/compte.module#ComptePageModule' },
  { path: 'favoris', loadChildren: '../pages/favoris/favoris.module#FavorisPageModule' },
  { path: 'details', loadChildren: '../pages/details/details.module#DetailsPageModule' },

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
