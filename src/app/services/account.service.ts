import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User, userConnexion } from '../models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url: string = 'http://localhost:9090/api/leclubsportif';
  userRole = '';
  private userSubject: BehaviorSubject<userConnexion>;
  public user: Observable<userConnexion>;
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<userConnexion>(
      // @ts-ignore
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): userConnexion {
    return this.userSubject.value;
  }

  createUserAccount(form: any) {
    console.log(form);
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.url}/connexion`, { email, password })
      .pipe(
        map(({ token }: any) => {
          let user: userConnexion = { email: email, token: token };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.userSubject.next(null);
  }
}
