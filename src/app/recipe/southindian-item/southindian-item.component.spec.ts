import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthindianItemComponent } from './southindian-item.component';

describe('SouthindianItemComponent', () => {
  let component: SouthindianItemComponent;
  let fixture: ComponentFixture<SouthindianItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthindianItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthindianItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
