//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ODataSchema } from './Cbs/OData/odata.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const 37506wwmConfig = {
  serviceRootUrl: 'https://opendata.cbs.nl/ODataApi/OData/37506wwm/',
  name: '37506wwm',
  version: '3.0',
  creation: new Date('2021-09-28T22:29:04.0284712-03:00'),
  schemas: [
    ODataSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion