import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
//#endregion

export class MobileAppAssignmentSettingsCollection<E extends MobileAppAssignmentSettings, M extends MobileAppAssignmentSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}