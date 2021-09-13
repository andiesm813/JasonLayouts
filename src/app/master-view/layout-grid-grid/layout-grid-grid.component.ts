import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-layout-grid-grid',
  templateUrl: './layout-grid-grid.component.html',
  styleUrls: ['./layout-grid-grid.component.scss']
})
export class LayoutGridGridComponent implements OnInit {
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
