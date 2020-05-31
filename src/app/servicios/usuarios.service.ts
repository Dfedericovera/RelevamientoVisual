import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface user {
  id: string;
  correo: string;
  perfil: string;
  sexo: string;
  img: string;
  likes: Array<any>;
}
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private db: AngularFirestore) { }

  getUsuarios() {
    return this.db.collection('usuarios').snapshotChanges().pipe(map(users => {
      return users.map(a => {
        const data = a.payload.doc.data() as user;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  getUsuario(email: string) {
    var usuario;
    return this.getUsuarios().toPromise();/* .then(usuarios => {
      console.log(usuarios);
      usuarios.map(user => {
        if (email == user.correo) {
          console.log(user);
          usuario = user;
          return usuario;
        }
      })
    }) */
  }

  cambiarLike(likes, idUsuario) {
    console.log(likes);
    this.db.collection("usuarios").doc(idUsuario).update({
      likes: likes
    }).then(function () {
        console.log("Document successfully updated!");
      }).catch(function (error) {
        console.error("Error updating document: ", error);
      });

  }



}
