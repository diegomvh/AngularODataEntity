import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.complex';
import { IosStoreAppAssignmentSettingsCollection } from './iosstoreappassignmentsettings.collection';
//#endregion

export class IosStoreAppAssignmentSettingsModel<E extends IosStoreAppAssignmentSettings> extends MobileAppAssignmentSettingsModel<E> {
  //#region ODataApi Properties
  vpnConfigurationId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}