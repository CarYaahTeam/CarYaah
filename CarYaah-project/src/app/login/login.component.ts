import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //  loginForm: FormGroup;

  constructor(
    // private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    const loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])

    })

  }
  onSubmit() {
    // if(loginForm.invalid){
    //   return;
    // }

  }

}
