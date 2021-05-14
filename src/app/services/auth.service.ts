import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor() { }

  auth({ username, password }) {
    // console.log(username, password)
    if (username === 'root' && password === 'root') {
      this.isAuth = true;
      return true;
    }
    else {
      this.isAuth = false;
      return false;
    }
  }
}

