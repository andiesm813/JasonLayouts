import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutFilterListRoutingModule } from './layout-filter-list-routing.module';
import { LayoutFilterListComponent } from './layout-filter-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { IgxCardModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutFilterListComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    LayoutFilterListRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule
  ]
})
export class LayoutFilterListModule {
}
