import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  client : any=[];
  fav:any=[]
  constructor(private  UserService: UserService) { }
 
  
  ngOnInit(): void {
    this.getData();
    this.getFavCars()
  }
  getData(){
    this.UserService.getUser().subscribe((resp :any)=>{
      this.client= resp
      console.log(this.client); 
    })
  }

  getFavCars(){
    this.UserService.getFav().subscribe((resp)=>{
      this.fav= resp;
      console.log('fav'); 
    })
}
}
