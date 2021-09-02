import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddCar } from 'src/app/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  selectedFile = null;
  imageUrl: any;
  constructor(private ac: AddCar, private http: HttpClient) {}

  imgUpload(img: any) {
    console.log('IMG FROM VER==> ', img.target.files[0]);
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append('img', img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.ac.uploadImg(formData).subscribe((resp: any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log('RESP====> ', resp['msg'].url);
      this.imageUrl = resp['msg'].url;
    });
  }
  carInfo: any;

  ngOnInit(): void {}
  add(
    brand: string,
    type: string,
    startDate: string,
    endDate: string,
    price: string
  ) {
    const datacar = {
      brand,
      type,
      price,
      startDate,
      endDate,
      image: this.imageUrl,
      id_owner: 1,
    };
    this.ac.add(datacar).subscribe((data: any) => {
      console.log(data['car']);
    });
  }
}
