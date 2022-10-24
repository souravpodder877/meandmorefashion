import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundneckTshirtComponent } from './roundneck-tshirt.component';

describe('RoundneckTshirtComponent', () => {
  let component: RoundneckTshirtComponent;
  let fixture: ComponentFixture<RoundneckTshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundneckTshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundneckTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
