import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PermissionClassificationType } from './permissionclassificationtype.enum';
//#endregion

export const PermissionClassificationTypeConfig = {
  name: "permissionClassificationType",
  members: PermissionClassificationType
} as EnumTypeConfig<PermissionClassificationType>;