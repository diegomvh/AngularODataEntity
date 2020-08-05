import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
//#endregion

export interface WorkbookFunctionResult extends Entity {
  //#region ODataApi Properties
  error?: string;
  value?: Json;
  //#endregion
}