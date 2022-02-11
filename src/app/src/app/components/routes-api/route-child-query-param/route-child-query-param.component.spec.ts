import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildQueryParamComponent } from './route-child-query-param.component';

describe('RouteChildQueryParamComponent', () => {
  let component: RouteChildQueryParamComponent;
  let fixture: ComponentFixture<RouteChildQueryParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteChildQueryParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
