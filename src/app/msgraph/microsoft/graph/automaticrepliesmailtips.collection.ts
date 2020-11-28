import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { LocaleInfo } from './localeinfo.complex';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocaleInfoModel } from './localeinfo.model';
import { AutomaticRepliesMailTipsModel } from './automaticrepliesmailtips.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
//#endregion

export class AutomaticRepliesMailTipsCollection<E extends AutomaticRepliesMailTips, M extends AutomaticRepliesMailTipsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}