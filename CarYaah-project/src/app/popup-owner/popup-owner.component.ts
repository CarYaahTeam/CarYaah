import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { OwnerService } from '../owner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup-owner',
  templateUrl: './popup-owner.component.html',
  styleUrls: ['./popup-owner.component.css'],
})
export class PopupOwnerComponent implements OnInit {
  constructor(private msg: OwnerService) {}

  ngOnInit(): void {}
  sendMsg(data: object) {
    this.msg.sendMsg(data).subscribe((data) => {
      alert('Msg sended');
      console.log(data);
    });
  }
}
