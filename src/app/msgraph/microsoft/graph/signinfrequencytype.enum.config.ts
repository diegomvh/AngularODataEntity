import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SigninFrequencyType } from './signinfrequencytype.enum';
//#endregion

export const SigninFrequencyTypeConfig = {
  name: "SigninFrequencyType",
  members: SigninFrequencyType
} as EnumConfig<SigninFrequencyType>;