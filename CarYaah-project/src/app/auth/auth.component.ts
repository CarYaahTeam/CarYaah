import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  title = 'caryaah';
  flag: boolean = true


  apply(value: string) {
    this.flag = value == "login" ? true : false;
  }
}
