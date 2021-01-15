import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindEntitiesContainer } from './northwindentities.container';
//#endregion

//#region ODataApi SchemaConfig
export const ModelSchema = {
  namespace: "ODataWebExperimental.Northwind.Model",
  enums: [],
  entities: [],
  callables: [],
  containers: [NorthwindEntitiesContainer]
} as SchemaConfig;
//#endregion