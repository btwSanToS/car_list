import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/car_list/car-list.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));