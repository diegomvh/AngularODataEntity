import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { OpenShiftItem } from './openshiftitem.entity';
import { OpenShiftItemModel } from './openshiftitem.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { OpenShiftItemCollection } from './openshiftitem.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface OpenShift extends ChangeTrackedEntity {
  //#region ODataApi Properties
  draftOpenShift?: OpenShiftItem;
  schedulingGroupId?: string;
  sharedOpenShift?: OpenShiftItem;
  //#endregion
}