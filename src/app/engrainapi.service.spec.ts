import { TestBed } from '@angular/core/testing';

import { EngrainapiService } from './engrainapi.service';

describe('EngrainapiService', () => {
  let service: EngrainapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngrainapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
