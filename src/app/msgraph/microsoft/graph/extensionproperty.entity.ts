import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface ExtensionProperty extends DirectoryObject {
  //#region ODataApi Properties
  appDisplayName?: string;
  dataType: string;
  isSyncedFromOnPremises?: boolean;
  name: string;
  targetObjects: string[];
  //#endregion
}