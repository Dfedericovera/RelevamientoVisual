import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavDelegate } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { auth } from 'firebase';
import { UsuariosService } from '../servicios/usuarios.service';
import { Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { SmartAudio } from '../servicios/smart-audio.service';



interface user {
  id: string;
  clave: string;
  correo: string;
  perfil: string;
  sexo: string;
  img: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subscribe: any;
  
  constructor(
    private platform: Platform,
    private router: Router,
    private authservice: AuthService,
    private usuariosService: UsuariosService,    
    public alertController: AlertController,
    private smartAudio:SmartAudio,
    ) {
  }

  ngOnInit() {
    this.smartAudio.play('intro');
    this.backButtonEvent();
  }

  go(ruta: string, valor?: string) {
    //ruta=ruta+'/'+this.valor; y modificar el routingModule par agregarle el parametro o this.router.navigate(['/ruta',this.valor]);
    this.router.navigateByUrl(ruta);//o aca ('/login/${this.valor}');
  }

  onlogout() {
    this.authservice.logout().then(() => {
      this.router.navigate(['/login']);
    })
  }

  

  backButtonEvent(){
    this.platform.backButton.subscribe(() => { 
      
      this.presentAlertConfirm();
    }
    );
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Decea salir de la aplicacion?',
      message: 'Hasta luego <strong>!</strong>!!!',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {            
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SI',
          handler: () => {
            navigator["app"].exitApp();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }









  













}
