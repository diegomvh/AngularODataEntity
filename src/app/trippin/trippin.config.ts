//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TripPinSchemaConfig } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  name: 'TripPin',
  version: '4.0',
  creation: new Date('2024-07-02T11:14:57.2102652-03:00'),
  schemas: [
    TripPinSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion