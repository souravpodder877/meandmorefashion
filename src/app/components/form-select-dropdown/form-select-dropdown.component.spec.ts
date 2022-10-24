import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectDropdownComponent } from './form-select-dropdown.component';

describe('FormSelectDropdownComponent', () => {
  let component: FormSelectDropdownComponent;
  let fixture: ComponentFixture<FormSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
