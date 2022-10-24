import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsArrivalComponent } from './new-products-arrival.component';

describe('NewProductsArrivalComponent', () => {
  let component: NewProductsArrivalComponent;
  let fixture: ComponentFixture<NewProductsArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductsArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductsArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
