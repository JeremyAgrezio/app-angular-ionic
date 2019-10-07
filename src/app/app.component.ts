import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Bon plans',
      url: '/members/home',
      icon: 'star-outline'
    },
    {
      title: 'Apparts',
      url: '/members/apparts',
      icon: 'home'
    },
    {
      title: 'Plan',
      url: '/members/plan',
      icon: 'map'
    },
    {
      title: 'Compte',
      url: '/members/compte',
      icon: 'person'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthService,
    private router: Router,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.menuCtrl.enable(true);
          this.router.navigate(['members', 'home']);
        } else {
          this.menuCtrl.enable(false);
          this.router.navigate(['auth-home']);
        }
      });
    });
  }

  logout() {
    this.menuCtrl.close();
    this.authenticationService.logout();
  }
}
