import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fabric } from 'fabric';
import { Objekat } from '../models/objekat.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  fill1: string;
    fill2: string;
    fill3: string;

  constructor(private router: Router,) { }
  myobject: Objekat;
  ngOnInit(): void {
    const canvas = new fabric.Canvas('myCanvas');
    let object = JSON.parse(localStorage.getItem('rooms'));
    this.myobject = JSON.parse(localStorage.getItem('myObject'));
    if (object != null) {
          console.log(object);
      if (object[0].inUse == 0) {
        this.fill1 = 'transparent';
      }
      else if(object[0].inUse==1) {
        this.fill1 = 'red';
      }else  this.fill1 = 'green';

      if (object[1].inUse == 0) {
        this.fill2 = 'transparent';
      }
      else if(object[1].inUse==1) {
        this.fill2 = 'red';
      }else  this.fill2 = 'green';

      if (object[2].inUse == 0) {
        this.fill3 = 'transparent';
      }
      else if(object[2].inUse==1) {
        this.fill3 = 'red';
      }else  this.fill3 = 'green';

      const room1 = new fabric.Rect({ left: object[0].left, top: object[0].top, width: object[0].width, height: object[0].height, fill: this.fill1 , stroke: 'black', strokeWidth: 1 });
      const room2 = new fabric.Rect({ left: object[1].left,  top: object[1].top, width: object[1].width, height: object[1].height,fill: this.fill2 ,stroke: 'black', strokeWidth: 1 });
      const room3 = new fabric.Rect({ left: object[2].left,  top: object[2].top, width: object[2].width, height: object[2].height,   fill: this.fill3, stroke: 'black', strokeWidth: 1 });
      canvas.add(room1, room2, room3);
    }
    else {
      const room1 = new fabric.Rect({ left: 30, top: 10, width: 120, height: 120, fill: 'transparent', stroke: 'black', strokeWidth: 1 });
      const room2 = new fabric.Rect({ left: 130, top: 10, width: 120, height: 120, fill: 'transparent', stroke: 'black', strokeWidth: 1 });
      const room3 = new fabric.Rect({ left: 130, top: 80, width: 120, height: 120, fill: 'transparent', stroke: 'black', strokeWidth: 1 });
      canvas.add(room1, room2, room3);
    }  // Add rooms to the canvas

  }
  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
