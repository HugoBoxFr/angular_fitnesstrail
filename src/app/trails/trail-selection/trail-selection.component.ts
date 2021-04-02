import { Component, OnInit } from '@angular/core';
import { Trail } from '../shared/models/trail.model';
import { TrailService } from '../shared/services/trail.service';

@Component({
  selector: 'app-trail-selection',
  templateUrl: './trail-selection.component.html',
  styleUrls: ['./trail-selection.component.scss']
})
export class TrailSelectionComponent implements OnInit {

  public trails: Trail[] = [];

  constructor(private trailService: TrailService) { 
    this.trails = this.trailService.getTrails();
  }

  ngOnInit(): void {
  }
}
