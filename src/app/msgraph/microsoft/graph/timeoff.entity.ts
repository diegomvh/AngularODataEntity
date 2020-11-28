import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { TimeOffItem } from './timeoffitem.complex';
import { TimeOffItemModel } from './timeoffitem.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { TimeOffItemCollection } from './timeoffitem.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface TimeOff extends ChangeTrackedEntity {
  //#region ODataApi Properties
  draftTimeOff?: TimeOffItem;
  sharedTimeOff?: TimeOffItem;
  userId?: string;
  //#endregion
}