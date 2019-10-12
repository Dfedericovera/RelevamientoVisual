import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage, } from "firebase";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { UsuariosService } from "../servicios/usuarios.service";


@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})



export class CosasLindasPage implements OnInit {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  sliderOpts ={
    zoom:false,
    slidesPerView:1.5,
    centeredSlides:true,
    spaceBetween:20
  }

  MiFoto:any;
  imagenes= [];
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;


  constructor(
    private camera: Camera,
    private firestore:AngularFirestore,
    private imagenesService:UsuariosService,
    ) { }

  ngOnInit() {
    this.actualizarGaleria();   
  }

  Showcamera(){    
    const id = Math.random().toString(36).substring(2);
    const pictures = storage().ref('pictures/'+id);
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.MiFoto = `data:image/jpeg;base64,${imageData}`; /* 'data:image/jpeg;base64,' + imageData; */
      pictures.putString(this.MiFoto,'data_url').then(t=>{
      this.agregarImagen(id);
      });
     
     }, (err) => {
      console.error( err );
      // Handle error
      console.log(err);
     });
     

  }

  agregarImagen(id){
    
    storage().ref('pictures/'+id).getDownloadURL().then(data =>{
      this.firestore.collection('imagenes').add({id:data,fecha:Date.now()}).then(data=>{console.log(data)});
      console.log(data);
    })
  }

  actualizarGaleria(){

    this.imagenesService.getImagenesLindas().subscribe(imagenes => {
      
      console.log(imagenes.sort(function (a, b) {
        console.log(a);
        if ( a['fecha'] < b['fecha'] ) {
          return 1;
        }
        if (a['fecha'] > b['fecha'] ) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }));
      console.log(imagenes[0]);
      this.imagenes=imagenes;
      
    });   
     
  }

}


