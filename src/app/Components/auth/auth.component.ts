import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login;
  public password;
  public nom;
  public prenom;
  public profession;
  public pays;
  public day;
  public moth;
  public year;
  public email;
  public pwd1;
  public pwd2;
  public phone;

  public section = 1;


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.login = '';
    this.password = '';
  }

  longin() {
    // this.authService.logint(JSON.stringify({'login' : this.login, 'pwd' : this.password })).subscribe(data => {
    //     console.log(data);
    //     this.router.navigate(['/accueil']);
    // });
    this.router.navigate(['/accueil']);
  }

  sinup() {
    // this.authService.sinUp(JSON.stringify({'login' : this.login, 'pwd' : this.password })).subscribe(data => {
    //     console.log(data);
    //     this.router.navigate(['/accueil']);
    // });
    this.router.navigate(['/accueil']);
  }


}
