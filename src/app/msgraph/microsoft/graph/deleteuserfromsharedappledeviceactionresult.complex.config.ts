import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.complex';
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
} as StructuredTypeConfig<DeleteUserFromSharedAppleDeviceActionResult>;