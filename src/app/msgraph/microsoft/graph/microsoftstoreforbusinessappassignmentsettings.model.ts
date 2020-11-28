import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MicrosoftStoreForBusinessAppAssignmentSettings } from './microsoftstoreforbusinessappassignmentsettings.entity';
import { MicrosoftStoreForBusinessAppAssignmentSettingsCollection } from './microsoftstoreforbusinessappassignmentsettings.collection';
//#endregion

export class MicrosoftStoreForBusinessAppAssignmentSettingsModel<E extends MicrosoftStoreForBusinessAppAssignmentSettings> extends MobileAppAssignmentSettingsModel<E> {
  //#region ODataApi Properties
  useDeviceContext: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}