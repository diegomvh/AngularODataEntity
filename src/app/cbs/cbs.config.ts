import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ModelsSchema } from './CBS/Website/ODataApi/Models/models.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

//#region ODataApi ApiConfig
export const CBSConfig = {
  serviceRootUrl: 'https://www.cbs.nl/odata/v1/',
  name: 'CBS',
  version: '4.0',
  creation: new Date('2021-02-03T08:02:24.4353188-03:00'),
  schemas: [
    ModelsSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion