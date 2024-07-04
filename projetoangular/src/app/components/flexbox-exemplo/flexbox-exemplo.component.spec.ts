import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxExemploComponent } from './flexbox-exemplo.component';

describe('FlexboxExemploComponent', () => {
  let component: FlexboxExemploComponent;
  let fixture: ComponentFixture<FlexboxExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxExemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
