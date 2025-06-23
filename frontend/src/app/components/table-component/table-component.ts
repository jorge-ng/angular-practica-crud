import { Component, OnInit } from '@angular/core';
import { Button } from '../../directive/button';
import { CarsService } from '../../services/cars-service';
import { Cars } from '../../interfaces/cars';

@Component({
  selector: 'app-table-component',
  imports: [Button],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss'
})
export class TableComponent implements OnInit {

  cars: Cars[] = [];

  constructor(
    private carsService: CarsService
  ) {}

    
  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => {
        this.cars = data;
    });
  }

}
