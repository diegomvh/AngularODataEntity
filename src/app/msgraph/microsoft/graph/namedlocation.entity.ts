import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface NamedLocation extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  displayName: string;
  modifiedDateTime?: Date;
  //#endregion
}