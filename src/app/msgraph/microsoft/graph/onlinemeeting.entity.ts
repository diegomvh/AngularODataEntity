import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OnlineMeetingPresenters } from './onlinemeetingpresenters.enum';
import { ItemBody } from './itembody.complex';
import { AudioConferencing } from './audioconferencing.complex';
import { ChatInfo } from './chatinfo.complex';
import { LobbyBypassSettings } from './lobbybypasssettings.complex';
import { MeetingParticipants } from './meetingparticipants.complex';
import { ItemBodyModel } from './itembody.model';
import { AudioConferencingModel } from './audioconferencing.model';
import { ChatInfoModel } from './chatinfo.model';
import { LobbyBypassSettingsModel } from './lobbybypasssettings.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { EntityModel } from './entity.model';
import { ItemBodyCollection } from './itembody.collection';
import { AudioConferencingCollection } from './audioconferencing.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { LobbyBypassSettingsCollection } from './lobbybypasssettings.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface OnlineMeeting extends Entity {
  //#region ODataApi Properties
  allowedPresenters?: OnlineMeetingPresenters;
  audioConferencing?: AudioConferencing;
  chatInfo?: ChatInfo;
  creationDateTime?: Date;
  endDateTime?: Date;
  externalId?: string;
  isEntryExitAnnounced?: boolean;
  joinInformation?: ItemBody;
  joinWebUrl?: string;
  lobbyBypassSettings?: LobbyBypassSettings;
  participants?: MeetingParticipants;
  startDateTime?: Date;
  subject?: string;
  videoTeleconferenceId?: string;
  //#endregion
}