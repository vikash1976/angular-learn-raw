import { TestBed, inject } from '@angular/core/testing';

import { AccountDataService } from './account-data.service';

describe('AccountDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountDataService]
    });
  });

  it('should ...', inject([AccountDataService], (service: AccountDataService) => {
    expect(service).toBeTruthy();
  }));
});
