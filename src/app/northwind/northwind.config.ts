import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

export const NorthwindConfig = {
  name: 'Northwind',
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  version: '4.0',
  creation: new Date('2020-11-28T09:28:37.8040066-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;