import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



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
  MiFoto:any;

  sliderOpts ={
    zoom:false,
    slidesPerView:1.5,
    centeredSlides:true,
    spaceBetween:20
  }

  constructor(
    private camera: Camera,
    private modalControler:ModalController,
    private router: Router
    ) { }

  ngOnInit() {
    
    console.log(this.constructor.name);
    console.log('this.router.url', this.router.url);
    
  }

  Showcamera(){

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.MiFoto = `data:image/jpeg;base64,${imageData}`; /* 'data:image/jpeg;base64,' + imageData; */
     }, (err) => {
      console.error( err );
      // Handle error
     });
  }

}
