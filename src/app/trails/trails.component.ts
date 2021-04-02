import { Component, OnInit } from '@angular/core';
import { Trail } from './shared/models/trail.model';
import { User } from './shared/models/user.model';
import { TrailService } from './shared/services/trail.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {

  public user: User;
  public trail: Trail;

  constructor(
    private userService: UserService,
    private trailService: TrailService
  ) { 
    this.user = this.userService.user;
    this.trail = this.trailService.trail;
  }

  ngOnInit(): void {
    this.method();
  }

  method() {
    let userLat = this.trail.userCoords.lat.toString().substring(0, 9);
    let userLon = this.trail.userCoords.lon.toString().substring(0, 7);

    let stepLatCoord = this.trail.arrayOfSteps[0].stepCoords.lat.toString().substring(0, 9);
    let stepLonCoord = this.trail.arrayOfSteps[0].stepCoords.lon.toString().substring(0, 7);

    if (userLat === stepLatCoord && userLon === stepLonCoord) {
      // alert("ok")
    }
  }
}
