import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.complex';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export const OmaSettingConfig = {
  name: "omaSetting",
  model: OmaSettingModel,
  collection: OmaSettingCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    omaUri: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OmaSetting>;