import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFilterListComponent } from './layout-filter-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{ path: '', component: LayoutFilterListComponent, children: [{ path: '', redirectTo: 'search-results', pathMatch: 'full' }, { path: 'search-results', component: SearchResultsComponent, data: { text: 'SearchResults' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutFilterListRoutingModule {
}
