import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopofferComponent } from './topoffer.component';

describe('TopofferComponent', () => {
  let component: TopofferComponent;
  let fixture: ComponentFixture<TopofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
