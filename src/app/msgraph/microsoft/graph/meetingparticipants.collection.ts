import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { MeetingParticipantInfoModel } from './meetingparticipantinfo.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
//#endregion

export class MeetingParticipantsCollection<E extends MeetingParticipants, M extends MeetingParticipantsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}