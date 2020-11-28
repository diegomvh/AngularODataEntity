import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingInfoCollection } from './meetinginfo.collection';
import { TokenMeetingInfo } from './tokenmeetinginfo.entity';
import { TokenMeetingInfoModel } from './tokenmeetinginfo.model';
//#endregion

export class TokenMeetingInfoCollection<E extends TokenMeetingInfo, M extends TokenMeetingInfoModel<E>> extends MeetingInfoCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}