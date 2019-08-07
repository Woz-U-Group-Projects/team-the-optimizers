
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobsComponent } from './Create-Job/Create-Jobs.component';
import { JobsDetailsComponent } from './Job-Details/Jobs-Details.component';
import { JobslistComponent } from './Jobs-List/Jobs-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobslistComponent },
  { path: 'add', component: CreateJobsComponent },
  { path: 'details/:id', component: JobsDetailsComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }