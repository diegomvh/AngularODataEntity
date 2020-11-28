import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailRole } from './emailrole.enum';
//#endregion

export const EmailRoleConfig = {
  name: "emailRole",
  members: EmailRole
} as EnumTypeConfig<EmailRole>;