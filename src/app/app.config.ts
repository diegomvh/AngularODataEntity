import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { NorthwindConfig } from './northwind';
import { TripPinConfig } from './trip-pin';
import Material from '@primeuix/themes/material';
import { provideODataClient, ODataInMemoryCache, ODataIndexedDBCache, ODataApiConfig, ODataLoader, ODataMetadataLoader, ODataRequest, ODataAsyncLoader, ODataMetadataParser, PassedInitialConfig, ODATA_CONFIG } from 'angular-odata';
import { map, Observable } from 'rxjs';

export function createMetadataLoader(httpClient: HttpClient) {
  const serviceRootUrl = 'https://services.odata.org/V4/(S(4m0tuxtnhcfctl4gzem3gr10))/TripPinServiceRW';
  const meta$ = httpClient.get(`${serviceRootUrl}/$metadata`, {responseType: 'text'});
  return new ODataMetadataLoader(meta$, { serviceRootUrl, name: "TrippinAsync" },
    (req: ODataRequest<any>): Observable<any> =>
      httpClient.request(req.method, `${req.url}`, {
        body: req.body,
        context: req.context as any,
        headers: req.headers as any,
        observe: req.observe,
        params: req.params as any,
        reportProgress: req.reportProgress,
        responseType: req.responseType,
        withCredentials: req.withCredentials,
      }),
    ); 
}

export function createCustomMixedLoader(syncConfig: ODataApiConfig | ODataApiConfig[], httpClient: HttpClient) {
  const serviceRootUrl = 'https://services.odata.org/V4/(S(4m0tuxtnhcfctl4gzem3gr10))/TripPinServiceRW';
  const configs$ = httpClient.get(`${serviceRootUrl}/$metadata`, {responseType: 'text'}).pipe(map(meta => {
    let configs = [new ODataMetadataParser(meta).metadata().toConfig({ serviceRootUrl, name: "TrippinAsync" })];
    if (Array.isArray(syncConfig)) {
      configs = [...configs, ...syncConfig];
    } else {
      configs = [...configs, syncConfig];
    }
    return configs;
  }))
  return new ODataAsyncLoader(configs$, 
    (req: ODataRequest<any>): Observable<any> =>
      httpClient.request(req.method, `${req.url}`, {
        body: req.body,
        context: req.context as any,
        headers: req.headers as any,
        observe: req.observe,
        params: req.params as any,
        reportProgress: req.reportProgress,
        responseType: req.responseType,
        withCredentials: req.withCredentials,
      }),
    ); 
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Material,
      }
    }),
    provideODataClient({
      /*
      loader: {
        provide: ODataLoader,
        useFactory: createMetadataLoader,
        deps: [HttpClient],
      },
      */
      loader: {
        provide: ODataLoader,
        useFactory: createCustomMixedLoader,
        deps: [ODATA_CONFIG, HttpClient],
      },
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
          cache: new ODataInMemoryCache({ maxAge: 60 }),
          options: {
            accept: {
              ieee754Compatible: true
            },
          }
        }),
        // TripPin
        Object.assign(TripPinConfig, {
          serviceRootUrl: 'http://localhost:4200/trippin/',
          cache: new ODataIndexedDBCache({ maxAge: 60, name: "TripPinCache", version: 1 }),
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
