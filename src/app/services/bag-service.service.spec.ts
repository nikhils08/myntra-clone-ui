import { TestBed } from '@angular/core/testing';

import { BagServiceService } from './bag-service.service';

describe('BagServiceService', () => {
  let service: BagServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
