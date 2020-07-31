import { Configuration, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  name: 'TripPin',
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  creation: new Date('2020-07-31T18:32:54.8925171-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as Configuration;