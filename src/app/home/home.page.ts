import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavDelegate } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { auth } from 'firebase';
import { UsuariosService } from '../servicios/usuarios.service';


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


  constructor(private router: Router, private authservice: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit() {    
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

}
