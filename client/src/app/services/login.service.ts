import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  // That's the API Path that I use
  path = 'https://reqres.in/api/login';

  //Provide makes a request to api and according to respond creates local storage item which name is token.
  // In addition,Creates a session storage item and sends User Object.
  loginRequest(username: String, password: String): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    const postData = {
      "username": username,
      "password": password
    }
    return this.http.post<String>('http://localhost:3000/api/v1/login', postData, httpOptions).pipe(
      tap(data => {
        localStorage.setItem('token', JSON.stringify(data))
        const user = {
          'id':1,
          'name': 'Berkay',
          'surname':'Dursun',
          'email':'berkay_dursun@outlook.com',
          'password':'123456',
          'avatarURL':'https://gravatar.com/avatar/e956da11d4bee144d65ba12c70ac6f53?s=400&d=robohash&r=x'
        };

        sessionStorage.setItem('user',JSON.stringify(user));

        this.router.navigate(["users"])

      }))
      



  }
  


}
