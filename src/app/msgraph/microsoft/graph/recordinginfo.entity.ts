import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface RecordingInfo {
  //#region ODataApi Properties
  recordingStatus: RecordingStatus;
  initiator?: IdentitySet;
  //#endregion
}