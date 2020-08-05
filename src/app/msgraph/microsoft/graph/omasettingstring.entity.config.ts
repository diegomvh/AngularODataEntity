import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingString } from './omasettingstring.entity';
//#endregion

export const OmaSettingStringConfig = {
  name: "omaSettingString",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    value: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OmaSettingString>;