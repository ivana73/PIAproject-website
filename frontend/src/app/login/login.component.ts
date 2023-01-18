import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersServise: UsersService, private ruter: Router) { }

  ngOnInit(): void {
  }
  username: string;
  password: string;

  login(){
    this.usersServise.login(this.username, this.password).subscribe((user: User)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
         this.ruter.navigate(['/user']);
      }
      else{
        alert("Bad data");
      }
    })
  }
}
