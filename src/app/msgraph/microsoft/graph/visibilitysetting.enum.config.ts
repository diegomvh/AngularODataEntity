import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { VisibilitySetting } from './visibilitysetting.enum';
//#endregion

export const VisibilitySettingConfig = {
  name: "VisibilitySetting",
  members: VisibilitySetting
} as EnumConfig<VisibilitySetting>;