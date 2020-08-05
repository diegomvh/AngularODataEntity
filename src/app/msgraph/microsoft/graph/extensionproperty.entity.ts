import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface ExtensionProperty extends DirectoryObject {
  //#region ODataApi Properties
  appDisplayName?: string;
  name: string;
  dataType: string;
  isSyncedFromOnPremises?: boolean;
  targetObjects: string[];
  //#endregion
}