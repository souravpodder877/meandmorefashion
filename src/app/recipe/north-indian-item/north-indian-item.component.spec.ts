import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndianItemComponent } from './north-indian-item.component';

describe('NorthIndianItemComponent', () => {
  let component: NorthIndianItemComponent;
  let fixture: ComponentFixture<NorthIndianItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthIndianItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthIndianItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
