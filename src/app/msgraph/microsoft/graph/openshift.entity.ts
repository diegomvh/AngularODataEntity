import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { OpenShiftItem } from './openshiftitem.entity';
//#endregion

export interface OpenShift extends ChangeTrackedEntity {
  //#region ODataApi Properties
  sharedOpenShift?: OpenShiftItem;
  draftOpenShift?: OpenShiftItem;
  schedulingGroupId?: string;
  //#endregion
}