
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupsComponent } from './Create-Group/Create-Groups.component';
import { GroupsDetailsComponent } from './Group-Details/Groups-Details.component';
import { GroupslistComponent } from './Groups-List/Groups-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: 'groups', component: GroupslistComponent },
  { path: 'add', component: CreateGroupsComponent },
  { path: 'details/:id', component: GroupsDetailsComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }