import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingBoolean } from './omasettingboolean.entity';
import { OmaSettingBooleanModel } from './omasettingboolean.model';
import { OmaSettingBooleanCollection } from './omasettingboolean.collection';
//#endregion

export const OmaSettingBooleanConfig = {
  name: "omaSettingBoolean",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingBooleanModel,
  collection: OmaSettingBooleanCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<OmaSettingBoolean>;