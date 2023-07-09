import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../servisi/users.service';

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
  porukaGreska: string[] = [];

  login(){
    this.usersServise.login(this.username, this.password).subscribe((user: User)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        console.log(user)
        if (user.tip=='učesnik')
          this.ruter.navigate(['/user']);
        else if (user.tip=='agencija')
          this.ruter.navigate(['/agencija']);
      }
      else{
          this.porukaGreska.push("Neispravan username ili lozinka.")
      }
    })
  }
}
