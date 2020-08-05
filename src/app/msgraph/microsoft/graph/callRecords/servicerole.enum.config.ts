import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceRole } from './servicerole.enum';
//#endregion

export const ServiceRoleConfig = {
  name: "ServiceRole",
  members: ServiceRole
} as EnumConfig<ServiceRole>;