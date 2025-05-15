import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showDropdown = false;

  onMouseEnter() {
    this.showDropdown = true;
  }

  onMouseLeave() {
    this.showDropdown = false;
  }
  constructor(private router: Router) { }

  tools = [
    {
      title: 'Merge PDF',
      description: 'Combine multiple PDFs in the order you want with easiest PDF merger',
      route: '/merge-pdf',
      image: 'assets/merge.svg'
    },
    {
      title: 'Split PDF',
      description: 'Split a PDF into pages',
      route: '/split-pdf',
      image: 'assets/split.svg'
    },
    {
      title: 'Compress PDF',
      description: 'Reduce PDF file size',
      route: '/compress-pdf',
      image: 'assets/compress.svg'
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF to word',
      route: '/pdf-word',
      image: 'assets/pdftow.svg'
    },
    {
      title: 'Word to PDF',
      description: 'Convert Word to PDF',
      route: '/word-pdf',
      image: 'assets/wordtopd.svg'
    },
    {
      title: 'Video Compressor',
      description: 'Compressor for all videos',
      route: '/video-c',
      image: 'assets/compressv.svg'
    },
    {
      title: 'Lock Pdf',
      description: 'Here we can lock your pdf files by password',
      route: '/lockpdf',
      image: 'assets/lock.svg'
    },
    {
      title: 'Will be soon',
      description: 'Will be soon',
      route: '/',
      image: ''
    },
    {
      title: 'Will be soon',
      description: 'Will be soon',
      route: '/',
      image: ''
    },
    {
      title: 'Will be soon',
      description: 'Will be soon',
      route: '/',
      image: ''
    },
    {
      title: 'Will be soon',
      description: 'Will be soon',
      route: '/',
      image: ''
    },
    {
      title: 'Will be soon',
      description: 'Will be soon wait for the updates',
      route: '/',
      image: ''
    },
   
  ];

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
