import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersData: Array<object> = [];
  private userIndex: number = null;

  public authenticationState = new BehaviorSubject(false);

  constructor(private nativeStorage: NativeStorage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.initUsers();
      this.checkUserIndex();
    });
  }
 
  /* INIT USERS DATA */
  initUsers():void{
    this.nativeStorage.getItem('USERS_CREDENTIALS').then(
      data=>{ 
        this.usersData = data; 
        console.log("data array init: " + JSON.stringify(this.usersData));
      },
    )
    this.nativeStorage.getItem('USER_INDEX').then(
      data=>{ 
        this.userIndex = data;  
      },
    )
  }
  /* /INIT USERS DATA */


  /* USER INDEX PREVIOUSLY SAVED ? */
  checkUserIndex(): void {
    this.nativeStorage.getItem('USER_INDEX').then(res => {
      if (res != undefined) { this.authenticationState.next(true);}
    })
  }
  /* USER INDEX PREVIOUSLY SAVED ? */


  /* RETURN USER INDEX BY KEY */
  findUserIndexByKey(array:Array<object>, key:string, value:any):number {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
          return i;
      }
    }
    return null;
  }
  /* /RETURN USER INDEX BY KEY */


  /* RETURN USER DATA */
  getUserData(): any{
    return this.usersData[this.userIndex];
  }
  /* RETURN USER DATA */


  /* UPDATE USER DATA */
  setUserData(userData: Array<object>) {
    this.usersData[this.userIndex] = userData;
    this.nativeStorage.setItem('USERS_CREDENTIALS', this.usersData).then(()=>{
    },
      error => {console.log(error)}
    );
  }
   /* UPDATE USER DATA */


  /* REMOVE USERS */
  removeUsers(){
    this.usersData = [];
    this.nativeStorage.remove('USERS_CREDENTIALS');
    alert("USERS DELETED")
  }
  /* /REMOV USERS */

  /* REGISTER */
  registerUser(pseudo:string, password:string):any{
    
    let isExist = this.findUserIndexByKey(this.usersData, "pseudo", pseudo);

    if(isExist != null){
      alert('Pseudo indisponible');
    }else{
      this.usersData.push({
        pseudo: pseudo,
        password: password,
        bonsPlans: [],
        apparts: []
      });   

      this.nativeStorage.setItem('USERS_CREDENTIALS', this.usersData).then(()=>{
        this.nativeStorage.getItem('USERS_CREDENTIALS').then(data=>{ this.usersData = data; }),
        this.userIndex = this.findUserIndexByKey(this.usersData, "pseudo", pseudo),
        this.nativeStorage.setItem('USER_INDEX', this.userIndex).then(()=>{
          this.authenticationState.next(true)
        });  
      },
        error => {console.log(error)}
      );
    } 
  }
  /* /REGISTER */


  /* LOGIN */
  login(pseudo:string, password:string) {

    this.userIndex = this.findUserIndexByKey(this.usersData, "pseudo", pseudo);

    if(this.userIndex != null){
      if(this.usersData[this.userIndex]["password"] == password){
        
        this.nativeStorage.setItem('USER_INDEX', this.userIndex).then(() => {
          this.authenticationState.next(true);
        });
      }else{
        alert("Mot de passe incorrect");
      }
    }else{
      alert("Utilisateur inexistant");
    }    
  }
  /* /LOGIN */


  /* LOGOUT */
  logout(): any {
    return this.nativeStorage.remove('USER_INDEX').then(() => {
      this.userIndex = null,
      this.authenticationState.next(false)
    });
  }
  /* /LOGOUT */
  

  /* IS AUTHENTICATED ? */
  isAuthenticated():boolean {
    return this.authenticationState.value;
  }
  /* /IS AUTHENTICATED ? */
}
