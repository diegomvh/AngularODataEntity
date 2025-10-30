import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/material';

import { routes } from './app.routes';
import { ODataApiConfig, ODataInMemoryCache, ODataInStorageCache, PassedInitialConfig, provideODataClient } from 'angular-odata';
import { TripPinConfig } from './trip-pin';
import { NorthwindConfig } from './northwind';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material,
      }
    }),
    provideODataClient({
      config: [
        {
          name: "MicrosoftGraph",
          serviceRootUrl: 'https://graph.microsoft.com/v1.0/',
          options: {
            stringAsEnum: true,
            stripMetadata: 'minimal',
            accept: {
              metadata: 'minimal',
            },
            prefer: {
              return: 'representation'
            }
          }
        },
        // Northwind version 4
        Object.assign(NorthwindConfig, {
          cache: new ODataInMemoryCache({ timeout: 60 }),
          options: {
            accept: {
              ieee754Compatible: true
            },
          }
        }),
        // TripPin
        Object.assign(TripPinConfig, {
          serviceRootUrl: 'http://localhost:4200/trippin/',
          cache: new ODataInStorageCache({ timeout: 60, name: "TripPinCache" }),
          default: true,
          options: {
            stringAsEnum: true,
            stripMetadata: 'minimal',
            accept: {
              metadata: 'minimal',
            },
            prefer: {
              return: 'representation'
            }
          }
        } as ODataApiConfig),
      ]
    })
  ]
};
