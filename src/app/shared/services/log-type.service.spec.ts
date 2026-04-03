import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { LogTypeService } from './log-type.service';

describe('LogTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [LogTypeService, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should be created', inject([LogTypeService], (service: LogTypeService) => {
    expect(service).toBeTruthy();
  }));
});
