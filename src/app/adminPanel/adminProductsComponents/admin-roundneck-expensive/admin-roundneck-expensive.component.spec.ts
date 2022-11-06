import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoundneckExpensiveComponent } from './admin-roundneck-expensive.component';

describe('AdminRoundneckExpensiveComponent', () => {
  let component: AdminRoundneckExpensiveComponent;
  let fixture: ComponentFixture<AdminRoundneckExpensiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoundneckExpensiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoundneckExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
