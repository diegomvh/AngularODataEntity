//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NorthwindEntitiesContainer } from './northwindentities.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const ModelSchema = {
  namespace: "ODataWebExperimental.Northwind.Model",
  enums: [],
  entities: [],
  callables: [],
  containers: [NorthwindEntitiesContainer]
} as SchemaConfig;
//#endregion