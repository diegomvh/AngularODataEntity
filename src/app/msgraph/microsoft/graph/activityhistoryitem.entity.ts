import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { UserActivity } from './useractivity.entity';
//#endregion

export interface ActivityHistoryItem extends Entity {
  //#region ODataApi Properties
  status?: Status;
  activeDurationSeconds?: number;
  createdDateTime?: Date;
  lastActiveDateTime?: Date;
  lastModifiedDateTime?: Date;
  expirationDateTime?: Date;
  startedDateTime: Date;
  userTimezone?: string;
  activity?: UserActivity;
  //#endregion
}