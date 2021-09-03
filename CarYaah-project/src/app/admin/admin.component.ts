import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clients: any
  owners: any
  show: boolean = true;


  constructor(private adminService: AdminService, private cookies: CookieService
  ) { }

  ngOnInit(): void {
    this.getclients()
    this.getowners()
  }

  login(username: string, password: string) {
    this.adminService.log(username, password).subscribe((data) => {
      this.cookies.set("token", data.auth_token)
      this.show = !this.show

    })
  }
  toggle() {
  }
  getclients() {
    this.adminService.fetchclients().subscribe((data) => {
      this.clients = data
      console.log('clients ts', this.clients);
    })

  }
  getowners() {
    this.adminService.fetchowners().subscribe((data) => {
      this.owners = data
      console.log('owners ts', this.owners);
    })
  }
  deleteClient(data: any) {
    this.adminService.deleteclient(data).subscribe((data) => {
      console.log(data);
    })
  }


}

