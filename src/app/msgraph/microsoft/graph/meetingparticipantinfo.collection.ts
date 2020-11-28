import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
import { IdentitySetModel } from './identityset.model';
import { MeetingParticipantInfoModel } from './meetingparticipantinfo.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class MeetingParticipantInfoCollection<E extends MeetingParticipantInfo, M extends MeetingParticipantInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}