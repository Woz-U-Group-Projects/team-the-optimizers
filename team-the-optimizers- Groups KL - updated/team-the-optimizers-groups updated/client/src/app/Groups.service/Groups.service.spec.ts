import { TestBed } from '@angular/core/testing';

import { GroupsService } from './Groups.service';

describe('GroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsService = TestBed.get(GroupsService);
    expect(service).toBeTruthy();
  });
});
