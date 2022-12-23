import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { interval } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  user: any | undefined;
  userRole: any;
  menuRole: any;
  sub: any;
  constructor(private Saccount: UsersService) {}

  ngOnInit(): void {
    console.log(this.user, 'menu');
  }

  getAllUser(role: any) {
    this.user = this.Saccount.getAllUser();
    this.user.map((user: any) => {
      if (role === user.role) {
        this.sideMenu(role);
        this.userRole = role;
      }
    });
    console.log(this.Saccount.getAllUser());
  }

  sideMenu(role: any) {
    console.log(role);
    switch (role) {
      case 'admin':
        this.menuRole = [
          'Factures',
          'statistiques',
          'gestion clients',
          'gestion coachs',
        ];
        break;
      case 'coach':
        this.menuRole = ['agenda', 'reservations', 'messagerie'];
        break;
      case 'user':
        this.menuRole = [
          'messagerie',
          'abonnement',
          'reservation',
          'info perso',
        ];
        break;
      default:
        null;
        break;
    }
  }
}
