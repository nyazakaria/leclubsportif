import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userRole = '';
  constructor(private http: HttpClient) {}

  createUserAccount(newUser: any) {
    console.log(newUser);
  }

  connexionToMyAccount(user: any) {
    let getRole = this.mockRole(user);
    this.userRole = getRole.role;
  }

  getUserRole() {
    return this.userRole;
  }

  mockRole(user: any) {
    let role = '';
    if (user.email === 'admin@admin.fr') {
      role = 'admin';
      return { ...user, role };
    }
    if (user.email === 'adherent@mail.fr') {
      role = 'adherent';
      return { ...user, role };
    }
    if (user.email === 'coach@mail.fr') {
      role = 'coach';
      return { ...user, role };
    }
  }
}
