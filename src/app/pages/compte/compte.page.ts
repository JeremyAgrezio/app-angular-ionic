import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BonsPlansService } from '../../services/bonPlans/bons-plans.service';
import { AppartsService } from '../../services/apparts/apparts.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  appartements:{"id":String, "name":String, "area": String, 'price': String, 'furnitures': String, "location": String, "images": [], "description": String, "phone":String, "isFav": boolean}[];
  bonsPlans:{"id":String, "name":String, 'times': String, "location": String, "longitude": Number, "latitude": Number, "images": [], "description": String, "isFav": boolean}[];

  constructor( private router: Router, private bP: BonsPlansService, private apptSrv: AppartsService ) { }

  ngOnInit() {
    this.appartements = this.apptSrv.getApparts();
    this.bonsPlans = this.bP.getBonsPlans();
  }

  appartFavDetails() {
    let navigationExtras: NavigationExtras = {
      state: {
        appartFav: this.appartements
      }
    };
    this.router.navigate(['members/favoris'], navigationExtras);
  }

  bonsPlansFavDetails() {
    let navigationExtras: NavigationExtras = {
      state: {
        bonPlanFav: this.bonsPlans
      }
    };
    this.router.navigate(['members/favoris'], navigationExtras);
  }
}
