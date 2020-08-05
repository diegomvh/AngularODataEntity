import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ShiftItem } from './shiftitem.entity';
//#endregion

export interface OpenShiftItem extends ShiftItem {
  //#region ODataApi Properties
  openSlotCount: number;
  //#endregion
}