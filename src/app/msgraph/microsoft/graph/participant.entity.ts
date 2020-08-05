import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { RecordingInfo } from './recordinginfo.entity';
import { MediaStream } from './mediastream.entity';
//#endregion

export interface Participant extends Entity {
  //#region ODataApi Properties
  info: ParticipantInfo;
  recordingInfo?: RecordingInfo;
  mediaStreams?: MediaStream[];
  isMuted: boolean;
  isInLobby: boolean;
  //#endregion
}