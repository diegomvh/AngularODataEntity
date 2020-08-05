import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
//#endregion

export const OmaSettingConfig = {
  name: "OmaSetting",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    omaUri: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OmaSetting>;