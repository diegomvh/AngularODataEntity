import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { LocaleInfo } from './localeinfo.entity';
//#endregion

export interface AutomaticRepliesMailTips {
  //#region ODataApi Properties
  message?: string;
  messageLanguage?: LocaleInfo;
  scheduledStartTime?: DateTimeTimeZone;
  scheduledEndTime?: DateTimeTimeZone;
  //#endregion
}