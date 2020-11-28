import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
import { EntityModel } from './entity.model';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { CallModel } from './call.model';
import { CallRecordModel } from './callRecords/callrecord.model';
import { EntityCollection } from './entity.collection';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { CallCollection } from './call.collection';
import { CallRecordCollection } from './callRecords/callrecord.collection';
//#endregion

export interface CloudCommunications extends Entity {
  //#region ODataApi Properties
  calls?: Call[];
  callRecords?: CallRecord[];
  onlineMeetings?: OnlineMeeting[];
  //#endregion
}