import { Component, OnInit } from '@angular/core';
import { BonsPlansService } from '../../services/bonPlans/bons-plans.service';
import { AppartsService } from '../../services/apparts/apparts.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage{

  appartements:{"id":String, "name":String, "area": String, 'price': String, 'furnitures': String, "location": String, "images": [], "description": String, "phone":String, "isFav": boolean}[];
  bonsPlans:{"id":String, "name":String, 'times': String, "location": String, "longitude": Number, "latitude": Number, "images": [], "description": String, "isFav": boolean}[];

  constructor( private bP: BonsPlansService, private apptSrv: AppartsService ) {}

  ngOnInit() {
    this.appartements = this.apptSrv.getApparts();
    this.bonsPlans = this.bP.getBonsPlans();
  }
  
  latitude = 44.841225;
  longitude = -0.5800364;
  mapType = 'terrain';
  zoom = 14;
  
}