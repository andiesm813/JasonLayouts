import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupRoutingModule } from './backup-routing.module';
import { BackupComponent } from './backup.component';
import { SearchResults1Component } from './search-results1/search-results1.component';
import { IgxCardModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BackupComponent,
    SearchResults1Component
  ],
  imports: [
    CommonModule,
    BackupRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule
  ]
})
export class BackupModule {
}
