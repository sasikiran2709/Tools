import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergepdfComponent } from './mergepdf.component';

describe('MergepdfComponent', () => {
  let component: MergepdfComponent;
  let fixture: ComponentFixture<MergepdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergepdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
