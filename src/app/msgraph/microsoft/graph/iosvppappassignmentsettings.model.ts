import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { IosVppAppAssignmentSettings } from './iosvppappassignmentsettings.complex';
import { IosVppAppAssignmentSettingsCollection } from './iosvppappassignmentsettings.collection';
//#endregion

export class IosVppAppAssignmentSettingsModel<E extends IosVppAppAssignmentSettings> extends MobileAppAssignmentSettingsModel<E> {
  //#region ODataApi Properties
  useDeviceLicensing: boolean;
  vpnConfigurationId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}