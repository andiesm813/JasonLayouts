import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-list-grid-tree-map',
  templateUrl: './list-grid-tree-map.component.html',
  styleUrls: ['./list-grid-tree-map.component.scss']
})
export class ListGridTreeMapComponent implements OnInit {
  public northwindOrders: any[] = [];
  public northwindCustomers: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindOrders = this.northwindService.getData('Orders');
    this.northwindCustomers = this.northwindService.getData('Customers');
  }
}
