import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public enableBtn: boolean = true;
  public errorMessage: string = 'Votre nom doit avoir au minimun 4 caractères.';
  public userName: string = '';
  public user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
  }

  inputUserName(name: string) {
    this.userName = name;
    // if (name.length > 3) {
    //   this.enableBtn = false;
    //   this.errorMessage = '';
    // } else {
    //   this.enableBtn = true;
    //   this.errorMessage = 'Votre nom doit avoir au minimun 4 caractères.'
    // }

    // if (name.length > 3) {
    //   this.enableBtn = false;
    // } else {
    //   this.enableBtn = true;
    // }
  }

  onSubmit(name: string) {
    this.userService.setUserName(name);
    this.router.navigate(['selection']);
  }
}
