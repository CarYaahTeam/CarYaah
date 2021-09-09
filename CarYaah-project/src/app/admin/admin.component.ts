import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clients: any
  owners: any
  conflicts: any
  show: boolean = false;


  constructor(private adminService: AdminService,
    private route: Router,
    private cookies: CookieService


  ) { }

  ngOnInit(): void {
    if (document.cookie) this.show = !this.show
    this.getclients()
    this.getowners()

  }

  login(username: string, password: string) {

    this.adminService.log(username, password).subscribe((data) => {
      this.cookies.set("token", data.auth_token)
      this.show = !this.show
    })
  }
  To(data: object) {
    this.route.navigateByUrl('/sendemail', { state: { data: data } })
  }
  logout() {
    this.cookies.delete("token")
    location.reload();
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
  deleteClient(data: string) {
    this.adminService.deleteclient(data).subscribe((data) => {
      console.log(data);
      this.getclients()
    })
  }
  deleteOwner(data: string) {
    this.adminService.deleteowner(data).subscribe((data) => {
      console.log(data);
      this.getowners()
      // this.owners.map((ele) => {
      //   if (ele.id === data) {
      //     this.owners.slice(this.owners.indexOf(ele))
      //   }
      // });
    })
  }
  getconflicts() {
    this.adminService.fetchconflicts().subscribe((data) => {
      this.conflicts = data
      console.log('conflicts ts', this.conflicts);
    })
  }

}

