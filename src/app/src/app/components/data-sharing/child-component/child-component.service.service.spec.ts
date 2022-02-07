import { TestBed } from '@angular/core/testing';

import { ChildComponentService } from './child-component.service';

describe('ChildComponent.ServiceService', () => {
  let service: ChildComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
