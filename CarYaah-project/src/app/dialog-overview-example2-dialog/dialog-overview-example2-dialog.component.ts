import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-dialog-overview-example2-dialog',
  templateUrl: './dialog-overview-example2-dialog.component.html',
  styleUrls: ['./dialog-overview-example2-dialog.component.css'],
})
export class DialogOverviewExampleDialog2Component implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
  };
  constructor(private msg: OwnerService) {}

  ngOnInit(): void {}

  sendMsg(data: object) {
    this.msg.sendMsg(data).subscribe((data) => {
      console.log(data);
    });
  }
}
