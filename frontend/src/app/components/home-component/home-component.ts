import { Component } from '@angular/core';
import { TableComponent } from '../table-component/table-component';

@Component({
  selector: 'app-home-component',
  imports: [TableComponent],
  template: `<app-table-component />`,
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}
