import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  boo=false;
  constructor(private route: Router, private cookie: CookieService) {}

  ngOnInit(): void {
    const tkn = this.cookie.get('token');
    if (tkn) {
      this.boo = true;
  }
}
  To(str: string) {
    this.route.navigateByUrl(str);
  }
  toRegister() {
    const tkn = this.cookie.get('token');
    if (tkn) {
      console.log(tkn);

      this.route.navigateByUrl('/owner');
    } else {
      alert('plz login or sign up first !');
    }
  }

  toProfile(){
    this.route.navigateByUrl('/ownerprofile');
  }
}
