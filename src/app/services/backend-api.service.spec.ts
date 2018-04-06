import { TestBed, inject } from '@angular/core/testing';

import { BackendAPIService } from './backend-api.service';

describe('BackendAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendAPIService]
    });
  });

  it('should ...', inject([BackendAPIService], (service: BackendAPIService) => {
    expect(service).toBeTruthy();
  }));
});
