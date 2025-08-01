import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CarDetailsComponent } from './components/car-details-component/car-details-component';
import { CarCreateComponent } from './components/car-create-component/car-create-component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars/:id', component: CarDetailsComponent },
    { path: 'create', component: CarCreateComponent }
];
