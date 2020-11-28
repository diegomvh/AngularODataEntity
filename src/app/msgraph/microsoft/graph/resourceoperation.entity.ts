import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ResourceOperation extends Entity {
  //#region ODataApi Properties
  actionName?: string;
  description?: string;
  resourceName?: string;
  //#endregion
}