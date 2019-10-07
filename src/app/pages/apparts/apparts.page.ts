import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppartsService } from '../../services/apparts/apparts.service';
import { FavorisService } from '../../services/favoris/favoris.service'

@Component({
  selector: 'app-apparts',
  templateUrl: './apparts.page.html',
  styleUrls: ['./apparts.page.scss'],
})
export class AppartsPage implements OnInit {

  appartements:{"id":String, "name":String, "area": String, 'price': String, 'furnitures': String, "location": String, "images": [], "description": String, "phone":String, "isFav": boolean}[];

  constructor( private router: Router, private appartsService: AppartsService, private fav: FavorisService) {}

  ngOnInit() {
    this.appartements = this.appartsService.getApparts();
  }

  appartDetails(appartDetails:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        appartId: appartDetails
      }
    };
    this.router.navigate(['members/details'], navigationExtras);
  }

  setFav(id){
    this.fav.refreshFavAppart(id)
  }
}
