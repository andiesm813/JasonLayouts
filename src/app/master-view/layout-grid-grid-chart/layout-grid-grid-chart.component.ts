import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-layout-grid-grid-chart',
  templateUrl: './layout-grid-grid-chart.component.html',
  styleUrls: ['./layout-grid-grid-chart.component.scss']
})
export class LayoutGridGridChartComponent implements OnInit {
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
