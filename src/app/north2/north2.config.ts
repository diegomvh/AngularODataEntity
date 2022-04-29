//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const North2Config = {
  serviceRootUrl: 'https://services.odata.org/V2/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North2',
  version: '2.0',
  creation: new Date('2022-04-29T09:39:47.9655376-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion