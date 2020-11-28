import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface PolicyBase extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  //#endregion
}