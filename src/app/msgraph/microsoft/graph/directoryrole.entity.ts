import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface DirectoryRole extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  roleTemplateId?: string;
  members?: DirectoryObject[];
  //#endregion
}