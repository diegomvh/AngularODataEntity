import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MediaStream } from './mediastream.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { RecordingInfo } from './recordinginfo.entity';
import { MediaStreamModel } from './mediastream.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { RecordingInfoModel } from './recordinginfo.model';
import { EntityModel } from './entity.model';
import { MediaStreamCollection } from './mediastream.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
import { RecordingInfoCollection } from './recordinginfo.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Participant extends Entity {
  //#region ODataApi Properties
  info: ParticipantInfo;
  isInLobby: boolean;
  isMuted: boolean;
  mediaStreams?: MediaStream[];
  recordingInfo?: RecordingInfo;
  //#endregion
}