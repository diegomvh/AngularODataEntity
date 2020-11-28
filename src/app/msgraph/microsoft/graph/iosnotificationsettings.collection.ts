import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
import { IosNotificationSettings } from './iosnotificationsettings.complex';
import { IosNotificationSettingsModel } from './iosnotificationsettings.model';
//#endregion

export class IosNotificationSettingsCollection<E extends IosNotificationSettings, M extends IosNotificationSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}