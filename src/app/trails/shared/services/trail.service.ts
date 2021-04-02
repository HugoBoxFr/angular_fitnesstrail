import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coord } from '../models/coord.model';
import { trails } from '../models/trail.mock';
import { Trail } from '../models/trail.model';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  public trail: Trail = new Trail();
  public trails: Trail[] = trails;
  public coords: Coord = new Coord();

  private subject: Subject<Coord> = new Subject();

  constructor() { }

  getTrails() {
    return this.trails;
  }

  getCoords() {
    return this.coords;
  }

  setCoords(coords: Coord) {
    this.coords.lat = parseFloat(coords.lat.toString().substring(0, 9));
    this.coords.lon = parseFloat(coords.lon.toString().substring(0, 7));
  }

  getUserPosition(): Subject<Coord> {
    if (!window.navigator.geolocation) {
      console.log('not supported');
    }

    window.navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {

      this.coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }    
      this.setCoords(this.coords);

      this.subject.next(this.coords);

      this.watchPosition().next(this.coords);
    });
    return this.subject;
  }

  watchPosition(): Subject<Coord> {
    let id = window.navigator.geolocation.watchPosition((position: GeolocationPosition) => {
      // console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);

      this.coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      this.setCoords(this.coords);
      
      this.subject.next(this.coords);
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    });
    return this.subject;
  }
}
