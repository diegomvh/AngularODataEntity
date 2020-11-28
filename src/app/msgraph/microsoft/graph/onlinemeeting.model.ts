import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OnlineMeetingPresenters } from './onlinemeetingpresenters.enum';
import { ItemBody } from './itembody.complex';
import { AudioConferencing } from './audioconferencing.complex';
import { ChatInfo } from './chatinfo.complex';
import { LobbyBypassSettings } from './lobbybypasssettings.complex';
import { MeetingParticipants } from './meetingparticipants.complex';
import { OnlineMeeting } from './onlinemeeting.entity';
import { ItemBodyModel } from './itembody.model';
import { AudioConferencingModel } from './audioconferencing.model';
import { ChatInfoModel } from './chatinfo.model';
import { LobbyBypassSettingsModel } from './lobbybypasssettings.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { ItemBodyCollection } from './itembody.collection';
import { AudioConferencingCollection } from './audioconferencing.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { LobbyBypassSettingsCollection } from './lobbybypasssettings.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
//#endregion

export class OnlineMeetingModel<E extends OnlineMeeting> extends EntityModel<E> {
  //#region ODataApi Properties
  allowedPresenters?: OnlineMeetingPresenters;
  audioConferencing?: AudioConferencingModel<AudioConferencing>;
  chatInfo?: ChatInfoModel<ChatInfo>;
  creationDateTime?: Date;
  endDateTime?: Date;
  externalId?: string;
  isEntryExitAnnounced?: boolean;
  joinInformation?: ItemBodyModel<ItemBody>;
  joinWebUrl?: string;
  lobbyBypassSettings?: LobbyBypassSettingsModel<LobbyBypassSettings>;
  participants?: MeetingParticipantsModel<MeetingParticipants>;
  startDateTime?: Date;
  subject?: string;
  videoTeleconferenceId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}