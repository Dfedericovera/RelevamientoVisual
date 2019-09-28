import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {

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

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  Showcamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.MiFoto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
