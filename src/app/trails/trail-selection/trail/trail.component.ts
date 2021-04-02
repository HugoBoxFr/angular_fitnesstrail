import { Component, Input, OnInit } from '@angular/core';
import { Trail } from '../../shared/models/trail.model';
import * as M from 'materialize-css';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss']
})
export class TrailComponent implements OnInit {
  @Input() trail!: Trail;

  settings: any = [
    { trailIcons: 'looks_one', matClass: 'waves-green green', modalLink: 'modal1' },
    { trailIcons: 'looks_two', matClass: 'waves-blue blue', modalLink: 'modal2' },
    { trailIcons: 'looks_3', matClass: 'waves-yellow yellow', modalLink: 'modal3' },
  ];
  
  trailSettings : any = {};

  constructor() { 
  }

  ngOnInit(): void {
    M.AutoInit();
    this.trailSettings = this.settings[this.trail.id - 1];
  }
}
