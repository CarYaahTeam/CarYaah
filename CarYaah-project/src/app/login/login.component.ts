import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage: string = "";
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
    //   password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    // })
  }

  login(data: any) {
    console.log(data);
    if (data.type === "owner") {
      this.ownerService.logOwner(data)
    } else if (data.type === "client") {
      this.clientService.logClient(data)
    }
  }

}