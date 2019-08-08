import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:AngularFireAuth) {

   }


   login(email:string,password:string){

    return new Promise((resolve, rejected) =>{
     this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user =>{
       console.log(user);
       resolve(user);
     }).catch(err => rejected(err));
    });
   }

   logout(){
     return this.AFauth.auth.signOut();
   }

}
