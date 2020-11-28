import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { MeetingParticipantInfoModel } from './meetingparticipantinfo.model';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
//#endregion

export class MeetingParticipantsModel<E extends MeetingParticipants> extends ODataModel<E> {
  //#region ODataApi Properties
  attendees?: MeetingParticipantInfoCollection<MeetingParticipantInfo, MeetingParticipantInfoModel<MeetingParticipantInfo>>;
  organizer?: MeetingParticipantInfoModel<MeetingParticipantInfo>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}