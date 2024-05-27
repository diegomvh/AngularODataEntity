//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ODataDemoSchema } from './ODataDemo/odatademo.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const North3Config = {
  serviceRootUrl: 'https://services.odata.org/V3/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North3',
  version: '3.0',
  creation: new Date('2024-05-27T08:58:59.8843706-03:00'),
  schemas: [
    ODataDemoSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion