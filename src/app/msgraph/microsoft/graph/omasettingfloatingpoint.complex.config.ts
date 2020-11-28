import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingFloatingPoint } from './omasettingfloatingpoint.complex';
import { OmaSettingFloatingPointModel } from './omasettingfloatingpoint.model';
import { OmaSettingFloatingPointCollection } from './omasettingfloatingpoint.collection';
//#endregion

export const OmaSettingFloatingPointConfig = {
  name: "omaSettingFloatingPoint",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingFloatingPointModel,
  collection: OmaSettingFloatingPointCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.Single', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingFloatingPoint>;