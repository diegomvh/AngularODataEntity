import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
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