// import { Groups } from '../Groups';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GroupsService } from '../Groups.service/Groups.service';


// @Component({
//   selector: 'app-Create-Groups',
//   templateUrl: './Create-Groups.component.html',
//   styleUrls: ['./Create-Groups.component.css']
// })
// export class CreateGroupsComponent implements OnInit {

//   groups: Groups = new Groups();
//   submitted = false;

//   constructor(private groupsService: GroupsService,
//     private router: Router) { }

//   ngOnInit() {
//   }

//   newGroups(): void {
//     this.submitted = false;
//     this.groups = new Groups();
//   }

//   save() {
//     this.groupsService.createGroups(this.groups)
//    .subscribe(data => console.log(data), error => console.log(error));
//     this.groups = new Groups();
//     this.gotoList();
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.save();    
//   }

//   gotoList() {
//     this.router.navigate(['/groups']);
//   }
// }