import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  // data: object = {}
  successMessage: string = ""



  constructor(
    private formData: FormBuilder,
    private clientService: ClientService,
    private ownerService: OwnerService,
    private route: Router
  ) { }

  ngOnInit(): void {


  }

  To(str: string) {
    this.route.navigateByUrl(str)
  }
  register(data: any) {
    console.log(data)
    if (data.type === "owner") {
      this.ownerService.regOwner(data)
      //this.To("/owner/profile")
      //we don't have for now 

    } else if (data.type === "client") {
      this.clientService.regClient(data)
      console.log('register', data);
      this.To("/client/profile")

    }
  }

}