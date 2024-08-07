﻿//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ODataDemoSchemaConfig } from './ODataDemo/o-data-demo.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const North3Config = {
  serviceRootUrl: 'https://services.odata.org/V3/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North3',
  version: '3.0',
  creation: new Date('2024-08-05T10:01:22.6563527-03:00'),
  schemas: [
    ODataDemoSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion