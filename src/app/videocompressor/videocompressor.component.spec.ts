import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocompressorComponent } from './videocompressor.component';

describe('VideocompressorComponent', () => {
  let component: VideocompressorComponent;
  let fixture: ComponentFixture<VideocompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideocompressorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideocompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
