import { Component } from '@angular/core';
import { ToolformatsService } from '../toolformats.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mergepdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mergepdf.component.html',
  styleUrls: ['./mergepdf.component.css']
})
export class MergepdfComponent {
  isConverting = false;
  progress = 0;
  errorMessage = '';
  selectedFiles: File[] = [];

  constructor(private toolService: ToolformatsService) {}

  // Method to handle file selection
  onPdfFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
     

      // Check if at least 2 PDFs are selected
      if (this.selectedFiles.length < 2) {
        this.errorMessage = 'Please select at least two PDF files to merge.';
        return;
      }

      this.errorMessage = '';  // Clear any previous error message
      this.onMergeClicked();  // Start the merge immediately after files are selected
    }
  }

  // Method to handle the merge process and auto-download the result
  onMergeClicked(): void {
   
    this.errorMessage = '';
    this.isConverting = true;
    this.progress = 0;

   
    this.toolService.mergePdf(this.selectedFiles).subscribe({
      next: (blob: Blob) => {
        // Create a download link for the merged PDF
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.pdf';  
        a.click();  
        URL.revokeObjectURL(url);  

        // Reset state after the merge
        this.isConverting = false;
        this.progress = 100;  
      },
      error: (err) => {
        console.error('Merge failed:', err);
        this.errorMessage = `PDF merge failed: ${err.message}`;
        this.isConverting = false;
        this.progress = 0;
      }
    });
  } 
}
