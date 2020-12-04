import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ModelsSchema } from './CBS/Website/ODataApi/Models/models.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

export const CBSConfig = {
  name: 'CBS',
  serviceRootUrl: 'https://www.cbs.nl/odata/v1/',
  creation: new Date('2020-12-03T22:49:52.6691068-03:00'),
  options: {
    version: '4.0'
  },
  schemas: [
    ModelsSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;