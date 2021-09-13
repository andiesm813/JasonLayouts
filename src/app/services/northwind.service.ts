import { Injectable } from '@angular/core';
import { Northwind } from './northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  getData(tableName: string): any[] {
    return Northwind[tableName];
  }
}
