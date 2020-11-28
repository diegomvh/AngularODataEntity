import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationUserRole } from './educationuserrole.enum';
//#endregion

export const EducationUserRoleConfig = {
  name: "educationUserRole",
  members: EducationUserRole
} as EnumTypeConfig<EducationUserRole>;