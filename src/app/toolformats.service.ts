import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolformatsService {
  private apiUrl = 'https://localhost:7043/api/WordtoPdf/convert-word-to-pdf';

  constructor() {}

  convertWordToPdf(file: File): Observable<Blob> { // Return Observable<Blob>
    const formData = new FormData();
    formData.append('wordFile', file, file.name);

    return from(
      fetch(this.apiUrl, {
        method: 'POST',
        body: formData,
      })
    ).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap(errorText => throwError(() => new Error(`HTTP error! status: ${response.status}, body: ${errorText}`))
          ));
        }
        return from(response.blob());
      }),
      catchError((error: any) => {
        console.error('Error during Word to PDF conversion:', error);
        return throwError(() => new Error(`File conversion failed: ${error.message}`));
      })
    );
  }

  downloadBlob(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}