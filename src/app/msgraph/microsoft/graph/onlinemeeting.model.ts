import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ItemBody } from './itembody.entity';
import { AudioConferencing } from './audioconferencing.entity';
import { ChatInfo } from './chatinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { ItemBodyModel } from './itembody.model';
import { AudioConferencingModel } from './audioconferencing.model';
import { ChatInfoModel } from './chatinfo.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { ItemBodyCollection } from './itembody.collection';
import { AudioConferencingCollection } from './audioconferencing.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
//#endregion

export class OnlineMeetingModel<E extends OnlineMeeting> extends EntityModel<E> {
  //#region ODataApi Properties
  audioConferencing?: AudioConferencingModel<AudioConferencing>;
  chatInfo?: ChatInfoModel<ChatInfo>;
  creationDateTime?: Date;
  endDateTime?: Date;
  externalId?: string;
  joinInformation?: ItemBodyModel<ItemBody>;
  joinWebUrl?: string;
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