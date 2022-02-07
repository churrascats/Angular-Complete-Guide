import { TestBed } from '@angular/core/testing';

import { StrucutralDirectiveSwitchcaseService } from './strucutral-directive-switchcase.service';

describe('StrucutralDirectiveSwitchcaseService', () => {
  let service: StrucutralDirectiveSwitchcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrucutralDirectiveSwitchcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
