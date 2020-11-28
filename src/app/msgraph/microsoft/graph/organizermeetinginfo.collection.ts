import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingInfoCollection } from './meetinginfo.collection';
import { IdentitySet } from './identityset.complex';
import { OrganizerMeetingInfo } from './organizermeetinginfo.complex';
import { IdentitySetModel } from './identityset.model';
import { OrganizerMeetingInfoModel } from './organizermeetinginfo.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class OrganizerMeetingInfoCollection<E extends OrganizerMeetingInfo, M extends OrganizerMeetingInfoModel<E>> extends MeetingInfoCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}