import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ShiftItem } from './shiftitem.complex';
import { ShiftItemModel } from './shiftitem.model';
import { ShiftItemCollection } from './shiftitem.collection';
//#endregion

export interface OpenShiftItem extends ShiftItem {
  //#region ODataApi Properties
  openSlotCount: number;
  //#endregion
}