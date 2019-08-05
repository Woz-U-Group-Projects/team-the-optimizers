import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGroupsComponent } from './Create-Groups.component';

describe('CreateGroupsComponent', () => {
  let component: CreateGroupsComponent;
  let fixture: ComponentFixture<CreateGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
