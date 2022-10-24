import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KultiComponent } from './kulti.component';

describe('KultiComponent', () => {
  let component: KultiComponent;
  let fixture: ComponentFixture<KultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
