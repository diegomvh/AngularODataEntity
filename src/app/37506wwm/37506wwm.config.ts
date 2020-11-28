import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ODataSchema } from './Cbs/OData/odata.schema';
//#endregion

export const 37506wwmConfig = {
  name: '37506wwm',
  serviceRootUrl: 'https://opendata.cbs.nl/ODataApi/OData/37506wwm/',
  version: '3.0',
  creation: new Date('2020-11-28T09:25:58.2083682-03:00'),
  schemas: [
    ODataSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;