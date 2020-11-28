import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourcePermission } from './resourcepermission.complex';
import { ResourcePermissionModel } from './resourcepermission.model';
import { ResourcePermissionCollection } from './resourcepermission.collection';
//#endregion

export interface InstanceResourceAccess {
  //#region ODataApi Properties
  permissions: ResourcePermission[];
  resourceAppId: string;
  //#endregion
}