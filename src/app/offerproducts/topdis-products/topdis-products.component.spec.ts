import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdisProductsComponent } from './topdis-products.component';

describe('TopdisProductsComponent', () => {
  let component: TopdisProductsComponent;
  let fixture: ComponentFixture<TopdisProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdisProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdisProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
