import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DirectoryObject } from './directoryobject.entity';
import { AdministrativeUnit } from './administrativeunit.entity';
import { EntityModel } from './entity.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { EntityCollection } from './entity.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
//#endregion

export interface Directory extends Entity {
  //#region ODataApi Properties
  administrativeUnits?: AdministrativeUnit[];
  deletedItems?: DirectoryObject[];
  //#endregion
}