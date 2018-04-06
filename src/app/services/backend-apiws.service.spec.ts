import { TestBed, inject } from '@angular/core/testing';

import { BackendAPIWSService } from './backend-apiws.service';

describe('BackendAPIWSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendAPIWSService]
    });
  });

  it('should ...', inject([BackendAPIWSService], (service: BackendAPIWSService) => {
    expect(service).toBeTruthy();
  }));
});
