import { TestBed } from '@angular/core/testing';

import { CourseAccessGuardGuard } from './course-access-guard.guard';

describe('CourseAccessGuardGuard', () => {
  let guard: CourseAccessGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseAccessGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
