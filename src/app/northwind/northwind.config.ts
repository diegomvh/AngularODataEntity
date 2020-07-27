import { Configuration, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

export const NorthwindConfig = {
  name: 'Northwind',
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  creation: new Date('2020-07-27T17:11:13.9261112-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: EDM_PARSERS
} as Configuration;