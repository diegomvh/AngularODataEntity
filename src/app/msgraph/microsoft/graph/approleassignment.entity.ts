import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface AppRoleAssignment extends DirectoryObject {
  //#region ODataApi Properties
  appRoleId: string;
  createdDateTime?: Date;
  principalDisplayName?: string;
  principalId?: string;
  principalType?: string;
  resourceDisplayName?: string;
  resourceId?: string;
  //#endregion
}