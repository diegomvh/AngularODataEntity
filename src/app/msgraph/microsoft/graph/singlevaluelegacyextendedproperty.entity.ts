import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SingleValueLegacyExtendedProperty extends Entity {
  //#region ODataApi Properties
  value?: string;
  //#endregion
}