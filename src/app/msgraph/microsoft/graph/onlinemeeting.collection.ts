import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ItemBody } from './itembody.entity';
import { AudioConferencing } from './audioconferencing.entity';
import { ChatInfo } from './chatinfo.entity';
import { MeetingParticipants } from './meetingparticipants.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { ItemBodyModel } from './itembody.model';
import { AudioConferencingModel } from './audioconferencing.model';
import { ChatInfoModel } from './chatinfo.model';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { ItemBodyCollection } from './itembody.collection';
import { AudioConferencingCollection } from './audioconferencing.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
//#endregion

export class OnlineMeetingCollection<E extends OnlineMeeting, M extends OnlineMeetingModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  public createOrGet(chatInfo: ChatInfo, endDateTime: Date, externalId: string, participants: MeetingParticipants, startDateTime: Date, subject: string, options?: HttpOptions): Observable<OnlineMeetingModel<OnlineMeeting>> {
    var res = this._action<{chatInfo: ChatInfo, endDateTime: Date, externalId: string, participants: MeetingParticipants, startDateTime: Date, subject: string}, OnlineMeeting>('microsoft.graph.createOrGet');
    res.segment.entitySet('');
    return res.call({chatInfo, endDateTime, externalId, participants, startDateTime, subject}, 'model', options) as Observable<OnlineMeetingModel<OnlineMeeting>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}