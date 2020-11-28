import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
import { MailboxSettings } from './mailboxsettings.entity';
import { AutomaticRepliesSetting } from './automaticrepliessetting.entity';
import { LocaleInfo } from './localeinfo.entity';
import { WorkingHours } from './workinghours.entity';
import { AutomaticRepliesSettingModel } from './automaticrepliessetting.model';
import { LocaleInfoModel } from './localeinfo.model';
import { WorkingHoursModel } from './workinghours.model';
import { MailboxSettingsCollection } from './mailboxsettings.collection';
import { AutomaticRepliesSettingCollection } from './automaticrepliessetting.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
import { WorkingHoursCollection } from './workinghours.collection';
//#endregion

export class MailboxSettingsModel<E extends MailboxSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  archiveFolder?: string;
  automaticRepliesSetting?: AutomaticRepliesSettingModel<AutomaticRepliesSetting>;
  dateFormat?: string;
  delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
  language?: LocaleInfoModel<LocaleInfo>;
  timeFormat?: string;
  timeZone?: string;
  workingHours?: WorkingHoursModel<WorkingHours>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}