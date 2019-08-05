import { JobsDetailsComponent } from '../Job-Details/Jobs-Details.component';
import { Observable } from "rxjs";
import { JobsService } from '../Jobs.service/Jobs.service';
import { Jobs } from "../Jobs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';



@Component({
  selector: "app-Jobs-list",
  templateUrl: "./Jobs-list.component.html",
  styleUrls: ["./Jobs-list.component.css"]
})
export class JobslistComponent implements OnInit {
  jobs: Observable<Jobs[]>;

  constructor(private jobsService: JobsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.jobs = this.jobsService.getJobsList();
  }

  deleteJobs(id: number) {
    this.jobsService.deleteJobs(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  JobsDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
