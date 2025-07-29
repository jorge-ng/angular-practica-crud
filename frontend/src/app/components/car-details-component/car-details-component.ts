import { Component, inject, signal } from '@angular/core';
import { CarsService } from '../../services/cars-service';
import { CarById } from '../../interfaces/car-by-id';
import { DecimalPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { CarConditionPipe } from '../../pipes/car-condition-pipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-details-component',
  imports: [DecimalPipe, CurrencyPipe, DatePipe, CarConditionPipe],
  templateUrl: './car-details-component.html',
  styleUrl: './car-details-component.scss'
})
export class CarDetailsComponent {

  cars!: CarById;
  

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.url[1].path;
    
    this.carsService.getCarById(id).subscribe(data => {
      this.cars = data;
    });
  }

}
