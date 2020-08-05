import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingBoolean } from './omasettingboolean.entity';
//#endregion

export const OmaSettingBooleanConfig = {
  name: "OmaSettingBoolean",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    value: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<OmaSettingBoolean>;