import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuttonItemComponent } from './mutton-item.component';

describe('MuttonItemComponent', () => {
  let component: MuttonItemComponent;
  let fixture: ComponentFixture<MuttonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuttonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuttonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
