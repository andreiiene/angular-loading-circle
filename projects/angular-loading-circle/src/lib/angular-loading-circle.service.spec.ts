import { TestBed } from '@angular/core/testing';

import { AngularLoadingCircleService } from './angular-loading-circle.service';

describe('AngularLoadingCircleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLoadingCircleService = TestBed.get(AngularLoadingCircleService);
    expect(service).toBeTruthy();
  });
});
