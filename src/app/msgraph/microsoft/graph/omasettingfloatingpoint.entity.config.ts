import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingFloatingPoint } from './omasettingfloatingpoint.entity';
//#endregion

export const OmaSettingFloatingPointConfig = {
  name: "omaSettingFloatingPoint",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    value: {type: 'Edm.Single', nullable: false}
  }
} as EntityConfig<OmaSettingFloatingPoint>;