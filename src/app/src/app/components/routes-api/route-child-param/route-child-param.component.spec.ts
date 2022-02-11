import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildParamComponent } from './route-child-param.component';

describe('RouteChildParamComponent', () => {
  let component: RouteChildParamComponent;
  let fixture: ComponentFixture<RouteChildParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteChildParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
