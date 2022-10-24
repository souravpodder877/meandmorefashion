import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfferDetailsComponent } from './top-offer-details.component';

describe('TopOfferDetailsComponent', () => {
  let component: TopOfferDetailsComponent;
  let fixture: ComponentFixture<TopOfferDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOfferDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
