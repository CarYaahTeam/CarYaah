import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Email } from '../email.service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  nodeMailForm!: FormGroup;
  show!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private emailService: Email,
    private router: Router,
    public dialogRef: MatDialogRef<SendEmailComponent>
  ) {}

  ngOnInit(): void {
    this.nodeMailForm = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
    const user = [history.state.data];
    console.log(user);
  }

  sendMail(data: object) {
    this.emailService.sendMessage(data).subscribe((data) => {
      console.log(data);
    });
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
    this.dialogRef.close();
    alert('Message Sent !');
  }
}
