import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-layout-list-grid-tree-map',
  templateUrl: './layout-list-grid-tree-map.component.html',
  styleUrls: ['./layout-list-grid-tree-map.component.scss']
})
export class LayoutListGridTreeMapComponent implements OnInit {
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
