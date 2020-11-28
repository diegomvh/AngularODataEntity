import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { LocaleInfo } from './localeinfo.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocaleInfoModel } from './localeinfo.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
//#endregion

export interface AutomaticRepliesMailTips {
  //#region ODataApi Properties
  message?: string;
  messageLanguage?: LocaleInfo;
  scheduledEndTime?: DateTimeTimeZone;
  scheduledStartTime?: DateTimeTimeZone;
  //#endregion
}