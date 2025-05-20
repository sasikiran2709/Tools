import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolformatsService {
  private wordToPdfUrl = 'https://localhost:7043/api/WordtoPdf/convert-word-to-pdf';// word to pdf
  private videoCompressUrl = 'https://localhost:7043/api/Video/compress-video'; // vedio compressor
  private pdfMergeUrl = 'https://localhost:7043/api/mergepdf/merge'; // merge pdf
  private splitPdfUrl = 'https://localhost:7043/api/splitpdf/split'; //split pdf
  private lockpdfUrl  = 'https://localhost:7043/api/LockPdf/lockpdfs'; //lock pdf
  private pdftowordurl='https://localhost:7043/api/Pdftoword/convert-pdf-to-word'; //pdf to word
  private compresspdfUrl='https://localhost:7043/api/PdfCompressor/compress';  //pdfcompressor

  constructor() { }

  convertWordToPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('wordFile', file, file.name);

    return from(
      fetch(this.wordToPdfUrl, {
        method: 'POST',
        body: formData,
      })
    ).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap(errorText => throwError(() => new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)))
          );
        }
        return from(response.blob());
      }),
      catchError((error: any) => {
        console.error('Error during Word to PDF conversion:', error);
        return throwError(() => new Error(`File conversion failed: ${error.message}`));
      })
    );
  }

  compressVideo(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('videoFile', file, file.name);

    return from(
      fetch(this.videoCompressUrl, {
        method: 'POST',
        body: formData,
      })
    ).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap(errorText => throwError(() => new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)))
          );
        }
        return from(response.blob());
      }),
      catchError((error: any) => {
        console.error('Error during video compression:', error);
        return throwError(() => new Error(`Video compression failed: ${error.message}`));
      })
    );
  }




  mergePdf(files: File[]): Observable<Blob> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file, file.name); // 'pdfFiles' should match the API key
    });

    return from(
      fetch(this.pdfMergeUrl, {
        method: 'POST',
        body: formData,
      })
    ).pipe(
      switchMap((response: Response) => {
        // Handle non-OK responses
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap((errorText: string) =>
              throwError(() => new Error(`HTTP error! Status: ${response.status}, Body: ${errorText}`))
            )
          );
        }

        // Handle the successful response and return the Blob
        return from(response.blob());
      }),
      catchError((error: any) => {
        console.error('Error during PDF merge:', error);
        return throwError(() => new Error(`PDF merge failed: ${error.message}`));
      })
    );
  }
 
  splitPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file); // 'file' must match the backend parameter
  
    return from(
      fetch(this.splitPdfUrl, {
        method: 'POST',
        body: formData,
      })
    ).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap((errorText: string) =>
              throwError(() => new Error(`HTTP error! Status: ${response.status}, Body: ${errorText}`))
            )
          );
        }
  
        return from(response.blob()); // we expect a ZIP file
      }),
      catchError((error: any) => {
        console.error('Error during PDF split:', error);
        return throwError(() => new Error(`PDF split failed: ${error.message}`));
      })
    );
  }
  
  lockPdf(file: File, password: string): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('password', password);
  
    return from(
      fetch(this.lockpdfUrl, {
        method: 'POST',
        body: formData
      })
    ).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          return from(response.text()).pipe(
            switchMap(text => throwError(() => new Error(text)))
          );
        }
        return from(response.blob());
      }),
      catchError((err: any) => {
        return throwError(() => new Error('Lock PDF failed: ' + err.message));
      })
    );
  }
pdftoword(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('pdffile', file);
  
    return from(
    fetch(this.pdftowordurl, {
      method: 'POST',
      body: formData
    })
  ).pipe(
    switchMap((response: Response) => {
      if (!response.ok) {
        return from(response.text()).pipe(
          switchMap(text => throwError(() => new Error(text)))
        );
      }
      return from(response.blob());
    }),
    catchError((err: any) => {
      return throwError(() => new Error('PDF failed to convert: ' + err.message));
    })
  );
}
pdfCompressor(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
  
    return from(
    fetch(this.compresspdfUrl,{
      method: 'POST',
      body: formData
    })
  ).pipe(
    switchMap((response: Response) => {
      if (!response.ok) {
        return from(response.text()).pipe(
          switchMap(text => throwError(() => new Error(text)))
        );
      }
      return from(response.blob());
    }),
    catchError((err: any) => {
      return throwError(() => new Error('PDF Compressor Failed: ' + err.message));
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
