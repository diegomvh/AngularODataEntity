import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.complex';
import { IosStoreAppAssignmentSettingsModel } from './iosstoreappassignmentsettings.model';
//#endregion

export class IosStoreAppAssignmentSettingsCollection<E extends IosStoreAppAssignmentSettings, M extends IosStoreAppAssignmentSettingsModel<E>> extends MobileAppAssignmentSettingsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}