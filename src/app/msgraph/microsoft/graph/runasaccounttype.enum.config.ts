import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RunAsAccountType } from './runasaccounttype.enum';
//#endregion

export const RunAsAccountTypeConfig = {
  name: "runAsAccountType",
  members: RunAsAccountType
} as EnumTypeConfig<RunAsAccountType>;