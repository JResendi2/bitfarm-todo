import { ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter, withComponentInputBinding} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { testInterceptor } from './interceptors/testInterceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([testInterceptor]),
    )
  ]
};
