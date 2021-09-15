import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateClientInfosService {
  constructor(private http: HttpClient) {}

  updateClient(dataClient: any) {
    return this.http.put('http://localhost:3000/client/update/:id', dataClient);
  }

  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }
}
