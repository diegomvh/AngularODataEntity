import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnlineMeetingRole } from './onlinemeetingrole.enum';
import { IdentitySet } from './identityset.complex';
import { MeetingParticipantInfo } from './meetingparticipantinfo.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
//#endregion

export class MeetingParticipantInfoModel<E extends MeetingParticipantInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  identity?: IdentitySetModel<IdentitySet>;
  role?: OnlineMeetingRole;
  upn?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}