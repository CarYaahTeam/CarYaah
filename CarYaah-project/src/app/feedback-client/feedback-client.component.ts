import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback-client',
  templateUrl: './feedback-client.component.html',
  styleUrls: ['./feedback-client.component.css'],
})
export class FeedbackClientComponent implements OnInit {
  constructor(
    private msg: UserService,
    public dialogRef: MatDialogRef<FeedbackClientComponent>,
    private router: Router
  ) {}
  ngOnInit(): void {}
  sendMessage(data: object) {
    this.msg.sendMsg(data).subscribe((data) => {
      console.log(data);
    });
    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigate([currentUrl]);
    //   console.log(currentUrl);
    // });
    this.dialogRef.close();
  }
}
