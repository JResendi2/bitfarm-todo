import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  gmail: string;
  password: string;
}

interface UserAuth{
  gmail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      name: "Jose Resendiz",
      gmail: "resendiz@gmail.com",
      password: "1234"
    },
    {
      id: 2,
      name: "Marco",
      gmail: "resendiz@gmail.com",
      password: "1234"
    }
  ]

  constructor() { }

  existsUser(userAuth:UserAuth){
    const user:User|undefined = this.users.find((user)=>{
      return user.gmail === userAuth.gmail && user.password === userAuth.password;
    });

    if(user){
      return true;
    } else {
      return false;
    }
  }
}
