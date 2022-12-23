import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  postMessage(form: Contact) {
    this.http.post(`${Environment.url}/contact`, form).subscribe((res: any) => {
      console.log(res);
    });
  }
}
