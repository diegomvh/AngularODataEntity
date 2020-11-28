import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationType } from './applicationtype.enum';
//#endregion

export const ApplicationTypeConfig = {
  name: "applicationType",
  members: ApplicationType
} as EnumTypeConfig<ApplicationType>;