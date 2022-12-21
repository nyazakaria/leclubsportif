import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  // partie visible par tout le monde
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
  { path: 'espacecoach', component: NewcoachComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
