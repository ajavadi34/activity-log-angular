import { TestBed, inject } from '@angular/core/testing';

import { LogTypeService } from './log-type.service';

describe('LogTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogTypeService]
    });
  });

  it('should be created', inject([LogTypeService], (service: LogTypeService) => {
    expect(service).toBeTruthy();
  }));
});
