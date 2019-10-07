import { TestBed } from '@angular/core/testing';

import { BonsPlansService } from './bons-plans.service';

describe('BonsPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonsPlansService = TestBed.get(BonsPlansService);
    expect(service).toBeTruthy();
  });
});
