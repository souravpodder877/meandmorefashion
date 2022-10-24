import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingButtonComponent } from './heading-button.component';

describe('HeadingButtonComponent', () => {
  let component: HeadingButtonComponent;
  let fixture: ComponentFixture<HeadingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
