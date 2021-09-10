import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { OwnerService } from 'src/app/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // data: object = {}
  successMessage: string = '';

  constructor(
    private formData: FormBuilder,
    private clientService: ClientService,
    private ownerService: OwnerService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  To(str: string) {
    this.route.navigateByUrl(str);
  }
  register(data: any) {
    console.log(data.email, data.password);
    if (data.type === 'I am an OWNER.') {
      this.ownerService.regOwner(data.email, data.password);
      this.To('/user');

      console.log('register owner', data.email, data.password);
    } else if (data.type === 'I am a CLIENT.') {
      this.clientService.regClient(data);
      console.log('register', data.email, data.password);
      this.To('/user');
    }
  }
}
