import { TestBed } from '@angular/core/testing';

import { NgTestLibService } from './ng-test-lib.service';

describe('NgTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTestLibService = TestBed.get(NgTestLibService);
    expect(service).toBeTruthy();
  });
});
