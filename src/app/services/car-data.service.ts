import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import carData from '../../assets/mock/cars.json';

@Injectable({
  providedIn: 'root',
})
export class CarDataService {
  constructor() {}

  getCarData(): Observable<any> {
    return of(carData);
  }
}
