import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitemComponent } from './vegitem.component';

describe('VegitemComponent', () => {
  let component: VegitemComponent;
  let fixture: ComponentFixture<VegitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
