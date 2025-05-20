import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftowordComponent } from './pdftoword.component';

describe('PdftowordComponent', () => {
  let component: PdftowordComponent;
  let fixture: ComponentFixture<PdftowordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdftowordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdftowordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
