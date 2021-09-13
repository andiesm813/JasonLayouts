import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { GridGridChartComponent } from './grid-grid-chart/grid-grid-chart.component';
import { IgxGridModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { LayoutGridGridChartComponent } from './layout-grid-grid-chart/layout-grid-grid-chart.component';
import { ListGridTreeMapComponent } from './list-grid-tree-map/list-grid-tree-map.component';
import { LayoutListGridTreeMapComponent } from './layout-list-grid-tree-map/layout-list-grid-tree-map.component';
import { GridGridComponent } from './grid-grid/grid-grid.component';
import { LayoutGridGridComponent } from './layout-grid-grid/layout-grid-grid.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    GridGridChartComponent,
    LayoutGridGridChartComponent,
    ListGridTreeMapComponent,
    LayoutListGridTreeMapComponent,
    GridGridComponent,
    LayoutGridGridComponent,
    FilterListComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxGridModule,
    FormsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
