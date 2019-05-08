import { TestBed } from '@angular/core/testing';

import { NgxangularService } from './ngxangular.service';

describe('NgxangularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxangularService = TestBed.get(NgxangularService);
    expect(service).toBeTruthy();
  });
});
