import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      return false;
    }

  }

  public logOut(){
    sessionStorage.removeItem('user');
    return localStorage.removeItem('token');
  }
  
}
