import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Objekat } from '../models/objekat.model';
import { Posao } from '../models/posao.model';
import { User } from '../models/user.model';
import { ObjectsService } from '../servisi/objects.service';

@Component({
  selector: 'app-korisnik-posao-detaljno',
  templateUrl: './korisnik-posao-detaljno.component.html',
  styleUrls: ['./korisnik-posao-detaljno.component.css']
})
export class KorisnikPosaoDetaljnoComponent implements OnInit {


  selectedObjekat: Objekat;
  objekatForm: FormGroup;

  objekat: Objekat;
  porukaGreska: any;
  datumEnd: string;
  agencija: string;
  korisnik: User;
  constructor(private formBuilder: FormBuilder, private router: Router, private objectService: ObjectsService) { }
  tip: string;
  adresa: string;
  kvadratura: string;
  brojProstorija: string;
  showCanvasSection: boolean = true;
  objects: Objekat[];

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('user'));
    this.objectService.getObjects(this.korisnik).subscribe({
      next: (objects: Objekat[]) => {
        if (objects != null) {
          this.objects = objects;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.objekatForm = this.formBuilder.group({
      datumEnd: ['', Validators.required],
      agencija: ['', Validators.required]
    });

  }
  selectObject(objekat: Objekat) {
    this.selectedObjekat = objekat;
  }
  posao: Posao;

  onSubmit(): void {
    console.log(this.objekatForm.invalid);

    if (this.objekatForm.invalid) {
      return;
    }
    console.log(this.selectedObjekat);

    console.log(1);
    this.objectService.addPosao(this.korisnik.username, this.objekatForm.value.agencija, this.objekatForm.value.datumEnd, '1', '1', this.selectedObjekat).subscribe((resp)=>{
        console.log(resp['message']);
   });

 }

odjaviSe(){
  localStorage.clear();
  this.router.navigate(['/']);
}
}
