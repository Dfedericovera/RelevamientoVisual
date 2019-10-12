import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface user {
  id: string;
  clave: string;
  correo: string;
  perfil: string;
  sexo: string;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private db:AngularFirestore) { }

  getUsuarios(){
    return this.db.collection('usuarios').snapshotChanges().pipe(map(users =>{
      return users.map(a => {
        const data = a.payload.doc.data() as user;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getImagenesLindas(){
    return this.db.collection('imagenes').snapshotChanges().pipe(map(users =>{
      return users.map(a => {
        const data = a.payload.doc.data() as {id:string;};
        return data;
      })
    }))
  }
  getImagenesFeas(){
    return this.db.collection('imagenesFeas').snapshotChanges().pipe(map(users =>{
      return users.map(a => {
        const data = a.payload.doc.data() as {id:string;};
        return data;
      })
    }))
  }

  

}
