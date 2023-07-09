import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CanvasComponent } from '../canvas/canvas.component';
import { Objekat } from '../models/objekat.model';
import { Posao } from '../models/posao.model';
import { User } from '../models/user.model';
import { ObjectsService } from '../servisi/objects.service';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-korisnik-posao-pregled',
  templateUrl: './korisnik-posao-pregled.component.html',
  styleUrls: ['./korisnik-posao-pregled.component.css']
})
export class KorisnikPosaoPregledComponent implements OnInit {

  objects: Posao[];
  isVisible: boolean;
  constructor(private router: Router, private objectService: ObjectsService,private ucesnikService: UcesnikService) { }
  @ViewChild(CanvasComponent) canvasComponent: CanvasComponent; // Get a reference to the CanvasComponent

  korisnik: User;
  objectsWhole: Posao[] = [];

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('user'));
    this.isVisible =false;
    this.objectService.getPoslove(this.korisnik.username,null).subscribe({
      next: (objects: Posao[]) => {
        if (objects != null) {
          this.objects = objects;
          this.objectsWhole = this.objects;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  objekat: Objekat;
  onItemClick(posao: Posao): void {
    console.log('Clicked object:', posao.objekat);

    this.objectService.getObjectbyID(posao.objekat).subscribe({
      next: (objects: Objekat) => {
        if (objects != null) {
          this.objekat = objects;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.log(this.objekat);
    localStorage.removeItem('myObject');
    localStorage.setItem('myObject',JSON.stringify(this.objekat));
    localStorage.removeItem('rooms');
    localStorage.setItem('rooms',JSON.stringify(this.objekat.rooms));
    localStorage.removeItem('myPosao');
    localStorage.setItem('myPosao',JSON.stringify(posao));
    this.router.navigateByUrl('/posaoDetaljnije', { skipLocationChange: false }).then(() => {
       window.location.reload();
    });
  }

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  pom: Posao[] = [];

  filterStatus(status: string) {
    this.pom = this.objectsWhole;
    if (status === 'requested') {
      this.objects = this.objectsWhole.filter((posao: Posao) => posao.statusOfAcceptance === '1');
    }
    if (status === 'started') {
      this.objects = this.objectsWhole.filter((posao: Posao) => posao.statusOfWork === '2');
    }
    if (status === 'ended') {
      this.objects = this.objectsWhole.filter((posao: Posao) => posao.statusOfWork === '3');
    }
    this.objectsWhole = this.pom;
  }
}
