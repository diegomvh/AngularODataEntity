import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemBody } from './itembody.entity';
import { ChatInfo } from './chatinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { AudioConferencing } from './audioconferencing.entity';
//#endregion

export interface OnlineMeeting extends Entity {
  //#region ODataApi Properties
  creationDateTime?: Date;
  startDateTime?: Date;
  endDateTime?: Date;
  joinWebUrl?: string;
  subject?: string;
  participants?: MeetingParticipants;
  audioConferencing?: AudioConferencing;
  chatInfo?: ChatInfo;
  videoTeleconferenceId?: string;
  externalId?: string;
  joinInformation?: ItemBody;
  //#endregion
}