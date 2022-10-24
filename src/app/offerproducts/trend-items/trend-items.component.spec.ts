import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendItemsComponent } from './trend-items.component';

describe('TrendItemsComponent', () => {
  let component: TrendItemsComponent;
  let fixture: ComponentFixture<TrendItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
