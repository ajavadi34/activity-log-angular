import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { LogTypeService } from './log-type.service';

describe('LogTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LogTypeService]
    });
  });

  it('should be created', inject([LogTypeService], (service: LogTypeService) => {
    expect(service).toBeTruthy();
  }));
});
