import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightadpanelComponent } from './rightadpanel.component';

describe('RightadpanelComponent', () => {
  let component: RightadpanelComponent;
  let fixture: ComponentFixture<RightadpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightadpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightadpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
