﻿import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

export const North3Config = {
  name: 'North3',
  serviceRootUrl: 'https://services.odata.org/V3/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  version: '3.0',
  creation: new Date('2020-12-03T20:43:42.1196342-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;