import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenItemsComponent } from './chicken-items.component';

describe('ChickenItemsComponent', () => {
  let component: ChickenItemsComponent;
  let fixture: ComponentFixture<ChickenItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
