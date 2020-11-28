import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingString } from './omasettingstring.entity';
import { OmaSettingStringModel } from './omasettingstring.model';
import { OmaSettingStringCollection } from './omasettingstring.collection';
//#endregion

export const OmaSettingStringConfig = {
  name: "omaSettingString",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingStringModel,
  collection: OmaSettingStringCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OmaSettingString>;