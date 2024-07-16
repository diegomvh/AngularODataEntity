//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TripPinSchemaConfig } from './Microsoft/OData/SampleService/Models/TripPin/trip-pin.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2024-07-08T10:14:22.1403013-03:00'),
  schemas: [
    TripPinSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion