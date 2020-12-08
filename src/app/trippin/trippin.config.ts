import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2020-12-08T07:04:21.8284834-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;