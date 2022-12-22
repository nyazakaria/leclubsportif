import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  menuRole: string[] = [];
  sub: any;
  constructor(private Saccount: AccountService) {}

  ngOnInit(): void {
    console.log(this.menuRole, 'menu');
  }

  /* 
  sideMenu() {
    
    console.log(userRole);
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
  } */
}
