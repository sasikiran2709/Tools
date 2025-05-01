import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';    // ← add this

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MergepdfComponent } from './mergepdf/mergepdf.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MergepdfComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'merge-pdf', component: MergepdfComponent },
      
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}