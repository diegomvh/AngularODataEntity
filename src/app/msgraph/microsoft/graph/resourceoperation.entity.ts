import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ResourceOperation extends Entity {
  //#region ODataApi Properties
  resourceName?: string;
  actionName?: string;
  description?: string;
  //#endregion
}