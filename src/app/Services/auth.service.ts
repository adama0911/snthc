import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { Http,Headers} from '@angular/http';


/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class AuthService {

  private link = 'http://127.0.0.1:8000';

 private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

 constructor(private http:HttpClient) {
  // this.headers.append('Content-Type','application/x-www-form-urlencoded');
  }


  logint(infos: String):Promise<any>{
    let datas = 'params=' + infos;
    let Url = this.link + '/connexion/';
    return new Promise((resolve,reject)=> {
      this.http.post<any>(Url, datas,this.httpOptions).subscribe(rep=>{
            console.log(rep);
            resolve(rep);
      });
     });
  }


 sinUp(infos: String):Promise<any>{
    let datas = 'params=' + infos;
    console.log(datas)
    let Url = this.link + '/connexion/newUser';
    return new Promise((resolve,reject)=>{
      this.http.post<any>(Url, datas, this.httpOptions).subscribe(rep =>{
        console.log(rep);
        resolve(rep);
      });
    });

  }


/*  public sinUp(infos: String){
    const datas = 'params=' + infos;
    const Url = this.link + '';
    return this.http.post< any >(Url, datas, this.httpOptions)
    .pipe(
       catchError(this.handleError)
    );
  }*/


  /*private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }*/

}
