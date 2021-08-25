import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'rou';
  formattedaddress="";
  options : any ={
    // fields: ["address_component", "place_id"]
    componentRestrictions: { country: 'UA' }
  }
  public handleAddressChange(address: any){
    this.formattedaddress=address.formatted_address
  }
}

=======
  title = 'myApp';
  flag: boolean = true


  apply(value: string) {
    this.flag = value == "login" ? true : false;
  }
}
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
