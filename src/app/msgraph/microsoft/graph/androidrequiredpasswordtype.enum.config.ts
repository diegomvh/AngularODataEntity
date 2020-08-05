import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
//#endregion

export const AndroidRequiredPasswordTypeConfig = {
  name: "androidRequiredPasswordType",
  members: AndroidRequiredPasswordType
} as EnumConfig<AndroidRequiredPasswordType>;