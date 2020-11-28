import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DirectoryObject } from './directoryobject.entity';
import { EntityModel } from './entity.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { EntityCollection } from './entity.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface Directory extends Entity {
  //#region ODataApi Properties
  deletedItems?: DirectoryObject[];
  //#endregion
}