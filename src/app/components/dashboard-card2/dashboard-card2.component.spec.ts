import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCard2Component } from './dashboard-card2.component';

describe('DashboardCard2Component', () => {
  let component: DashboardCard2Component;
  let fixture: ComponentFixture<DashboardCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
