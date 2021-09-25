import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  show = false;
  constructor(private route: Router, private cookie: CookieService) {}

  ngOnInit(): void {
    const token = this.cookie.get('token');
    if (token) {
      this.show = true;
    } else {
      this.show = false;
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

  toProfile() {
    this.route.navigateByUrl('/ownerprofile');
  }

  logout() {
    this.cookie.delete('token');
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/']);
      console.log(currentUrl);
      const token = this.cookie.get('token');
      if (token) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
}
