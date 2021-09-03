import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderModule } from "angular-file-uploader";
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
};
  constructor() { }

  ngOnInit(): void {
  }

}
