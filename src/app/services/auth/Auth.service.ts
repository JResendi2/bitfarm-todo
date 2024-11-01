import { Injectable } from '@angular/core';

interface UserAuth{
  gmail: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    const loggedIn = localStorage.getItem('userAuth');
    if(loggedIn !== null){
      return true;
    } else {
      return false;
    }
  }

  login(userAuth: UserAuth){
    localStorage.setItem('userAuth', JSON.stringify(userAuth));
  }

  logout(){
    localStorage.removeItem('userAuth');
  }

  getUser(): UserAuth{
    const userLocalStorage = localStorage.getItem('userAuth');

    if(userLocalStorage){
      return JSON.parse(userLocalStorage);
    } else {
      return {gmail: '', permissions: []}
    }
  }
}
