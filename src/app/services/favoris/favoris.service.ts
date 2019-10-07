import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service"

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private userData = this.auth.getUserData();
  private favApparts =  this.userData["apparts"];
  private favBonsPlans = this.userData["bonsPlans"];

  constructor(private auth: AuthService) {}

  initFav(favs:Array<number>, apparts:Array<object>) {
    if(favs.length > 0){
      for (let i = 0; i < apparts.length; i++) {
        if (favs.indexOf(apparts[i]["id"]) !== -1) {
          apparts[i]["isFav"] = true;
        }
      }
    }  
  }

  getFavAppt(){
    return this.favApparts;
  }

  getFavBonsPlans(){
    return this.favBonsPlans;
  }

  refreshFavAppart(id:Number){
    if(this.favApparts.includes(id)){
      this.favApparts = this.favApparts.filter(function(ele){
        return ele != id;
      });
    }else{
      this.favApparts.push(id);
    }
    this.saveFav()
  }

  refreshFavBonsPlans(id:Number){
    if(this.favBonsPlans.includes(id)){
      this.favBonsPlans = this.favBonsPlans.filter(function(ele){
        return ele != id;
      });
    }else{
      this.favBonsPlans.push(id);
    }
    this.saveFav()
  }

  saveFav(){
    this.userData["apparts"] = this.favApparts;
    this.userData["bonsPlans"] = this.favBonsPlans;
    this.auth.setUserData(this.userData);
  }
}

