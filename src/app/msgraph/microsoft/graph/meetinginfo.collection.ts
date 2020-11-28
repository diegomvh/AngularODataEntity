import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.complex';
import { MeetingInfoModel } from './meetinginfo.model';
//#endregion

export class MeetingInfoCollection<E extends MeetingInfo, M extends MeetingInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}