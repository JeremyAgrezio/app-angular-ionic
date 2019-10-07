import { Injectable } from '@angular/core';
import { bonsPlans } from '../../data/bonsPlans.js'
import { FavorisService } from '../../services/favoris/favoris.service'

@Injectable({
  providedIn: 'root'
})
export class BonsPlansService {

  bonsPlans: {"id":String, "name":String, 'times': String, "location": String, "longitude": Number, "latitude": Number, "images": [], "description": String, "isFav": boolean}[] = bonsPlans

  constructor(private fav: FavorisService) { 
    let favoris = this.fav.getFavBonsPlans();
    this.fav.initFav(favoris, this.bonsPlans); // UPDATE BON PLANS FAVORITES
  }

  public getBonsPlans(): {"id": String, "name":String, 'times': String, "location": String, "longitude": Number, "latitude": Number, "images": [], "description": String, "isFav": boolean}[] { 
    return this.bonsPlans;
  }
}
