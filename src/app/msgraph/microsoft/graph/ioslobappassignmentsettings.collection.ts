import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { IosLobAppAssignmentSettings } from './ioslobappassignmentsettings.entity';
import { IosLobAppAssignmentSettingsModel } from './ioslobappassignmentsettings.model';
//#endregion

export class IosLobAppAssignmentSettingsCollection<E extends IosLobAppAssignmentSettings, M extends IosLobAppAssignmentSettingsModel<E>> extends MobileAppAssignmentSettingsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}