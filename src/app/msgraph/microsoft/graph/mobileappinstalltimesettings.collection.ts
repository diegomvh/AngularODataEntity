import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { MobileAppInstallTimeSettingsModel } from './mobileappinstalltimesettings.model';
//#endregion

export class MobileAppInstallTimeSettingsCollection<E extends MobileAppInstallTimeSettings, M extends MobileAppInstallTimeSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}