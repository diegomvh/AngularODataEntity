import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface RecordingInfo {
  //#region ODataApi Properties
  initiator?: IdentitySet;
  recordingStatus: RecordingStatus;
  //#endregion
}