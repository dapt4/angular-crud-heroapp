import { TestBed } from '@angular/core/testing';

import { NewheroService } from './newhero.service';

describe('NewheroService', () => {
  let service: NewheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
