import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';

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
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {


  }

  register(data: any) {
    console.log(data)
    if (data.type === "owner") {
      this.ownerService.regOwner(data)
    } else if (data.type === "client") {
      this.clientService.regClient(data)
      console.log('register', data);

    }
  }

}