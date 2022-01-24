import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveSwitchcaseComponent } from './structural-directive-switchcase.component';

describe('StructuralDirectiveSwitchcaseComponent', () => {
  let component: StructuralDirectiveSwitchcaseComponent;
  let fixture: ComponentFixture<StructuralDirectiveSwitchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveSwitchcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
