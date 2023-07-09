import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktuelneRadioniceComponent } from './aktuelne-radionice/aktuelne-radionice.component';
import { IstorijaRadUcesnikComponent } from './istorija-rad-ucesnik/istorija-rad-ucesnik.component';
import { LoginComponent } from './login/login.component';
import { ObjektiMojiDetailsComponent } from './objekti-moji-details/objekti-moji-details.component';
import { PrijavljeneRadioniceComponent } from './prijavljene-radionice/prijavljene-radionice.component';
import { ProfilUcesnikComponent } from './profil-ucesnik/profil-ucesnik.component';
import { RadioniceDetailsComponent } from './radionice-details/radionice-details.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ObjektiMojiComponent } from './objekti-moji/objekti-moji.component';
import { AgencijaComponent } from './agencija/agencija.component';
import { AgencijeMojeComponent } from './agencije-moje/agencije-moje.component';
import { AgencijeMojeDetaljnoComponent } from './agencije-moje-detaljno/agencije-moje-detaljno.component';
import { KorisnikPosaoDetaljnoComponent } from './korisnik-posao-detaljno/korisnik-posao-detaljno.component';
import { KorisnikPosaoDodavanjeComponent } from './korisnik-posao-dodavanje/korisnik-posao-dodavanje.component';
import { KorisnikPosaoPregledComponent } from './korisnik-posao-pregled/korisnik-posao-pregled.component';
import { AgencijaProfilComponent } from './agencija-profil/agencija-profil.component';
import { AgencijaPosaoComponent } from './agencija-posao/agencija-posao.component';
import { AgencijaPosaoDetaljnoComponent } from './agencija-posao-detaljno/agencija-posao-detaljno.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profilUcesnik', component: ProfilUcesnikComponent},
  {path: 'objektiMoji', component: ObjektiMojiDetailsComponent},
  {path: 'objektiSviMoji', component: ObjektiMojiComponent},
  {path: 'canvas', component: CanvasComponent},
  {path: 'istorijaRadUcesnik', component: IstorijaRadUcesnikComponent},
  {path: 'radionicaDetails', component: RadioniceDetailsComponent},
  {path: 'aktuelneRad', component: AktuelneRadioniceComponent},
  {path: 'prijavljeneRad', component: PrijavljeneRadioniceComponent},
  {path: 'user', component: UsersComponent},
  {path: 'agencija', component: AgencijaComponent},
  {path: 'agencije', component: AgencijeMojeComponent},
  {path: 'posaoDodavanje', component: KorisnikPosaoDodavanjeComponent},
  {path: 'posaoDetaljnije', component: KorisnikPosaoDetaljnoComponent},
  {path: 'posaoPregled', component: KorisnikPosaoPregledComponent},
  {path: 'agencijeMoje', component: AgencijeMojeDetaljnoComponent},
  {path: 'agencijaProfil', component: AgencijaProfilComponent},
  {path: 'agencijaPosao', component: AgencijaPosaoComponent},
  {path: 'agencijaPosaoDetaljno', component: AgencijaPosaoDetaljnoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
