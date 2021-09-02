import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService,) { }

  ngOnInit(): void {
    this.getclients()
    this.getowners()
  }


  getclients() {
    this.adminService.fetchclients()
  }
  getowners() {
    const x = this.adminService.fetchowners()
    console.log("ts", x);

  }

}

