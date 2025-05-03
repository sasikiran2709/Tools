import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ToolformatsService } from '../toolformats.service';

@Component({
  selector: 'app-wordtopdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordtopdf.component.html',
  styleUrl: './wordtopdf.component.css',
})
export class WordtopdfComponent {
  selectedFile: File | null = null;
  isConverting = false;
  progress = 0;
  errorMessage = '';

  constructor(private toolformatsService: ToolformatsService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.errorMessage = '';
    this.progress = 0;
  }

  onConvertToPdf(): void {
    if (!this.selectedFile) {
      console.warn('No file selected');
      return;
    }

    this.isConverting = true;
    this.progress = 0;
    this.errorMessage = '';

    this.toolformatsService.convertWordToPdf(this.selectedFile).subscribe({
      next: (blob: Blob) => { // Changed from HttpEvent<any> to Blob
          this.isConverting = false;
          this.progress = 100;
          this.toolformatsService.downloadBlob(blob, 'converted.pdf');
      },
      error: (error: any) => {
        this.isConverting = false;
        this.progress = 0;
        this.errorMessage = error.message || 'An unknown error occurred.';
      },
    });
  }
}