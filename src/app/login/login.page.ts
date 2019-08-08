import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UsuariosService, user } from "../servicios/usuarios.service";
//import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /*
    usuario0 = uncorreo@uncorreo.com, uncorreo
    usuario1 = usuario1@users.com, usuario1
    usuario2 = usuario2@users.com, usuario2
    usuario3 = usuario3@users.com, usuario3
  */
  usuarios: any = [];

  email: string = 'uncorreo@uncorreo.com';
  password: string = 'uncorreo';

  constructor(private router: Router, private authService: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }


  go(ruta: string) {
    this.router.navigateByUrl(ruta);
  }
  onSubmitlogin() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigateByUrl('/home');
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
  }

  llenarFormulario(correo:any,clave:any) {
    this.email= correo;
    this.password= clave;

  }
}
