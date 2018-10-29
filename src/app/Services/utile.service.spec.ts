import { TestBed, inject } from '@angular/core/testing';

import { UtileService } from './utile.service';

describe('UtileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtileService]
    });
  });

  it('should be created', inject([UtileService], (service: UtileService) => {
    expect(service).toBeTruthy();
  }));
});
