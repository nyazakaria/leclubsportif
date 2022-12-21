import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  menuRole: string[] = [];
  constructor(private Saccount: AccountService) {}

  ngOnInit(): void {
    console.log(this.menuRole);
  }

  sideMenu() {
    const userRole = this.Saccount.getUserRole();
    switch (userRole) {
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
      case 'adherent':
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
