import { Component, OnInit } from '@angular/core';
import { Coord } from '../../shared/models/coord.model';
import { TrailService } from '../../shared/services/trail.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public coords: Coord = new Coord();
  public loader: boolean = true;

  constructor(
    private trailService: TrailService,
  ) {
    this.trailService.getUserPosition().subscribe(
      (coords: Coord) => { 
        this.coords = coords;
        this.loader = false; 
      },
      () => { console.log('error'); }
    )
  }

  ngOnInit(): void {
  }
}
