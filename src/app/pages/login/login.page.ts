import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pseudo: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  inputsVerif():boolean{
    if(this.pseudo, this.password){
      return true;
    }else{
      alert('Veuillez remplir tous les champs');
    }
  }

  login() {
    if(this.inputsVerif()){
      this.authService.login(this.pseudo, this.password);
    }
  }
}
