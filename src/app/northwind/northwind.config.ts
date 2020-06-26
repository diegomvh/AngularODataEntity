import { Configuration, DATE_PARSER, DECIMAL_PARSER } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ModelSchema } from './ODataWebExperimental/Northwind/Model/model.schema';
//#endregion

export const NorthwindConfig = {
  name: 'Northwind',
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  creation: new Date('2020-06-26T20:50:42.1804400-03:00'),
  ieee754Compatible: true,
  schemas: [
    NorthwindModelSchema,
    ModelSchema
  ],
  parsers: {
    ...DATE_PARSER,
    ...DECIMAL_PARSER
  }
} as Configuration;