import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-feedback-client',
  templateUrl: './feedback-client.component.html',
  styleUrls: ['./feedback-client.component.css']
})
export class FeedbackClientComponent implements OnInit {
  constructor(private msg:UserService) { }
  ngOnInit(): void {
  }
  sendMessage(data:object){
  this.msg.sendMsg(data).subscribe((data)=>{
    console.log(data)
  })
  }
}
