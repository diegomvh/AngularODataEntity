import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

//#region ODataApi ApiConfig
export const NorthwindConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  name: 'Northwind',
  version: '4.0',
  creation: new Date('2021-02-03T08:03:25.0074177-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion