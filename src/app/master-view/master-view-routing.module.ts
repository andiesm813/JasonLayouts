import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { GridGridChartComponent } from './grid-grid-chart/grid-grid-chart.component';
import { LayoutGridGridChartComponent } from './layout-grid-grid-chart/layout-grid-grid-chart.component';
import { ListGridTreeMapComponent } from './list-grid-tree-map/list-grid-tree-map.component';
import { LayoutListGridTreeMapComponent } from './layout-list-grid-tree-map/layout-list-grid-tree-map.component';
import { GridGridComponent } from './grid-grid/grid-grid.component';
import { LayoutGridGridComponent } from './layout-grid-grid/layout-grid-grid.component';
import { FilterListComponent } from './filter-list/filter-list.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: 'grid-grid-chart', component: GridGridChartComponent, data: { text: 'Grid-Grid-Chart' } }, { path: 'layout-grid-grid-chart', component: LayoutGridGridChartComponent, data: { text: 'LayoutGrid-Grid-Chart' } }, { path: 'list-grid-tree-map', component: ListGridTreeMapComponent, data: { text: 'List-Grid-TreeMap' } }, { path: 'layout-list-grid-tree-map', component: LayoutListGridTreeMapComponent, data: { text: 'LayoutList-Grid-TreeMap' } }, { path: '', redirectTo: 'grid-grid', pathMatch: 'full' }, { path: 'grid-grid', component: GridGridComponent, data: { text: 'Grid-Grid' } }, { path: 'layout-grid-grid', component: LayoutGridGridComponent, data: { text: 'LayoutGrid-Grid' } }, { path: 'filter-list', component: FilterListComponent, data: { text: 'Filter-List' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
