import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  gmail: string;
  password: string;
  permissions: string[];
}

interface UserLogin{
  gmail: string;
  password: string
}

interface UserAuth{
  gmail: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      name: "Jose Resendiz",
      gmail: "user1@gmail.com",
      password: "1234",
      permissions: ["admin"]
    },
    {
      id: 2,
      name: "Marco",
      gmail: "user2@gmail.com",
      password: "1234",
      permissions: []
    }
  ]

  constructor() { }

  existsUser(userAuth:UserLogin): boolean{
    const user:User|undefined = this.users.find((user)=>{
      return user.gmail === userAuth.gmail && user.password === userAuth.password;
    });

    if(user){
      return true;
    } else {
      return false;
    }
  }

  getUser(userLogin:UserLogin): UserAuth {
    // buscar el usuario
    const user:User|undefined = this.users.find((user)=>{
      return user.gmail === userLogin.gmail && user.password === userLogin.password;
    });

    if(user){
      return {gmail: user.gmail, permissions: user.permissions};
    } else {
      return {gmail: '', permissions: []};
    }
  }
}
