import { CommonModule } from '@angular/common';
import { ToolformatsService } from '../toolformats.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splitpdf',
  imports: [CommonModule],
  templateUrl: './splitpdf.component.html',
  styleUrl: './splitpdf.component.css'
})
export class SplitpdfComponent {
  isConverting = false;
  isSplitting = false;              
  progress = 0;
  errorMessage = '';
  selectedFile: File | null = null; //
  constructor(private toolService: ToolformatsService) {} 
  // File input change handler
  onPdfFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Check that it's a PDF
      if (file.type !== 'application/pdf') {
        this.errorMessage = 'Please select a valid PDF file.';
        return;
      }

      this.selectedFile = file;
      this.errorMessage = '';
      this.onSplitClicked(); // Automatically start splitting
    }
  }

  // Trigger split API call
  onSplitClicked(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a PDF file to split.';
      return;
    }

    this.errorMessage = '';
    this.isSplitting = true;
    this.progress = 0;

    this.toolService.splitPdf(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'split-pages.zip';
        a.click();
        window.URL.revokeObjectURL(url);

        this.progress = 100;
        this.isSplitting = false;
      },
      error: (err) => {
        console.error('Split failed:', err);
        this.errorMessage = `PDF split failed: ${err.message}`;
        this.progress = 0;
        this.isSplitting = false;
      }
    });
  }
}
