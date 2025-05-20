import { Component, ElementRef,ViewChild } from '@angular/core';
import { ToolformatsService } from '../toolformats.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdftoword',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './pdftoword.component.html',
  styleUrl: './pdftoword.component.css'
})
export class PdftowordComponent {
selectedFile: File | null = null;
  isConverting = false;
  progress = 0;
  errorMessage = '';
    @ViewChild('fileInput') fileInputRef!: ElementRef;

   constructor(private toolformatsService: ToolformatsService) {}

    onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToword();
    }
  }
  convertToword(): void {
    if (!this.selectedFile) {
      console.warn('No file selected');
      return;
    }

    this.isConverting = true;
    this.progress = 0;
    this.errorMessage = '';

     this.toolformatsService.pdftoword(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        this.isConverting = false;
        this.progress = 100;
        this.toolformatsService.downloadBlob(blob, 'converted.docx');
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
