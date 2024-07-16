//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NorthwindModelSchemaConfig } from './NorthwindModel/northwind-model.schema.config';
import { ModelSchemaConfig } from './ODataWebExperimental/Northwind/Model/model.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const NorthwindConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  name: 'Northwind',
  version: '4.0',
  creation: new Date('2024-07-16T11:45:22.5501422-03:00'),
  schemas: [
    NorthwindModelSchemaConfig,
    ModelSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion