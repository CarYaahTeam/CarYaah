import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  client : any=[]
  constructor(private  UserService: UserService) { }
 
  
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.UserService.getUser().subscribe((resp :any)=>{
      this.client= resp
    
      console.log(this.client);
      
    })
  }
}
