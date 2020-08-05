import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ColumnLink extends Entity {
  //#region ODataApi Properties
  name?: string;
  //#endregion
}