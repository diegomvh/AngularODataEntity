import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
//#endregion

export interface CloudCommunications extends Entity {
  //#region ODataApi Properties
  calls?: Call[];
  callRecords?: CallRecord[];
  onlineMeetings?: OnlineMeeting[];
  //#endregion
}