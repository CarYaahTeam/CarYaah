import { TestBed } from '@angular/core/testing';

import { CarsServerService } from './cars-server.service';

describe('CarsServerService', () => {
  let service: CarsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
