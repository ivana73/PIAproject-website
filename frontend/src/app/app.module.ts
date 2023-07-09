import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './signin/signin.component';
import { ProfilUcesnikComponent } from './profil-ucesnik/profil-ucesnik.component';
import { IstorijaRadUcesnikComponent } from './istorija-rad-ucesnik/istorija-rad-ucesnik.component';
import { RadioniceDetailsComponent } from './radionice-details/radionice-details.component';
import { AktuelneRadioniceComponent } from './aktuelne-radionice/aktuelne-radionice.component';
import { PrijavljeneRadioniceComponent } from './prijavljene-radionice/prijavljene-radionice.component';
import { NeregistrovaniUserComponent } from './neregistrovani-user/neregistrovani-user.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ObjektiMojiDetailsComponent } from './objekti-moji-details/objekti-moji-details.component';
import { ObjektiMojiComponent } from './objekti-moji/objekti-moji.component';
import { AgencijaComponent } from './agencija/agencija.component';
import { AgencijeMojeComponent } from './agencije-moje/agencije-moje.component';
import { AgencijeMojeDetaljnoComponent } from './agencije-moje-detaljno/agencije-moje-detaljno.component';
import { KorisnikPosaoDodavanjeComponent } from './korisnik-posao-dodavanje/korisnik-posao-dodavanje.component';
import { KorisnikPosaoPregledComponent } from './korisnik-posao-pregled/korisnik-posao-pregled.component';
import { KorisnikPosaoDetaljnoComponent } from './korisnik-posao-detaljno/korisnik-posao-detaljno.component';
import { AgencijaProfilComponent } from './agencija-profil/agencija-profil.component';
import { AgencijaPosaoComponent } from './agencija-posao/agencija-posao.component';
import { AgencijaPosaoDetaljnoComponent } from './agencija-posao-detaljno/agencija-posao-detaljno.component';
import { CanvasBasicComponent } from './canvas-basic/canvas-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SigninComponent,
    ProfilUcesnikComponent,
    IstorijaRadUcesnikComponent,
    RadioniceDetailsComponent,
    AktuelneRadioniceComponent,
    PrijavljeneRadioniceComponent,
    NeregistrovaniUserComponent,
    CanvasComponent,
    ObjektiMojiDetailsComponent,
    ObjektiMojiComponent,
    AgencijaComponent,
    AgencijeMojeComponent,
    AgencijeMojeDetaljnoComponent,
    KorisnikPosaoDodavanjeComponent,
    KorisnikPosaoPregledComponent,
    KorisnikPosaoDetaljnoComponent,
    AgencijaProfilComponent,
    AgencijaPosaoComponent,
    AgencijaPosaoDetaljnoComponent,
    CanvasBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
