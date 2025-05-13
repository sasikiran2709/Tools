import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('fileInput') fileInputRef!: ElementRef;

  constructor(private toolformatsService: ToolformatsService) {}

  onFileSelectedAndConvert(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToPdf();
    }
  }

  convertToPdf(): void {
    if (!this.selectedFile) {
      console.warn('No file selected');
      return;
    }

    this.isConverting = true;
    this.progress = 0;
    this.errorMessage = '';

    this.toolformatsService.convertWordToPdf(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        this.isConverting = false;
        this.progress = 100;
        this.toolformatsService.downloadBlob(blob, 'converted.pdf');
        // Reset the file input to allow for new selections
        this.fileInputRef.nativeElement.value = '';
        this.selectedFile = null;
      },
      error: (error: any) => {
        this.isConverting = false;
        this.progress = 0;
        this.errorMessage = error.message || 'An unknown error occurred.';
      },
    });
  }
}