import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import { SmartAudio } from './servicios/smart-audio.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private smartAudio: SmartAudio,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.smartAudio.preload('intro', 'assets/audio/intro.mp3');
      
      timer(3000).subscribe(()=>this.showSplash = false);

      this.splashScreen.hide();
    });
  }






}
