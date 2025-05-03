import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config'; // If you're using a custom config

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread your custom app config
  providers: [
    ...appConfig.providers || [], // In case appConfig already includes providers
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
