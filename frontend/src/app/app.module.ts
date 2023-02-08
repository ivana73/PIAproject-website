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
    PrijavljeneRadioniceComponent
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
