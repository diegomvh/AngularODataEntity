import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { MobileAppInstallTimeSettingsCollection } from './mobileappinstalltimesettings.collection';
//#endregion

export class MobileAppInstallTimeSettingsModel<E extends MobileAppInstallTimeSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  deadlineDateTime?: Date;
  startDateTime?: Date;
  useLocalTime: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}