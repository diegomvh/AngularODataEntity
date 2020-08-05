import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
//#endregion

export const AppLockerApplicationControlTypeConfig = {
  name: "AppLockerApplicationControlType",
  members: AppLockerApplicationControlType
} as EnumConfig<AppLockerApplicationControlType>;