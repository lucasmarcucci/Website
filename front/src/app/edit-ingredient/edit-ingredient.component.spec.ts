import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredientComponent } from './edit-ingredient.component';

describe('EditIngredientComponent', () => {
  let component: EditIngredientComponent;
  let fixture: ComponentFixture<EditIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
