import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceRole } from './servicerole.enum';
//#endregion

export const ServiceRoleConfig = {
  name: "serviceRole",
  members: ServiceRole
} as EnumTypeConfig<ServiceRole>;