﻿import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

//#region ODataApi ApiConfig
export const North3Config = {
  serviceRootUrl: 'https://services.odata.org/V3/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North3',
  version: '3.0',
  creation: new Date('2021-05-20T13:34:17.5910730-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion