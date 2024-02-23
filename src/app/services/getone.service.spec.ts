import { TestBed } from '@angular/core/testing';

import { GetoneService } from './getone.service';

describe('GetoneService', () => {
  let service: GetoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
