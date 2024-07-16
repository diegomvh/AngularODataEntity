//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NorthwindEntitiesEntityContainerConfig } from './northwind-entities.entitycontainer.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const ModelSchemaConfig = {
  namespace: 'ODataWebExperimental.Northwind.Model',
  enums: [],
  entities: [],
  callables: [],
  containers: [NorthwindEntitiesEntityContainerConfig]
} as SchemaConfig;
//#endregion