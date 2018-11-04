import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login:string;
  public password:string;
  public nom:string;
  public prenom:string;
  public profession:string;
  public pays:string;
  public day:string;
  public moth:string;
  public year:string;
  public email:string;
  public pwd1:string;
  public pwd2:string;
  public phone:string;

  public section = 1;
  public errorLogin=false;


  constructor(private authService: AuthService, private router: Router) {}
//  constructor(private router: Router) {}

  ngOnInit() {
    this.login = '';
    this.password = '';
  }

  longin() {
    this.authService.logint(JSON.stringify({'login' : this.login, 'pwd' : this.password })).then(data => {
         console.log(data);
         switch(parseInt(data.etat)){
           case 1:{
               this.router.navigate(['/accueil']);
               break;
           }
           case 0:{
             console.log("donnee incorrect");
             this.errorLogin=true;
             break;
           }
           default:{break;}
         }
     });
    //this.router.navigate(['/accueil']);
  }

  sinup() {
     this.authService.sinUp(JSON.stringify({'prenom':this.prenom,'nom':this.nom,'email':this.email,'phone':this.phone,'pwd':this.pwd1,'country':this.pays,'profession':this.profession })).then(data => {
         console.log(data);
         //this.router.navigate(['/accueil']);
     });
    //this.router.navigate(['/accueil']);
  }


}
