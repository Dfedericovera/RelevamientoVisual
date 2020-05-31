import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: Observable<firebase.User | null>;

  constructor(private AFauth: AngularFireAuth) {
    this.usuarioActual = this.AFauth.authState;
  }


  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        console.log(user);
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout() {
    return this.AFauth.auth.signOut();
  }

  // Obtener el estado de autenticación
  get authenticated(): boolean {
    return this.usuarioActual != null; // True ó False
  }
  // Obtener el observador del usuario actual
  get currentUser(): Observable<firebase.User | null> {
    return this.usuarioActual;
  }

}
