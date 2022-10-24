import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContComponent } from './recipe-cont.component';

describe('RecipeContComponent', () => {
  let component: RecipeContComponent;
  let fixture: ComponentFixture<RecipeContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
