// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SERVICES
import { AuthguardGuard } from './services/auth/authguard.guard';
import { AuthguardClientGuard } from './services/auth/authguard-client.guard';
// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NewaccountComponent } from './pages/newaccount/newaccount.component';
import { MapsallesComponent } from './pages/mapsalles/mapsalles.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NewcoachComponent } from './pages/newcoach/newcoach.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewclubComponent } from './pages/newclub/newclub.component';
import { RecrutementComponent } from './pages/recrutement/recrutement.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { AbonnementComponent } from './espace/abonnement/abonnement.component';
import { InfopersoComponent } from './espace/infoperso/infoperso.component';
import { MessagerieComponent } from './espace/messagerie/messagerie.component';
import { ReservationComponent } from './espace/reservation/reservation.component';
import { GestionclientsComponent } from './admin/gestionclients/gestionclients.component';
const routes: Routes = [
  // partie visible par tout le monde
  { path: 'gestionUser', component: GestionclientsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'newaccount', component: NewaccountComponent },
  { path: 'tarifs', component: AbonnementsComponent },
  { path: 'salles', component: MapsallesComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'futurclub', component: NewclubComponent },
  { path: 'recrutement', component: RecrutementComponent },
  { path: 'presentation', component: PresentationComponent },
  // visible par les profils inscrits

  {
    path: 'espacecoach',
    canActivate: [AuthguardGuard],
    component: NewcoachComponent,
  },
  {
    path: 'espacecoach',
    canActivateChild: [AuthguardClientGuard],
    children: [
      { path: 'abonnement', component: AbonnementComponent },
      { path: 'mesinfo', component: InfopersoComponent },
      { path: 'mesmessages', component: MessagerieComponent },
      { path: 'reservation', component: ReservationComponent },
    ],
    component: NewcoachComponent,
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
