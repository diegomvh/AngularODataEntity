import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

//#region ODataApi ApiConfig
export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2021-01-18T12:51:59.0413890-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion
