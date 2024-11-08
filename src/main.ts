import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { appConfig } from './app/app.config';  // Assuming you have appConfig

// Bootstrap the application and include HttpClientModule in the providers
bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,  // Provide HttpClientModule globally here
    ...appConfig.providers  // Spread any existing providers from appConfig if needed
  ]
})
  .catch((err) => console.error(err));
