//#region ODataApi Imports
import { NorthwindModelSchema } from './NorthwindModel/northwindmodel.schema';
import { ODataWebExperimentalSchema } from './ODataWebExperimental/Northwind/Model/odatawebexperimental.schema';
//#endregion

export const NorthwindConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  creation: new Date('2020-05-31T22:56:44.4590970-03:00'),
  schemas: [
    NorthwindModelSchema,
    ODataWebExperimentalSchema
  ]
}