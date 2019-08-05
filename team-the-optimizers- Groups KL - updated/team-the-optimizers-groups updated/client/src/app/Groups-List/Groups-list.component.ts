import { GroupsDetailsComponent } from '../Group-Details/Groups-Details.component';
import { Observable } from "rxjs";
import { GroupsService } from '../Groups.service/Groups.service';
import { Groups } from "../Groups";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';



@Component({
  selector: "app-Groups-list",
  templateUrl: "./Groups-list.component.html",
  styleUrls: ["./Groups-list.component.css"]
})
export class GroupslistComponent implements OnInit {
  groups: Observable<Groups[]>;

  constructor(private groupsService: GroupsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.groups = this.groupsService.getGroupsList();
  }

  deleteGroups(id: number) {
    this.groupsService.deleteGroups(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  GroupsDetailsComponent(id: number){
    this.router.navigate(['details', id]);
  }
}
