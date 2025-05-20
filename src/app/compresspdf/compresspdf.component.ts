import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToolformatsService } from '../toolformats.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-compresspdf',
  imports: [CommonModule],
  templateUrl: './compresspdf.component.html',
  styleUrl: './compresspdf.component.css'
})
export class CompresspdfComponent {
 selectedFile: File | null = null;
  isConverting = false;
  progress = 0;
  errorMessage = '';

  @ViewChild('fileInput') fileInputRef!: ElementRef;

  constructor(private toolformatsService: ToolformatsService) {}
  onFileSelectedAndConvert(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.pdfcompress();
    }
  }

  pdfcompress(): void {
    if (!this.selectedFile) {
      console.warn('No file selected');
      return;
    }

    this.isConverting = true;
    this.progress = 0;
    this.errorMessage = '';

    this.toolformatsService.pdfCompressor(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        this.isConverting = false;
        this.progress = 100;
        this.toolformatsService.downloadBlob(blob, 'Compress.pdf');
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
