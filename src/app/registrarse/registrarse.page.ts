import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  go (ruta:string){
    this.router.navigateByUrl(ruta);
  }
}
