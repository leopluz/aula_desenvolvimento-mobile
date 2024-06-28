import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMaterialComponent } from './formulario-material.component';

describe('FormularioMaterialComponent', () => {
  let component: FormularioMaterialComponent;
  let fixture: ComponentFixture<FormularioMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
