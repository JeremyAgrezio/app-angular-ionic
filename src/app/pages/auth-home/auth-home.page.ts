import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.page.html',
  styleUrls: ['./auth-home.page.scss'],
})
export class AuthHomePage implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  navToLogin(){
    this.router.navigate(['/login'])
  }
  navToRegister(){
    this.router.navigate(['/register'])
  }

  delUsers(){
    this.auth.removeUsers();
  }

}
