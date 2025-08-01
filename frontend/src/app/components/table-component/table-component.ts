import { Component, OnInit } from '@angular/core';
import { Button } from '../../directive/button';
import { CarsService } from '../../services/cars-service';
import { Cars } from '../../interfaces/cars-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-component',
  imports: [Button, RouterLink],
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
