import { Component } from '@angular/core';
import { ToolformatsService } from '../toolformats.service'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-videocompressor',
  imports: [CommonModule],
  templateUrl: './videocompressor.component.html',
  styleUrl: './videocompressor.component.css'
})
export class VideocompressorComponent {
  constructor(private toolService: ToolformatsService) {}
  isConverting = false;
  isCompressing = false;
  progress = 0;
  errorMessage = '';
  onVideoFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.isCompressing = true;
    this.progress = 0;
    this.errorMessage = '';

    this.toolService.compressVideo(file).subscribe({
      next: (blob) => {
        this.toolService.downloadBlob(blob, 'compressed-video.mp4');
        this.isCompressing = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isCompressing = false;
      },
    });
  }
}
