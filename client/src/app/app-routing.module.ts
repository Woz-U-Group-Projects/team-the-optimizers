
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobsComponent } from './Create-Job/Create-Jobs.component';
import { JobsDetailsComponent } from './Job-Details/Jobs-Details.component';
import { JobslistComponent } from './Jobs-List/Jobs-list.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './Home/home.component';
import { AboutusComponent } from './AboutUs/aboutus.component';
// import { GroupslistComponent } from './Groups-List/Groups-list.component';
// import { GroupsDetailsComponent } from './Group-Details/Groups-Details.component';
// import { AboutUsComponent } from './AboutUs/aboutus.component';


const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobslistComponent },
  { path: 'add', component: CreateJobsComponent },
  { path: 'details/:id', component: JobsDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  // { path: 'groups', component: GroupslistComponent },
  // { path: 'groupsdetails/:id', component: GroupsDetailsComponent },
  //  { path: 'aboutus', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }