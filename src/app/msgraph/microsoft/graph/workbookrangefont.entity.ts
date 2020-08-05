import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookRangeFont extends Entity {
  //#region ODataApi Properties
  bold?: boolean;
  color?: string;
  italic?: boolean;
  name?: string;
  size?: number;
  underline?: string;
  //#endregion
}