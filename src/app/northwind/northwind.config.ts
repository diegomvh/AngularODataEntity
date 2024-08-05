//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NorthwindModelSchemaConfig } from './NorthwindModel/northwind-model.schema.config';
import { ModelSchemaConfig } from './ODataWebV4/Northwind/Model/model.schema.config';
//#endregion

//#region ODataApiGen ApiConfig
export const NorthwindConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  name: 'Northwind',
  version: '4.0',
  creation: new Date('2024-08-05T10:00:41.0670587-03:00'),
  schemas: [
    NorthwindModelSchemaConfig,
    ModelSchemaConfig
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion