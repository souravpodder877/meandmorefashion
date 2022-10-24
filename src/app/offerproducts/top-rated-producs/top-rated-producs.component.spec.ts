import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedProducsComponent } from './top-rated-producs.component';

describe('TopRatedProducsComponent', () => {
  let component: TopRatedProducsComponent;
  let fixture: ComponentFixture<TopRatedProducsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedProducsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
