import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CanvasComponent } from '../canvas/canvas.component';
import { Objekat } from '../models/objekat.model';
import { ObjectsService } from '../servisi/objects.service';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-objekti-moji',
  templateUrl: './objekti-moji.component.html',
  styleUrls: ['./objekti-moji.component.css']
})
export class ObjektiMojiComponent implements OnInit {
  objects: Objekat[];
  isVisible: boolean;
  constructor(private router: Router, private objectService: ObjectsService,private ucesnikService: UcesnikService) { }
  @ViewChild(CanvasComponent) canvasComponent: CanvasComponent; // Get a reference to the CanvasComponent

  ngOnInit(): void {
    let username = JSON.parse(localStorage.getItem('user'));
    this.isVisible =false;
    this.objectService.getObjects(username.username).subscribe({
      next: (objects: Objekat[]) => {
        if (objects != null) {
          this.objects = objects;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  onItemClick(object: Objekat): void {
    localStorage.removeItem('myObject');
    localStorage.setItem('myObject',JSON.stringify(object));
    localStorage.removeItem('rooms');
    localStorage.setItem('rooms',JSON.stringify(object.rooms));
    this.isVisible = true;
    console.log('Clicked object:', object);

    this.router.navigateByUrl('/posaoDetaljnije', { skipLocationChange: false }).then(() => {
      window.location.reload();
    });

  }

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
