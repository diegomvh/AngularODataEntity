import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

//#region ODataApi ApiConfig
export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2021-02-03T08:04:42.3970089-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion