import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingBase64 } from './omasettingbase64.entity';
//#endregion

export const OmaSettingBase64Config = {
  name: "omaSettingBase64",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OmaSettingBase64>;