import { AboutusComponent } from './AboutUs/aboutus.component';
import { HomeComponent } from './Home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateJobsComponent } from './Create-Job/Create-Jobs.component';
import { JobsDetailsComponent } from './Job-Details/Jobs-Details.component';
import { JobslistComponent } from './Jobs-List/Jobs-list.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { CreateGroupsComponent } from './Create-Group/Create-Groups.component';
// import { GroupsDetailsComponent } from './Group-Details/Groups-Details.component';
// import { GroupslistComponent } from './Groups-List/Groups-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateJobsComponent,
    JobsDetailsComponent,
    JobslistComponent,
    SearchComponent,
    HomeComponent,
    AboutusComponent,
    // CreateGroupsComponent,
    // GroupsDetailsComponent,
    // GroupslistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }