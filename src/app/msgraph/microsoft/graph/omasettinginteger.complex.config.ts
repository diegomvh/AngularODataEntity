import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingInteger } from './omasettinginteger.complex';
import { OmaSettingIntegerModel } from './omasettinginteger.model';
import { OmaSettingIntegerCollection } from './omasettinginteger.collection';
//#endregion

export const OmaSettingIntegerConfig = {
  name: "omaSettingInteger",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingIntegerModel,
  collection: OmaSettingIntegerCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingInteger>;