import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // That's The Api Path That I Use.
  path = 'https://reqres.in/api/users';

  // Getting All Users Data From Api  
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/v1/user').
      pipe(
        map((data: any) => {
          return data
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

  // Getting Single User Data According to User ID 
  getSingleUser(id: any) {
    return this.http.get<User>('http://localhost:3000/api/v1/user'+ `/${id}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

  // Create User Data According to Parameters of Function
  createUser(username: String, firstname: String,lastname:String,avatar:String,password:String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    const postData = {
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "avatar":avatar || "",
      "password":password

    }

    return this.http.post<any>('http://localhost:3000/api/v1/user', postData, httpOptions).pipe(
      tap(data => {
        return data;
      })
    );

  }

  // Delete User Data According to User ID
  deleteUser(id: any) {
    return this.http.delete<User>('http://localhost:3000/api/v1/user' + `/${id}`).pipe(
      tap(data => {
        return data;
      })
    )
  }

  // Register User to Reqres.api According to Parameters of Function
  registerUser(username: String, password: String): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const postData = {
      "username": username,
      "password": password
    }
    return this.http.post<String>('http://localhost:3000/api/v1/register', postData, httpOptions).pipe(
      tap(data => {
        console.log(data);
      }));
  }

  // Update User from reqres.api By Giving name,job and id parameters
  updateUser(username: String, firstname: String, lastname: String,password:String,_id:any): Observable<String> {
    const body = { "username": username, "firstname": firstname,"lastname":lastname,"password":password };

    return this.http.put<any>('http://localhost:3000/api/v1/user' + `/${_id}`, body).pipe(
      tap(data => {
        console.log(data)
      }));

  }


  // Getting All Users Data From Api  
  getUsersDelay() {
    return this.http.get<User[]>('https://reqres.in/api/users?page=2&delay=5').
      pipe(
        map((data: any) => {
          return data.data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }



}
