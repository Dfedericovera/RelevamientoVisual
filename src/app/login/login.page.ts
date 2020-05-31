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


  error:boolean=false;
  usuarios: any = [];

  email: string = 'admin@admin.com';
  password: string = '111111';

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
    })
    .catch(err => {this.error = true})
  }

  llenarFormulario(correo:any,clave:any) {
    this.email= correo;
    this.password= clave;

  }
}
