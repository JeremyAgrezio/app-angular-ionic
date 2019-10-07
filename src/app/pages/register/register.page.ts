import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  pseudo: string;
  password: string;
  confirm: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  inputsVerif():boolean{
    if(this.pseudo, this.password, this.confirm){
      if(this.password === this.confirm){
        return true;
      }else{
        alert('Vérification mots de passes incorrecte, veuillez réessayer');
      }
    }else{
      alert('Veuillez remplir tous les champs');
    }
  }

  userRegister(){
    if(this.inputsVerif()){
      this.auth.registerUser(this.pseudo, this.password)
    }
  };
}
