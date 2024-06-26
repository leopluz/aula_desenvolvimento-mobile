import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloComponent } from './capitulo.component';

describe('CapituloComponent', () => {
  let component: CapituloComponent;
  let fixture: ComponentFixture<CapituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
