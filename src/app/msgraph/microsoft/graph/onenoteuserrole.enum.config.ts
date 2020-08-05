import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
//#endregion

export const OnenoteUserRoleConfig = {
  name: "onenoteUserRole",
  members: OnenoteUserRole
} as EnumConfig<OnenoteUserRole>;