import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.entity';
//#endregion

export const DeleteUserFromSharedAppleDeviceActionResultConfig = {
  name: "deleteUserFromSharedAppleDeviceActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeleteUserFromSharedAppleDeviceActionResult>;