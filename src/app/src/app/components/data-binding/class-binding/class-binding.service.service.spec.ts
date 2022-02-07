import { TestBed } from '@angular/core/testing';

import { ClassBinding.ServiceService } from './class-binding.service.service';

describe('ClassBinding.ServiceService', () => {
  let service: ClassBinding.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassBinding.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
