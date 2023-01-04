import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcedeComponent } from './edit-procede.component';

describe('EditProcedeComponent', () => {
  let component: EditProcedeComponent;
  let fixture: ComponentFixture<EditProcedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProcedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProcedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
