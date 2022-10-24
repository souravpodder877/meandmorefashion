import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSerchComponent } from './recent-serch.component';

describe('RecentSerchComponent', () => {
  let component: RecentSerchComponent;
  let fixture: ComponentFixture<RecentSerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
