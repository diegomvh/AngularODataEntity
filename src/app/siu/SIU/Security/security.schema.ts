import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiuPrincipalConfig } from './siuprincipal.entity.config';
//#endregion

export const SecuritySchema = {
  namespace: "SIU.Security",
  enums: [],
  entities: [SiuPrincipalConfig],
  callables: [],
  containers: []
} as SchemaConfig;