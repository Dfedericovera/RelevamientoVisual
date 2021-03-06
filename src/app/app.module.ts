import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IngresarComponent } from './ingresar/ingresar.component';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";

import { Camera } from "@ionic-native/camera/ngx";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { SmartAudio } from './servicios/smart-audio.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
    ],
  providers: [
    StatusBar,
    SplashScreen,Camera,NativeAudio,SmartAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  exports: [
    IngresarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
