import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { HomeComponent } from './pages/home/home.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NewaccountComponent } from './pages/newaccount/newaccount.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { MapsallesComponent } from './pages/mapsalles/mapsalles.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NewcoachComponent } from './pages/newcoach/newcoach.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewclubComponent } from './pages/newclub/newclub.component';
import { RecrutementComponent } from './pages/recrutement/recrutement.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    HomeComponent,
    ConnexionComponent,
    NewaccountComponent,
    FooterComponent,
    AbonnementsComponent,
    MapsallesComponent,
    ActivitesComponent,
    BlogComponent,
    NewcoachComponent,
    ContactsComponent,
    NewclubComponent,
    RecrutementComponent,
    PresentationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
