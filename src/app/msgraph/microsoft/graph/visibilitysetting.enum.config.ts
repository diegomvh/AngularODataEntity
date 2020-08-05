import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { VisibilitySetting } from './visibilitysetting.enum';
//#endregion

export const VisibilitySettingConfig = {
  name: "visibilitySetting",
  members: VisibilitySetting
} as EnumConfig<VisibilitySetting>;