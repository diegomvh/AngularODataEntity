import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { MicrosoftStoreForBusinessAppAssignmentSettings } from './microsoftstoreforbusinessappassignmentsettings.complex';
import { MicrosoftStoreForBusinessAppAssignmentSettingsModel } from './microsoftstoreforbusinessappassignmentsettings.model';
//#endregion

export class MicrosoftStoreForBusinessAppAssignmentSettingsCollection<E extends MicrosoftStoreForBusinessAppAssignmentSettings, M extends MicrosoftStoreForBusinessAppAssignmentSettingsModel<E>> extends MobileAppAssignmentSettingsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}