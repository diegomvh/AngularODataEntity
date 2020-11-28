import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingInfoModel } from './meetinginfo.model';
import { IdentitySet } from './identityset.entity';
import { OrganizerMeetingInfo } from './organizermeetinginfo.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { OrganizerMeetingInfoCollection } from './organizermeetinginfo.collection';
//#endregion

export class OrganizerMeetingInfoModel<E extends OrganizerMeetingInfo> extends MeetingInfoModel<E> {
  //#region ODataApi Properties
  organizer: IdentitySetModel<IdentitySet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}