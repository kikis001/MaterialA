import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from "./router"

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES, {useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
