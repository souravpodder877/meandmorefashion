import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdRoundhalfNormalComponent } from './admin-prod-roundhalf-normal.component';

describe('AdminProdRoundhalfNormalComponent', () => {
  let component: AdminProdRoundhalfNormalComponent;
  let fixture: ComponentFixture<AdminProdRoundhalfNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdRoundhalfNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdRoundhalfNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
