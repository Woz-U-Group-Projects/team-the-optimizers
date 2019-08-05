import { Groups } from '../Groups';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from '../Groups.service/Groups.service';
import { GroupslistComponent } from "../Groups-List/Groups-list.component";

@Component({
  selector: 'app-Groups-Details',
  templateUrl: './Groups-Details.component.html',
  styleUrls: ['./Groups-Details.component.css']
})
export class GroupsDetailsComponent implements OnInit {

  id: number;
  groups: Groups;

  constructor(private route: ActivatedRoute,private router: Router,
    private groupsService: GroupsService) { }

  ngOnInit() {
    this.groups = new Groups();

    this.id = this.route.snapshot.params['id'];
    
    this.groupsService.getGroups(this.id)
      .subscribe(data => {
        console.log(data)
        this.groups = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['Groups']);
  }
}