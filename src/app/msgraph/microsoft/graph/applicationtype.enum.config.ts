import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationType } from './applicationtype.enum';
//#endregion

export const ApplicationTypeConfig = {
  name: "ApplicationType",
  members: ApplicationType
} as EnumConfig<ApplicationType>;