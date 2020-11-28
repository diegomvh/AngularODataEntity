import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PermissionType } from './permissiontype.enum';
//#endregion

export const PermissionTypeConfig = {
  name: "permissionType",
  members: PermissionType
} as EnumTypeConfig<PermissionType>;