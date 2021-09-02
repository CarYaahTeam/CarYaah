import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'cookies-angular'
  successMessage: string = "";
  loginForm!: FormGroup;

  constructor(
    private clientService: ClientService,
    private ownerService: OwnerService,
    private route: Router,
    private cookies: CookieService
  ) { }
  ngOnInit(): void {

  }
  To(str: string) {
    this.route.navigateByUrl(str)
  }
  login(email: string, password: string, type: string) {
    if (type === "owner") {
      this.ownerService.logOwner(email, password).subscribe((data) => {
        this.cookies.set("token", data.auth_token)
      })
      this.To("/owner/profile")
    } else if (type === "client") {
      this.clientService.logClient(email, password).subscribe((data) => {
        this.cookies.set("token", data.auth_token)
      })
      this.To("/client/profile")
    } else {
      alert('you are not registered')
    }
  }




}