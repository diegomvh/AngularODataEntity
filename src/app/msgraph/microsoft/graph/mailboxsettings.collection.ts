import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
import { MailboxSettings } from './mailboxsettings.complex';
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { LocaleInfo } from './localeinfo.complex';
import { WorkingHours } from './workinghours.complex';
import { MailboxSettingsModel } from './mailboxsettings.model';
import { AutomaticRepliesSettingModel } from './automaticrepliessetting.model';
import { LocaleInfoModel } from './localeinfo.model';
import { WorkingHoursModel } from './workinghours.model';
import { AutomaticRepliesSettingCollection } from './automaticrepliessetting.collection';
import { LocaleInfoCollection } from './localeinfo.collection';
import { WorkingHoursCollection } from './workinghours.collection';
//#endregion

export class MailboxSettingsCollection<E extends MailboxSettings, M extends MailboxSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}