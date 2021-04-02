import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { Coord } from '../shared/models/coord.model';
import { Description } from '../shared/models/description.model';
import { Step } from '../shared/models/step.model';
import { StepService } from '../shared/services/step.service';
import { TrailService } from '../shared/services/trail.service';

@Component({
  selector: 'app-active-trail',
  templateUrl: './active-trail.component.html',
  styleUrls: ['./active-trail.component.scss']
})
export class ActiveTrailComponent implements OnInit {

  stepList: Step[] = [];
  userCoords: Coord = new Coord();
  loading: boolean = false;
  description: Description = new Description();
  stepNum: number = 0;

  constructor(
    private trailService: TrailService,
    private stepService: StepService
  ) { 
    this.trailService.getUserPosition().subscribe(
      (coords: Coord) => {
        this.userCoords = coords;
      },
      () => {}
    );

    this.stepList = this.stepService.getStepList();
    this.description = this.stepList[this.stepNum].description;

    this.stepService.getStepNum().subscribe(
      (num: number) => {
        if (this.stepList.length > num) {
          this.description = this.stepList[num].description;
        } else {
          this.description = {
            header: '',
            content: 'Bravo',
            footer: ''
          }
        }
      }
    )
  }
  
  ngOnInit(): void {
    M.AutoInit();
    this.stepService.getStepSubject().subscribe(
      (data: Step) => {
        this.loading = false;
      },
      () => {}
    );
  }

  verifyStep() {
    this.loading = true;
    this.stepService.verifyStep(this.userCoords);
  };
  
}
