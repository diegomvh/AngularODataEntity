//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ODataDemoSchemaConfig } from './ODataDemo/o-data-demo.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const North2Config = {
  serviceRootUrl: 'https://services.odata.org/V2/(S(hovbiiwxashh0qaz2p0p5go0))/OData/OData.svc/',
  name: 'North2',
  version: '2.0',
  creation: new Date('2024-08-05T10:01:12.8897948-03:00'),
  schemas: [
    ODataDemoSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion