import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookApplication extends Entity {
  //#region ODataApi Properties
  calculationMode: string;
  //#endregion
}