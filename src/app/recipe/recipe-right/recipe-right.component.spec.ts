import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRightComponent } from './recipe-right.component';

describe('RecipeRightComponent', () => {
  let component: RecipeRightComponent;
  let fixture: ComponentFixture<RecipeRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
