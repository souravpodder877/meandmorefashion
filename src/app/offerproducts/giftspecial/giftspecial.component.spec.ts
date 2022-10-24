import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftspecialComponent } from './giftspecial.component';

describe('GiftspecialComponent', () => {
  let component: GiftspecialComponent;
  let fixture: ComponentFixture<GiftspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
