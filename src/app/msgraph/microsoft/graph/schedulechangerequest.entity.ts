import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ScheduleChangeState } from './schedulechangestate.enum';
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
//#endregion

export interface ScheduleChangeRequest extends ChangeTrackedEntity {
  //#region ODataApi Properties
  assignedTo?: ScheduleChangeRequestActor;
  state?: ScheduleChangeState;
  senderMessage?: string;
  senderDateTime?: Date;
  managerActionMessage?: string;
  managerActionDateTime?: Date;
  senderUserId?: string;
  managerUserId?: string;
  //#endregion
}