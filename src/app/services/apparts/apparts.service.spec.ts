import { TestBed } from '@angular/core/testing';

import { AppartsService } from './apparts.service';

describe('AppartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppartsService = TestBed.get(AppartsService);
    expect(service).toBeTruthy();
  });
});
