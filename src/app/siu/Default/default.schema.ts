import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContainerContainer } from './container.container';
//#endregion

export const DefaultSchema = {
  namespace: "Default",
  enums: [],
  entities: [],
  callables: [],
  containers: [ContainerContainer]
} as SchemaConfig;