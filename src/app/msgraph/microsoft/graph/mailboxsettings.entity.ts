import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
import { AutomaticRepliesSetting } from './automaticrepliessetting.entity';
import { LocaleInfo } from './localeinfo.entity';
import { WorkingHours } from './workinghours.entity';
//#endregion

export interface MailboxSettings {
  //#region ODataApi Properties
  automaticRepliesSetting?: AutomaticRepliesSetting;
  archiveFolder?: string;
  timeZone?: string;
  language?: LocaleInfo;
  delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
  workingHours?: WorkingHours;
  dateFormat?: string;
  timeFormat?: string;
  //#endregion
}