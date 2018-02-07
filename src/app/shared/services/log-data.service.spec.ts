import { TestBed, inject } from '@angular/core/testing';

import { LogDataService } from './log-data.service';

describe('LogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDataService]
    });
  });

  it('should be created', inject([LogDataService], (service: LogDataService) => {
    expect(service).toBeTruthy();
  }));
});
