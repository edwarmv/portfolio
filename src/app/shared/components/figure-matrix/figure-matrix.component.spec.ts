import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureMatrixComponent } from './figure-matrix.component';

describe('FigureMatrixComponent', () => {
  let component: FigureMatrixComponent;
  let fixture: ComponentFixture<FigureMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FigureMatrixComponent]
    });
    fixture = TestBed.createComponent(FigureMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
