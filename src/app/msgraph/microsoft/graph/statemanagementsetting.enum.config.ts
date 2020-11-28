import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
//#endregion

export const StateManagementSettingConfig = {
  name: "stateManagementSetting",
  members: StateManagementSetting
} as EnumTypeConfig<StateManagementSetting>;