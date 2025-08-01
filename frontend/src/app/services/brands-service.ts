import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.apiUrl}/brands`
    )
  }

  getModelByBrand(brandId: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.apiUrl}/brands/${brandId}/models`
    )
  }
}
