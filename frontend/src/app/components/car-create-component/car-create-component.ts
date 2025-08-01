import { CarsService } from './../../services/cars-service';
import { CarById } from './../../interfaces/car-by-id';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BrandsService } from '../../services/brands-service';





@Component({
  selector: 'app-car-create-component',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './car-create-component.html',
  styleUrl: './car-create-component.scss'
})
export class CarCreateComponent {

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    brand: [''],
    model: [''],
    carDetails: this.formBuilder.array([])
    
  })

  get details() {
    return this.profileForm.get('carDetails') as FormArray;
  }

  brands: String[] = [];
  models: String[] = [];

  constructor(
    private brandsService: BrandsService,
    private carsService: CarsService

  ) {}  

  selectedBrand = ''
  ngOnInit(): void {
    this.brandsService.getBrands().subscribe(data => {
      this.brands = data;
    });

  }

  onSelected(value:string): void {
		
    this.brandsService.getModelByBrand(value).subscribe(data => {
      this.models = data;
    });
	}

  createCarDetail() {

    this.details.push(this.formBuilder.group(
      {
        registrationDate: [''],
        mileage: [''],
        currency: [''],
        price: [''],
        manufactureYear: [''],
        availability: [''],
        licensePlate: [''],
      }
    ));    
  }

  onSubmit() {

    const formData = this.profileForm.value;

    const updateDetails = this.details.controls.map(control => {
      return {
        availability: control.value.availability ? true : false,
        currency: control.value.currency,
        licensePlate: control.value.licensePlate,
        manufactureYear: control.value.manufactureYear,
        mileage: control.value.mileage,
        price: control.value.price,
        registrationDate: new Date(control.value.registrationDate).toISOString()
      };
    });


    const newObject: Partial<CarById> = {
      brand: formData.brand || "",
      model: formData.model || "",
      carDetails: updateDetails
    };

    
    this.carsService.createCar(newObject).subscribe(data => {
      console.log(data);
    });
    //console.log(this.profileForm.value);
    
  }

}
