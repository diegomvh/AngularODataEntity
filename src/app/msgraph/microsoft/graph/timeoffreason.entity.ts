import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface TimeOffReason extends ChangeTrackedEntity {
  //#region ODataApi Properties
  displayName?: string;
  iconType?: TimeOffReasonIconType;
  isActive?: boolean;
  //#endregion
}