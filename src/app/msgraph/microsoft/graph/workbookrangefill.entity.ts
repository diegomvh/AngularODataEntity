import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookRangeFill extends Entity {
  //#region ODataApi Properties
  color?: string;
  //#endregion
}