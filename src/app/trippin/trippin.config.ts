//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2024-05-27T08:57:21.4522512-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion