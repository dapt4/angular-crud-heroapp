import { TestBed } from '@angular/core/testing';

import { DeleteheroService } from './deletehero.service';

describe('DeleteheroService', () => {
  let service: DeleteheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
