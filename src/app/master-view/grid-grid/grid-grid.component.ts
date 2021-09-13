import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-grid-grid',
  templateUrl: './grid-grid.component.html',
  styleUrls: ['./grid-grid.component.scss']
})
export class GridGridComponent implements OnInit {
  public northwindCustomers: any[] = [];
  public northwindOrders: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindCustomers = this.northwindService.getData('Customers');
    this.northwindOrders = this.northwindService.getData('Orders');
  }
}
