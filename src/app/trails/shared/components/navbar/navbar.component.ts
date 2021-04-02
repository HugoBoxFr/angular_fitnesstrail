import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    M.AutoInit();
  }

  displayHome() {
    this.router.navigate([""]);
  }

  displaySelection() {
    this.router.navigate(["selection"]);
    // === this.router.navigateByUrl("/selection");
  }
}
