import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Email } from '../email.service.service';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  nodeMailForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private emailService: Email
  ) { }

  ngOnInit(): void {
    this.nodeMailForm = this.formBuilder.group({
      email: [null, [Validators.required]]
    });
  }
  sendMail() {
    let email = this.nodeMailForm.value.email;
    let reqObj = {
      email: email
    }
    this.emailService.sendMessage(reqObj).subscribe((data) => {
      console.log(data);

    })
  }

}
