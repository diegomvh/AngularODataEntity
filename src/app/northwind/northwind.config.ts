//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const NorthwindConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  name: 'Northwind',
  version: '4.0',
  creation: new Date('2022-04-29T09:40:32.4185915-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion