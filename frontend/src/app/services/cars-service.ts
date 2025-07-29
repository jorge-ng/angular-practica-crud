import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from '../interfaces/cars-list';
import { CarById } from '../interfaces/car-by-id';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(
      `${this.apiUrl}/cars`
    );
  }

  getCarById(id: string): Observable<CarById> {
    return this.http.get<CarById>(
      `${this.apiUrl}/cars/${id}`
    );
  }

  createCar(car: Cars): Observable<Cars> {
    return this.http.post<Cars>(
      `${this.apiUrl}/cars`,
      car
    );
  }

  updateCar(id: string, car: Cars): Observable<Cars> {
    return this.http.put<Cars>(
      `${this.apiUrl}/cars/${id}`,
      car
    );
  }

  deleteCar(id: string): Observable<Cars> {
    return this.http.delete<Cars>(
      `${this.apiUrl}/cars/${id}`
    );
  }
}
