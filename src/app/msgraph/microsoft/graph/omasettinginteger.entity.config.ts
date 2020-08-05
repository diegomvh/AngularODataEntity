import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingInteger } from './omasettinginteger.entity';
//#endregion

export const OmaSettingIntegerConfig = {
  name: "OmaSettingInteger",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    value: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<OmaSettingInteger>;