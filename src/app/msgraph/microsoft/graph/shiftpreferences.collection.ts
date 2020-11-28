import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { ShiftAvailability } from './shiftavailability.complex';
import { ShiftPreferences } from './shiftpreferences.entity';
import { ShiftAvailabilityModel } from './shiftavailability.model';
import { ShiftPreferencesModel } from './shiftpreferences.model';
import { ShiftAvailabilityCollection } from './shiftavailability.collection';
//#endregion

export class ShiftPreferencesCollection<E extends ShiftPreferences, M extends ShiftPreferencesModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}