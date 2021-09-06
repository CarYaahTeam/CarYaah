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
  register(email: string, password: string, type: string) {
    console.log(email, password)
    if (type === "owner") {
      this.ownerService.regOwner(email, password)
      console.log('register owner', email, password);

    } else if (type === "client") {
      this.clientService.regClient(email, password)
      console.log('register', email, password);
      this.To("/user")

    }
  }

}