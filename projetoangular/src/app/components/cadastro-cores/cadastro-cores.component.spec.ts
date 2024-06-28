import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCoresComponent } from './cadastro-cores.component';

describe('CadastroCoresComponent', () => {
  let component: CadastroCoresComponent;
  let fixture: ComponentFixture<CadastroCoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
