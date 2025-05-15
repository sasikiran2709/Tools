import { Component } from '@angular/core';
import { ToolformatsService } from '../toolformats.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-lockpdf',
  imports: [CommonModule,FormsModule],
  templateUrl: './lockpdf.component.html',
  styleUrl: './lockpdf.component.css'
})
export class LockpdfComponent {
  selectedFile: File | null = null;
  password: string = '';
  errorMessage = '';
  isLocking = false;

  constructor(private toolService: ToolformatsService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  lockPdf() {
    if (!this.selectedFile || !this.password) {
      this.errorMessage = 'PDF and password are required.';
      return;
    }
 
    this.isLocking = true;
    this.toolService.lockPdf(this.selectedFile, this.password).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'locked.pdf';
        a.click();
        URL.revokeObjectURL(url);
        this.isLocking = false;
      },
      error: (err) => {
        this.errorMessage = 'Locking failed: ' + err.message;
        this.isLocking = false;
      }
    });
  }
}
