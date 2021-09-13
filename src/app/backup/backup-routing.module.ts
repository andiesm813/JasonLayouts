import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackupComponent } from './backup.component';
import { SearchResults1Component } from './search-results1/search-results1.component';

const routes: Routes = [{ path: '', component: BackupComponent, children: [{ path: '', redirectTo: 'search-results1', pathMatch: 'full' }, { path: 'search-results1', component: SearchResults1Component, data: { text: 'SearchResults 1' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackupRoutingModule {
}
