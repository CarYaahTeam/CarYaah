import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private http: HttpClient) { }
  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }
}