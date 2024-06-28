import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMaterialComponent } from './tabela-material.component';

describe('TabelaMaterialComponent', () => {
  let component: TabelaMaterialComponent;
  let fixture: ComponentFixture<TabelaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
