import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
import { IosNotificationSettings } from './iosnotificationsettings.entity';
import { IosNotificationSettingsCollection } from './iosnotificationsettings.collection';
//#endregion

export class IosNotificationSettingsModel<E extends IosNotificationSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  alertType: IosNotificationAlertType;
  appName?: string;
  badgesEnabled?: boolean;
  bundleID: string;
  enabled?: boolean;
  publisher?: string;
  showInNotificationCenter?: boolean;
  showOnLockScreen?: boolean;
  soundsEnabled?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}