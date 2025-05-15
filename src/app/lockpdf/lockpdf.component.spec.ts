import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockpdfComponent } from './lockpdf.component';

describe('LockpdfComponent', () => {
  let component: LockpdfComponent;
  let fixture: ComponentFixture<LockpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockpdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
