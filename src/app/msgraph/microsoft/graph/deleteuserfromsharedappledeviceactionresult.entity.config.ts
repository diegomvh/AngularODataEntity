import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.entity';
import { DeleteUserFromSharedAppleDeviceActionResultModel } from './deleteuserfromsharedappledeviceactionresult.model';
import { DeleteUserFromSharedAppleDeviceActionResultCollection } from './deleteuserfromsharedappledeviceactionresult.collection';
//#endregion

export const DeleteUserFromSharedAppleDeviceActionResultConfig = {
  name: "deleteUserFromSharedAppleDeviceActionResult",
  base: "microsoft.graph.deviceActionResult",
  model: DeleteUserFromSharedAppleDeviceActionResultModel,
  collection: DeleteUserFromSharedAppleDeviceActionResultCollection,
  annotations: [],
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeleteUserFromSharedAppleDeviceActionResult>;