import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { LocaleInfo } from './localeinfo.complex';
import { WorkingHours } from './workinghours.complex';
import { AutomaticRepliesSettingModel } from './automaticrepliessetting.model';
import { LocaleInfoModel } from './localeinfo.model';
import { WorkingHoursModel } from './workinghours.model';
import { AutomaticRepliesSettingCollection } from './automaticrepliessetting.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
import { WorkingHoursCollection } from './workinghours.collection';
//#endregion

export interface MailboxSettings {
  //#region ODataApi Properties
  archiveFolder?: string;
  automaticRepliesSetting?: AutomaticRepliesSetting;
  dateFormat?: string;
  delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
  language?: LocaleInfo;
  timeFormat?: string;
  timeZone?: string;
  workingHours?: WorkingHours;
  //#endregion
}