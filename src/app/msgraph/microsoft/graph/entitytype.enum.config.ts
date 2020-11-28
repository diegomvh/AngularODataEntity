import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EntityType } from './entitytype.enum';
//#endregion

export const EntityTypeConfig = {
  name: "entityType",
  members: EntityType
} as EnumTypeConfig<EntityType>;