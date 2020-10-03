import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage, } from "firebase";
import { AngularFirestore } from "@angular/fire/firestore";
import { ImagenesService } from "../servicios/imagenes.service";
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';
import { AuthService } from '../servicios/auth.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {
  isWaiting: boolean;
  showlike = false;
  like: any = false;
  slide: any;
  @ViewChild("foto") foto: IonSlides;
  imagenActual: any;
  usuario: any;
  usuarios:any;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  }

  MiFoto: any;
  imagenes = [];
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;


  constructor(
    private camera: Camera,
    private firestore: AngularFirestore,
    private usuariosService: UsuariosService,
    private auth: AuthService,
    private imagenesService: ImagenesService,
  ) { }

  ngOnInit() {
    this.isWaiting = true;
    this.actualizarGaleria();
    this.auth.currentUser.subscribe(user => this.usuario = user.email);
    this.usuariosService.getUsuarios().subscribe(usuarios => {this.usuarios= usuarios});
  }
  ionViewDidEnter() {
    setTimeout(a=>{ this.switchLikeBotton(); this.isWaiting=false;}, 2000);
  }
  //Muestra la camara
  Showcamera() {
    const id = Math.random().toString(36).substring(2);
    const pictures = storage().ref('pictures/' + id);
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.MiFoto = `data:image/jpeg;base64,${imageData}`; /* 'data:image/jpeg;base64,' + imageData; */
      pictures.putString(this.MiFoto, 'data_url').then(t => {
        this.agregarImagen(id);
      });

    }, (err) => {
      console.error(err);
      // Handle error
      console.log(err);
    });


  }
  //llama al servicio para subir una imagenf
  agregarImagen(id) {

    storage().ref('pictures/' + id).getDownloadURL().then(data => {
      this.firestore.collection('imagenesFeas').add({ id: data, fecha: Date.now(), autor: this.usuario }).then(data => { console.log(data) });
      console.log(data);
    })
  }
  //Organiza el array de imagenes y el boton
  actualizarGaleria() {

    this.imagenesService.getImagenesFeas().subscribe(imagenes => {
      /* console.log( */imagenes.sort(function (a, b) {
      /* console.log(a); */
      if (a['fecha'] < b['fecha']) {
        return 1;
      }
      if (a['fecha'] > b['fecha']) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
      /* console.log(imagenes[0]); */
      this.imagenes = imagenes;
    });


  }
  //cada vez que dan like/dislike dispara esta funcion y guarda el dato
  likechange() {

    this.like = !this.like;
    if(this.like ==true){
      this.showlike = true;
    }
    setTimeout(a=>{ this.showlike = false }, 1000);

    this.guardarLikes();
  }
  //Me fijo si al usuarioActual le gusta la foto actual y actualizo el botton "me gusta"
  switchLikeBotton() {
    this.auth.currentUser.subscribe(
      usuarioLogueado => {
        this.getImagenActual();
        this.usuariosService.getUsuarios().subscribe(usuarios => {
          var likes: Array<any>;
          usuarios.map(user => {
            //Tengo el array de usuarios, encuentro el del usuario actual
            if (user.correo == usuarioLogueado.email) {
              likes = user.likes;
              for (let src of likes) {
                if (this.imagenActual == src) {
                  console.log("Le gusta", src);
                  this.like = true;
                  break;
                }
                else {
                  console.log("No le gusta", this.imagenActual);
                  this.like = false;
                }
              }
            }
          })
        })
      }
    )

  }
  guardarLikes() {
    this.getImagenActual();
    this.usuarios.map(user =>
    /* for (let user of usuarios)  */ {
      //Tengo el array de usuarios, encuentro el del usuario actual
      if (user.correo == this.usuario) {
        console.log(user.correo);
        var likes = user.likes;
        //Si le dio like lo guardo en el array
        if (this.like == true) {
          likes.push(this.imagenActual);
          console.log("Te gusta esta foto", likes);
          this.usuariosService.cambiarLike(likes, user.id);
        }//Si dio dislike lo borro del array y guardo los cambios
        else {//Mapeo el array de likes
          var likesActualizados: Array<any> = [];
          for (let src of user.likes) {
            if (src != this.imagenActual) {
              likesActualizados.push(src);
            }
          }
          console.log(likesActualizados);
          this.usuariosService.cambiarLike(likesActualizados, user.id);
        }
      }
    })

  }

  //Guardo el Src de la imagen que se encuentra activa en una variable de la clase
  getImagenActual() {
    this.foto.getActiveIndex().then(index => {
      //Tengo el indice de la foto
      /* console.log(index); */
      //tengo la foto
      /* console.log(this.imagenes[index].id); */
      this.imagenActual = this.imagenes[index].id;
    })
  }

}
