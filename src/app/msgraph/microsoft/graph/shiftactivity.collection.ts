import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
import { ShiftActivity } from './shiftactivity.entity';
import { ShiftActivityModel } from './shiftactivity.model';
//#endregion

export class ShiftActivityCollection<E extends ShiftActivity, M extends ShiftActivityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}