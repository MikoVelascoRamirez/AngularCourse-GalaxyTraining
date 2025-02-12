import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Demo1Component } from './app/demo1/demo1.component';

bootstrapApplication(Demo1Component, appConfig)
  .catch((err) => console.error(err));
