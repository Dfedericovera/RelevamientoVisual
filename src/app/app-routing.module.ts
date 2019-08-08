import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from "./guards/nologin.guard";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [NologinGuard]},
  { path: 'registrarse', loadChildren: './registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'cosas-lindas', loadChildren: './cosas-lindas/cosas-lindas.module#CosasLindasPageModule' },
  { path: 'cosas-feas', loadChildren: './cosas-feas/cosas-feas.module#CosasFeasPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
