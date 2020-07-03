import { Configuration, DATE_PARSER, DECIMAL_PARSER } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  name: 'TripPin',
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  creation: new Date('2020-07-03T17:14:18.5013542-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: {
    ...DATE_PARSER,
    ...DECIMAL_PARSER
  }
} as Configuration;