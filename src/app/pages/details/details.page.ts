import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavorisService } from '../../services/favoris/favoris.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    height: 100,
    setWrapperSize: true,
  };

  mapType = 'terrain';
  zoom = 16;

  dataAppart: any;
  dataBonPlan: any;
  

  constructor(private route: ActivatedRoute, private router: Router, private fav: FavorisService) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        if(this.router.getCurrentNavigation().extras.state.appartId){
          this.dataAppart = this.router.getCurrentNavigation().extras.state.appartId;
        }else{
          this.dataBonPlan = this.router.getCurrentNavigation().extras.state.bonPlan;
        }
      };
    });
  }

  ngOnInit() {
    console.log("Id appart: " + JSON.stringify(this.dataAppart))
    console.log("Id bon plan: " + JSON.stringify(this.dataBonPlan))
  }

  setFavBonsPlans(id:Number){
    this.fav.refreshFavBonsPlans(id)
  }

  setFavAppart(id:Number){
    this.fav.refreshFavAppart(id)
  }

}
