import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { UserActivity } from './useractivity.entity';
import { EntityModel } from './entity.model';
import { UserActivityModel } from './useractivity.model';
import { EntityCollection } from './entity.collection';
import { UserActivityCollection } from './useractivity.collection';
//#endregion

export interface ActivityHistoryItem extends Entity {
  //#region ODataApi Properties
  activeDurationSeconds?: number;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  lastActiveDateTime?: Date;
  lastModifiedDateTime?: Date;
  startedDateTime: Date;
  status?: Status;
  userTimezone?: string;
  activity?: UserActivity;
  //#endregion
}