import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
import { ScheduleChangeState } from './schedulechangestate.enum';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface ScheduleChangeRequest extends ChangeTrackedEntity {
  //#region ODataApi Properties
  assignedTo?: ScheduleChangeRequestActor;
  managerActionDateTime?: Date;
  managerActionMessage?: string;
  managerUserId?: string;
  senderDateTime?: Date;
  senderMessage?: string;
  senderUserId?: string;
  state?: ScheduleChangeState;
  //#endregion
}