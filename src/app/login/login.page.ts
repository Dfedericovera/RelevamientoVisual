import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UsuariosService, user } from "../servicios/usuarios.service";
//import { MenuController } from '@ionic/angular';
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { SmartAudio } from "../servicios/smart-audio.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isWaiting:boolean;
  error:boolean=false;
  usuarios: any = [];

  email: string = 'admin@admin.com';
  password: string = '111111';

  constructor(private router: Router,
     private authService: AuthService,
      private usuariosService: UsuariosService,
      private nativeAudio: NativeAudio,
      
      ) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }
  go(ruta){
    this.router.navigate([ruta]);
  }

  
  onSubmitlogin() {
    this.isWaiting = true;
    this.nativeAudio.preloadSimple('uniqueId1', '../../assets/audio/intro.mp3');
    this.nativeAudio.play('uniqueId1');

    this.authService.login(this.email, this.password).then(res => {
      this.isWaiting = false;
      /* this.nativeAudio.stop('uniqueId1'); */
      this.router.navigateByUrl('/home');
    })
    .catch(err => {this.error = true})
  }

  llenarFormulario(correo:any,clave:any) {
    this.email= correo;
    this.password= clave;

  }
}
