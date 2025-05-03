import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import your components and routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MergepdfComponent } from './mergepdf/mergepdf.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { AppRoutingModule } from './app-routing.module';  // This handles routing for you

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MergepdfComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,  // Make sure this is included for routing to work
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
