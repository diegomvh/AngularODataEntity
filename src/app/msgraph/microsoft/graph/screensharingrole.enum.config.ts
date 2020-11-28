import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScreenSharingRole } from './screensharingrole.enum';
//#endregion

export const ScreenSharingRoleConfig = {
  name: "screenSharingRole",
  members: ScreenSharingRole
} as EnumTypeConfig<ScreenSharingRole>;