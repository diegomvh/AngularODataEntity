import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { IosVppAppAssignmentSettings } from './iosvppappassignmentsettings.entity';
import { IosVppAppAssignmentSettingsModel } from './iosvppappassignmentsettings.model';
//#endregion

export class IosVppAppAssignmentSettingsCollection<E extends IosVppAppAssignmentSettings, M extends IosVppAppAssignmentSettingsModel<E>> extends MobileAppAssignmentSettingsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}