import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
//#endregion

export class MeetingParticipantInfoModel<E extends MeetingParticipantInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  identity?: IdentitySetModel<IdentitySet>;
  upn?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}