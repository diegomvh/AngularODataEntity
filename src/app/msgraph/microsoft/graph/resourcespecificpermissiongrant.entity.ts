import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface ResourceSpecificPermissionGrant extends DirectoryObject {
  //#region ODataApi Properties
  clientAppId?: string;
  clientId?: string;
  permission?: string;
  permissionType?: string;
  resourceAppId?: string;
  //#endregion
}