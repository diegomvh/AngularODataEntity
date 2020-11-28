import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { LocaleInfo } from './localeinfo.entity';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocaleInfoModel } from './localeinfo.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
import { AutomaticRepliesMailTipsCollection } from './automaticrepliesmailtips.collection';
//#endregion

export class AutomaticRepliesMailTipsModel<E extends AutomaticRepliesMailTips> extends ODataModel<E> {
  //#region ODataApi Properties
  message?: string;
  messageLanguage?: LocaleInfoModel<LocaleInfo>;
  scheduledEndTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  scheduledStartTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}