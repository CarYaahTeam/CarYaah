import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService) { }
  clients: any
  owners: any

  ngOnInit(): void {
    this.getclients()
    this.getowners()
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


}

