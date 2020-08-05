import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
//#endregion

export const AndroidRequiredPasswordTypeConfig = {
  name: "AndroidRequiredPasswordType",
  members: AndroidRequiredPasswordType
} as EnumConfig<AndroidRequiredPasswordType>;