import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { FollowupFlag } from './followupflag.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { FollowupFlagModel } from './followupflag.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class FollowupFlagCollection<E extends FollowupFlag, M extends FollowupFlagModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}