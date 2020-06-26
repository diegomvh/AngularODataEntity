import { Configuration, DATE_PARSER } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

export const NorthwindConfig = {
  name: 'Northwind',
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  creation: new Date('2020-06-26T17:55:09.3258693-03:00'),
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: {
    ...DATE_PARSER
  }
} as Configuration;