import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage: string = "";
  loginForm!: FormGroup;
  isLoggedin!: boolean;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private ownerService: OwnerService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }
  To(str: string) {
    this.route.navigateByUrl(str)
  }

  login(data: any) {
    console.log(data);
    if (data.type === "owner") {
      this.ownerService.logOwner(data)
      //cookies
      this.To("/owner/profile")

    } else if (data.type === "client") {
      this.clientService.logClient(data)
      this.To("/client/profile")
    } else {
      alert('you are not registered')
    }
  }





}