import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  allUser: any;
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any[]> {
    this.http
      .get('http://localhost:9191/api/leclubsportif/customer/customers')
      .subscribe((res: any) => {
        this.allUser = res;
      });
    return this.allUser;
  }

  deleteUserById(id: any) {
    return this.http.delete(
      `http://localhost:9191/api/leclubsportif/customer/deleteCustomer/${id}`
    );
  }
}
