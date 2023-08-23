import { TestBed } from '@angular/core/testing';

import { ApiconsumeService } from './apiconsume.service';

describe('ApiconsumeService', () => {
  let service: ApiconsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
