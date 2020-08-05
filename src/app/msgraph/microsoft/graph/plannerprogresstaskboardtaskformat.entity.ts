import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface PlannerProgressTaskBoardTaskFormat extends Entity {
  //#region ODataApi Properties
  orderHint?: string;
  //#endregion
}