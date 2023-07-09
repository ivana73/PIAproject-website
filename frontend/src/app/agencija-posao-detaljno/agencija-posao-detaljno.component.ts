import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Objekat } from '../models/objekat.model';
import { Posao } from '../models/posao.model';
import { User } from '../models/user.model';
import { ObjectsService } from '../servisi/objects.service';

@Component({
  selector: 'app-agencija-posao-detaljno',
  templateUrl: './agencija-posao-detaljno.component.html',
  styleUrls: ['./agencija-posao-detaljno.component.css']
})
export class AgencijaPosaoDetaljnoComponent implements OnInit {

  tipFormulara: string = 'pregled za uplatu';
  selectedObjekat: Objekat;
  objekatForm: FormGroup;

  objekat: Objekat;
  porukaGreska: any;
  novac: string;
  status: string;
  korisnik: User;
  constructor(private formBuilder: FormBuilder, private router: Router, private objectService: ObjectsService) { }
  tip: string;
  adresa: string;
  kvadratura: string;
  brojProstorija: string;
  showCanvasSection: boolean = true;
  objects: Objekat[];
  myPosao:Posao;

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('user'));
    this.myPosao = JSON.parse(localStorage.getItem('myposao'));

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
      novac: ['', Validators.required],
      status: ['', Validators.required]
    });

  }


  onSubmit(): void {
    console.log(this.objekatForm.invalid);

    if (this.objekatForm.invalid) {
      return;
    }
    console.log(this.objekatForm.value.status);
    console.log(this.objekatForm.value.novac);



    if (this.objekatForm.value.status == 'Odbijeno') {
      this.myPosao.statusOfAcceptance = '0';
      this.myPosao.agencija = this.myPosao.agencija + '*odbijeno*'
    }
    else  if (this.objekatForm.value.status == 'Odobreno') {
      console.log(this.myPosao);
      this.myPosao.statusOfAcceptance = '2';
      this.myPosao.novac = this.objekatForm.value.novac;
    }

    this.objectService.updatePosao(this.myPosao).subscribe((resp)=>{
        console.log(resp['message']);
   });
   this.tipFormulara = 'promena objekta';
   if (this.objekatForm.value.status == 'Odbijeno') {
    this.router.navigate(['/agencijaPosao']);
   } else
   window.location.reload();
 }

odjaviSe(){
  localStorage.clear();
  this.router.navigate(['/']);
}
}
