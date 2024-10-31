import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    const loggedIn = localStorage.getItem('loggedIn')
    if(loggedIn !== null){
      return true;
    } else {
      return false;
    }
  }

  login(){
    localStorage.setItem('loggedIn', "true")
  }

  logout(){
    localStorage.removeItem('loggedIn')
  }
}
