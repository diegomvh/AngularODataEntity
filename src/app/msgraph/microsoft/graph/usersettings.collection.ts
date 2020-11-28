import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { UserSettings } from './usersettings.entity';
import { ShiftPreferences } from './shiftpreferences.entity';
import { UserSettingsModel } from './usersettings.model';
import { ShiftPreferencesModel } from './shiftpreferences.model';
import { ShiftPreferencesCollection } from './shiftpreferences.collection';
//#endregion

export class UserSettingsCollection<E extends UserSettings, M extends UserSettingsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}