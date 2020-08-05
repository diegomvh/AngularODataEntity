import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Directory extends Entity {
  //#region ODataApi Properties
  deletedItems?: DirectoryObject[];
  //#endregion
}