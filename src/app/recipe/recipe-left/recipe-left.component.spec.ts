import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLeftComponent } from './recipe-left.component';

describe('RecipeLeftComponent', () => {
  let component: RecipeLeftComponent;
  let fixture: ComponentFixture<RecipeLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
