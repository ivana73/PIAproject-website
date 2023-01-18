import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private korisnikServis: UsersService) { }

  ngOnInit(): void {
    this.ulogovan = JSON.parse(localStorage.getItem("user"))

  }
  useri: User[]
  ulogovan: User

}
