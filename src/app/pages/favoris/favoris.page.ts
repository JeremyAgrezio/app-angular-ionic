import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  favAppart: any;
  favBonsPlans: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        if(this.router.getCurrentNavigation().extras.state.appartFav){
          this.favAppart = this.router.getCurrentNavigation().extras.state.appartFav;
        }else{
          this.favBonsPlans = this.router.getCurrentNavigation().extras.state.bonPlanFav;
        } 
      };
    });
  }

  ngOnInit() {
  }

  bonPlanDetails(bonsPlanDetail:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        bonPlan: bonsPlanDetail
      }
    };
    this.router.navigate(['members/details'], navigationExtras);
  }

  appartDetails(appartDetails:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        appartId: appartDetails
      }
    };
    this.router.navigate(['members/details'], navigationExtras);
  }
}
