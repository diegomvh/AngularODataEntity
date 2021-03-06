﻿//#region AngularOData Imports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ODataSchema } from './Cbs/OData/odata.schema';
//#endregion

//#region ODataApi ApiConfig
export const WwmConfig = {
  serviceRootUrl: 'https://opendata.cbs.nl/ODataApi/OData/37506wwm/',
  name: '37506wwm',
  version: '3.0',
  creation: new Date('2021-07-06T16:02:34.6304102-03:00'),
  schemas: [
    ODataSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion
