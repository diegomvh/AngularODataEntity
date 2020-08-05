import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { TimeOffItem } from './timeoffitem.entity';
//#endregion

export interface TimeOff extends ChangeTrackedEntity {
  //#region ODataApi Properties
  sharedTimeOff?: TimeOffItem;
  draftTimeOff?: TimeOffItem;
  userId?: string;
  //#endregion
}