import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UpdateClientInfosService } from 'src/app/update-client-infos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-client-infos',
  templateUrl: './update-client-infos.component.html',
  styleUrls: ['./update-client-infos.component.css'],
})
export class UpdateClientInfosComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private updateClient: UpdateClientInfosService,
    public dialogRef: MatDialogRef<UpdateClientInfosComponent>
  ) {}

  imageUrl: any;
  ngOnInit(): void {}

  onUpload(img: any) {
    console.log('IMG FROM VER==> ', img.target.files[0]);
    var formData = new FormData();
    formData.append('img', img.target.files[0]);
    this.updateClient.uploadImg(formData).subscribe((resp: any) => {
      console.log('RESP====> ', resp['msg'].url);
      this.imageUrl = resp['msg'].url;
    });
  }
  update(name: string, email: string, phone: string, adress: string) {
    const dataClient = {
      name,
      email,
      phone,
      adress,
      image: this.imageUrl,
    };
    this.updateClient.updateClient(dataClient).subscribe((data: any) => {
      console.log(data);
    });
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
    this.dialogRef.close();
  }
}
