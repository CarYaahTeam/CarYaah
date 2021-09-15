import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { HttpClient } from '@angular/common/http';
import { DialogServiceService } from 'src/app/dialog-service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css'],
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  selectedFile = null;
  imageUrl: any;
  // afuConfig = {
  //   uploadAPI: {
  //     url: 'https://slack.com/api/files.upload',
  //   },
  // };
  constructor(
    private ds: DialogServiceService,
    private http: HttpClient,
    private router: Router,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>
  ) {}
  ngOnInit(): void {}

  imgUpload(img: any) {
    console.log('IMG FROM VER==> ', img.target.files[0]);
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append('img', img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.ds.uploadImg(formData).subscribe((resp: any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log('RESP====> ', resp['msg'].url);
      this.imageUrl = resp['msg'].url;
    });
  }

  submitRport(conflict_status: string, clientId: string, carId: string) {
    const dataConflict = {
      conflict_report: this.imageUrl,
      conflict_status: 'pending',
      clientId: 1,
      carId: 1,
    };
    this.ds.add(dataConflict).subscribe((data: any) => {
      console.log(data);
      alert('done');
    });
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
    this.dialogRef.close();
  }
}
