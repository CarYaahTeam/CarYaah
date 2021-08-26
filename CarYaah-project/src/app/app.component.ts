import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caryaah';
  formattedaddress="";
  flag: boolean = true
  options : any ={
    // fields: ["address_component", "place_id"]
    componentRestrictions: { country: 'UA' }
  }
  apply(value: string) {
    this.flag = value == "login" ? true : false;
  }
}
