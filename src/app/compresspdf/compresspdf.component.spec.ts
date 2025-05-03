import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresspdfComponent } from './compresspdf.component';

describe('CompresspdfComponent', () => {
  let component: CompresspdfComponent;
  let fixture: ComponentFixture<CompresspdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompresspdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompresspdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
