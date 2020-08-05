import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScreenSharingRole } from './screensharingrole.enum';
//#endregion

export const ScreenSharingRoleConfig = {
  name: "ScreenSharingRole",
  members: ScreenSharingRole
} as EnumConfig<ScreenSharingRole>;