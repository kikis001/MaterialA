import { Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { HomeComponent } from "./components/home/home.component";

export const ROUTES: Routes = [
    {path:'table', component:TableComponent},
    {path: 'home', component:HomeComponent}
]