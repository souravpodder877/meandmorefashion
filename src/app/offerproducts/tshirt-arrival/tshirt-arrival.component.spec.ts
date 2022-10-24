import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtArrivalComponent } from './tshirt-arrival.component';

describe('TshirtArrivalComponent', () => {
  let component: TshirtArrivalComponent;
  let fixture: ComponentFixture<TshirtArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
