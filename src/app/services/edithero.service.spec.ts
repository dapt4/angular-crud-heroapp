import { TestBed } from '@angular/core/testing';

import { EditheroService } from './edithero.service';

describe('EditheroService', () => {
  let service: EditheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
