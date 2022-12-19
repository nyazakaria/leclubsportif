import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  createUserAccount(newUser: any) {
    console.log(newUser);
  }

  connexionToMyAccount(user: any) {
    console.log(user);
  }
}
