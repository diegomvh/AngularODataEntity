import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftItem } from './shiftitem.entity';
//#endregion

export interface Shift extends ChangeTrackedEntity {
  //#region ODataApi Properties
  sharedShift?: ShiftItem;
  draftShift?: ShiftItem;
  userId?: string;
  schedulingGroupId?: string;
  //#endregion
}