import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestionclients',
  templateUrl: './gestionclients.component.html',
  styleUrls: ['./gestionclients.component.scss'],
})
export class GestionclientsComponent implements OnInit {
  userList: any;
  constructor(private sUser: UsersService, private router: Router) {
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
    console.log('userList');
  }

  getUsers() {
    this.userList = this.sUser.getAllUser();
    console.log(this.userList);
  }

  deleteUser(id: any) {
    this.sUser.deleteUserById(id).subscribe((result: any) => {
      console.log(result);
    });
    this.router.navigate(['/gestionUser']);
  }
}
