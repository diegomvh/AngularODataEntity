import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

//#region ODataApi ApiConfig
export const North2Config = {
  serviceRootUrl: 'https://services.odata.org/V2/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North2',
  version: '2.0',
  creation: new Date('2021-02-10T09:44:59.7274658-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion