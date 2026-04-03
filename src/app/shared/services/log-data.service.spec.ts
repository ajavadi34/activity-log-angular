import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { LogDataService } from './log-data.service';

describe('LogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [LogDataService, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should be created', inject([LogDataService], (service: LogDataService) => {
    expect(service).toBeTruthy();
  }));
});
