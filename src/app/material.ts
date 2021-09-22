import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCard, MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule,
              LayoutModule,
              MatToolbarModule,
              MatSidenavModule,
              MatIconModule, 
              MatListModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule,
              MatSidenavModule,
              MatCardModule
],
    exports: [MatButtonModule, 
              LayoutModule, 
              MatToolbarModule, 
              MatSidenavModule, 
              MatIconModule, 
              MatListModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule, 
              MatCardModule
],
})
export class MaterialModule {}