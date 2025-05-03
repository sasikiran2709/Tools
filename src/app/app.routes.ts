import { Routes } from '@angular/router';
import { MergepdfComponent } from './mergepdf/mergepdf.component';
import { HomeComponent } from './home/home.component';
import { PdftowordComponent } from './pdftoword/pdftoword.component';
import { SplitpdfComponent } from './splitpdf/splitpdf.component';
import { CompresspdfComponent } from './compresspdf/compresspdf.component';
import { WordtopdfComponent } from './wordtopdf/wordtopdf.component';
import { VideocompressorComponent } from './videocompressor/videocompressor.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'merge-pdf', component:MergepdfComponent}, 
    {path:'split-pdf', component:SplitpdfComponent},   
    {path:'compress-pdf', component:CompresspdfComponent},
    {path:'pdf-word', component:PdftowordComponent},
    {path:'word-pdf', component:WordtopdfComponent},
    {path:'video-c', component:VideocompressorComponent},
   
    
    
];
