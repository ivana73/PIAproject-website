import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-agencije-moje',
  templateUrl: './agencije-moje.component.html',
  styleUrls: ['./agencije-moje.component.css']
})
export class AgencijeMojeComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService, private userService: UsersService) { }
  agencije:User[] = []
  poImenu: string;
  poMestu: string;

  ngOnInit(): void {
    this.ucesnikService.getSveAgencije().subscribe((agencije: User[])=>{
      if(agencije){
        this.agencije = agencije;
      }
    })
  }
  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  udjiUradionicu(radionicePrijavljene: User) {
    sessionStorage.setItem("agencija", JSON.stringify(radionicePrijavljene));
    this.router.navigate(['/agencijeMoje']);
  }

  sortNameWay:number = 1;
  sortAddressWay:number = 1;

  sortName(): void {
    if (this.sortNameWay == 1) {
      this.sortNameWay = 2;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.nazivOrganizacije < b.nazivOrganizacije) {
          return -1;
        }
        if (a.nazivOrganizacije > b.nazivOrganizacije) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortNameWay = 1;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.nazivOrganizacije > b.nazivOrganizacije) {
          return -1;
        }
        if (a.nazivOrganizacije < b.nazivOrganizacije) {
          return 1;
        }
        return 0;
      });
    }
  }

  sortPlace(): void {
    if (this.sortAddressWay == 1) {
      this.sortAddressWay = 2;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.adresaSedistaOrg < b.adresaSedistaOrg) {
          return -1;
        }
        if (a.adresaSedistaOrg > b.adresaSedistaOrg) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortAddressWay = 1;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.adresaSedistaOrg > b.adresaSedistaOrg) {
          return -1;
        }
        if (a.adresaSedistaOrg < b.adresaSedistaOrg) {
          return 1;
        }
        return 0;
      });
    }
  }


  // sortAbout(): Radionica[]  {
  //   return this.radionice.sort((a,b)=>{
  //     if (a.opis < b.opis) {
  //       return -1;
  //     }
  //     if (a.opis > b.opis) {
  //       return 1;
  //     }
  //     return 0;
  //     });
  // }

  // sortMore(): Radionica[]  {
  //   return this.radionice.sort((a,b)=>{
  //     if (a.detaljnije < b.detaljnije) {
  //       return -1;
  //     }
  //     if (a.detaljnije > b.detaljnije) {
  //       return 1;
  //     }
  //     return 0;
  //     });
  // }

  // sortDate(): Radionica[] {
  //   return this.radionice.sort((a,b)=>{
  //     const [ daya,montha, yeara] = a.datum.split('/');
  //     const datea = new Date(+yeara, +montha - 1, +daya);

  //     const [ dayb, monthb, yearb] = b.datum.split('/');
  //     const dateb = new Date(+yearb, +monthb - 1, +dayb);

  //     if (datea < dateb)
  //     return -1;
  //     if (datea == dateb)
  //     return 0;
  //     (datea > dateb)
  //     return 1;
  //   });
  // }

  searchRadionice() {
    let type = 0;
    if (this.poMestu != null) {
      type = 1;
      if (this.poImenu != null) type = 3;
    } else {
      if (this.poImenu != null) type = 2;
    }

    console.log(this.poImenu + " " + this.poMestu + " " + type);
    if (type != 0) {
      let j = 0;
      for (let i = 0; i < this.agencije.length; i++) {
        if (type == 1) {
          if (this.agencije[i].adresaSedistaOrg == this.poMestu) {
            this.agencije[j++] = this.agencije[i];
          }
        }
        if (type == 2) {
          if (this.agencije[i].nazivOrganizacije == this.poImenu) {
            this.agencije[j++] = this.agencije[i];
          }
        }
        if (type == 3) {
          if (
            this.agencije[i].adresaSedistaOrg == this.poMestu &&
            this.agencije[i].nazivOrganizacije == this.poImenu
          ) {
            this.agencije[j++] = this.agencije[i];
          }
        }
      }
      this.agencije = this.agencije.slice(0, j);
    } else {
      this.agencije = this.agencije;
      window.location.reload();
    }

    this.poImenu = null;
    this.poMestu = null;
    // window.location.reload();
  }

}
