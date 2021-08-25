import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

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
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]{6}")]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]{6,}")]]
    })
  }

  register() {
    const url = "http://localhost:3000/register"
    this.http.post(url, this.regForm.value).subscribe((data) => {
      console.log(data);
    })
    // this.successMessage = "Successfully Registered..."
    // console.log(this.regForm)
    //   if (this.regForm.invalid) {
    //     return;
    //   } else {
    //     console.log(this.regForm.value);
    //   }
  }

}