import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BonsPlansService } from '../../services/bonPlans/bons-plans.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  bonsPlans:{"id":String, "name":String, 'times': String, "location": String, "longitude": Number, "latitude": Number, "images": [], "description": String, "isFav": boolean}[];

  constructor( private router: Router, private bonsPlansService: BonsPlansService) {}

  ngOnInit() {
    this.bonsPlans = this.bonsPlansService.getBonsPlans();
  }

  bonsPlansDetails(bonsPlanDetail:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        bonPlan: bonsPlanDetail
      }
    };
    this.router.navigate(['members/details'], navigationExtras);
  }
}
