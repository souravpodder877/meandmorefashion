import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendItemLeftComponent } from './trend-item-left.component';

describe('TrendItemLeftComponent', () => {
  let component: TrendItemLeftComponent;
  let fixture: ComponentFixture<TrendItemLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendItemLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendItemLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
