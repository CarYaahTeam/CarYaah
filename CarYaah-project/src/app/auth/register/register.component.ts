import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  // data: object = {}
  successMessage: string = ""

  regForm!: FormGroup

  constructor(
    private formData: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.regForm = this.formData.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      adress: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]{6}")]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]{6,}")]]
    })
  }

  register() {
    console.log(this.regForm.value);
    this.clientService.reg(this.regForm.value)
    console.log(this.regForm.value);

  }

}