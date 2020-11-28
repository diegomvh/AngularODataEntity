import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingInfoModel } from './meetinginfo.model';
import { TokenMeetingInfo } from './tokenmeetinginfo.complex';
import { TokenMeetingInfoCollection } from './tokenmeetinginfo.collection';
//#endregion

export class TokenMeetingInfoModel<E extends TokenMeetingInfo> extends MeetingInfoModel<E> {
  //#region ODataApi Properties
  token: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}