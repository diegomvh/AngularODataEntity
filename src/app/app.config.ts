import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApiConfig, ODataInMemoryCache, ODataInStorageCache, provideODataClient } from 'angular-odata';
import { TripPinConfig } from './trippin';
import { North2Config } from './north2';
import { North3Config } from './north3';
import { NorthwindConfig } from './northwind';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideODataClient({
      config: [
        // North version 2
        Object.assign(North2Config, {
          serviceRootUrl: 'http://localhost:4200/north2/',
          options: {
            accept: {
              metadata: 'full',
            },
            withCredentials: true,
            params: { "$format": "json" },
            fetchPolicy: 'cache-and-network'
          }
        } as ApiConfig),
        // North version 3
        Object.assign(North3Config, {
          serviceRootUrl: 'http://localhost:4200/north3/',
          options: {
            accept: {
              metadata: 'full',
            },
            withCredentials: true,
            params: { "$format": "json" },
            fetchPolicy: 'no-cache'
          }
        } as ApiConfig),
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
              metadata: 'full',
            },
            prefer: {
              return: 'representation'
            }
          }
        } as ApiConfig),
      ]
    })
  ]
};
