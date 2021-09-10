import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'cookies-angular';
  successMessage: string = '';
  loginForm!: FormGroup;
  d: any;

  constructor(
    private clientService: ClientService,
    private ownerService: OwnerService,
    private route: Router,
    private cookies: CookieService
  ) {}
  ngOnInit(): void {}
  To(str: string) {
    this.route.navigateByUrl(str);
  }
  login(data: any) {
    if (data.type === 'I am an OWNER.') {
      this.ownerService
        .logOwner(data.email, data.password)
        .subscribe((data) => {
          this.cookies.set('token', data.auth_token);
          this.To('/ownerprofile');
          
        });
    } else if (data.type === 'I am a CLIENT.') {
      this.clientService
        .logClient(data.email, data.password)
        .subscribe((data) => {
          this.cookies.set('token', data.auth_token);
          this.To('/user');
        });
    }
  }
}
