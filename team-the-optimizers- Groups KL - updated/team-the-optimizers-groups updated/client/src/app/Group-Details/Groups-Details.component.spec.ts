import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsDetailsComponent } from './Groups-Details.component';

describe('GroupsDetailsComponent', () => {
  let component: GroupsDetailsComponent;
  let fixture: ComponentFixture<GroupsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
