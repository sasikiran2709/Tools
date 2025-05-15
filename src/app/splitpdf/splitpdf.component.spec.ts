import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitpdfComponent } from './splitpdf.component';

describe('SplitpdfComponent', () => {
  let component: SplitpdfComponent;
  let fixture: ComponentFixture<SplitpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitpdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
