import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = new User();

  constructor() { }

  getUser() {
    return this.user;
  }

  setUserName(name: string) {
    this.user.name = name;
  }
}
