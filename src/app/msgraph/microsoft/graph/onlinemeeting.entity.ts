import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemBody } from './itembody.entity';
import { AudioConferencing } from './audioconferencing.entity';
import { ChatInfo } from './chatinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { ItemBodyModel } from './itembody.model';
import { AudioConferencingModel } from './audioconferencing.model';
import { ChatInfoModel } from './chatinfo.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { EntityModel } from './entity.model';
import { ItemBodyCollection } from './itembody.collection';
import { AudioConferencingCollection } from './audioconferencing.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface OnlineMeeting extends Entity {
  //#region ODataApi Properties
  audioConferencing?: AudioConferencing;
  chatInfo?: ChatInfo;
  creationDateTime?: Date;
  endDateTime?: Date;
  externalId?: string;
  joinInformation?: ItemBody;
  joinWebUrl?: string;
  participants?: MeetingParticipants;
  startDateTime?: Date;
  subject?: string;
  videoTeleconferenceId?: string;
  //#endregion
}