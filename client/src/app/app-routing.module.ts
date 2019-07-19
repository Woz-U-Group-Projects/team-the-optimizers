import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { SearchComponent } from './search/search.component'; // Add this

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'Search', component: SearchComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
