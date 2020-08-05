import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
//#endregion

export interface WorkbookTableRow extends Entity {
  //#region ODataApi Properties
  index: number;
  values?: Json;
  //#endregion
}