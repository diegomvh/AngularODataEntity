import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingBase64 } from './omasettingbase64.entity';
import { OmaSettingBase64Model } from './omasettingbase64.model';
import { OmaSettingBase64Collection } from './omasettingbase64.collection';
//#endregion

export const OmaSettingBase64Config = {
  name: "omaSettingBase64",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingBase64Model,
  collection: OmaSettingBase64Collection,
  annotations: [],
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OmaSettingBase64>;