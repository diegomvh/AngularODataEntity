import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SigninFrequencyType } from './signinfrequencytype.enum';
//#endregion

export const SigninFrequencyTypeConfig = {
  name: "signinFrequencyType",
  members: SigninFrequencyType
} as EnumTypeConfig<SigninFrequencyType>;