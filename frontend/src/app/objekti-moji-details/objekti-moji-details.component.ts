import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Objekat } from '../models/objekat.model';
import { Room } from '../models/room.model';
import { ObjectsService } from '../servisi/objects.service';
import { UcesnikService } from '../servisi/ucesnik.service';
import * as uuid from 'uuid';
import { User } from '../models/user.model';

@Component({
  selector: 'app-objekti-moji-details',
  templateUrl: './objekti-moji-details.component.html',
  styleUrls: ['./objekti-moji-details.component.css']
})
export class ObjektiMojiDetailsComponent implements OnInit {
  objekatForm: FormGroup;
  objekat: Objekat;
  porukaGreska: any;
  korisnik: User;
  constructor(private formBuilder: FormBuilder, private router: Router, private objectService: ObjectsService,private ucesnikService: UcesnikService) { }
  username: string;
  tip: string;
  adresa: string;
  kvadratura: string;
  brojProstorija: string;
  showCanvasSection: boolean = true;
  rooms: Room[] = [];
   room1: Room = { left: 10, top: 10, width: 100, height: 100, inUse: 1 };
   room2: Room = { left: 110, top: 10, width: 100, height: 50, inUse: 0 };
   room3: Room = { left: 110, top: 60, width: 100, height: 40, inUse: 0 };

  ngOnInit(): void {
    this.objekatForm = this.formBuilder.group({
      tip: ['', Validators.required],
      adresa: ['', Validators.required],
      kvadratura: ['', Validators.required],
      brojProstorija: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.objekatForm.invalid) {
      return;
    }
    const myId = uuid.v4();
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.username = this.korisnik.username;
    this.tip = this.objekatForm.value.tip;
    this.adresa = this.objekatForm.value.adresa;
    this.kvadratura = this.objekatForm.value.kvadratura;
    this.brojProstorija = this.objekatForm.value.brojProstorija;
    this.rooms[0] = this.room1;
    this.rooms[1] = this.room2;
    this.rooms[2] = this.room3;
    console.log(this.rooms);



    this.objectService.addObject(this.username, this.tip, this.adresa,
      this.kvadratura, this.brojProstorija, this.rooms, myId).subscribe((resp)=>{
        console.log(resp['message']);
  })
  // window.location.reload()
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    const fileContent = fileReader.result as string;
    this.objekat = JSON.parse(fileContent);
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.username = this.korisnik.username;
    this.tip = this.objekat[0].tip ;
    this.adresa = this.objekat[0].adresa;
    this.kvadratura = this.objekat[0].kvadratura;
    this.brojProstorija = this.objekat[0].brojProstorija;
    console.log(this.objekat[0].tip);
    this.rooms[0] = this.room1;
    this.rooms[1] = this.room2;
    this.rooms[2] = this.room3;
    const myId = uuid.v4();

    this.objectService.addObject(this.username, this.tip, this.adresa,
      this.kvadratura, this.brojProstorija, this.rooms, myId).subscribe((resp)=>{
        console.log(resp['message']);
  })
  };
  fileReader.readAsText(file);
}

odjaviSe(){
  localStorage.clear();
  this.router.navigate(['/']);
}
}
