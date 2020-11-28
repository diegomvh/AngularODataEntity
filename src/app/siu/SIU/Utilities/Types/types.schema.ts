import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternalTypesConfig } from './internaltypes.enum.config';
//#endregion

export const TypesSchema = {
  namespace: "SIU.Utilities.Types",
  enums: [InternalTypesConfig],
  entities: [],
  callables: [],
  containers: []
} as SchemaConfig;