import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreezbeComponent } from './edit-freezbe.component';

describe('EditFreezbeComponent', () => {
  let component: EditFreezbeComponent;
  let fixture: ComponentFixture<EditFreezbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFreezbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFreezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
