import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private db:AngularFirestore) { }


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

  modificarImagen(src){
    console.log("LLEGUE");
    this.db.collection('usuarios').snapshotChanges().pipe(map(users =>{
      console.log(users);
      users.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as {id:string;};
        console.log(data, id);
        if(data.id == src){
          console.log(data);
        }
        console.log(data, src);
        
      })
    }))

  }


}