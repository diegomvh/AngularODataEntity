import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

export const North2Config = {
  name: 'North2',
  serviceRootUrl: 'https://services.odata.org/V2/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  version: '2.0',
  creation: new Date('2020-08-05T16:17:39.4952506-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;