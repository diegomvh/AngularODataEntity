﻿//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ModelsSchema } from './CBS/Website/ODataApi/Models/models.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const CBSConfig = {
  serviceRootUrl: 'https://www.cbs.nl/odata/v1/',
  name: 'CBS',
  version: '4.0',
  creation: new Date('2022-04-29T09:40:16.4827002-03:00'),
  schemas: [
    ModelsSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion