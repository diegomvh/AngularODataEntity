import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ShiftAvailability } from './shiftavailability.entity';
import { ShiftPreferences } from './shiftpreferences.entity';
import { ShiftAvailabilityModel } from './shiftavailability.model';
import { ShiftAvailabilityCollection } from './shiftavailability.collection';
import { ShiftPreferencesCollection } from './shiftpreferences.collection';
//#endregion

export class ShiftPreferencesModel<E extends ShiftPreferences> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  availability?: ShiftAvailabilityCollection<ShiftAvailability, ShiftAvailabilityModel<ShiftAvailability>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}