import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

export const NorthwindConfig = {
  name: 'Northwind',
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  version: '4.0',
  creation: new Date('2020-08-05T17:38:19.8526697-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;