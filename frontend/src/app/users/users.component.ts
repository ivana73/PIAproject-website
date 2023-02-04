import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
  }

  korisnik:User;

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
