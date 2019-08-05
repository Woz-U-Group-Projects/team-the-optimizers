import { Jobs } from '../Jobs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../Jobs.service/Jobs.service';
import { JobslistComponent } from "../Jobs-List/Jobs-list.component";

@Component({
  selector: 'app-Jobs-Details',
  templateUrl: './Jobs-Details.component.html',
  styleUrls: ['./Jobs-Details.component.css']
})
export class JobsDetailsComponent implements OnInit {

  id: number;
  job: Jobs;

  constructor(private route: ActivatedRoute,private router: Router,
    private jobsService: JobsService) { }

  ngOnInit() {
    this.job = new Jobs();

    this.id = this.route.snapshot.params['id'];
    
    this.jobsService.getJobs(this.id)
      .subscribe(data => {
        console.log(data)
        this.job = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/jobs']);
  }
}