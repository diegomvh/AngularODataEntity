import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftItem } from './shiftitem.complex';
import { ShiftItemModel } from './shiftitem.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ShiftItemCollection } from './shiftitem.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface Shift extends ChangeTrackedEntity {
  //#region ODataApi Properties
  draftShift?: ShiftItem;
  schedulingGroupId?: string;
  sharedShift?: ShiftItem;
  userId?: string;
  //#endregion
}