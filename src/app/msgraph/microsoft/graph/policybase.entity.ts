import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface PolicyBase extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  //#endregion
}