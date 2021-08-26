import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rou';
  formattedaddress="";
  options : any ={
    fields: ["address_component", "place_id"],
    componentRestrictions: { country: 'UA' }
  }
  public handleAddressChange(address: any){
    this.formattedaddress=address.formatted_address
  }
}