﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
//#endregion

export const StateManagementSettingConfig = {
  name: "StateManagementSetting",
  members: StateManagementSetting
} as EnumConfig<StateManagementSetting>;