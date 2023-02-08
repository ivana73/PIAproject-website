import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktuelneRadioniceComponent } from './aktuelne-radionice/aktuelne-radionice.component';
import { IstorijaRadUcesnikComponent } from './istorija-rad-ucesnik/istorija-rad-ucesnik.component';
import { LoginComponent } from './login/login.component';
import { PrijavljeneRadioniceComponent } from './prijavljene-radionice/prijavljene-radionice.component';
import { ProfilUcesnikComponent } from './profil-ucesnik/profil-ucesnik.component';
import { RadioniceDetailsComponent } from './radionice-details/radionice-details.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profilUcesnik', component: ProfilUcesnikComponent},
  {path: 'istorijaRadUcesnik', component: IstorijaRadUcesnikComponent},
  {path: 'radionicaDetails', component: RadioniceDetailsComponent},
  {path: 'aktuelneRad', component: AktuelneRadioniceComponent},
  {path: 'prijavljeneRad', component: PrijavljeneRadioniceComponent},
  {path: 'user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
