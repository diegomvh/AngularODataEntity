import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { StorageBasesConfig } from './storagebases.enum.config';
//#endregion

export const InfrastructureSchema = {
  namespace: "SIU.Api.Infrastructure",
  enums: [StorageBasesConfig],
  entities: [],
  callables: [],
  containers: []
} as SchemaConfig;