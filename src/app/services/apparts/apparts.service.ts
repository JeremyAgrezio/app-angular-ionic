import { Injectable } from '@angular/core';
import { appts } from '../../data/apparts.js'
import { FavorisService } from '../../services/favoris/favoris.service'

@Injectable({
  providedIn: 'root'
})
export class AppartsService {

  appartements: {"id":String, "name":String, "area": String, 'price': String,'furnitures': String, "location": String, "images": [], "description": String, "phone":String, "isFav": boolean}[] = appts

  constructor(private fav: FavorisService) { 
    let favoris = this.fav.getFavAppt();
    this.fav.initFav(favoris, this.appartements); // UPDATE APPARTEMENTS FAVORITES
  }

  public getApparts(): {"id": String, "name":String, "area": String, 'price': String,'furnitures': String, "location": String, "images": [], "description": String, "phone":String, "isFav": boolean}[] { 
    return this.appartements;
  }
}
