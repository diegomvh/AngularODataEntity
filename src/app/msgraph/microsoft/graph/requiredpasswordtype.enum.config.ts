import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequiredPasswordType } from './requiredpasswordtype.enum';
//#endregion

export const RequiredPasswordTypeConfig = {
  name: "requiredPasswordType",
  members: RequiredPasswordType
} as EnumConfig<RequiredPasswordType>;