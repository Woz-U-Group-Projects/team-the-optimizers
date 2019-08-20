import { Jobs } from '../Jobs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from '../Jobs.service/Jobs.service';


@Component({
  selector: 'app-Create-Jobs',
  templateUrl: './Create-Jobs.component.html',
  styleUrls: ['./Create-Jobs.component.css']
})
export class CreateJobsComponent implements OnInit {

  Jobs: Jobs = new Jobs();
  submitted = false;

  constructor(private JobsService: JobsService,
    private router: Router) { }

  ngOnInit() {
  }

  newJobs(): void {
    this.submitted = false;
    this.Jobs = new Jobs();
  }

  save() {
    this.JobsService.createJobs(this.Jobs)
   .subscribe(data => console.log(data), error => console.log(error));
    this.Jobs = new Jobs();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/jobs']);
  }
}