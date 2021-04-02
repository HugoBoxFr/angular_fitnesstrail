import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Coord } from '../models/coord.model';
import { steps } from '../models/step.mock';
import { Step } from '../models/step.model';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  public step: Step = new Step();
  public stepList: Step[] = steps;
  public currentStep: number = 0; 
  private subject: Subject<Step> = new Subject();
  private numStep: Subject<number> = new Subject();

  constructor(
    private router: Router,
  ) {}

  getStepList() {
    return this.stepList;
  }

  getStepSubject(): Subject<Step> {
    return this.subject;
  }

  getStepNum(): Subject<number> {
    return this.numStep;
  }

  verifyStep(coords: Coord) {
    console.log(coords);
    
    let currentStepLat = this.stepList[this.currentStep].stepCoords.lat;
    let currentStepLon = this.stepList[this.currentStep].stepCoords.lon;

    if (currentStepLat === coords.lat 
      && currentStepLon === coords.lon
      && this.currentStep < this.stepList.length) {
        this.stepValidated();
    } else {
        this.stepNotValidated();
    }

    if (this.currentStep === this.stepList.length - 1) {
      this.trailValidated();
    } 
  }

  stepValidated() {
    setTimeout(() => {
      this.stepList[this.currentStep].isChecked = true;
      this.step = this.stepList[this.currentStep];
      this.subject.next(this.step);
      this.currentStep++;
      this.numStep.next(this.currentStep);
    },1000);
  }

  stepNotValidated() {
    setTimeout(() => {
      this.step = this.stepList[this.currentStep];
      this.subject.next(this.step);
      this.numStep.next(this.currentStep);
      alert("wrong !!!");
    }, 1000)
  }

  trailValidated() {
    setTimeout(() => {
      this.router.navigate(['result']);
    }, 3000);
  }

  // add method reset step
}
