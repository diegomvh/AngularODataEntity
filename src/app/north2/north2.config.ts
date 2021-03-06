﻿//#region AngularOData Imports
import { 
  ApiConfig, 
  EDM_PARSERS 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

//#region ODataApi ApiConfig
export const North2Config = {
  serviceRootUrl: 'https://services.odata.org/V2/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North2',
  version: '2.0',
  creation: new Date('2021-07-06T16:16:25.5054815-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion