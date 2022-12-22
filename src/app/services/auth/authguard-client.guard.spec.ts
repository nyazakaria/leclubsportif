import { TestBed } from '@angular/core/testing';

import { AuthguardClientGuard } from './authguard-client.guard';

describe('AuthguardClientGuard', () => {
  let guard: AuthguardClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
