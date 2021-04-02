import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trail } from '../../shared/models/trail.model';

@Component({
  selector: 'app-trail-preview',
  templateUrl: './trail-preview.component.html',
  styleUrls: ['./trail-preview.component.scss']
})
export class TrailPreviewComponent implements OnInit {
  @Input() trail!: Trail;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayActiveTrail() {
    const link = this.trail.id;
    this.router.navigate(['selection', link]);
  }
}
