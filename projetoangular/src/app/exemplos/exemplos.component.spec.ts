import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosComponent } from './exemplos.component';

describe('ExemplosComponent', () => {
  let component: ExemplosComponent;
  let fixture: ComponentFixture<ExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
